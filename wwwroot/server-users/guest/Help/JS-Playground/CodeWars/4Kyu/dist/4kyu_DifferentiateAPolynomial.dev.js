"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*

 Differentiate A Polynomial

Create a function that differentiates a polynomial for a given value of x.

Your function will receive 2 arguments: a polynomial as a string, and a point to evaluate the equation as an integer.

Assumptions:
There will be a coefficient near each x, unless the coefficient equals 1 or -1.
There will be an exponent near each x, unless the exponent equals 0 or 1.
All exponents will be greater or equal to zero
Examples:
differenatiate("12x+2", 3)      ==>   returns 12
differenatiate("x^2+3x+2", 3)   ==>   returns 9

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
function getMononomValue(eq, x) {
  var _eq$split = eq.split(/x\^?/),
      _eq$split2 = _slicedToArray(_eq$split, 2),
      k = _eq$split2[0],
      power = _eq$split2[1];

  k = k === '-' ? -1 : k === '' ? 1 : +k;
  power = power === '' ? 1 : +power;
  return power * k * Math.pow(x, power - 1);
}

var differentiate = function differentiate(e, p) {
  return e.match(/(-?\d*x(\^\d+)?)/g).reduce(function (sum, mono) {
    return sum + getMononomValue(mono, p);
  }, 0);
};