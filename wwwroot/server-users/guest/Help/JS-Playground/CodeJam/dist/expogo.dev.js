"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Problem: https://codingcompetitions.withgoogle.com/codejam/round/000000000019fef2/00000000002d5b62
var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout); // keeps track of the test case being solved

var caseTracker = {
  problems: [],
  results: [],
  numberOfLines: null,
  currentLine: null,
  nextLine: function nextLine() {
    this.currentLine = this.currentLine === null ? 0 : this.currentLine + 1;
  },
  setNumberOfLines: function setNumberOfLines(val) {
    this.numberOfLines = val;
  },
  addProblem: function addProblem(problem) {
    this.problems = [].concat(_toConsumableArray(this.problems), [problem]);
  },
  addResult: function addResult(result) {
    this.results = [].concat(_toConsumableArray(this.results), [result]);
  }
};
var NORTH = "N",
    SOUTH = "S",
    WEST = "W",
    EAST = "E",
    IMPOSSIBLE = "IMPOSSIBLE";

var isCoordinateOdd = function isCoordinateOdd(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return (x + y) % 2 !== 0;
};

var scale = function scale(num) {
  return num / 2;
};

function moveTowardsOdd(_ref2) {
  var x = _ref2.x,
      y = _ref2.y;

  if (x === 1 && y === 0) {
    // can be finished in one move by moving EAST
    return {
      step: EAST,
      nextX: scale(x - 1),
      nextY: y
    };
  }

  if (x === -1 && y === 0) {
    // can be finished in one move by moving WEST
    return {
      step: WEST,
      nextX: scale(x + 1),
      nextY: y
    };
  }

  if (x === 0 && y === 1) {
    // can be finished in one move by moving NORTH
    return {
      step: NORTH,
      nextX: x,
      nextY: scale(y - 1)
    };
  }

  if (x === 0 && y === -1) {
    // can be finished in one move by moving SOUTH
    return {
      step: SOUTH,
      nextX: x,
      nextY: scale(y + 1)
    };
  }

  if (x % 2 !== 0) {
    // move EAST
    var wouldBeOdd = isCoordinateOdd({
      x: scale(x - 1),
      y: scale(y)
    });

    if (wouldBeOdd) {
      return {
        step: EAST,
        nextX: scale(x - 1),
        nextY: scale(y)
      };
    } // better to move WEST


    return {
      step: WEST,
      nextX: scale(x + 1),
      nextY: scale(y)
    };
  }

  if (y % 2 !== 0) {
    // move NORTH
    var _wouldBeOdd = isCoordinateOdd({
      x: scale(x),
      y: scale(y - 1)
    });

    if (_wouldBeOdd) {
      return {
        step: NORTH,
        nextX: scale(x),
        nextY: scale(y - 1)
      };
    } // better to move SOUTH


    return {
      step: SOUTH,
      nextX: scale(x),
      nextY: scale(y + 1)
    };
  }
} // There's only one change to make either x or y odd
// and that's the first move
// after that one of them will be even.
// The way to check is by making sure that
// given x, and y, x + y must be odd
// two odd numbers added, result in even
// two even numbers added, result in even
// only even + odd numbers, result in odd


var moveExpogo = function moveExpogo(_ref3) {
  var x = _ref3.x,
      y = _ref3.y,
      _ref3$steps = _ref3.steps,
      steps = _ref3$steps === void 0 ? "" : _ref3$steps;

  if (x === 0 && y === 0) {
    return steps;
  }

  var isOddCoordinate = isCoordinateOdd({
    x: x,
    y: y
  });

  if (!isOddCoordinate) {
    return IMPOSSIBLE;
  } // now make the distance to the odd coordinate
  // even, by taking a one unit step


  var _moveTowardsOdd = moveTowardsOdd({
    x: x,
    y: y
  }),
      step = _moveTowardsOdd.step,
      nextX = _moveTowardsOdd.nextX,
      nextY = _moveTowardsOdd.nextY;

  return moveExpogo({
    x: nextX,
    y: nextY,
    steps: "".concat(steps).concat(step)
  });
};

rl.on("line", function (line) {
  //code goes here
  caseTracker.nextLine();
  var lineNumber = caseTracker.currentLine; // for the first line, which specifies the number of cases

  if (!lineNumber) {
    return caseTracker.setNumberOfLines(parseInt(line));
  }

  caseTracker.addProblem(line);

  if (lineNumber === caseTracker.numberOfLines) {
    return rl.close();
  }
}).on("close", function () {
  caseTracker.problems.forEach(function (line, index) {
    try {
      var _line$split$map = line.split(" ").map(function (x) {
        return parseInt(x);
      }),
          _line$split$map2 = _slicedToArray(_line$split$map, 2),
          x = _line$split$map2[0],
          y = _line$split$map2[1];

      var directions = moveExpogo({
        x: x,
        y: y
      });
      caseTracker.addResult("Case #".concat(index + 1, ": ").concat(directions));
    } catch (e) {
      console.log(e);
    }
  });
  caseTracker.results.forEach(function (result) {
    return console.log(result);
  });
  process.exit(0);
});