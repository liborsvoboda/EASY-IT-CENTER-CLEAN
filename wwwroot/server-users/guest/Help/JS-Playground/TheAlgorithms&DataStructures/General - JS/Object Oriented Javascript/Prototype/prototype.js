function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Person.prototype.hello = function () {
  //   console.log("Hello, " + this.name);
  // };
  
  //Person.prototype.site = "github.com";
  
  Person.prototype = {
    hello: function () {
      console.log("Hello, " + this.name);
    },
    print: function () {
      console.log(this.name, this.site);
    },
    site: "github.com",
  };
  
  var p1 = new Person("Sohan", 20);
  var p2 = new Person("Darus", 22);
  
  console.log(p1);
  console.log(p2);