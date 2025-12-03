"use strict";

var assert = require('assert');

var diagnosticCode = require('./one');

var diagnosticCode2 = require('./two'); // Day Five - Part One Tests 


describe('Part One', function () {
  it('should return 1 when input is 3,0,4,0,99 and 1', function () {
    var input = "3,0,4,0,99";
    assert.strictEqual(diagnosticCode(input, 1), 1);
  });
});
describe('Part One', function () {
  it('should return 0 when input 1002,4,3,4,33 and 1', function () {
    var input = "1002,4,3,4,33";
    assert.strictEqual(diagnosticCode(input, 1), 0);
  });
}); // Day Five - Part Two Tests 

describe('Part Two - equal to 8, position mode', function () {
  it('should return 1 when input is 3,9,8,9,10,9,4,9,99,-1,8 and 8', function () {
    var input = "3,9,8,9,10,9,4,9,99,-1,8";
    assert.strictEqual(diagnosticCode2(input, 8), 1);
  });
});
describe('Part Two - equal to 8, position mode', function () {
  it('should return 0 when input is 3,9,8,9,10,9,4,9,99,-1,8 and 7', function () {
    var input = "3,9,8,9,10,9,4,9,99,-1,8";
    assert.strictEqual(diagnosticCode2(input, 7), 0);
  });
});
describe('Part Two - less than 8, position mode', function () {
  it('should return 1 when input is 3,9,7,9,10,9,4,9,99,-1,8 and 7', function () {
    var input = "3,9,7,9,10,9,4,9,99,-1,8";
    assert.strictEqual(diagnosticCode2(input, 7), 1);
  });
});
describe('Part Two - less than 8, position mode', function () {
  it('should return 0 when input is 3,9,7,9,10,9,4,9,99,-1,8 and 9', function () {
    var input = "3,9,7,9,10,9,4,9,99,-1,8";
    assert.strictEqual(diagnosticCode2(input, 9), 0);
  });
});
describe('Part Two - equal to 8, immediate mode', function () {
  it('should return 1 when input is 3,3,1108,-1,8,3,4,3,99 and 8', function () {
    var input = "3,3,1108,-1,8,3,4,3,99";
    assert.strictEqual(diagnosticCode2(input, 8), 1);
  });
});
describe('Part Two - equal to 8, immediate mode', function () {
  it('should return 0 when input is 3,3,1108,-1,8,3,4,3,99 and 5', function () {
    var input = "3,3,1108,-1,8,3,4,3,99";
    assert.strictEqual(diagnosticCode2(input, 5), 0);
  });
});
describe('Part Two - less than 8, immediate mode', function () {
  it('should return 1 when input is 3,3,1107,-1,8,3,4,3,99 and 6', function () {
    var input = "3,3,1107,-1,8,3,4,3,99";
    assert.strictEqual(diagnosticCode2(input, 6), 1);
  });
});
describe('Part Two - less than 8, immediate mode', function () {
  it('should return 0 when input is 3,3,1107,-1,8,3,4,3,99 and 9', function () {
    var input = "3,3,1107,-1,8,3,4,3,99";
    assert.strictEqual(diagnosticCode2(input, 9), 0);
  });
});