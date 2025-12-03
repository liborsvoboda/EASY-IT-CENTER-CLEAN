//A function can be stored in a variable

function sayName(name) {
    return "Hello, " + name;
  }
  
  var hello = sayName;
  
  var onotherHello = hello;
  
  var fun = sayName("GG");
  
  console.log(fun);
  
  console.log(hello);
  
  console.log(onotherHello("Sohan"));