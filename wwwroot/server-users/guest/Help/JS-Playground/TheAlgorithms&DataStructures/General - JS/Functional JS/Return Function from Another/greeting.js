function greeting(msg) {
  return function (name) {
    console.log(msg + " " + name);
  };
}

// another way

function greeting(msg) {
  function ret(name) {
    console.log(msg + " " + name);
  }
  return ret;
}

var good = greeting("Good morning");
var hello = greeting("Hello");

good("Sohan");
hello("Sohan");
