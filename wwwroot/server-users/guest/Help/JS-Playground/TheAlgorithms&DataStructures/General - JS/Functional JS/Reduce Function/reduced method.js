var arr = [5, 4, 7, 8, 1, 5, 6, 9, 8, 7];

var result = arr.reduce(function (a, b) {
  return a + b;
});

console.log(result);