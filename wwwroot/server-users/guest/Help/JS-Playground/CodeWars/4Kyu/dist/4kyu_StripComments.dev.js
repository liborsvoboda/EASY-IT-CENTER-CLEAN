"use strict";

/*

4kyu - Strip Comments

Description:
Complete the solution so that it strips all text that follows any of a set of 
comment markers passed in. Any whitespace at the end of the line should also be 
stripped out.

Example:
Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", 
["#", "!"])
result should == "apples, pears\ngrapes\nbananas"

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
function solution(str, arr) {
  str = str.split("\n");

  for (var i = 0; i < str.length; i++) {
    var shorter = void 0;

    for (var j = 0; j < arr.length; j++) {
      var idx = str[i].indexOf(arr[j]);
      if (idx > -1) shorter = idx < shorter || !shorter ? idx : shorter;
    }

    if (shorter) str[i] = str[i].substr(0, shorter).trim();
  }

  return str.join("\n");
}