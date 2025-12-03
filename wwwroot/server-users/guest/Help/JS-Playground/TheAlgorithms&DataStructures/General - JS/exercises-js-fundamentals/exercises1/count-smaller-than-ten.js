function countSmallerThanTen(numbers) {
    let countSoFar = 0;
  
    for(let number of numbers) {
      if (number < 10) {
        countSoFar = countSoFar + 1;
      }
    }
  
    return countSoFar;
  }
  
  let pile = [1, 15, -10, 3, 15, 88];
  let countBelow10 = countSmallerThanTen(pile);
  
  console.log(`There are #{countBelow10} numbers smaller than 10 in the list.`);