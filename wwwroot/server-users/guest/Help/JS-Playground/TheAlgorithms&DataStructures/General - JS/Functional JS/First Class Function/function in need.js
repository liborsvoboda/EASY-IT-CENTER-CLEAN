// we can create function as needed

var sum =
  10 +
  (function () {
    return 20;
  })(); //self invoking function

console.log(sum);