
try {
    const fs = require('fs');
    // Read file directly to check for syntax without module system issues
    const content = fs.readFileSync('./js/theory.js', 'utf8');

    // Try to eval it in a safe context or just ensure it parses
    // Since it's a browser script with const THEORY = ..., we can try to simplisticly eval it
    // or just require it if we modify it to be a module (which it does at the bottom)

    const theory = require('./js/theory.js');

    if (!theory.THEORY || !Array.isArray(theory.THEORY)) {
        console.error("THEORY array is missing or invalid");
        process.exit(1);
    }

    console.log(`Successfully loaded ${theory.THEORY.length} topics`);

    // Check for undefined content
    theory.THEORY.forEach((t, i) => {
        if (!t.content) console.error(`Topic ${i} (${t.title}) has missing content`);
    });

} catch (e) {
    console.error("SYNTAX ERROR in theory.js:", e.message);
    console.error(e.stack);
}
