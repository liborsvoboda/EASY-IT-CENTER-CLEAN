function findLargestOddNumber(numbers) {
    let maxSoFar = undefined;
  
    for(let number of numbers) {
      if (number % 2 === 1) {
        if (maxSoFar === undefined) {
          maxSoFar = number;
        } else if (number > maxSoFar) {
          maxSoFar = number;
        }
      }
    }
  
    return maxSoFar;
  }
  
  let pileOfNumbers = [10, 9, -2, 18, 101, 17];
  let result = findLargestOddNumber(pileOfNumbers);
  
  console.log(result); // => 101