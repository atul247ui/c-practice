/**
 * C Programming Questions Database - 80 Questions
 * Categories: Basics, Arrays, Strings, Loops, Functions, Pointers, Recursion, Sorting, Searching, Math
 */

const QUESTIONS = [
    // ===== BASIC QUESTIONS (1-15) =====
    {
        id: 1,
        title: "Hello World",
        difficulty: "easy",
        description: `Write a C program that prints "Hello, World!" to the console.`,
        examples: [{ input: "None", output: "Hello, World!" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    // Write your code here\n    \n    return 0;\n}`,
        testCases: [{ name: "Basic Output", input: "", expectedOutput: "Hello, World!", pattern: /Hello,?\s*World!?/i }]
    },
    {
        id: 2,
        title: "Sum of Two Numbers",
        difficulty: "easy",
        description: `Write a C program that reads two integers and prints their sum.`,
        examples: [{ input: "5 3", output: "8" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    // Read and print sum\n    \n    return 0;\n}`,
        testCases: [{ name: "Sum Test", input: "5 3", expectedOutput: "8", checkFunction: (code) => code.includes('+') && code.includes('scanf') }]
    },
    {
        id: 3,
        title: "Difference of Two Numbers",
        difficulty: "easy",
        description: `Write a C program that reads two integers and prints their difference (first - second).`,
        examples: [{ input: "10 3", output: "7" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    // Read and print difference\n    \n    return 0;\n}`,
        testCases: [{ name: "Difference Test", input: "10 3", expectedOutput: "7", checkFunction: (code) => code.includes('-') && code.includes('scanf') }]
    },
    {
        id: 4,
        title: "Product of Two Numbers",
        difficulty: "easy",
        description: `Write a C program that reads two integers and prints their product.`,
        examples: [{ input: "4 5", output: "20" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    // Read and print product\n    \n    return 0;\n}`,
        testCases: [{ name: "Product Test", input: "4 5", expectedOutput: "20", checkFunction: (code) => code.includes('*') && code.includes('scanf') }]
    },
    {
        id: 5,
        title: "Quotient and Remainder",
        difficulty: "easy",
        description: `Write a C program that reads two integers and prints both quotient and remainder in the exact format: Quotient: X, Remainder: Y`,
        examples: [{ input: "17 5", output: "Quotient: 3, Remainder: 2" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    // Calculate quotient and remainder\n    \n    return 0;\n}`,
        testCases: [{ name: "Division Test", input: "17 5", expectedOutput: "Quotient: 3, Remainder: 2" }]
    },
    {
        id: 6,
        title: "Swap Two Numbers",
        difficulty: "easy",
        description: `Write a C program to swap two numbers using a temporary variable.`,
        examples: [{ input: "5 10", output: "10 5" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b, temp;\n    // Swap the numbers\n    \n    return 0;\n}`,
        testCases: [{ name: "Swap Test", input: "5 10", expectedOutput: "10 5", checkFunction: (code) => code.includes('temp') || code.includes('t =') }]
    },
    {
        id: 7,
        title: "Check Even or Odd",
        difficulty: "easy",
        description: `Write a C program to check if a number is even or odd.`,
        examples: [{ input: "4", output: "Even" }, { input: "7", output: "Odd" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Check even or odd\n    \n    return 0;\n}`,
        testCases: [{ name: "Even Test", input: "4", expectedOutput: "Even", checkFunction: (code) => code.includes('%') && code.includes('2') }]
    },
    {
        id: 8,
        title: "Check Positive or Negative",
        difficulty: "easy",
        description: `Write a C program to check if a number is positive, negative, or zero.`,
        examples: [{ input: "5", output: "Positive" }, { input: "-3", output: "Negative" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Check positive/negative/zero\n    \n    return 0;\n}`,
        testCases: [{ name: "Positive Test", input: "5", expectedOutput: "Positive", checkFunction: (code) => code.includes('if') && (code.includes('> 0') || code.includes('>0')) }]
    },
    {
        id: 9,
        title: "Find Maximum of Three",
        difficulty: "easy",
        description: `Write a C program to find the maximum of three numbers.`,
        examples: [{ input: "10 25 15", output: "25" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    // Find maximum\n    \n    return 0;\n}`,
        testCases: [{ name: "Max Test", input: "10 25 15", expectedOutput: "25", checkFunction: (code) => code.includes('if') && code.includes('>') }]
    },
    {
        id: 10,
        title: "Find Minimum of Three",
        difficulty: "easy",
        description: `Write a C program to find the minimum of three numbers.`,
        examples: [{ input: "10 5 15", output: "5" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    // Find minimum\n    \n    return 0;\n}`,
        testCases: [{ name: "Min Test", input: "10 5 15", expectedOutput: "5", checkFunction: (code) => code.includes('if') && code.includes('<') }]
    },
    {
        id: 11,
        title: "Calculate Simple Interest",
        difficulty: "easy",
        description: `Write a C program to calculate simple interest. Formula: SI = (P * R * T) / 100`,
        examples: [{ input: "1000 5 2", output: "100" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    float p, r, t;\n    // Calculate simple interest\n    \n    return 0;\n}`,
        testCases: [{ name: "SI Test", input: "1000 5 2", expectedOutput: "100", checkFunction: (code) => code.includes('*') && code.includes('/') && code.includes('100') }]
    },
    {
        id: 12,
        title: "Celsius to Fahrenheit",
        difficulty: "easy",
        description: `Convert temperature from Celsius to Fahrenheit. Formula: F = (C * 9/5) + 32`,
        examples: [{ input: "0", output: "32" }, { input: "100", output: "212" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    float celsius;\n    // Convert to fahrenheit\n    \n    return 0;\n}`,
        testCases: [{ name: "Conversion Test", input: "0", expectedOutput: "32", checkFunction: (code) => code.includes('32') && code.includes('*') }]
    },
    {
        id: 13,
        title: "Calculate Area of Circle",
        difficulty: "easy",
        description: `Write a C program to calculate the area of a circle given its radius. Use PI = 3.14159 and print the result rounded to exactly 2 decimal places (e.g. with %.2f).`,
        examples: [{ input: "5", output: "78.54" }],
        starterCode: `#include <stdio.h>\n#define PI 3.14159\n\nint main() {\n    float radius;\n    // Calculate area\n    \n    return 0;\n}`,
        testCases: [{ name: "Area Test", input: "5", expectedOutput: "78.54", checkFunction: (code) => code.includes('*') && (code.includes('PI') || code.includes('3.14')) }]
    },
    {
        id: 14,
        title: "Calculate Area of Rectangle",
        difficulty: "easy",
        description: `Write a C program to calculate the area of a rectangle given length and width.`,
        examples: [{ input: "5 4", output: "20" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int length, width;\n    // Calculate area\n    \n    return 0;\n}`,
        testCases: [{ name: "Area Test", input: "5 4", expectedOutput: "20", checkFunction: (code) => code.includes('*') }]
    },
    {
        id: 15,
        title: "Calculate Perimeter of Rectangle",
        difficulty: "easy",
        description: `Write a C program to calculate the perimeter of a rectangle.`,
        examples: [{ input: "5 4", output: "18" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int length, width;\n    // Calculate perimeter = 2*(l+w)\n    \n    return 0;\n}`,
        testCases: [{ name: "Perimeter Test", input: "5 4", expectedOutput: "18", checkFunction: (code) => code.includes('2') && code.includes('+') }]
    },

    // ===== LOOP QUESTIONS (16-30) =====
    {
        id: 16,
        title: "Factorial Calculation",
        difficulty: "easy",
        description: `Write a C program to calculate the factorial of a number. n! = n × (n-1) × ... × 1`,
        examples: [{ input: "5", output: "120" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Calculate factorial\n    \n    return 0;\n}`,
        testCases: [{ name: "Factorial Test", input: "5", expectedOutput: "120", checkFunction: (code) => (code.includes('for') || code.includes('while')) && code.includes('*') }]
    },
    {
        id: 17,
        title: "Sum of N Natural Numbers",
        difficulty: "easy",
        description: `Write a C program to find the sum of first N natural numbers.`,
        examples: [{ input: "5", output: "15" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Calculate sum 1+2+...+n\n    \n    return 0;\n}`,
        testCases: [{ name: "Sum Test", input: "5", expectedOutput: "15", checkFunction: (code) => code.includes('for') || code.includes('while') }]
    },
    {
        id: 18,
        title: "Print Multiplication Table",
        difficulty: "easy",
        description: `Write a C program to print the multiplication table of a number (1 to 10).`,
        examples: [{ input: "5", output: "5 10 15 20 25 30 35 40 45 50" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Print table\n    \n    return 0;\n}`,
        testCases: [{ name: "Table Test", input: "5", expectedOutput: "5 10 15 20 25 30 35 40 45 50" }]
    },
    {
        id: 19,
        title: "Check Prime Number",
        difficulty: "medium",
        description: `Write a C program to check if a number is prime.`,
        examples: [{ input: "7", output: "Prime" }, { input: "12", output: "Not Prime" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Check prime\n    \n    return 0;\n}`,
        testCases: [{ name: "Prime Test", input: "7", expectedOutput: "Prime", checkFunction: (code) => code.includes('%') && code.includes('for') }]
    },
    {
        id: 20,
        title: "Fibonacci Series",
        difficulty: "medium",
        description: `Write a C program to print first N Fibonacci numbers. Series: 0, 1, 1, 2, 3, 5, 8...`,
        examples: [{ input: "7", output: "0 1 1 2 3 5 8" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Print fibonacci series\n    \n    return 0;\n}`,
        testCases: [{ name: "Fibonacci Test", input: "7", expectedOutput: "0 1 1 2 3 5 8", checkFunction: (code) => code.includes('+') && (code.includes('for') || code.includes('while')) }]
    },
    {
        id: 21,
        title: "Reverse a Number",
        difficulty: "easy",
        description: `Write a C program to reverse the digits of an integer.`,
        examples: [{ input: "12345", output: "54321" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Reverse the number\n    \n    return 0;\n}`,
        testCases: [{ name: "Reverse Test", input: "12345", expectedOutput: "54321", checkFunction: (code) => code.includes('%') && code.includes('/') }]
    },
    {
        id: 22,
        title: "Count Digits in Number",
        difficulty: "easy",
        description: `Write a C program to count the number of digits in an integer.`,
        examples: [{ input: "12345", output: "5" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Count digits\n    \n    return 0;\n}`,
        testCases: [{ name: "Count Test", input: "12345", expectedOutput: "5", checkFunction: (code) => code.includes('/') && code.includes('10') }]
    },
    {
        id: 23,
        title: "Sum of Digits",
        difficulty: "easy",
        description: `Write a C program to find the sum of digits of a number.`,
        examples: [{ input: "1234", output: "10" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Sum digits\n    \n    return 0;\n}`,
        testCases: [{ name: "Sum Test", input: "1234", expectedOutput: "10", checkFunction: (code) => code.includes('%') && code.includes('+') }]
    },
    {
        id: 24,
        title: "Check Palindrome Number",
        difficulty: "medium",
        description: `Write a C program to check if a number is a palindrome.`,
        examples: [{ input: "121", output: "Palindrome" }, { input: "123", output: "Not Palindrome" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Check palindrome\n    \n    return 0;\n}`,
        testCases: [{ name: "Palindrome Test", input: "121", expectedOutput: "Palindrome", checkFunction: (code) => code.includes('%') && code.includes('/') }]
    },
    {
        id: 25,
        title: "Check Armstrong Number",
        difficulty: "medium",
        description: `Check if a 3-digit number is Armstrong. Armstrong number: sum of cubes of digits equals the number. Example: 153 = 1³ + 5³ + 3³`,
        examples: [{ input: "153", output: "Armstrong" }, { input: "123", output: "Not Armstrong" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Check armstrong\n    \n    return 0;\n}`,
        testCases: [{ name: "Armstrong Test", input: "153", expectedOutput: "Armstrong", checkFunction: (code) => code.includes('%') && (code.includes('*') || code.includes('pow')) }]
    },
    {
        id: 26,
        title: "Power of a Number",
        difficulty: "easy",
        description: `Write a C program to calculate x raised to power n (x^n) using a loop.`,
        examples: [{ input: "2 10", output: "1024" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int x, n;\n    // Calculate power\n    \n    return 0;\n}`,
        testCases: [{ name: "Power Test", input: "2 10", expectedOutput: "1024", checkFunction: (code) => code.includes('for') && code.includes('*') }]
    },
    {
        id: 27,
        title: "GCD of Two Numbers",
        difficulty: "medium",
        description: `Find the Greatest Common Divisor of two numbers using Euclidean algorithm.`,
        examples: [{ input: "48 18", output: "6" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    // Find GCD\n    \n    return 0;\n}`,
        testCases: [{ name: "GCD Test", input: "48 18", expectedOutput: "6", checkFunction: (code) => code.includes('%') && code.includes('while') }]
    },
    {
        id: 28,
        title: "LCM of Two Numbers",
        difficulty: "medium",
        description: `Find the Least Common Multiple of two numbers. LCM = (a*b)/GCD(a,b)`,
        examples: [{ input: "4 6", output: "12" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    // Find LCM\n    \n    return 0;\n}`,
        testCases: [{ name: "LCM Test", input: "4 6", expectedOutput: "12", checkFunction: (code) => code.includes('*') && code.includes('/') }]
    },
    {
        id: 29,
        title: "Print Prime Numbers in Range",
        difficulty: "medium",
        description: `Print all prime numbers between two given numbers (inclusive).`,
        examples: [{ input: "10 20", output: "11 13 17 19" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int start, end;\n    // Print primes in range\n    \n    return 0;\n}`,
        testCases: [{ name: "Prime Range Test", input: "10 20", expectedOutput: "11 13 17 19", checkFunction: (code) => code.includes('for') && code.includes('%') }]
    },
    {
        id: 30,
        title: "Sum of Even Numbers",
        difficulty: "easy",
        description: `Find sum of all even numbers from 1 to N.`,
        examples: [{ input: "10", output: "30" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Sum even numbers\n    \n    return 0;\n}`,
        testCases: [{ name: "Even Sum Test", input: "10", expectedOutput: "30", checkFunction: (code) => code.includes('%') && code.includes('2') }]
    },

    // ===== PATTERN QUESTIONS (31-40) =====
    {
        id: 31,
        title: "Right Triangle Star Pattern",
        difficulty: "medium",
        description: `Print right-angled triangle of stars. Row i has i stars.`,
        examples: [{ input: "4", output: "*\\n**\\n***\\n****" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Print pattern\n    \n    return 0;\n}`,
        testCases: [{ name: "Pattern Test", input: "4", expectedOutput: "*\n**\n***\n****", checkFunction: (code) => code.includes('for') && code.includes('*') }]
    },
    {
        id: 32,
        title: "Inverted Triangle Pattern",
        difficulty: "medium",
        description: `Print inverted right-angled triangle of stars.`,
        examples: [{ input: "4", output: "****\\n***\\n**\\n*" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Print inverted pattern\n    \n    return 0;\n}`,
        testCases: [{ name: "Pattern Test", input: "4", expectedOutput: "****\n***\n**\n*", checkFunction: (code) => code.includes('for') && code.includes('*') }]
    },
    {
        id: 33,
        title: "Number Triangle Pattern",
        difficulty: "medium",
        description: `Print triangle where each row has numbers from 1 to row number.`,
        examples: [{ input: "4", output: "1\\n1 2\\n1 2 3\\n1 2 3 4" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Print number triangle\n    \n    return 0;\n}`,
        testCases: [{ name: "Pattern Test", input: "4", expectedOutput: "1\n1 2\n1 2 3\n1 2 3 4", checkFunction: (code) => code.includes('for') && code.includes('printf') }]
    },
    {
        id: 34,
        title: "Pyramid Star Pattern",
        difficulty: "medium",
        description: `Print a pyramid pattern of stars, centered with leading spaces (see example — match the spacing exactly).`,
        examples: [{ input: "4", output: "   *\\n  ***\\n *****\\n*******" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Print pyramid\n    \n    return 0;\n}`,
        testCases: [{ name: "Pyramid Test", input: "4", expectedOutput: "   *\n  ***\n *****\n*******" }]
    },
    {
        id: 35,
        title: "Diamond Star Pattern",
        difficulty: "hard",
        description: `Print a diamond pattern of stars, with leading spaces so it's centered (see example — match the spacing exactly).`,
        examples: [{ input: "3", output: "  *\\n ***\\n*****\\n ***\\n  *" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Print diamond\n    \n    return 0;\n}`,
        testCases: [{ name: "Diamond Test", input: "3", expectedOutput: "  *\n ***\n*****\n ***\n  *" }]
    },
    {
        id: 36,
        title: "Floyd's Triangle",
        difficulty: "medium",
        description: `Print Floyd's triangle - consecutive numbers in triangular form.`,
        examples: [{ input: "4", output: "1\\n2 3\\n4 5 6\\n7 8 9 10" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Print Floyd's triangle\n    \n    return 0;\n}`,
        testCases: [{ name: "Floyd Test", input: "4", expectedOutput: "1\n2 3\n4 5 6\n7 8 9 10", checkFunction: (code) => code.includes('for') && code.includes('++') }]
    },
    {
        id: 37,
        title: "Pascal's Triangle",
        difficulty: "hard",
        description: `Print Pascal's triangle for N rows.`,
        examples: [{ input: "4", output: "1\\n1 1\\n1 2 1\\n1 3 3 1" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Print Pascal's triangle\n    \n    return 0;\n}`,
        testCases: [{ name: "Pascal Test", input: "4", expectedOutput: "1\n1 1\n1 2 1\n1 3 3 1", checkFunction: (code) => code.includes('for') }]
    },
    {
        id: 38,
        title: "Hollow Square Pattern",
        difficulty: "medium",
        description: `Print a hollow square pattern of stars.`,
        examples: [{ input: "4", output: "****\\n*  *\\n*  *\\n****" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Print hollow square\n    \n    return 0;\n}`,
        testCases: [{ name: "Square Test", input: "4", expectedOutput: "****\n*  *\n*  *\n****" }]
    },
    {
        id: 39,
        title: "Alphabet Triangle",
        difficulty: "medium",
        description: `Print triangle with alphabets: A, AB, ABC, ABCD...`,
        examples: [{ input: "4", output: "A\\nAB\\nABC\\nABCD" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Print alphabet triangle\n    \n    return 0;\n}`,
        testCases: [{ name: "Alphabet Test", input: "4", expectedOutput: "A\nAB\nABC\nABCD", checkFunction: (code) => code.includes('for') && code.includes("'A'") }]
    },
    {
        id: 40,
        title: "Butterfly Pattern",
        difficulty: "hard",
        description: `Print a butterfly pattern using stars (see example — match the spacing exactly).`,
        examples: [{ input: "3", output: "*    *\\n**  **\\n******\\n**  **\\n*    *" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    // Print butterfly\n    \n    return 0;\n}`,
        testCases: [{ name: "Butterfly Test", input: "3", expectedOutput: "*    *\n**  **\n******\n**  **\n*    *" }]
    },

    // ===== ARRAY QUESTIONS (41-55) =====
    {
        id: 41,
        title: "Find Maximum in Array",
        difficulty: "easy",
        description: `Find the maximum element in an array.`,
        examples: [{ input: "5\\n10 45 23 67 12", output: "67" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    // Find maximum\n    \n    return 0;\n}`,
        testCases: [{ name: "Max Test", input: "5\n10 45 23 67 12", expectedOutput: "67", checkFunction: (code) => code.includes('for') && code.includes('>') }]
    },
    {
        id: 42,
        title: "Find Minimum in Array",
        difficulty: "easy",
        description: `Find the minimum element in an array.`,
        examples: [{ input: "5\\n10 45 23 67 12", output: "10" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    // Find minimum\n    \n    return 0;\n}`,
        testCases: [{ name: "Min Test", input: "5\n10 45 23 67 12", expectedOutput: "10", checkFunction: (code) => code.includes('for') && code.includes('<') }]
    },
    {
        id: 43,
        title: "Sum of Array Elements",
        difficulty: "easy",
        description: `Find the sum of all elements in an array.`,
        examples: [{ input: "5\\n1 2 3 4 5", output: "15" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    // Find sum\n    \n    return 0;\n}`,
        testCases: [{ name: "Sum Test", input: "5\n1 2 3 4 5", expectedOutput: "15", checkFunction: (code) => code.includes('for') && code.includes('+') }]
    },
    {
        id: 44,
        title: "Average of Array Elements",
        difficulty: "easy",
        description: `Find the average of all elements in an array.`,
        examples: [{ input: "5\\n10 20 30 40 50", output: "30" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    // Find average\n    \n    return 0;\n}`,
        testCases: [{ name: "Average Test", input: "5\n10 20 30 40 50", expectedOutput: "30", checkFunction: (code) => code.includes('/') && code.includes('for') }]
    },
    {
        id: 45,
        title: "Reverse an Array",
        difficulty: "easy",
        description: `Reverse the elements of an array and print.`,
        examples: [{ input: "5\\n1 2 3 4 5", output: "5 4 3 2 1" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    // Reverse array\n    \n    return 0;\n}`,
        testCases: [{ name: "Reverse Test", input: "5\n1 2 3 4 5", expectedOutput: "5 4 3 2 1", checkFunction: (code) => code.includes('for') }]
    },
    {
        id: 46,
        title: "Count Even and Odd",
        difficulty: "easy",
        description: `Count even and odd numbers in an array and print them in the exact format: Even: X, Odd: Y`,
        examples: [{ input: "6\\n1 2 3 4 5 6", output: "Even: 3, Odd: 3" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    // Count even and odd\n    \n    return 0;\n}`,
        testCases: [{ name: "Count Test", input: "6\n1 2 3 4 5 6", expectedOutput: "Even: 3, Odd: 3" }]
    },
    {
        id: 47,
        title: "Linear Search",
        difficulty: "easy",
        description: `Search for an element in array and print its index (0-based). Print -1 if not found.`,
        examples: [{ input: "5\\n10 20 30 40 50\\n30", output: "2" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100], key;\n    // Linear search\n    \n    return 0;\n}`,
        testCases: [{ name: "Search Test", input: "5\n10 20 30 40 50\n30", expectedOutput: "2", checkFunction: (code) => code.includes('for') && code.includes('==') }]
    },
    {
        id: 48,
        title: "Binary Search",
        difficulty: "medium",
        description: `Implement binary search on a sorted array. Print index or -1 if not found.`,
        examples: [{ input: "5\\n10 20 30 40 50\\n30", output: "2" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100], key;\n    // Binary search\n    \n    return 0;\n}`,
        testCases: [{ name: "Binary Search Test", input: "5\n10 20 30 40 50\n30", expectedOutput: "2", checkFunction: (code) => code.includes('mid') && code.includes('while') }]
    },
    {
        id: 49,
        title: "Bubble Sort",
        difficulty: "medium",
        description: `Sort an array using bubble sort algorithm.`,
        examples: [{ input: "5\\n64 34 25 12 22", output: "12 22 25 34 64" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    // Bubble sort\n    \n    return 0;\n}`,
        testCases: [{ name: "Sort Test", input: "5\n64 34 25 12 22", expectedOutput: "12 22 25 34 64", checkFunction: (code) => code.includes('for') && code.includes('temp') }]
    },
    {
        id: 50,
        title: "Selection Sort",
        difficulty: "medium",
        description: `Sort an array using selection sort algorithm.`,
        examples: [{ input: "5\\n64 25 12 22 11", output: "11 12 22 25 64" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    // Selection sort\n    \n    return 0;\n}`,
        testCases: [{ name: "Sort Test", input: "5\n64 25 12 22 11", expectedOutput: "11 12 22 25 64", checkFunction: (code) => code.includes('for') && code.includes('min') }]
    },
    {
        id: 51,
        title: "Insertion Sort",
        difficulty: "medium",
        description: `Sort an array using insertion sort algorithm.`,
        examples: [{ input: "5\\n12 11 13 5 6", output: "5 6 11 12 13" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    // Insertion sort\n    \n    return 0;\n}`,
        testCases: [{ name: "Sort Test", input: "5\n12 11 13 5 6", expectedOutput: "5 6 11 12 13", checkFunction: (code) => code.includes('for') && code.includes('while') }]
    },
    {
        id: 52,
        title: "Second Largest Element",
        difficulty: "medium",
        description: `Find the second largest element in an array.`,
        examples: [{ input: "5\\n10 45 23 67 12", output: "45" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    // Find second largest\n    \n    return 0;\n}`,
        testCases: [{ name: "Second Max Test", input: "5\n10 45 23 67 12", expectedOutput: "45", checkFunction: (code) => code.includes('for') && code.includes('>') }]
    },
    {
        id: 53,
        title: "Remove Duplicates",
        difficulty: "medium",
        description: `Remove duplicate elements from a sorted array and print unique elements.`,
        examples: [{ input: "7\\n1 1 2 2 3 4 4", output: "1 2 3 4" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    // Remove duplicates\n    \n    return 0;\n}`,
        testCases: [{ name: "Duplicate Test", input: "7\n1 1 2 2 3 4 4", expectedOutput: "1 2 3 4", checkFunction: (code) => code.includes('for') && code.includes('!=') }]
    },
    {
        id: 54,
        title: "Merge Two Arrays",
        difficulty: "medium",
        description: `Merge two sorted arrays into one sorted array.`,
        examples: [{ input: "3\\n1 3 5\\n3\\n2 4 6", output: "1 2 3 4 5 6" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n1, n2, arr1[100], arr2[100];\n    // Merge arrays\n    \n    return 0;\n}`,
        testCases: [{ name: "Merge Test", input: "3\n1 3 5\n3\n2 4 6", expectedOutput: "1 2 3 4 5 6", checkFunction: (code) => code.includes('while') || code.includes('for') }]
    },
    {
        id: 55,
        title: "Rotate Array",
        difficulty: "medium",
        description: `Rotate array elements to the left by K positions.`,
        examples: [{ input: "5\\n1 2 3 4 5\\n2", output: "3 4 5 1 2" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100], k;\n    // Rotate array\n    \n    return 0;\n}`,
        testCases: [{ name: "Rotate Test", input: "5\n1 2 3 4 5\n2", expectedOutput: "3 4 5 1 2", checkFunction: (code) => code.includes('for') }]
    },

    // ===== STRING QUESTIONS (56-65) =====
    {
        id: 56,
        title: "String Length",
        difficulty: "easy",
        description: `Find the length of a string without using strlen().`,
        examples: [{ input: "hello", output: "5" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    char str[100];\n    // Find length\n    \n    return 0;\n}`,
        testCases: [{ name: "Length Test", input: "hello", expectedOutput: "5", checkFunction: (code) => code.includes('while') || code.includes('for') }]
    },
    {
        id: 57,
        title: "Reverse a String",
        difficulty: "easy",
        description: `Reverse a string without using strrev().`,
        examples: [{ input: "hello", output: "olleh" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    char str[100];\n    // Reverse string\n    \n    return 0;\n}`,
        testCases: [{ name: "Reverse Test", input: "hello", expectedOutput: "olleh", checkFunction: (code) => code.includes('for') }]
    },
    {
        id: 58,
        title: "Check Palindrome String",
        difficulty: "medium",
        description: `Check if a string is a palindrome.`,
        examples: [{ input: "radar", output: "Palindrome" }, { input: "hello", output: "Not Palindrome" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    char str[100];\n    // Check palindrome\n    \n    return 0;\n}`,
        testCases: [{ name: "Palindrome Test", input: "radar", expectedOutput: "Palindrome", checkFunction: (code) => code.includes('for') }]
    },
    {
        id: 59,
        title: "Count Vowels and Consonants",
        difficulty: "easy",
        description: `Count the number of vowels and consonants in a string and print them in the exact format: Vowels: X, Consonants: Y`,
        examples: [{ input: "hello", output: "Vowels: 2, Consonants: 3" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    char str[100];\n    // Count vowels and consonants\n    \n    return 0;\n}`,
        testCases: [{ name: "Count Test", input: "hello", expectedOutput: "Vowels: 2, Consonants: 3" }]
    },
    {
        id: 60,
        title: "Convert to Uppercase",
        difficulty: "easy",
        description: `Convert a string to uppercase without using strupr().`,
        examples: [{ input: "hello", output: "HELLO" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    char str[100];\n    // Convert to uppercase\n    \n    return 0;\n}`,
        testCases: [{ name: "Uppercase Test", input: "hello", expectedOutput: "HELLO", checkFunction: (code) => code.includes('32') || code.includes("'a'") }]
    },
    {
        id: 61,
        title: "Convert to Lowercase",
        difficulty: "easy",
        description: `Convert a string to lowercase without using strlwr().`,
        examples: [{ input: "HELLO", output: "hello" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    char str[100];\n    // Convert to lowercase\n    \n    return 0;\n}`,
        testCases: [{ name: "Lowercase Test", input: "HELLO", expectedOutput: "hello", checkFunction: (code) => code.includes('32') || code.includes("'A'") }]
    },
    {
        id: 62,
        title: "Compare Two Strings",
        difficulty: "medium",
        description: `Compare two strings without using strcmp(). Print 0 if equal, 1 if first is greater, -1 otherwise.`,
        examples: [{ input: "hello\\nhello", output: "0" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    char str1[100], str2[100];\n    // Compare strings\n    \n    return 0;\n}`,
        testCases: [{ name: "Compare Test", input: "hello\nhello", expectedOutput: "0", checkFunction: (code) => code.includes('while') || code.includes('for') }]
    },
    {
        id: 63,
        title: "Concatenate Two Strings",
        difficulty: "medium",
        description: `Concatenate two strings without using strcat().`,
        examples: [{ input: "Hello\\nWorld", output: "HelloWorld" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    char str1[100], str2[100];\n    // Concatenate strings\n    \n    return 0;\n}`,
        testCases: [{ name: "Concat Test", input: "Hello\nWorld", expectedOutput: "HelloWorld", checkFunction: (code) => code.includes('while') || code.includes('for') }]
    },
    {
        id: 64,
        title: "Copy String",
        difficulty: "easy",
        description: `Copy one string to another without using strcpy().`,
        examples: [{ input: "hello", output: "hello" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    char src[100], dest[100];\n    // Copy string\n    \n    return 0;\n}`,
        testCases: [{ name: "Copy Test", input: "hello", expectedOutput: "hello", checkFunction: (code) => code.includes('while') || code.includes('for') }]
    },
    {
        id: 65,
        title: "Count Words in String",
        difficulty: "medium",
        description: `Count the number of words in a string (words separated by spaces).`,
        examples: [{ input: "Hello World Program", output: "3" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    char str[100];\n    // Count words\n    \n    return 0;\n}`,
        testCases: [{ name: "Word Count Test", input: "Hello World Program", expectedOutput: "3", checkFunction: (code) => code.includes(' ') && code.includes('for') }]
    },

    // ===== FUNCTION & RECURSION QUESTIONS (66-75) =====
    {
        id: 66,
        title: "Factorial using Recursion",
        difficulty: "medium",
        description: `Calculate factorial using a recursive function.`,
        examples: [{ input: "5", output: "120" }],
        starterCode: `#include <stdio.h>\n\nint factorial(int n) {\n    // Implement recursively\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d", factorial(n));\n    return 0;\n}`,
        testCases: [{ name: "Factorial Test", input: "5", expectedOutput: "120", checkFunction: (code) => code.includes('factorial') && code.includes('return') }]
    },
    {
        id: 67,
        title: "Fibonacci using Recursion",
        difficulty: "medium",
        description: `Find nth Fibonacci number using recursion.`,
        examples: [{ input: "7", output: "13" }],
        starterCode: `#include <stdio.h>\n\nint fib(int n) {\n    // Implement recursively\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d", fib(n));\n    return 0;\n}`,
        testCases: [{ name: "Fibonacci Test", input: "7", expectedOutput: "13", checkFunction: (code) => code.includes('fib') && code.includes('return') }]
    },
    {
        id: 68,
        title: "Sum of Digits using Recursion",
        difficulty: "medium",
        description: `Find sum of digits of a number using recursion.`,
        examples: [{ input: "1234", output: "10" }],
        starterCode: `#include <stdio.h>\n\nint sumDigits(int n) {\n    // Implement recursively\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d", sumDigits(n));\n    return 0;\n}`,
        testCases: [{ name: "Sum Test", input: "1234", expectedOutput: "10", checkFunction: (code) => code.includes('sumDigits') && code.includes('%') }]
    },
    {
        id: 69,
        title: "Power using Recursion",
        difficulty: "medium",
        description: `Calculate x^n using recursion.`,
        examples: [{ input: "2 5", output: "32" }],
        starterCode: `#include <stdio.h>\n\nint power(int x, int n) {\n    // Implement recursively\n}\n\nint main() {\n    int x, n;\n    scanf("%d %d", &x, &n);\n    printf("%d", power(x, n));\n    return 0;\n}`,
        testCases: [{ name: "Power Test", input: "2 5", expectedOutput: "32", checkFunction: (code) => code.includes('power') && code.includes('return') }]
    },
    {
        id: 70,
        title: "GCD using Recursion",
        difficulty: "medium",
        description: `Find GCD of two numbers using Euclidean algorithm recursively.`,
        examples: [{ input: "48 18", output: "6" }],
        starterCode: `#include <stdio.h>\n\nint gcd(int a, int b) {\n    // Implement recursively\n}\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    printf("%d", gcd(a, b));\n    return 0;\n}`,
        testCases: [{ name: "GCD Test", input: "48 18", expectedOutput: "6", checkFunction: (code) => code.includes('gcd') && code.includes('%') }]
    },
    {
        id: 71,
        title: "Tower of Hanoi",
        difficulty: "hard",
        description: `Solve Tower of Hanoi for N disks. Print each move in the exact format: Move disk X from A to B`,
        examples: [{ input: "2", output: "Move disk 1 from A to B\\nMove disk 2 from A to C\\nMove disk 1 from B to C" }],
        starterCode: `#include <stdio.h>\n\nvoid hanoi(int n, char from, char to, char aux) {\n    // Implement\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    hanoi(n, 'A', 'C', 'B');\n    return 0;\n}`,
        testCases: [{ name: "Hanoi Test", input: "2", expectedOutput: "Move disk 1 from A to B\nMove disk 2 from A to C\nMove disk 1 from B to C" }]
    },
    {
        id: 72,
        title: "Check Prime using Function",
        difficulty: "medium",
        description: `Write a function to check if a number is prime.`,
        examples: [{ input: "17", output: "Prime" }],
        starterCode: `#include <stdio.h>\n\nint isPrime(int n) {\n    // Return 1 if prime, 0 otherwise\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    if(isPrime(n)) printf("Prime");\n    else printf("Not Prime");\n    return 0;\n}`,
        testCases: [{ name: "Prime Test", input: "17", expectedOutput: "Prime", checkFunction: (code) => code.includes('isPrime') && code.includes('%') }]
    },
    {
        id: 73,
        title: "Swap using Pointers",
        difficulty: "medium",
        description: `Swap two numbers using pointers.`,
        examples: [{ input: "5 10", output: "10 5" }],
        starterCode: `#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    // Swap using pointers\n}\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    swap(&a, &b);\n    printf("%d %d", a, b);\n    return 0;\n}`,
        testCases: [{ name: "Swap Test", input: "5 10", expectedOutput: "10 5", checkFunction: (code) => code.includes('*a') && code.includes('*b') }]
    },
    {
        id: 74,
        title: "Array Sum using Function",
        difficulty: "easy",
        description: `Write a function to calculate sum of array elements.`,
        examples: [{ input: "5\\n1 2 3 4 5", output: "15" }],
        starterCode: `#include <stdio.h>\n\nint arraySum(int arr[], int n) {\n    // Calculate sum\n}\n\nint main() {\n    int n, arr[100];\n    scanf("%d", &n);\n    for(int i=0; i<n; i++) scanf("%d", &arr[i]);\n    printf("%d", arraySum(arr, n));\n    return 0;\n}`,
        testCases: [{ name: "Sum Test", input: "5\n1 2 3 4 5", expectedOutput: "15", checkFunction: (code) => code.includes('arraySum') && code.includes('for') }]
    },
    {
        id: 75,
        title: "Reverse Array using Recursion",
        difficulty: "hard",
        description: `Reverse an array using recursion.`,
        examples: [{ input: "5\\n1 2 3 4 5", output: "5 4 3 2 1" }],
        starterCode: `#include <stdio.h>\n\nvoid reverse(int arr[], int start, int end) {\n    // Reverse recursively\n}\n\nint main() {\n    int n, arr[100];\n    scanf("%d", &n);\n    for(int i=0; i<n; i++) scanf("%d", &arr[i]);\n    reverse(arr, 0, n-1);\n    for(int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}`,
        testCases: [{ name: "Reverse Test", input: "5\n1 2 3 4 5", expectedOutput: "5 4 3 2 1", checkFunction: (code) => code.includes('reverse') }]
    },

    // ===== ADVANCED QUESTIONS (76-80) =====
    {
        id: 76,
        title: "Binary to Decimal",
        difficulty: "hard",
        description: `Convert a binary number to decimal.`,
        examples: [{ input: "1010", output: "10" }],
        starterCode: `#include <stdio.h>\n#include <math.h>\n\nint main() {\n    long long binary;\n    // Convert to decimal\n    \n    return 0;\n}`,
        testCases: [{ name: "Conversion Test", input: "1010", expectedOutput: "10", checkFunction: (code) => code.includes('%') && (code.includes('pow') || code.includes('*')) }]
    },
    {
        id: 77,
        title: "Decimal to Binary",
        difficulty: "hard",
        description: `Convert a decimal number to binary.`,
        examples: [{ input: "10", output: "1010" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int decimal;\n    // Convert to binary\n    \n    return 0;\n}`,
        testCases: [{ name: "Conversion Test", input: "10", expectedOutput: "1010", checkFunction: (code) => code.includes('%') && code.includes('2') }]
    },
    {
        id: 78,
        title: "Matrix Addition",
        difficulty: "medium",
        description: `Add two matrices of same dimensions.`,
        examples: [{ input: "2 2\\n1 2\\n3 4\\n5 6\\n7 8", output: "6 8\\n10 12" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int r, c, a[10][10], b[10][10];\n    // Add matrices\n    \n    return 0;\n}`,
        testCases: [{ name: "Matrix Test", input: "2 2\n1 2\n3 4\n5 6\n7 8", expectedOutput: "6 8\n10 12", checkFunction: (code) => code.includes('[') && code.includes('+') }]
    },
    {
        id: 79,
        title: "Matrix Transpose",
        difficulty: "medium",
        description: `Find the transpose of a matrix.`,
        examples: [{ input: "2 3\\n1 2 3\\n4 5 6", output: "1 4\\n2 5\\n3 6" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int r, c, mat[10][10];\n    // Find transpose\n    \n    return 0;\n}`,
        testCases: [{ name: "Transpose Test", input: "2 3\n1 2 3\n4 5 6", expectedOutput: "1 4\n2 5\n3 6", checkFunction: (code) => code.includes('[') && code.includes('for') }]
    },
    {
        id: 80,
        title: "Matrix Multiplication",
        difficulty: "hard",
        description: `Multiply two matrices.`,
        examples: [{ input: "2 2\\n1 2\\n3 4\\n2 2\\n5 6\\n7 8", output: "19 22\\n43 50" }],
        starterCode: `#include <stdio.h>\n\nint main() {\n    int r1, c1, r2, c2;\n    int a[10][10], b[10][10], c[10][10];\n    // Multiply matrices\n    \n    return 0;\n}`,
        testCases: [{ name: "Multiply Test", input: "2 2\n1 2\n3 4\n2 2\n5 6\n7 8", expectedOutput: "19 22\n43 50", checkFunction: (code) => code.includes('[') && code.includes('*') && code.includes('for') }]
    },
    // ===== DATA STRUCTURES =====
    {
        id: 81,
        title: "Create and Print a Linked List",
        difficulty: "easy",
        description: `Build a singly linked list by appending n values one after another, then print all values space-separated in list order.`,
        examples: [{ input: "5\\n10 20 30 40 50", output: "10 20 30 40 50" }],
        starterCode: `#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    struct Node *head = NULL, *tail = NULL;\n    // Read n values and append each as a new node\n    \n    // Traverse and print all values, space-separated\n    \n    return 0;\n}`,
        testCases: [{ name: "Build List Test", input: "5\n10 20 30 40 50", expectedOutput: "10 20 30 40 50" }]
    },
    {
        id: 82,
        title: "Insert at the Beginning",
        difficulty: "easy",
        description: `Build a linked list from n values (appended in order), then insert one more value at the front of the list. Print all values space-separated.`,
        examples: [{ input: "4\\n1 2 3 4\\n99", output: "99 1 2 3 4" }],
        starterCode: `#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nstruct Node* insertAtBeginning(struct Node* head, int value) {\n    // Create a node, point it at head, return it as the new head\n    \n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    struct Node *head = NULL, *tail = NULL;\n    // Build the list from n values\n    \n    int newVal;\n    scanf("%d", &newVal);\n    head = insertAtBeginning(head, newVal);\n    // Print all values, space-separated\n    \n    return 0;\n}`,
        testCases: [{ name: "Insert Front Test", input: "4\n1 2 3 4\n99", expectedOutput: "99 1 2 3 4" }]
    },
    {
        id: 83,
        title: "Reverse a Linked List",
        difficulty: "medium",
        description: `Build a linked list from n values, reverse it in place (iteratively, using pointers — not by re-reading input backwards), then print all values space-separated.`,
        examples: [{ input: "5\\n1 2 3 4 5", output: "5 4 3 2 1" }],
        starterCode: `#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nstruct Node* reverse(struct Node* head) {\n    struct Node *prev = NULL, *cur = head, *next;\n    // Walk the list, reversing each next pointer\n    \n    return prev;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    struct Node *head = NULL, *tail = NULL;\n    // Build the list from n values\n    \n    head = reverse(head);\n    // Print all values, space-separated\n    \n    return 0;\n}`,
        testCases: [{ name: "Reverse Test", input: "5\n1 2 3 4 5", expectedOutput: "5 4 3 2 1" }]
    },
    {
        id: 84,
        title: "Stack: Push and Pop",
        difficulty: "easy",
        description: `Implement a stack with push and pop using an array. Push n values in order, then pop k values and print each popped value space-separated, in the order they come off the stack.`,
        examples: [{ input: "5\\n10 20 30 40 50\\n3", output: "50 40 30" }],
        starterCode: `#include <stdio.h>\n#define MAX 100\n\nint stack[MAX];\nint top = -1;\n\nvoid push(int v) {\n    // Push v onto the stack\n    \n}\n\nint pop() {\n    // Pop and return the top value\n    \n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    for (int i = 0; i < n; i++) {\n        int v; scanf("%d", &v);\n        push(v);\n    }\n    int k;\n    scanf("%d", &k);\n    // Pop k times, printing each value space-separated\n    \n    return 0;\n}`,
        testCases: [{ name: "Push Pop Test", input: "5\n10 20 30 40 50\n3", expectedOutput: "50 40 30" }]
    },
    {
        id: 85,
        title: "Balanced Parentheses",
        difficulty: "medium",
        description: `Using a stack, check whether a string of brackets ((), [], {}) is balanced. Print exactly "Balanced" or "Not Balanced".`,
        examples: [{ input: "{[()]}", output: "Balanced" }],
        starterCode: `#include <stdio.h>\n#include <string.h>\n#define MAX 200\n\nint main() {\n    char str[MAX];\n    scanf("%s", str);\n    char stack[MAX];\n    int top = -1;\n    int balanced = 1;\n    // Push opening brackets; on a closing bracket, check it matches the top\n    \n    printf(balanced ? "Balanced" : "Not Balanced");\n    printf("\\n");\n    return 0;\n}`,
        testCases: [{ name: "Balanced Test", input: "{[()]}", expectedOutput: "Balanced" }]
    },
    {
        id: 86,
        title: "Reverse a String Using a Stack",
        difficulty: "medium",
        description: `Push every character of a string onto a stack, then pop them all off to print the string reversed.`,
        examples: [{ input: "programming", output: "gnimmargorp" }],
        starterCode: `#include <stdio.h>\n#include <string.h>\n#define MAX 200\n\nint main() {\n    char str[MAX];\n    scanf("%s", str);\n    int len = strlen(str);\n    char stack[MAX];\n    int top = -1;\n    // Push every character, then pop them all to print in reverse\n    \n    printf("\\n");\n    return 0;\n}`,
        testCases: [{ name: "Reverse String Test", input: "programming", expectedOutput: "gnimmargorp" }]
    },
    {
        id: 87,
        title: "Queue: Enqueue and Dequeue",
        difficulty: "easy",
        description: `Implement a queue with enqueue and dequeue using an array. Enqueue n values in order, then dequeue k values and print each dequeued value space-separated, in the order they come off the queue.`,
        examples: [{ input: "5\\n10 20 30 40 50\\n3", output: "10 20 30" }],
        starterCode: `#include <stdio.h>\n#define MAX 100\n\nint queue[MAX];\nint front = -1, rear = -1;\n\nvoid enqueue(int v) {\n    // Add v to the rear\n    \n}\n\nint dequeue() {\n    // Remove and return the value at the front\n    \n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    for (int i = 0; i < n; i++) {\n        int v; scanf("%d", &v);\n        enqueue(v);\n    }\n    int k;\n    scanf("%d", &k);\n    // Dequeue k times, printing each value space-separated\n    \n    return 0;\n}`,
        testCases: [{ name: "Enqueue Dequeue Test", input: "5\n10 20 30 40 50\n3", expectedOutput: "10 20 30" }]
    },
    {
        id: 88,
        title: "Circular Queue",
        difficulty: "medium",
        description: `Implement a circular queue of fixed size 5 (indices wrap using the modulo operator so freed slots get reused). Run this exact sequence: enqueue 1, 2, 3, 4, 5; dequeue twice; enqueue 6, 7. Then print the queue's remaining contents from front to rear, space-separated. This program takes no input.`,
        examples: [{ input: "None", output: "3 4 5 6 7" }],
        starterCode: `#include <stdio.h>\n#define SIZE 5\n\nint cqueue[SIZE];\nint front = -1, rear = -1;\n\nvoid enqueue(int v) {\n    // Add v at rear, wrapping with % SIZE; handle the full case\n    \n}\n\nint dequeue() {\n    // Remove from front, wrapping with % SIZE; handle the empty case\n    \n}\n\nint main() {\n    enqueue(1); enqueue(2); enqueue(3); enqueue(4); enqueue(5);\n    dequeue(); dequeue();\n    enqueue(6); enqueue(7);\n    // Print remaining contents from front to rear, space-separated\n    \n    return 0;\n}`,
        testCases: [{ name: "Wraparound Test", input: "None", expectedOutput: "3 4 5 6 7" }]
    },
    {
        id: 89,
        title: "Generate Binary Numbers Using a Queue",
        difficulty: "hard",
        description: `Using a queue, generate the binary representations of the numbers 1 to n in order. Start by enqueueing "1". Then, n times: dequeue a string s, print it, and enqueue s+"0" followed by s+"1". Print all n results space-separated.`,
        examples: [{ input: "5", output: "1 10 11 100 101" }],
        starterCode: `#include <stdio.h>\n#include <string.h>\n#define MAX 1000\n\nchar queue[MAX][20];\nint front = 0, rear = 0;\n\nvoid enqueue(char *s) { strcpy(queue[rear++], s); }\nvoid dequeue(char *out) { strcpy(out, queue[front++]); }\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    enqueue("1");\n    // Dequeue, print, and enqueue two children, n times\n    \n    return 0;\n}`,
        testCases: [{ name: "Binary Numbers Test", input: "5", expectedOutput: "1 10 11 100 101" }]
    },
    {
        id: 90,
        title: "Build a BST and Print Inorder",
        difficulty: "medium",
        description: `Insert n values into a binary search tree one at a time, then print an inorder traversal (left, node, right) space-separated. An inorder traversal of a BST always comes out sorted.`,
        examples: [{ input: "6\\n50 30 70 20 40 60", output: "20 30 40 50 60 70" }],
        starterCode: `#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node { int data; struct Node *left, *right; };\n\nstruct Node* insert(struct Node* root, int v) {\n    // If root is NULL, create and return a new node\n    // Otherwise recurse left or right based on v vs root->data\n    \n}\n\nvoid inorder(struct Node* root) {\n    // Recursively print left, then this node, then right\n    \n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    struct Node *root = NULL;\n    for (int i = 0; i < n; i++) {\n        int v; scanf("%d", &v);\n        root = insert(root, v);\n    }\n    inorder(root);\n    printf("\\n");\n    return 0;\n}`,
        testCases: [{ name: "Inorder Test", input: "6\n50 30 70 20 40 60", expectedOutput: "20 30 40 50 60 70" }]
    },
    {
        id: 91,
        title: "Height of a Binary Tree",
        difficulty: "medium",
        description: `Insert n values into a BST, then print its height — the number of edges on the longest path from root to a leaf (a tree with a single node has height 0, an empty tree has height -1).`,
        examples: [{ input: "7\\n50 30 70 20 40 60 80", output: "2" }],
        starterCode: `#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node { int data; struct Node *left, *right; };\n\nstruct Node* insert(struct Node* root, int v) {\n    // Same BST insert as before\n    \n}\n\nint height(struct Node* root) {\n    // Empty tree: -1. Otherwise 1 + max(height(left), height(right))\n    \n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    struct Node *root = NULL;\n    for (int i = 0; i < n; i++) {\n        int v; scanf("%d", &v);\n        root = insert(root, v);\n    }\n    printf("%d\\n", height(root));\n    return 0;\n}`,
        testCases: [{ name: "Height Test", input: "7\n50 30 70 20 40 60 80", expectedOutput: "2" }]
    },
    {
        id: 92,
        title: "Count Leaf Nodes in a Binary Tree",
        difficulty: "medium",
        description: `Insert n values into a BST, then print the number of leaf nodes (nodes with no children).`,
        examples: [{ input: "7\\n50 30 70 20 40 60 80", output: "4" }],
        starterCode: `#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node { int data; struct Node *left, *right; };\n\nstruct Node* insert(struct Node* root, int v) {\n    // Same BST insert as before\n    \n}\n\nint countLeaves(struct Node* root) {\n    // A node with no left and no right child is a leaf\n    \n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    struct Node *root = NULL;\n    for (int i = 0; i < n; i++) {\n        int v; scanf("%d", &v);\n        root = insert(root, v);\n    }\n    printf("%d\\n", countLeaves(root));\n    return 0;\n}`,
        testCases: [{ name: "Leaf Count Test", input: "7\n50 30 70 20 40 60 80", expectedOutput: "4" }]
    },
    {
        id: 93,
        title: "Simple Hash Function",
        difficulty: "easy",
        description: `Implement the hash function hash(key) = key % 7. Read n keys and print hash(key) for each, space-separated, in input order.`,
        examples: [{ input: "5\\n10 15 23 7 21", output: "3 1 2 0 0" }],
        starterCode: `#include <stdio.h>\n#define TABLE_SIZE 7\n\nint hashFn(int key) {\n    return key % TABLE_SIZE;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Read n keys, print hashFn(key) for each, space-separated\n    \n    return 0;\n}`,
        testCases: [{ name: "Hash Function Test", input: "5\n10 15 23 7 21", expectedOutput: "3 1 2 0 0" }]
    },
    {
        id: 94,
        title: "Count Frequency Using Hashing",
        difficulty: "medium",
        description: `Using a hash table (a count array indexed by value % 101), count how many times each value appears in an array of n integers. Print each distinct value in the order it first appeared, formatted as value:count, space-separated.`,
        examples: [{ input: "6\\n4 2 4 5 2 4", output: "4:3 2:2 5:1" }],
        starterCode: `#include <stdio.h>\n#define TABLE_SIZE 101\n\nint count[TABLE_SIZE];\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[1000];\n    // Read values, track counts by hashing (value % TABLE_SIZE),\n    // and remember first-occurrence order\n    \n    // Print "value:count" for each distinct value, in first-seen order\n    \n    return 0;\n}`,
        testCases: [{ name: "Frequency Test", input: "6\n4 2 4 5 2 4", expectedOutput: "4:3 2:2 5:1" }]
    },
    {
        id: 95,
        title: "Detect Duplicates Using Hashing",
        difficulty: "easy",
        description: `Using a hash table (a boolean "seen" array indexed by value % 1009) check if an array of n integers contains any duplicate. Print exactly "Duplicate Found" or "No Duplicates".`,
        examples: [{ input: "5\\n1 2 3 4 2", output: "Duplicate Found" }],
        starterCode: `#include <stdio.h>\n#define TABLE_SIZE 1009\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int seen[TABLE_SIZE] = {0};\n    int duplicate = 0;\n    // For each value, check/set seen[value % TABLE_SIZE]\n    \n    printf(duplicate ? "Duplicate Found" : "No Duplicates");\n    printf("\\n");\n    return 0;\n}`,
        testCases: [{ name: "Duplicate Test", input: "5\n1 2 3 4 2", expectedOutput: "Duplicate Found" }]
    },
    {
        id: 96,
        title: "Build a Graph and Print Its Adjacency Matrix",
        difficulty: "medium",
        description: `Read the number of vertices V and edges E, then E pairs "a b" describing an undirected edge between vertex a and vertex b. Build the adjacency matrix and print it as V rows of V space-separated 0/1 values.`,
        examples: [{ input: "4 4\\n0 1\\n0 2\\n1 3\\n2 3", output: "0 1 1 0\\n1 0 0 1\\n1 0 0 1\\n0 1 1 0" }],
        starterCode: `#include <stdio.h>\n#define MAX 20\n\nint adj[MAX][MAX];\n\nint main() {\n    int v, e;\n    scanf("%d %d", &v, &e);\n    // Read e edges, setting adj[a][b] and adj[b][a] to 1\n    \n    // Print the v x v matrix, one row per line, space-separated\n    \n    return 0;\n}`,
        testCases: [{ name: "Adjacency Matrix Test", input: "4 4\n0 1\n0 2\n1 3\n2 3", expectedOutput: "0 1 1 0\n1 0 0 1\n1 0 0 1\n0 1 1 0" }]
    },
    {
        id: 97,
        title: "BFS Traversal of a Graph",
        difficulty: "medium",
        description: `Read V, E, E edges, and a start vertex. Using a queue, print the breadth-first traversal order starting from that vertex, space-separated. When visiting a vertex's neighbors, check them in increasing order of vertex number.`,
        examples: [{ input: "4 4\\n0 1\\n0 2\\n1 3\\n2 3\\n0", output: "0 1 2 3" }],
        starterCode: `#include <stdio.h>\n#define MAX 20\n\nint adj[MAX][MAX];\nint visited[MAX];\n\nvoid bfs(int start, int v) {\n    int queue[MAX], front = 0, rear = 0;\n    // Standard queue-based BFS: mark visited, enqueue,\n    // then repeatedly dequeue, print, and enqueue unvisited neighbors\n    \n}\n\nint main() {\n    int v, e;\n    scanf("%d %d", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf("%d %d", &a, &b);\n        adj[a][b] = 1;\n        adj[b][a] = 1;\n    }\n    int start;\n    scanf("%d", &start);\n    bfs(start, v);\n    printf("\\n");\n    return 0;\n}`,
        testCases: [{ name: "BFS Test", input: "4 4\n0 1\n0 2\n1 3\n2 3\n0", expectedOutput: "0 1 2 3" }]
    },
    {
        id: 98,
        title: "DFS Traversal of a Graph",
        difficulty: "medium",
        description: `Read V, E, E edges, and a start vertex. Using recursion (the call stack), print the depth-first traversal order starting from that vertex, space-separated. When visiting a vertex's neighbors, check them in increasing order of vertex number.`,
        examples: [{ input: "4 4\\n0 1\\n0 2\\n1 3\\n2 3\\n0", output: "0 1 3 2" }],
        starterCode: `#include <stdio.h>\n#define MAX 20\n\nint adj[MAX][MAX];\nint visited[MAX];\n\nvoid dfs(int cur, int v) {\n    // Mark visited, print cur, then recurse into unvisited neighbors\n    \n}\n\nint main() {\n    int v, e;\n    scanf("%d %d", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf("%d %d", &a, &b);\n        adj[a][b] = 1;\n        adj[b][a] = 1;\n    }\n    int start;\n    scanf("%d", &start);\n    dfs(start, v);\n    printf("\\n");\n    return 0;\n}`,
        testCases: [{ name: "DFS Test", input: "4 4\n0 1\n0 2\n1 3\n2 3\n0", expectedOutput: "0 1 3 2" }]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTIONS;
}
