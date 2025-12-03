//var vs const vs let

// const a = 10;

// const sum = (a, b) => a + b;

// const = constant
const arr = [];
arr.push(10);
arr.push(20);
console.log(arr);

//let

var a = 10;
if (true) {
  var a = 20;
  console.log(a);
}
console.log(a);

function demo() {
  {
    let x = 10;
    {
      const x = 15;
      console.log(x);
    }
    x = 30;
    console.log(x);
  }
}

demo();
