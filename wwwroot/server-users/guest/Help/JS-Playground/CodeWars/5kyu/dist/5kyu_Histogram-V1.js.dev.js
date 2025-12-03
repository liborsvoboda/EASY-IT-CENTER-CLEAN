"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*

Histogram - V1

Description:

Background
A 6-sided dice is rolled a number of times and the results are plotted as a 
character-based histogram.

Example:

    10
    #
    #
7   #
#   #
#   #     5
#   #     #
# 3 #     #
# # #     #
# # # 1   #
# # # #   #
-----------
1 2 3 4 5 6
Task

You will be passed all the dice roll results, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

Notes

There are no trailing spaces on the lines
All lines (including the last) end with a newline \n
A count is displayed above each bar (unless the count is 0)
The number of rolls may vary but is never more than 100

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var histogram = function histogram(results) {
  var highest = Math.max.apply(Math, _toConsumableArray(results));
  var str = "";

  var _loop = function _loop(i) {
    str += Array(6).fill(0).map(function (a, idx) {
      return results[idx] === i && results[idx] !== 0 ? results[idx] : results[idx] < i || results[idx] === 0 ? " " : "#";
    }).join(" ").replace(/\s*$/, "") + "\n";
  };

  for (var i = highest; i >= 0; i--) {
    _loop(i);
  }

  return highest ? str += "-----------\n1 2 3 4 5 6\n" : "-----------\n1 2 3 4 5 6\n";
};