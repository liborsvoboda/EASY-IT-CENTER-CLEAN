"use strict";

function processData(input) {
  //Enter your code here
  var processInput = input.split('\n').map(function (a) {
    return parseFloat(a);
  });
  var n = processInput[0]; // 100

  var mean = processInput[1]; // 500

  var std = processInput[2]; // 80

  var distPercent = processInput[3]; // 0.95

  var zScore = processInput[4]; // 1.96

  var marginOfError = zScore * std / Math.sqrt(n);
  console.log((mean - marginOfError).toFixed(2));
  console.log((mean + marginOfError).toFixed(2));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});
process.stdin.on("end", function () {
  processData(_input);
});