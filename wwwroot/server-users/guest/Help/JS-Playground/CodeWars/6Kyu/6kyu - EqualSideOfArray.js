function findEvenIndex(arr) {
    let sum = 0;
    let leftSum = 0;
  
    //Sum all elements of array
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    //Remove left element-value from sum -> if left == sum -> return its index -> else: continue
    for (var i = 0; i < arr.length; i++) {
      sum -= arr[i];
  
      if (leftSum === sum) {
        return i;
      }
  
      leftSum += arr[i];
    }
  
    //return -1 if no index found
    return -1;
  }