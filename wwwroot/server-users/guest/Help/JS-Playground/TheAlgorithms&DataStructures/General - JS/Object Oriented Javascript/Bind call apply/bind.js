  
function printMe() {
  console.log("Hello, " + this.name);
}

var obj1 = {
  name: "sohan",
  age: 20,
};

var obj2 = {
  name: "Darus",
  email: "darus@gmail.com",
};

var binded1 = printMe.bind(obj1);
var binded2 = printMe.bind(obj2);
binded1();
binded2();
