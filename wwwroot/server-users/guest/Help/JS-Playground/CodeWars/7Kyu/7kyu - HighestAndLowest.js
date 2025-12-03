function highAndLow(numbers){
    var numArray = numbers.split(' ');
    var max = numArray[0];
    var min = numArray[0];
    for(i = 0; i < numArray.length; i++){
      if(parseInt(numArray[i]) > max){
        max = numArray[i];
      }
      if(parseInt(numArray[i]) < min){
        min = numArray[i]
      }
    }
    var result = max + ' ' + min;
    return result;
  }