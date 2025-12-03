var arr = [1, 2, 3, 4, 5, 6, 7];

// arr.forEach(function (element, index) {
//   console.log("Element is " + element + "Index is " + index);
// });

//making foreach;

function loop(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

loop(arr, function (element) {
  console.log("Element is " + element);
});