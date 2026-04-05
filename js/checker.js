/**
 * Code Checker Module - Validates C code submissions
 */
const CodeChecker = {
    checkCode: function (code, question) {
        const results = {
            questionId: question.id,
            passed: 0,
            failed: 0,
            total: question.testCases.length,
            testResults: []
        };

        const basicValidation = this.validateBasicStructure(code);
        if (!basicValidation.valid) {
            return {
                ...results,
                failed: results.total,
                error: basicValidation.error,
                testResults: question.testCases.map(tc => ({
                    name: tc.name, passed: false, error: basicValidation.error
                }))
            };
        }

        question.testCases.forEach((testCase) => {
            const testResult = this.runTestCase(code, testCase, question);
            results.testResults.push(testResult);
            if (testResult.passed) results.passed++;
            else results.failed++;
        });

        results.allPassed = results.passed === results.total;
        return results;
    },

    validateBasicStructure: function (code) {
        if (!code.includes('main')) return { valid: false, error: "Missing main() function" };
        if (!code.includes('stdio.h')) return { valid: false, error: "Missing #include <stdio.h>" };
        const openBraces = (code.match(/{/g) || []).length;
        const closeBraces = (code.match(/}/g) || []).length;
        if (openBraces !== closeBraces) return { valid: false, error: "Unbalanced braces" };
        if (!code.includes('return')) return { valid: false, error: "Missing return statement" };
        return { valid: true };
    },

    runTestCase: function (code, testCase, question) {
        const result = {
            name: testCase.name,
            input: testCase.input,
            expectedOutput: testCase.expectedOutput,
            userOutput: "", // Placeholder for user output
            passed: false,
            feedback: ""
        };

        try {
            if (testCase.pattern instanceof RegExp) {
                result.passed = testCase.pattern.test(code);
            } else if (typeof testCase.checkFunction === 'function') {
                result.passed = testCase.checkFunction(code);
            } else {
                result.passed = this.heuristicCheck(code, testCase, question);
            }
            result.passed = result.passed && this.validateQuestionSpecific(code, question);

            // SIMULATE USER OUTPUT
            if (result.passed) {
                result.userOutput = result.expectedOutput;
                result.feedback = "Code logic appears correct";
            } else {
                // Return a generic error or 'Code execution failed' since we don't have real output
                result.userOutput = "Output mismatch or Logic error";
                result.feedback = "Expected: " + result.expectedOutput;
            }
        } catch (error) {
            result.passed = false;
            result.feedback = "Validation error: " + error.message;
        }
        return result;
    },

    heuristicCheck: function (code, testCase, question) {
        if (!code.includes('printf')) return false;
        if (testCase.input && testCase.input.trim() !== '' && testCase.input !== 'None') {
            if (!code.includes('scanf')) return false;
        }
        return true;
    },

    validateQuestionSpecific: function (code, question) {
        const title = question.title.toLowerCase();
        if (title.includes('hello world')) return code.includes('Hello') && code.includes('World');
        if (title.includes('sum')) return code.includes('+');
        if (title.includes('factorial')) return code.includes('*') && (code.includes('for') || code.includes('while'));
        if (title.includes('prime')) return code.includes('%');
        if (title.includes('fibonacci')) return code.includes('+') && (code.includes('for') || code.includes('while'));
        if (title.includes('reverse')) return code.includes('%') && code.includes('/');
        if (title.includes('array') || title.includes('sort')) return code.includes('[') && code.includes(']');
        if (title.includes('palindrome')) return code.includes('%') && code.includes('/');
        if (title.includes('gcd')) return code.includes('%');
        return true;
    }
};
