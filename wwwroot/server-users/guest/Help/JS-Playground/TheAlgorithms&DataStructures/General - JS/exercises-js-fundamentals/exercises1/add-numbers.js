function addNumbers(numbers) {
    let runningTotal = 0;
  
    for(let number of numbers) {
      runningTotal = number + runningTotal;
    }
  
    return runningTotal;
  }
  
  let pileOfNumbers = [1, 4, 10, 9, -3, 20, 18];
  let sum = addNumbers(pileOfNumbers);
  
  console.log(sum);