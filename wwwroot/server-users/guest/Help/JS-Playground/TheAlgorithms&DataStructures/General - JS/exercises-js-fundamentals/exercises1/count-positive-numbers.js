function countPositive(list) {
    let countSoFar = 0;
  
    for(let number of list) {
      if (number > 0) {
        countSoFar = countSoFar + 1;
      }
    }
  
    return countSoFar;
  }
  
  let pile = [1, 15, -10, 3, 15, 88];
  let positiveCount = countPositive(pile);   // will give 5
  
  console.log(`There are #{positiveCount} positive numbers in the list.`);