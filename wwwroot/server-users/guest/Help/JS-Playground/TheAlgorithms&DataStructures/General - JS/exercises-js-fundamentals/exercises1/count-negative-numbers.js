function countNegative(list) {
    let countSoFar = 0;
  
    for(let number of list) {
      if (number > 0) {
        countSoFar = countSoFar + 1;
      }
    }
  
    return countSoFar;
  }
  
  let pile = [1, 15, -10, 3, 15, 88];
  let negativeCount = countNegative(pile);   // will give 1
  
  console.log(`There are #{negativeCount} negative numbers in the list.`);