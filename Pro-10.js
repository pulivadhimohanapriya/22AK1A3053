// Node.js is required for file operations
const fs = require('fs');

// Create a file with at least 10 lines of characters
let content = '';
for (let i = 0; i < 10; i++) {
    content += `Line ${i+1}: This is a sample line.\n`;
}
fs.writeFileSync('example.txt', content);

// Read 'n' characters from the start of the file
let n = 20;  // number of characters to read
let chars = fs.readFileSync('example.txt', 'utf8').slice(0, n);

// Display the characters in reverse
console.log("Characters in reverse:", chars.split('').reverse().join(''));
