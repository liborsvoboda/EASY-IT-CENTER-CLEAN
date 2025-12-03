"use strict";

var passwordOptions = require('./one');

var highMaintenancePasswordOptions = function highMaintenancePasswordOptions(input) {
  var validPasswords = passwordOptions(input).validPasswords;
  var digitCounts = validPasswords.map(function (x) {
    var counts = {};

    for (var i = 0; i < x.length; i++) {
      var digit = x[i];
      counts[digit] = counts[digit] ? counts[digit] + 1 : 1;
    }

    return counts;
  }).reduce(function (sums, currentSum) {
    var twinCount = Object.keys(currentSum).filter(function (key) {
      return currentSum[key] === 2;
    });

    if (twinCount.length >= 1) {
      return sums + 1;
    }

    return sums;
  }, 0);
  return digitCounts;
};

module.exports = highMaintenancePasswordOptions;