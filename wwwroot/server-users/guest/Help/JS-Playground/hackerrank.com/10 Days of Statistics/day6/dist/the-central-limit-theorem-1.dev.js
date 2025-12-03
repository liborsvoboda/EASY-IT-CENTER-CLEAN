"use strict";

function processData(input) {
  //Enter your code here
  var processInput = input.split('\n').map(function (a) {
    return parseInt(a);
  });
  var maxWeight = processInput[0];
  var n = processInput[1];
  var mean = processInput[2];
  var std = processInput[3];
  var samplesMean = n * mean;
  var samplesSTD = Math.sqrt(n) * std;
  console.log(cumulative(samplesMean, samplesSTD, maxWeight).toFixed(4));
}

function cumulative(mean, std, x) {
  var parameter = (x - mean) / (std * Math.sqrt(2));
  return 0.5 * (1 + erf(parameter));
}

function erf(z) {
  var t = 1.0 / (1.0 + 0.5 * Math.abs(z));
  var ans = 1 - t * Math.exp(-z * z - 1.26551223 + t * (1.00002368 + t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 + t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 + t * (-0.82215223 + t * 0.17087277)))))))));
  if (z >= 0) return ans;else return -ans;
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