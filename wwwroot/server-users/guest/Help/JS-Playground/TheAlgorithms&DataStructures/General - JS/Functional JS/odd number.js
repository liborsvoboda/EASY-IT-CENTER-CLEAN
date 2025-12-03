var arr = [4, 5, 9, 4, 7, 8, 9, 1, 2, 3, 1, 4, 5];

// Treditional way

var newArr = [];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);

//Functional Javascript's easy method

var newarr = arr.filter(function (value) {
  return value % 2 == 1;
});

console.log(newarr);

// making Filter function

function myFilter(arr, callback) {
  var newArr = [];

  for (var j = 0; j < arr.length; j++) {
    if (callback(arr[j])) {
      newArr.push(arr[j]);
    }
  }
  return newArr;
}

var myarr = myFilter(arr, function (element) {
  return element % 2 == 1;
});

console.log(myarr);
