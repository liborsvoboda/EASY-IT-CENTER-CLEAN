var arr = [5, 4, 7, 8, 1, 5, 6, 9, 8, 7];

function myMap(arr, callback) {
  var newarr = [];

  for (var i = 0; i < arr.length; i++) {
    newarr.push(callback(arr[i]));

    //same as
    /*var data = callback(arr[i]);
    newarr.push(data); */
  }
  return newarr;
}

myarr = myMap(arr, function (value) {
  return value + 5;
});

console.log(myarr);
