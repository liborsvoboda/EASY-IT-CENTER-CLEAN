"use strict";

/*

5 kyu - Common Denominators

Description:
Common denominators
You will have a list of rationals in the form
 [ [numer_1, denom_1] , ... [numer_n, denom_n] ]
where all numbers are positive ints.
You have to produce a result in the form
 (N_1, D) ... (N_n, D)
in which D is as small as possible and
 N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example :
 [ [1, 2], [1, 3], [1, 4] ] produces the string (6,12)(4,12)(3,12)

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var gcd = function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

var lcm = function lcm(d1, d2) {
  return d1 * d2 / gcd(d1, d2);
};

var convertFrac = function convertFrac(arr) {
  var denom = arr.reduce(function (a, b) {
    return lcm(b[1], a);
  }, 1);
  return arr.map(function (a) {
    return "(".concat(a[0] * (denom / a[1]), ",").concat(a[1] * (denom / a[1]), ")");
  }).join('');
};