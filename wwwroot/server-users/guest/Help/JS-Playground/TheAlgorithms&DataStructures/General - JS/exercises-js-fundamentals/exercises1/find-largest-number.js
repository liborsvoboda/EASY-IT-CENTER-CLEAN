function findLargestNumber(pile) {
    let maxSoFar = pile[0];
  
    for(let number of pile) {
      if (number > maxSoFar) {
        maxSoFar = number;
      }
    }
  
    return maxSoFar;
  }
  
  let pileOfNumbers = [1, 4, 10, 9, -3, 20, 18];
  let largestNumber = findLargestNumber(pileOfNumbers);
  
  console.log(largest_number);