function host() {
  console.log("I am Host ");

  return function () {
    console.log("I am child");
  };
}

var a = host();

a();
