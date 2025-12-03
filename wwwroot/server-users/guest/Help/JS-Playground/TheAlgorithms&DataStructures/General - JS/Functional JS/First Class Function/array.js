//A function can be stored in an Array

function sayName(name) {
    return "Hello, " + name;
  }
  
  var arr = [1, 2, 3, 4];
  
  arr.push(sayName);
  
  console.log(arr);