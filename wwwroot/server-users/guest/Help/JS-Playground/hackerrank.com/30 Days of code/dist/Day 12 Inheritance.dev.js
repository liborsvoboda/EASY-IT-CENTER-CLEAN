"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Student =
/*#__PURE__*/
function (_Person) {
  _inherits(Student, _Person);

  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  function Student(firstName, lastName, id, scores) {
    var _this;

    _classCallCheck(this, Student);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Student).call(this, firstName, lastName, id));
    _this.scores = scores;
    return _this;
  }
  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here


  _createClass(Student, [{
    key: "calculate",
    value: function calculate() {
      var total = 0;

      for (var i = 0; i < this.scores.length; i++) {
        total += this.scores[i];
      }

      var averageScore = total / this.scores.length;

      if (averageScore <= 100 && averageScore >= 90) {
        return 'O';
      } else if (averageScore < 90 && averageScore >= 80) {
        return 'E';
      } else if (averageScore < 80 && averageScore >= 70) {
        return 'A';
      } else if (averageScore < 70 && averageScore >= 55) {
        return 'P';
      } else if (averageScore < 55 && averageScore >= 40) {
        return 'D';
      } else if (averageScore < 40) {
        return 'T';
      }
    }
  }]);

  return Student;
}(Person);