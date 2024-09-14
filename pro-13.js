function findNearestToZero(arr) {
    let minSum = Infinity;
    let closestPair;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let sum = arr[i] + arr[j];
  
        if (Math.abs(sum) < Math.abs(minSum)) {
          minSum = sum;
          closestPair = [arr[i], arr[j]];
        }
      }
    }
  
    return closestPair;
}
  
const input = [1, 5, 3, 2, 4];
const result = findNearestToZero(input);
  
console.log(`The pair of elements whose sum is nearest to zero is ${result[0]} and ${result[1]}`);
console.log(`Their sum is ${result[0] + result[1]}`);
