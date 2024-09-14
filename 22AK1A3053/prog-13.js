const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (let i = 0; i < input.length; i++) {
    [input[i][0], input[i][input[i].length - 1]] = [input[i][input[i].length - 1], input[i][0]];
  }
  
  console.log("Output:");
  for (let i = 0; i < input.length; i++) {
    console.log(input[i].join(" "));
  }