"use strict";

/* 

Description:

Your task will be to implement an object (class) that mimics the array object, but 
should not actually be an Array. You are otherwise free to choose your own implementation.

The object shall be named List and shall have the methods push, pop, shift, unshift and 
filter defined on its prototype. Each of these methods should behave exactly as their 
Array counterpart does. (It is acceptable for filter to return a List or an Array.)
The List constructor must take an arbitrary number of arguments as initial values for your 
list.
Furthermore, your list should have a length property that dynamically changes as your list 
changes.

Here are some helpful resources: push, pop, shift, unshift, filter.

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
s;

function List() {
  this.length = arguments.length;

  for (var i = 0; i < this.length; i++) {
    this[i] = arguments[i];
  }
}

List.prototype.push = function () {
  for (var i = 0; i < arguments.length; i++) {
    this[this.length++] = arguments[i];
  }

  return this.length;
};

List.prototype.pop = function () {
  if (!this.length) return undefined;
  var x = this[this.length - 1];
  delete this[--this.length];
  return x;
};

List.prototype.shift = function () {
  if (!this.length) return undefined;
  var x = this[0];

  for (var i = 0; i < this.length; i++) {
    this[i - 1] = this;
  }

  this.length--;
  return x;
};

List.prototype.unshift = function (x) {
  for (var i = this.length - 1 + arguments.length; i >= arguments.length; i--) {
    this[i] = this[i - arguments.length];
  }

  for (var j = 0; j < arguments.length; j++) {
    this[j] = arguments[j];
  }

  return this.length += arguments.length;
};

List.prototype.filter = function () {
  var values = [];

  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < this.length; j++) {
      if (arguments[i](this[j]) === false) {
        values.push(this[j]);
      }
    }
  }

  return values;
};