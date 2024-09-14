// Define two 40-digit/10-digit integers
let num1 = "1234567890123456789012345678901";
let num2 = "9876543210987654321098765432109";

// Convert the strings to BigInts for accurate comparison
let bigInt1 = BigInt(num1);
let bigInt2 = BigInt(num2);

// Demonstrate relational operations
console.log("Equality:");
console.log(bigInt1 === bigInt2); // false
console.log(bigInt1 == bigInt2); // false (note: == checks for value equality, not type equality)

console.log("\nInequality:");
console.log(bigInt1 !== bigInt2); // true
console.log(bigInt1 != bigInt2); // true

console.log("\nGreater than:");
console.log(bigInt1 > bigInt2); // false
console.log(bigInt2 > bigInt1); // true

console.log("\nLess than:");
console.log(bigInt1 < bigInt2); // true
console.log(bigInt2 < bigInt1); // false

console.log("\nGreater than or equal to:");
console.log(bigInt1 >= bigInt2); // false
console.log(bigInt2 >= bigInt1); // true

console.log("\nLess than or equal to:");
console.log(bigInt1 <= bigInt2); // true
console.log(bigInt2 <= bigInt1); // false