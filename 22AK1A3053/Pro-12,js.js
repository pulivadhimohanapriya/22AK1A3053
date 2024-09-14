function countCharacterOccurrences(input) {
    const charCount = {};
  
    for (let char of input) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    for (let char in charCount) {
      console.log(`${char} is repeated ${charCount[char]} times.`);
    }
  }
  
  const input = "MOHANA PRIYA";
  countCharacterOccurrences(input);