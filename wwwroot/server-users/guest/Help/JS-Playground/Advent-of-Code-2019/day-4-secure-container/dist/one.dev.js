"use strict";

var passwordOptions = function passwordOptions(input) {
  var range = input.split('-').map(function (x) {
    return parseInt(x);
  });
  var validOptions = {
    "total": 0,
    "validPasswords": []
  }; // 168630 <= x <= 718098

  siftThroughOptions: for (var i = range[0]; i <= range[1]; i++) {
    var digits = i.toString().split("").map(function (x) {
      return parseInt(x);
    }); // --> never decrease

    for (var j = 0; j < digits.length - 1; j++) {
      if (digits[j] > digits[j + 1]) {
        continue siftThroughOptions;
      }
    } //two adjacent digits are the same


    for (var k = 0; k < digits.length - 1; k++) {
      if (digits[k] === digits[k + 1]) {
        validOptions["total"] += 1;
        validOptions["validPasswords"].push(digits);
        continue siftThroughOptions;
      }
    }
  }

  return validOptions;
};

module.exports = passwordOptions;