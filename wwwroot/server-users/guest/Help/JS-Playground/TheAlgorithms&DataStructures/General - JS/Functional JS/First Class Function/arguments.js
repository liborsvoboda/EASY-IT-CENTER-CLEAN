//we can pass function as Argument

function sayName(name) {
    return "Hello, " + name;
  }
  
  var hello = sayName;
  
  function wow(name, fun) {
    return fun(name);
  }
  
  var result = wow("Sohan", sayName);
  console.log(result);