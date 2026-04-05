/**
 * C Programming Theory/Concepts Database
 * Comprehensive learning material for C programming
 */

const THEORY = [
    // ===== INTRODUCTION =====
    {
        id: 1,
        title: "Introduction to C",
        category: "basics",
        content: `
<h3>History and Significance</h3>
<p>
    The C programming language was developed in 1972 by <strong>Dennis Ritchie</strong> at Bell Labs. It was originally created to develop the UNIX operating system. Despite being an older language, C remains a cornerstone of modern computing. It is often called the "mother of all languages" because many modern languages like C++, Java, Python, and JavaScript borrow syntax and concepts directly from C.
</p>
<p>
    C is a <strong>procedural</strong> language, meaning it follows a step-by-step instruction format. It is also a <strong>structure-oriented</strong> language, which allows complex programs to be broken down into simpler functions. Its ability to provide low-level access to memory and hardware while still offering high-level syntax makes it ideal for system programming, embedded systems, and high-performance applications.
</p>

<h3>The Compilation Process</h3>
<p>
    Unlike interpreted languages (like Python), C is a compiled language. This means source code must be translated into machine code before it can run. The process involves four main stages:
</p>
<ol>
    <li>
        <strong>Preprocessing:</strong> The preprocessor handles directives starting with <code>#</code> (like <code>#include</code>). It expands macros and includes header files.
    </li>
    <li>
        <strong>Compilation:</strong> The compiler translates the preprocessed code into assembly language.
    </li>
    <li>
        <strong>Assembly:</strong> The assembler converts assembly code into machine code (object files).
    </li>
    <li>
        <strong>Linking:</strong> The linker combines object files and libraries to create a single executable file.
    </li>
</ol>

<h3>Structure of a C Program</h3>
<p>Every C program follows a specific structure. Here is a breakdown of a standard "Hello World" program:</p>
<pre><code>#include &lt;stdio.h&gt;  // 1. Preprocessor Directive

// 2. Main Function - The entry point
int main() {
    // 3. Statement
    printf("Hello, World!");
    
    // 4. Return Statement
    return 0;
}</code></pre>
<ul>
    <li>
        <strong>#include &lt;stdio.h&gt;:</strong> This tells the compiler to include the "Standard Input Output" library. This library contains the definitions for functions like <code>printf()</code> and <code>scanf()</code>. Without it, you cannot perform input/output operations.
    </li>
    <li>
        <strong>int main():</strong> This is the most important part of any C program. Execution <em>always</em> begins at the <code>main()</code> function. The <code>int</code> indicates that this function returns an integer value to the operating system.
    </li>
    <li>
        <strong>Braces { }:</strong> These define the scope (or body) of functions and control structures.
    </li>
    <li>
        <strong>printf():</strong> A standard library function used to print text to the console.
    </li>
    <li>
        <strong>return 0;:</strong> This statement terminates the <code>main()</code> function and returns the value 0 to the operating system. A return value of <code>0</code> traditionally implies that the program finished successfully, while non-zero values indicate an error.
    </li>
</ul>
        `
    },
    {
        id: 2,
        title: "Variables and Data Types",
        category: "basics",
        content: `
<h3>Understanding Variables</h3>
<p>
    A <strong>variable</strong> is a named storage location in the computer's memory that holds a value. You can think of a variable as a labeled box where you can store data. In C, because it is a statically typed language, you must declare the <strong>type</strong> of data a variable will hold before using it. This allows the compiler to allocate the correct amount of memory.
</p>

<h3>Primary Data Types</h3>
<p>C has several built-in data types, each designed to store specific kinds of data:</p>

<h4>1. Integer Types (int)</h4>
<p>
    Integers are whole numbers without any decimal points. The standard <code>int</code> type usually takes up 4 bytes (32 bits) of memory.
</p>
<ul>
    <li><strong>int:</strong> Standard integer (e.g., 10, -5, 42).</li>
    <li><strong>short:</strong> Smaller range, typically 2 bytes.</li>
    <li><strong>long:</strong> Larger range, typically 4 or 8 bytes.</li>
    <li><strong>unsigned:</strong> Can only hold positive numbers, effectively doubling the positive range.</li>
</ul>

<h4>2. Floating Point Types (float, double)</h4>
<p>
    These are used for numbers with decimal points.
</p>
<ul>
    <li><strong>float:</strong> Single precision floating point. Takes 4 bytes. Good for 6-7 decimal digits of precision.</li>
    <li><strong>double:</strong> Double precision. Takes 8 bytes. Good for 15-16 decimal digits. <strong>Recommended</strong> for most calculations to avoid precision errors.</li>
</ul>

<h4>3. Character Type (char)</h4>
<p>
    Used to store a single character. It occupies 1 byte of memory. Internally, C stores characters as integer constants (ASCII values). For example, 'A' is stored as 65.
</p>

<h3>Data Type Summary Table</h3>
<table class="theory-table">
    <tr><th>Type</th><th>Size (approx)</th><th>Format Specifier</th><th>Example</th></tr>
    <tr><td>int</td><td>4 bytes</td><td>%d</td><td>42</td></tr>
    <tr><td>float</td><td>4 bytes</td><td>%f</td><td>3.14</td></tr>
    <tr><td>double</td><td>8 bytes</td><td>%lf</td><td>3.141592</td></tr>
    <tr><td>char</td><td>1 byte</td><td>%c</td><td>'A'</td></tr>
</table>

<h3>Variable Declaration and Initialization</h3>
<p>
    <strong>Declaration</strong> tells the compiler to reserve memory space for the variable. <strong>Initialization</strong> assigns an initial value to that space.
</p>
<pre><code>// Declaration
int score;
float height;

// Initialization
score = 100;
height = 5.9;

// Both data types combined
int age = 25;
char grade = 'A';
double pi = 3.14159;</code></pre>

<h3>Variable Naming Rules (Identifiers)</h3>
<p>
    Names given to variables are called identifiers. To write clean and error-free code, follow these rules:
</p>
<ul>
    <li>Must begin with a letter (a-z, A-Z) or an underscore (_). They cannot start with a digit.</li>
    <li>Can contain letters, digits, and underscores. No special characters like @, $, %, etc.</li>
    <li>C is <strong>case-sensitive</strong>. <code>myVar</code> and <code>myvar</code> are different variables.</li>
    <li>Cannot use reserved keywords (like <code>int</code>, <code>return</code>, <code>if</code>) as names.</li>
</ul>
        `
    },
    {
        id: 3,
        title: "Operators in C",
        category: "basics",
        content: `
<h3>Understanding Operators</h3>
<p>
    Operators are symbols that tell the compiler to perform specific mathematical, relational, or logical manipulations. C is very rich in built-in operators.
</p>

<h4>1. Arithmetic Operators</h4>
<p>These perform mathematical operations like addition, subtraction, etc.</p>
<table class="theory-table">
    <tr><th>Operator</th><th>Name</th><th>Description/Example</th></tr>
    <tr><td>+</td><td>Addition</td><td>Adds two operands: <code>a + b</code></td></tr>
    <tr><td>-</td><td>Subtraction</td><td>Subtracts second from first: <code>a - b</code></td></tr>
    <tr><td>*</td><td>Multiplication</td><td>Multiplies operands: <code>a * b</code></td></tr>
    <tr><td>/</td><td>Division</td><td>Divides numerator by denominator: <code>10 / 2 = 5</code>. <strong>Note:</strong> Integer division truncates decimals (5/2 = 2).</td></tr>
    <tr><td>%</td><td>Modulus</td><td>Returns the remainder of division: <code>5 % 2 = 1</code>.</td></tr>
    <tr><td>++</td><td>Increment</td><td>Increases integer by 1. Pre-increment (<code>++i</code>) vs Post-increment (<code>i++</code>).</td></tr>
    <tr><td>--</td><td>Decrement</td><td>Decreases integer by 1.</td></tr>
</table>

<h4>2. Relational Operators</h4>
<p>These check the relationship between two operands and return <strong>1 (true)</strong> or <strong>0 (false)</strong>.</p>
<table class="theory-table">
    <tr><th>Operator</th><th>Meaning</th><th>Example (a=10, b=5)</th></tr>
    <tr><td>==</td><td>Equal to</td><td>a == b (0)</td></tr>
    <tr><td>!=</td><td>Not equal to</td><td>a != b (1)</td></tr>
    <tr><td>></td><td>Greater than</td><td>a > b (1)</td></tr>
    <tr><td><</td><td>Less than</td><td>a < b (0)</td></tr>
    <tr><td>>=</td><td>Greater/Equal</td><td>a >= b (1)</td></tr>
    <tr><td><=</td><td>Less/Equal</td><td>a <= b (0)</td></tr>
</table>

<h4>3. Logical Operators</h4>
<p>Used to combine multiple conditions. They use <strong>short-circuit evaluation</strong>.</p>
<table class="theory-table">
    <tr><th>Operator</th><th>Meaning</th><th>Description</th></tr>
    <tr><td>&&</td><td>Logical AND</td><td>True only if <strong>both</strong> operands are true. If first is false, second is not checked.</td></tr>
    <tr><td>||</td><td>Logical OR</td><td>True if <strong>at least one</strong> operand is true. If first is true, second is not checked.</td></tr>
    <tr><td>!</td><td>Logical NOT</td><td>Reverses the state: true becomes false, false becomes true.</td></tr>
</table>

<h4>4. Increment/Decrement Nuance</h4>
<p>
    <strong>Prefix (++i):</strong> Increments the value <em>before</em> using it in the expression.<br>
    <strong>Postfix (i++):</strong> Uses the current value in the expression, <em>then</em> increments it.
</p>
<pre><code>int x = 5;
int y = ++x; // x becomes 6, then y becomes 6

int a = 5;
int b = a++; // b becomes 5, then a becomes 6</code></pre>
        `
    },
    {
        id: 4,
        title: "Input and Output",
        category: "basics",
        content: `
<h3>Standard Input and Output</h3>
<p>
    In C, Input/Output (I/O) operations are performed using standard library functions found in <code>stdio.h</code>. "Standard Input" refers to the keyboard (stdin), and "Standard Output" refers to the screen (stdout).
</p>

<h3>Output: printf()</h3>
<p>
    The <code>printf()</code> (print formatted) function sends formatted output to the screen. It can print simple strings or mix strings with variables using <strong>Format Specifiers</strong>.
</p>
<pre><code>int age = 25;
printf("I am %d years old.", age);</code></pre>

<h3>Common Format Specifiers</h3>
<table class="theory-table">
    <tr><th>Specifier</th><th>Description</th></tr>
    <tr><td>%d, %i</td><td>Signed Integer (decimal)</td></tr>
    <tr><td>%f</td><td>Floating point (decimal notation)</td></tr>
    <tr><td>%.2f</td><td>Float with specific decimal places (e.g., 2)</td></tr>
    <tr><td>%c</td><td>Single Character</td></tr>
    <tr><td>%s</td><td>String (array of characters)</td></tr>
    <tr><td>%lf</td><td>Double precision float</td></tr>
    <tr><td>%x %X</td><td>Hexadecimal integer</td></tr>
</table>

<h3>Input: scanf()</h3>
<p>
    The <code>scanf()</code> (scan formatted) function reads formatted input from the keyboard. It parses the input according to the specified format specifiers.
</p>
<pre><code>int id;
printf("Enter ID: ");
scanf("%d", &id); // Note the ampersand (&)</code></pre>

<h3>The Address-of Operator (&)</h3>
<p>
    You might notice the <code>&</code> symbol before variables in <code>scanf</code>. This is the <strong>address-of operator</strong>. <code>scanf</code> needs to know <em>where</em> in memory to store the input, so we pass the memory address of the variable.
    <br><br>
    <strong>Exception:</strong> Strings (character arrays) are already pointers to the first character, so they do not need the <code>&</code> operator.
</p>

<h3>Common Pitfall: The Hanging Newline</h3>
<p>
    When you enter a number and press Enter, <code>scanf</code> reads the number but leaves the newline character (<code>\\n</code>) in the input buffer. The next time you try to read a character, it might automatically read that leftover newline. 
    <br><strong>Fix:</strong> Add a space before %c: <code>scanf(" %c", &ch);</code>
</p>
        `
    },
    {
        id: 5,
        title: "Control Statements",
        category: "control",
        content: `
<h3>Decision Making</h3>
<p>
    Control statements determine the flow of execution in a program. They allow your program to "think" and make decisions based on dynamic conditions.
</p>

<h4>1. The 'if' Statement</h4>
<p>
    The simplest form of decision making. If the condition inside the parentheses evaluates to true (non-zero), the code block is executed.
</p>
<pre><code>if (score > 90) {
    printf("Excellent!"); // Just this line runs if true
}</code></pre>

<h4>2. The 'if-else' Statement</h4>
<p>
    Provides a fallback. If the condition is true, the <code>if</code> block runs. If false, the <code>else</code> block runs.
</p>

<h4>3. The 'if-else-if' Ladder</h4>
<p>
    Used when multiple paths are possible. The program checks conditions from top to bottom. As soon as one condition is true, its block is executed, and the rest of the ladder is skipped.
</p>
<pre><code>if (money >= 100) {
    // Buy expensive item
} else if (money >= 50) {
    // Buy medium item
} else {
    // Save money
}</code></pre>

<h4>4. Nested if</h4>
<p>
    You can place an if statement inside another if statement. This is useful for checking multiple dependent conditions.
</p>
<pre><code>if (hasTicket) {
    if (age >= 18) {
        printf("Allowed");
    } else {
        printf("Too young despite having ticket");
    }
}</code></pre>
        `
    },
    {
        id: 6,
        title: "Switch Statement",
        category: "control",
        content: `
<h3>The Switch Statement</h3>
<p>
    The <code>switch</code> statement is an alternative to long <code>if-else-if</code> ladders when you are comparing a single variable against multiple constant values (cases). It is generally cleaner and easier to read.
</p>

<h3>Syntax and Rules</h3>
<pre><code>switch (expression) {
    case constant1:
        // code
        break;
    case constant2:
        // code
        break;
    default:
        // default code
}</code></pre>

<h3>Key Concepts</h3>
<ul>
    <li>
        <strong>Expression:</strong> Must evaluate to an integer or character type. Floats and strings are <strong>not</strong> allowed.
    </li>
    <li>
        <strong>Cases:</strong> Must be constant values (literals like <code>1</code>, <code>'A'</code>). You cannot use variables or ranges (like <code>x > 10</code>) in cases.
    </li>
    <li>
        <strong>The 'break' keyword:</strong> Crucial! Without <code>break</code>, the program continues to execute the next case's code (even if it doesn't match). This is called "fall-through". Sometimes fall-through is intentional, but usually, it's a bug.
    </li>
    <li>
        <strong>default:</strong> Optional but recommended. It executes if none of the cases match.
    </li>
</ul>

<h3>Example: Menu System</h3>
<pre><code>int choice;
printf("1. Play\\n2. Settings\\n3. Exit\\n");
scanf("%d", &choice);

switch(choice) {
    case 1:
        startGame();
        break;
    case 2:
        openSettings();
        break;
    case 3:
        exitApp();
        break;
    default:
        printf("Invalid choice!");
}</code></pre>
        `
    },
    {
        id: 7,
        title: "Loops - for, while, do-while",
        category: "loops",
        content: `
<h3>The Power of Iteration</h3>
<p>
    Loops allow a set of instructions to be executed repeatedly until a certain condition is met. This concept, known as iteration, is fundamental to programming for tasks like processing arrays, reading files, or running game cycles.
</p>

<h4>1. The 'for' Loop</h4>
<p>
    The <code>for</code> loop is synonymous with "counted loops". It is the best choice when you know exactly how many times you want to iterate.
</p>
<pre><code>// Syntax
for (initialization; condition; update) {
    // control flow
}

// Example: Count down from 10
for (int i = 10; i > 0; i--) {
    printf("%d... ", i);
}
// Output: 10... 9... 8... ... 1... </code></pre>
<p>
    <strong>How it works:</strong>
    <ol>
        <li><strong>Initialization:</strong> Runs once at the start (e.g., set counter to 0).</li>
        <li><strong>Condition:</strong> Checked before every iteration. If true, the loop body runs.</li>
        <li><strong>Update:</strong> Runs after the loop body, usually to increment/decrement the counter.</li>
    </ol>
</p>

<h4>2. The 'while' Loop</h4>
<p>
    The <code>while</code> loop is an "entry-controlled" loop. It is ideal when the number of iterations is not known in advance, such as reading user input until a valid number is entered.
</p>
<pre><code>int energy = 5;
while (energy > 0) {
    printf("Running... Energy: %d\\n", energy);
    energy--;
}</code></pre>

<h4>3. The 'do-while' Loop</h4>
<p>
    The <code>do-while</code> loop is an "exit-controlled" loop. Unlike the standard <code>while</code> loop, it guarantees that the code block will execute <strong>at least once</strong>, because the condition is checked <em>after</em> the body executes.
</p>
<pre><code>int number;
do {
    printf("Enter a number > 10: ");
    scanf("%d", &number);
} while (number <= 10); // Keeps asking if input is invalid</code></pre>
        `
    },
    {
        id: 8,
        title: "Break and Continue",
        category: "loops",
        content: `
<h3>Controlling Loop Execution</h3>
<p>
    Sometimes you need to alter the standard flow of a loop based on dynamic conditions. C provides <code>break</code> and <code>continue</code> for this purpose.
</p>

<h3>The 'break' Statement</h3>
<p>
    The <code>break</code> statement terminates the loop immediately. The program control resumes at the next statement following the loop. It is commonly used to search for a value and stop once found.
</p>
<pre><code>// Example: Find the first multiple of 7
for (int i = 1; i < 100; i++) {
    if (i % 7 == 0) {
        printf("Found it: %d", i);
        break; // Stop looking!
    }
}</code></pre>

<h3>The 'continue' Statement</h3>
<p>
    The <code>continue</code> statement skips the <em>rest</em> of the current iteration and jumps directly to the <strong>update</strong> step (in for loops) or the condition check (in while loops).
</p>
<pre><code>// Example: Print only odd numbers
for (int i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
        continue; // Skip the printf for even numbers
    }
    printf("%d ", i);
}
// Output: 1 3 5</code></pre>

<h3>Infinite Loops</h3>
<p>
    A loop that lacks a terminating condition (or one that can never be met) is called an infinite loop. While sometimes useful (e.g., in embedded systems or game engines), they are usually bugs.
</p>
<pre><code>while(1) {
    // Runs forever
}</code></pre>
        `
    },
    {
        id: 9,
        title: "Arrays",
        category: "arrays",
        content: `
<h3>What is an Array?</h3>
<p>
    An array is a data structure that stores a fixed-size sequential collection of elements of the same type. Instead of declaring individual variables like <code>num1</code>, <code>num2</code>, <code>num3</code>, you can declare one array <code>num[3]</code>.
</p>

<h3>Memory Representation</h3>
<p>
    Arrays are stored in <strong>contiguous memory locations</strong>. This means if the first element is at address 1000, and the type is an Integer (4 bytes), the next element will be strictly at address 1004.
</p>

<h3>Declaration and Initialization</h3>
<pre><code>// 1. Declaration only (contains garbage values)
int numbers[5];

// 2. Declaration with Initialization
int scores[5] = {90, 85, 70, 95, 88};

// 3. Partial Initialization (remaining elements become 0)
int buffer[100] = {0}; // All 100 elements are 0</code></pre>

<h3>Zero-Based Indexing</h3>
<p>
    In C, array indices start at <strong>0</strong>.
    <ul>
        <li>First element: <code>arr[0]</code></li>
        <li>Second element: <code>arr[1]</code></li>
        <li>Last element: <code>arr[size - 1]</code></li>
    </ul>
</p>

<h3>Common Pitfall: Out of Bounds</h3>
<p>
    C does <strong>not</strong> perform bound checking. Accessing <code>arr[5]</code> in an array of size 5 (valid indices 0-4) leads to <strong>Undefined Behavior</strong>. It might crash your program, or worse, overwrite other critical variables silently.
</p>
        `
    },
    {
        id: 10,
        title: "Multi-dimensional Arrays",
        category: "arrays",
        content: `
<h3>Beyond simple lists</h3>
<p>
    C supports multidimensional arrays. The simplest form is the two-dimensional (2D) array, which can be visualized as a grid or a matrix with rows and columns.
</p>

<h3>2D Array Syntax</h3>
<pre><code>// type name[rows][columns];
int matrix[3][4]; // 3 rows, 4 columns</code></pre>

<h3>Initialization</h3>
<pre><code>int grid[2][3] = {
    {1, 2, 3}, // Row 0
    {4, 5, 6}  // Row 1
};

// Accessing elements: grid[row][col]
int val = grid[1][2]; // Value is 6</code></pre>

<h3>Memory Layout (Row-Major Order)</h3>
<p>
    Computer memory is linear (1D). A 2D array in C is stored row by row.
    <br>
    <code>{1, 2, 3}</code> follows immediately by <code>{4, 5, 6}</code> in RAM.
</p>

<h3>Nested Loops for Traversal</h3>
<p>To process a 2D array, you typically use nested loops.</p>
<pre><code>for (int i = 0; i < 2; i++) {       // Iterate rows
    for (int j = 0; j < 3; j++) {   // Iterate columns
        printf("%d ", grid[i][j]);
    }
    printf("\\n");
}</code></pre>
        `
    },
    {
        id: 11,
        title: "Strings in C",
        category: "strings",
        content: `
<h3>Strings are Arrays</h3>
<p>
    Unlike high-level languages like Python or Java, C does not have a dedicated <code>string</code> data type. Instead, a string is simply a <strong>one-dimensional array of characters</strong> terminated by a special character.
</p>

<h3>The Null Terminator ('\\0')</h3>
<p>
    How does C know where a string ends? It uses a sentinel value called the Null Terminator (ASCII value 0).
    <br>
    The string "Hi" is actually stored as <code>['H', 'i', '\\0']</code>.
    <br>
    <strong>Crucial:</strong> When declaring a character array, you must always allocate <strong>one extra byte</strong> for this terminator.
</p>

<h3>String I/O</h3>

<h4>Input: scanf vs fgets</h4>
<pre><code>char name[50];

// DANGEROUS: Stops at space, potential buffer overflow
scanf("%s", name);

// SAFE: Reads everything including spaces, limits size
fgets(name, 50, stdin);</code></pre>

<h4>Output: printf vs puts</h4>
<pre><code>printf("Hello %s", name); // Flexible
puts(name);               // Automatically adds newline</code></pre>

<h3>String Libraries (string.h)</h3>
<p>Since strings are arrays, you cannot assign them directly (<code>str1 = str2</code> is invalid). You must use library functions.</p>
<ul>
    <li><code>strcpy(dest, src)</code>: Copy string</li>
    <li><code>strcat(dest, src)</code>: Concatenate strings</li>
    <li><code>strlen(str)</code>: Get length (excluding null terminator)</li>
    <li><code>strcmp(str1, str2)</code>: Compare strings</li>
</ul>

<h3>Common String Functions</h3>
<pre><code>char str1[20] = "Hello";
char str2[20] = "World";

strlen(str1);           // 5 (length)
strcpy(str1, str2);     // str1 = "World"
strcat(str1, str2);     // str1 = "HelloWorld"
strcmp(str1, str2);     // 0 if equal, <0 or >0 otherwise
strchr(str1, 'l');      // Pointer to first 'l'
strstr(str1, "ll");     // Pointer to "ll" in str1</code></pre>

<h3>Important Notes:</h3>
<ul>
    <li>Always allocate one extra space for null terminator</li>
    <li>scanf("%s") stops at whitespace</li>
    <li>Use fgets() for strings with spaces</li>
</ul>
        `
    },
    {
        id: 12,
        title: "Functions",
        category: "functions",
        content: `
<h3>The Building Blocks of Code</h3>
<p>
    A function is a self-contained block of statements that perform a coherent task of some kind. Every C program consists of one or more functions, the most important being <code>main()</code>.
</p>

<h3>Anatomy of a Function</h3>
<pre><code>return_type function_name(parameter list) {
    // body of the function
    return value;
}</code></pre>

<h3>Declaration vs Definition</h3>
<ul>
    <li><strong>Declaration (Prototype):</strong> Tells the compiler about the function's name, return type, and parameters. Usually placed at the top of the file or in a header.</li>
    <li><strong>Definition:</strong> The actual implementation of the code.</li>
</ul>

<h3>Parameter Passing Mechanisms</h3>
<p>
    <strong>1. Pass by Value (Default):</strong> C passes arguments by value. This means a <em>copy</em> of the data is given to the function. Changes made inside the function do <strong>not</strong> affect the original variable.
</p>
<pre><code>void modify(int x) {
    x = 100; // Only changes local copy
}</code></pre>

<p>
    <strong>2. Pass by Reference (Simulated):</strong> To change the original variable, we pass its <strong>address</strong> (pointer).
</p>
<pre><code>void modify(int *x) {
    *x = 100; // Canges the value at that address
}</code></pre>
        `
    },
    {
        id: 13,
        title: "Recursion",
        category: "functions",
        content: `
<h3>Thinking Recursively</h3>
<p>
    Recursion is a process where a function calls itself directly or indirectly. It breaks a large problem into smaller, identical problems.
</p>

<h3>Structure of a Recursive Function</h3>
<p>Every recursive function <strong>must</strong> have two parts:</p>
<ol>
    <li><strong>Base Case:</strong> A condition that stops the recursion. Without this, you get an infinite loop (Stack Overflow).</li>
    <li><strong>Recursive Case:</strong> The function calls itself with modified arguments, moving closer to the base case.</li>
</ol>

<h3>Visualizing the Stack</h3>
<p>
    Each function call creates a new "stack frame" in memory containing its local variables.
    <br>
    For <code>factorial(3)</code>:
    <br>
    Stack Top -> <code>fact(1)</code> returns 1<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -> <code>fact(2)</code> waits for fact(1)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -> <code>fact(3)</code> waits for fact(2)<br>
    Stack Bottom
</p>

<h3>Recursion vs Iteration</h3>
<p>
    Recursion is often cleaner for problems like tree traversals or sorting (Merge Sort), but it uses more memory (stack space). Iteration (loops) is generally more memory-efficient and faster.
</p>
        `
    },
    {
        id: 14,
        title: "Pointers Basics",
        category: "pointers",
        content: `
<h3>Demystifying Pointers</h3>
<p>
    A pointer is simply a variable that stores a <strong>memory address</strong>. If a standard variable is a house, a pointer is a piece of paper with the address of that house written on it.
</p>

<h3>Memory Addresses</h3>
<p>
    Every byte in your computer's RAM has a unique address (like 0x7ffd5).
    <ul>
        <li><code>int x = 10;</code> allocates 4 bytes for the value 10.</li>
        <li><code>&x</code> gets the address of the first byte.</li>
    </ul>
</p>

<h3>Operators</h3>
<ul>
    <li><strong>Address-of (&):</strong> "Where is this variable located?"</li>
    <li><strong>Dereference (*):</strong> "Go to this address and get/set the value."</li>
</ul>

<h3>Example</h3>
<pre><code>int x = 42;
int *p = &x;  // p holds the address of x

printf("%p", p);  // Prints address (e.g., 0x1234)
printf("%d", *p); // Prints 42 (value at 0x1234)

*p = 100;         // Goes to 0x1234 and writes 100
// Now x is 100</code></pre>

<h3>Why are they powerful?</h3>
<p>
    Pointers allow you to:
    1. Modify variables outside a function's scope.
    2. Dynamically allocate memory.
    3. Build complex data structures (Linked Lists, Trees).
    4. Access hardware directly (Embedded Systems).
</p>
        `
    },
    {
        id: 15,
        title: "Pointers and Arrays",
        category: "pointers",
        content: `
<h3>The Close Relationship</h3>
<p>
    In C, the name of an array is essentially a constant pointer to its first element.
    <br><code>arr</code> is equivalent to <code>&arr[0]</code>.
</p>

<h3>Pointer Arithmetic</h3>
<p>
    When you add 1 to a pointer, it doesn't just increase the address by 1 byte. It increases it by <code>sizeof(type)</code>.
    <br>
    If <code>int *p</code> is at 1000:
    <br>
    <code>p + 1</code> is at 1004 (since int is 4 bytes).
</p>
<pre><code>int arr[] = {10, 20, 30};
int *ptr = arr;

// Accessing elements via pointer syntax
printf("%d", *ptr);       // 10
printf("%d", *(ptr + 1)); // 20
printf("%d", *(ptr + 2)); // 30</code></pre>

<h3>Arrays vs Pointers</h3>
<p>
    While similar, they apply differently:
    <ul>
        <li><strong>Array:</strong> Fixed size, constant address (cannot say <code>arr++</code>).</li>
        <li><strong>Pointer:</strong> Variable that can point anywhere (can say <code>ptr++</code>).</li>
    </ul>
</p>
        `
    },
    {
        id: 16,
        title: "Structures",
        category: "advanced",
        content: `
<h3>Creating Custom Types</h3>
<p>
    A structure (<code>struct</code>) is a user-defined data type that groups related variables of different types under a single name. This is fundamental for modeling real-world objects.
</p>

<h3>Defining a Structure</h3>
<pre><code>struct Student {
    char name[50]; // 50 bytes
    int age;       // 4 bytes
    float gpa;     // 4 bytes
};</code></pre>

<h3>Memory Alignment and Padding</h3>
<p>
    The size of a struct is not always the simple sum of its members. The compiler often adds "padding" bytes to ensure variables sit on efficient memory boundaries (e.g., multiples of 4).
</p>

<h3>Using typedef</h3>
<p>
    <code>typedef</code> creates an alias for a type, saving you from typing <code>struct</code> every time.
</p>
<pre><code>typedef struct {
    int x, y;
} Point;

Point p1 = {10, 20}; // No 'struct Point' needed</code></pre>

<h3>Arrow Operator (->)</h3>
<p>
    When you have a pointer to a struct, you use the arrow operator to access members.
</p>
<pre><code>Point p1 = {10, 20};
Point *ptr = &p1;

// Accessing
ptr->x = 50;  // Same as (*ptr).x</code></pre>
        `
    },
    {
        id: 17,
        title: "File Handling",
        category: "advanced",
        content: `
<h3>Persistent Storage</h3>
<p>
    File handling allows programs to store data permanently on the disk rather than just temporarily in RAM. C uses the <code>FILE</code> structure for stream-oriented I/O.
</p>

<h3>Opening Modes</h3>
<table class="theory-table">
    <tr><th>Mode</th><th>Description</th></tr>
    <tr><td>"r"</td><td>Open for reading. Fails if file doesn't exist.</td></tr>
    <tr><td>"w"</td><td>Open for writing. Creates new file or overwrites existing.</td></tr>
    <tr><td>"a"</td><td>Open for appending. Writes add to the end.</td></tr>
    <tr><td>"r+"</td><td>Read and Write (file must exist).</td></tr>
    <tr><td>"w+"</td><td>Read and Write (overwrites/creates).</td></tr>
</table>

<h3>Text vs Binary Mode</h3>
<p>
    By default, files are opened in text mode, where newline translations may occur (e.g., \\n to \\r\\n on Windows). Use "rb" or "wb" for binary data to prevent this.
</p>

<h3>Best Practices</h3>
<pre><code>FILE *fp = fopen("data.txt", "r");
if (fp == NULL) {
    perror("Error opening file"); // Always check for NULL!
    return 1;
}

// ... operations ...

fclose(fp); // Always close to flush buffers and release lock</code></pre>
        `
    },
    {
        id: 18,
        title: "Dynamic Memory Allocation",
        category: "advanced",
        content: `
<h3>Why Dynamic Memory?</h3>
<p>Static arrays have fixed sizes. Dynamic allocation lets you allocate memory at runtime.</p>

<h3>Memory Functions (stdlib.h)</h3>
<pre><code>#include &lt;stdlib.h&gt;

// malloc - allocate memory
int *ptr = (int*) malloc(5 * sizeof(int));

// calloc - allocate and initialize to 0
int *ptr = (int*) calloc(5, sizeof(int));

// realloc - resize allocated memory
ptr = (int*) realloc(ptr, 10 * sizeof(int));

// free - release memory
free(ptr);</code></pre>

<h3>Complete Example</h3>
<pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main() {
    int n;
    printf("Enter size: ");
    scanf("%d", &n);
    
    // Allocate array dynamically
    int *arr = (int*) malloc(n * sizeof(int));
    
    if (arr == NULL) {
        printf("Memory allocation failed!");
        return 1;
    }
    
    // Use the array
    for (int i = 0; i < n; i++) {
        arr[i] = i * 10;
        printf("%d ", arr[i]);
    }
    
    // Free memory when done
    free(arr);
    return 0;
}</code></pre>

<h3>Memory Leak</h3>
<p>Always <code>free()</code> allocated memory to avoid memory leaks!</p>
        `
    },
    {
        id: 19,
        title: "Preprocessor Directives",
        category: "advanced",
        content: `

<h3>Before Compilation</h3>
<p>
    The C Preprocessor is not part of the compiler, but a separate step in the compilation process. It executes <em>before</em> the actual compilation begins. All preprocessor directives start with a hash symbol (<code>#</code>).
</p>

<h3>1. Macro Substitution (#define)</h3>
<p>
    Macros allow you to define constants or code snippets that are replaced textually.
</p>
<pre><code>#define PI 3.14159
#define MAX_BUFFER 1024

// parameterized macro (unsafe if not careful)
#define SQUARE(x) ((x) * (x)) </code></pre>

<h3>2. File Inclusion (#include)</h3>
<ul>
    <li><code>#include &lt;header.h&gt;</code>: Looks in standard system directories.</li>
    <li><code>#include "header.h"</code>: Looks in the current directory first.</li>
</ul>

<h3>3. Conditional Compilation</h3>
<p>
    Directives like <code>#ifdef</code>, <code>#ifndef</code>, <code>#else</code>, and <code>#endif</code> allow you to compile specific blocks of code based on conditions. This is often used for cross-platform compatibility.
</p>
<pre><code>#ifdef _WIN32
    // Windows-specific code
#else
    // Linux/Mac code
#endif</code></pre>
        `
    },
    {
        id: 20,
        title: "Storage Classes",
        category: "advanced",
        content: `
<h3>Managing Visibility and Life</h3>
<p>
    Storage classes determine two key things about a variable: its <strong>scope</strong> (where it can be processed) and its <strong>lifetime</strong> (how long it stays in memory).
</p>

<table class="theory-table">
    <tr><th>Class</th><th>Keyword</th><th>Storage</th><th>Default Value</th><th>Lifetime</th></tr>
    <tr><td>Automatic</td><td>auto</td><td>Stack</td><td>Garbage</td><td>Block Scope</td></tr>
    <tr><td>External</td><td>extern</td><td>Data Seg</td><td>Zero</td><td>Entire Program</td></tr>
    <tr><td>Static</td><td>static</td><td>Data Seg</td><td>Zero</td><td>Persists between calls</td></tr>
    <tr><td>Register</td><td>register</td><td>CPU Reg</td><td>Garbage</td><td>Block Scope</td></tr>
</table>

<h3>The 'static' Keyword</h3>
<p>
    <strong>Inside a function:</strong> The variable retains its value between function calls. It is initialized only once.
    <br>
    <strong>Global variable:</strong> Limits the scope of the variable to the <em>current file only</em> (private to the file).
</p>

<h3>The 'extern' Keyword</h3>
<p>
    Used to declare a variable or function that is defined in another file, allowing global access across multiple files.
</p>
        `
    },
    {
        id: 21,
        title: "Bitwise Operators",
        category: "advanced",
        content: `
<h3>Manipulating Bits</h3>
<p>
    C allows you to manipulate data at the bit level. This is crucial for systems programming, embedded devices, and optimization.
</p>

<table class="theory-table">
    <tr><th>Operator</th><th>Name</th><th>Description</th></tr>
    <tr><td>&</td><td>AND</td><td>Sets bit to 1 if both bits are 1</td></tr>
    <tr><td>|</td><td>OR</td><td>Sets bit to 1 if at least one bit is 1</td></tr>
    <tr><td>^</td><td>XOR</td><td>Sets bit to 1 if bits are different</td></tr>
    <tr><td>~</td><td>NOT</td><td>Inverts all bits (0 becomes 1, 1 becomes 0)</td></tr>
    <tr><td><<</td><td>Left Shift</td><td>Shifts bits left (multiplies by 2^n)</td></tr>
    <tr><td>>></td><td>Right Shift</td><td>Shifts bits right (divides by 2^n)</td></tr>
</table>

<h3>Common Tricks</h3>
<pre><code>int x = 5;      // Binary: 0101

// 1. Check if even or odd
if (x & 1) printf("Odd");

// 2. Set the 3rd bit
x = x | (1 << 2);

// 3. Toggle a bit
x = x ^ (1 << 2);</code></pre>
        `
    },
    {
        id: 22,
        title: "Enumerations (enum)",
        category: "advanced",
        content: `
<h3>Readable Constants</h3>
<p>
    An enumeration (<code>enum</code>) is a user-defined data type that consists of a set of named integer constants. It makes code more readable and self-documenting compared to using raw numbers.
</p>

<h3>Syntax</h3>
<pre><code>enum Level {
    LOW,    // 0 by default
    MEDIUM, // 1
    HIGH    // 2
};

enum Level currentLevel = MEDIUM;</code></pre>

<h3>Custom Values</h3>
<p>You can assign specific values to enum constants. Subsequent values will increment by 1.</p>
<pre><code>enum ErrorCode {
    NOT_FOUND = 404,
    SERVER_ERROR = 500,
    BAD_GATEWAY // 501
};</code></pre>
        `
    },
    {
        id: 23,
        title: "Unions",
        category: "advanced",
        content: `
<h3>Memory Efficiency</h3>
<p>
    A <code>union</code> is similar to a struct, but with a major difference: <strong>all members share the same memory location</strong>.
</p>
<ul>
    <li><strong>Struct:</strong> Size is sum of all members (approx). Allocation for all members exists simultaneously.</li>
    <li><strong>Union:</strong> Size is size of the largest member. Only one member can hold a value at a time.</li>
</ul>

<h3>Example</h3>
<pre><code>union Data {
    int i;
    float f;
    char str[20];
};

union Data data;
data.i = 10;
printf("%d", data.i); // Prints 10

data.f = 220.5;
printf("%.1f", data.f); // Prints 220.5
printf("%d", data.i);   // Printing 'i' now gives garbage!</code></pre>

<h3>Use Cases</h3>
<p>
    Unions are rarely used in high-level app development but are common in:
    <ol>
        <li>Embedded programming (saving RAM).</li>
        <li>Hardware access (interpreting bytes in multiple ways).</li>
        <li>Implementing variant types (e.g., a value that can be Int OR Float).</li>
    </ol>
</p>
        `
    },
    {
        id: 24,
        title: "Command Line Arguments",
        category: "advanced",
        content: `
<h3>Interacting with the Console</h3>
<p>
    C programs can accept input directly from the command line when they are executed. This is handled by main function parameters.
</p>

<h3>The Main Signature</h3>
<pre><code>int main(int argc, char *argv[])</code></pre>
<ul>
    <li><strong>argc (Argument Count):</strong> The number of arguments passed (including the program name).</li>
    <li><strong>argv (Argument Vector):</strong> An array of character pointers (strings) listing all arguments.</li>
</ul>

<h3>Example</h3>
<pre><code>// Running: ./app hello world
int main(int argc, char *argv[]) {
    printf("Program Name: %s\\n", argv[0]); // ./app
    
    if (argc > 1) {
        printf("First Arg: %s\\n", argv[1]); // hello
    }
    return 0;
}</code></pre>
        `
    },
    {
        id: 25,
        title: "Error Handling",
        category: "advanced",
        content: `
<h3>Robust Programming</h3>
<p>
    C does not have exceptions (try-catch) like Java or Python. Errors must be handled manually using return codes and special variables.
</p>

<h3>1. Return Values</h3>
<p>
    Functions should return a status code (usually 0 for success, non-zero for failure, or NULL for pointers).
</p>
<pre><code>FILE *fp = fopen("file.txt", "r");
if (fp == NULL) {
    // Handle error
}</code></pre>

<h3>2. The 'errno' Variable</h3>
<p>
    When a library function fails, it sets a global variable <code>errno</code> (from <code>errno.h</code>) to a specific error code.
</p>

<h3>3. perror() and strerror()</h3>
<p>
    You can decode <code>errno</code> into human-readable messages.
</p>
<pre><code>#include <errno.h>
#include <string.h>

// perror(): Prints message + error description to stderr
perror("File open failed"); 

// strerror(): Returns the error string
printf("Error: %s", strerror(errno));</code></pre>

<h3>Best Practices</h3>
<ul>
    <li>Always check return values of <code>malloc</code>, <code>fopen</code>, etc.</li>
    <li>Use <code>stderr</code> for error messages, not <code>stdout</code>.</li>
    <li>Fail gracefully; don't just crash.</li>
</ul>
        `
    }
];

// Category labels for filtering
const THEORY_CATEGORIES = {
    basics: "Basics",
    control: "Control Flow",
    loops: "Loops",
    arrays: "Arrays",
    strings: "Strings",
    functions: "Functions",
    pointers: "Pointers",
    advanced: "Advanced"
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { THEORY, THEORY_CATEGORIES };
}
