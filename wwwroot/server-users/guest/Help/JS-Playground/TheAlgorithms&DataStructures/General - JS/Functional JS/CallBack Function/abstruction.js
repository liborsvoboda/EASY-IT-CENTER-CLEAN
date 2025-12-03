function hello(name, print) {
    print(name);
  }
  
  hello("Sohan", function (name) {
    console.log("hello " + name);
  });
  
  hello("Sohan", function (name) {
    console.log("Hi, How are you " + name + "?");
  });
  
  hello("Sohan", function (name) {
    console.log("Length of " + name + " is " + name.length);
  });