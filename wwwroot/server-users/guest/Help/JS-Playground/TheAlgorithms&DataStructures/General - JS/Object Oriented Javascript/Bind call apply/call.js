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

printMe.call(obj1);
printMe.call(obj2);
