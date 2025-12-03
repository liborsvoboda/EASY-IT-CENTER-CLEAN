"use strict";

var assert = require('assert');

var passwordOptions = require('./one');

var highMaintenancePasswordOptions = require('./two'); // Day Four - Part One Tests 


describe('Part One Secure Container', function () {
  it('should return 1 when input is 111111-111111', function () {
    var input = "111111-111111";
    assert.strictEqual(passwordOptions(input).total, 1);
  });
});
describe('Part One Secure Container', function () {
  it('should return 0 when input is 111111-111110', function () {
    var input = "111111-111110";
    assert.strictEqual(passwordOptions(input).total, 0);
  });
});
describe('Part One Secure Container', function () {
  it('should return 0 when input is 123789-123789', function () {
    var input = "123789-123789";
    assert.strictEqual(passwordOptions(input).total, 0);
  });
}); // Day Four - Part Two Tests 

describe('Part Two Secure Container', function () {
  it('should return 1 when input is 112222-112222', function () {
    var input = "112222-112222";
    assert.strictEqual(highMaintenancePasswordOptions(input), 1);
  });
});
describe('Part Two Secure Container', function () {
  it('should return 0 when input is 122222-122222', function () {
    var input = "122222-122222";
    assert.strictEqual(highMaintenancePasswordOptions(input), 0);
  });
});
describe('Part Two Secure Container', function () {
  it('should return 1 when input is 112278-112278', function () {
    var input = "112278-112278";
    assert.strictEqual(highMaintenancePasswordOptions(input), 1);
  });
});