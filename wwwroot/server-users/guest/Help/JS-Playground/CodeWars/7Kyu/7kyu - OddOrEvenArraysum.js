function oddOrEven(array) {
   var sum = 0;
   for(var i = 0; i < array.length; i ++)
       sum += array[i];
       
       return sum % 2 == 0 ? "even" : "odd";
}
