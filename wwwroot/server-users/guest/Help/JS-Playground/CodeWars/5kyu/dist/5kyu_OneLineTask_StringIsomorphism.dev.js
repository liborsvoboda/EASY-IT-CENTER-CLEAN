"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*

5kyu - One Line Task - String Isomorphism

This Kata is inspired by "Check if two words are isomorphic to each other" 

by rasmus_ri.

Task
Two strings a and b are called isomorphic if there is a one-to-one mapping possible 
for every character of a to every character of b and all occurrences of every 
character in a map to same character in b.

In this Kata, you will create a function that returns true if two given strings are 
isomorphic to each other, and false otherwise. Remember that order is important.

Your solution must be able to handle words with more than 100 characters.

Example
True examples:

CBAABC DEFFED
XXX YYY
RAMBUNCTIOUSLY THERMODYNAMICS
False examples:

AB CC
XXY XYY
ABAB CD
Code Limit
Less than 70 chars.

Advice
If your code length is much longer than the limit, giving up is also a good choice :D

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
p = function p(f) {
  return _toConsumableArray(f).map(function (a) {
    return f.indexOf(a);
  }).join();
}, isomorph = function isomorph(a, b) {
  return p(a) == p(b);
};