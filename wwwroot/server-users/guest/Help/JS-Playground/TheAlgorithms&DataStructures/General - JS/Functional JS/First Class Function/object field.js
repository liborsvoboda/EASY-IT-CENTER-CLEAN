//A function can be stored in an Object Field

function sayName(name) {
    return "Hello, " + name;
  }
  
  var hello = sayName;
  
  var person = {
    name: "Sohan",
    sayName: hello,
    print: function () {
      console.log("Hi");
    },
  };
  
  console.log(person);