/**
 * Code Checker Module
 *
 * Grades a submission by actually compiling and running it against each
 * test case's real stdin on Wandbox, then comparing the program's real
 * stdout to the expected output — no API key required. If real execution
 * is turned off (or Wandbox can't be reached), it falls back to a basic
 * offline structural check and says so plainly — it never pretends a
 * guess is a real result.
 */
const CodeChecker = {
    // ---- Public entry point -------------------------------------------------
    async checkCode(code, question) {
        const results = {
            questionId: question.id,
            passed: 0,
            failed: 0,
            total: question.testCases.length,
            testResults: [],
            usedRealExecution: false
        };

        const structural = this.validateBasicStructure(code);
        if (!structural.valid) {
            return {
                ...results,
                failed: results.total,
                allPassed: false,
                error: structural.error,
                testResults: question.testCases.map(tc => ({
                    name: tc.name, passed: false, showOutputBoxes: false, feedback: structural.error
                }))
            };
        }

        if (!CONFIG.isRealExecutionEnabled()) {
            return this.runOfflineFallback(code, question, results, "Real execution is turned off.");
        }

        results.usedRealExecution = true;
        for (const tc of question.testCases) {
            let testResult;
            try {
                testResult = await this.runOnWandbox(code, tc);
            } catch (e) {
                testResult = { name: tc.name, passed: false, feedback: e.message, error: e.message };
            }
            results.testResults.push(testResult);
            testResult.passed ? results.passed++ : results.failed++;
            // Wandbox is a free community service — space requests out a bit.
            await sleep(400);
        }

        results.allPassed = results.passed === results.total;
        return results;
    },

    // ---- Real execution via Wandbox ------------------------------------------
    async runOnWandbox(code, tc) {
        const stdin = (tc.input && tc.input !== "None") ? tc.input : "";

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), CONFIG.REQUEST_TIMEOUT_MS);

        let resp;
        try {
            resp = await fetch(CONFIG.WANDBOX_API_URL, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    code,
                    compiler: CONFIG.WANDBOX_COMPILER,
                    stdin,
                    save: false
                }),
                signal: controller.signal
            });
        } catch (networkErr) {
            if (networkErr.name === "AbortError") {
                throw new Error("Timed out — check for an infinite loop, or Wandbox may be slow right now.");
            }
            throw new Error("Couldn't reach Wandbox — check your internet connection.");
        } finally {
            clearTimeout(timeoutId);
        }

        if (resp.status === 429) {
            throw new Error("Wandbox is rate-limiting requests right now — wait a moment and try again.");
        }
        if (!resp.ok) {
            throw new Error(`Wandbox error (HTTP ${resp.status}).`);
        }

        const data = await resp.json();

        // gcc prefixes real compile failures with "error:" (as opposed to
        // "warning:", which still lets the program run). Check this before
        // looking at status/signal, since a failed compile can still leave
        // program_output as an empty string rather than undefined.
        const compileFailed = data.compiler_error && /error:/i.test(data.compiler_error);
        if (compileFailed) {
            return {
                name: tc.name,
                passed: false,
                showOutputBoxes: false,
                feedback: "Compilation error",
                error: data.compiler_error.trim()
            };
        }

        const actualOutput = (data.program_output || "").replace(/\s+$/, "");

        // A signal (e.g. segfault) or non-zero exit means it compiled but
        // crashed/errored at runtime. It did produce (possibly partial)
        // output, so still show Program/Expected Output for context.
        if (data.signal || (data.status !== undefined && data.status !== "0")) {
            return {
                name: tc.name,
                passed: false,
                showOutputBoxes: true,
                userOutput: actualOutput,
                expectedOutput: tc.expectedOutput,
                feedback: data.signal ? `Runtime error (${data.signal})` : "Program exited with an error",
                error: (data.program_error || "").trim()
            };
        }

        let passed = actualOutput === tc.expectedOutput;
        if (!passed && tc.pattern instanceof RegExp) {
            passed = tc.pattern.test(actualOutput);
        }

        return {
            name: tc.name,
            passed,
            showOutputBoxes: true,
            userOutput: actualOutput || "(no output)",
            expectedOutput: tc.expectedOutput,
            feedback: passed ? "Correct!" : "Output didn't match the expected result."
        };
    },

    // ---- Fast local pre-check (skips a network call on obviously broken code) --
    validateBasicStructure(code) {
        if (!code.includes("main")) return { valid: false, error: "Missing main() function" };
        if (!code.includes("stdio.h") && !code.includes("<stdlib.h>")) {
            return { valid: false, error: "Missing a required #include" };
        }
        const openBraces = (code.match(/{/g) || []).length;
        const closeBraces = (code.match(/}/g) || []).length;
        if (openBraces !== closeBraces) return { valid: false, error: "Unbalanced braces" };
        return { valid: true };
    },

    // ---- Offline fallback (real execution off, or Wandbox unreachable) ------
    // This is a heuristic keyword scan of the source text, NOT real execution.
    // It exists so the app is still usable without a network dependency, but
    // every result it produces is clearly labeled as unverified.
    runOfflineFallback(code, question, results, reason) {
        question.testCases.forEach(tc => {
            const looksPlausible = code.includes("printf") &&
                (!tc.input || tc.input === "None" || code.includes("scanf") || code.includes("fgets"));
            results.testResults.push({
                name: tc.name,
                passed: looksPlausible,
                offline: true,
                expectedOutput: tc.expectedOutput,
                feedback: looksPlausible
                    ? "Looks structurally plausible (offline check only — not actually run)"
                    : "Doesn't look complete yet (offline check only — not actually run)"
            });
        });
        results.passed = results.testResults.filter(t => t.passed).length;
        results.failed = results.total - results.passed;
        results.allPassed = false; // Never auto-mark solved without real execution.
        results.offlineNotice = `${reason} This was a rough offline guess, not a real compile & run. ` +
            "Turn real execution back on in ⚙ Settings for actual grading.";
        return results;
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
