  
function Animal(name) {
  this.name = name;
}

Animal.prototype.printname = function () {
  console.log(this.name);
};

function myNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));
  return obj;
  //console.log(arguments);
}

var cat = myNew(Animal, "Cat");
cat.printname();
var person = function (name, age) {
  this.name = name;
  this.age = age;
};
var p1 = myNew(person, "Sohan", 20);
// var cat = new Animal("cat");
// var dog = new Animal("dog");

// cat.printname();
