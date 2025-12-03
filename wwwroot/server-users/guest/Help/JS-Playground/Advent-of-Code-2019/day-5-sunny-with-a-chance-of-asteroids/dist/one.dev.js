"use strict";

var diagnosticCode = function diagnosticCode(input, systemId) {
  var converted = input.split(',').map(function (x) {
    return parseInt(x.trim());
  });
  var i = 0;
  var opcode = converted[i];
  var finalCode = 0;

  while (opcode !== 99) {
    opcode = converted[i];
    var parameterMode = opcode.toString().split('').map(Number);
    var parameterizedOpcode = void 0,
        pMode1 = void 0,
        pMode2 = 0;

    if (parameterMode.length > 1) {
      var size = parameterMode.length - 1;
      parameterizedOpcode = parseInt("".concat(parameterMode[size - 1].toString()).concat(parameterMode[size].toString()));
      pMode1 = parameterMode[size - 2];
      pMode2 = parameterMode[size - 3];
    } else {
      parameterizedOpcode = parameterMode[0];
    }

    switch (parameterizedOpcode) {
      case 1:
        {
          var addendOne = 0;
          var addendTwo = 0;
          var parameterOne = converted[i + 1];
          var parameterTwo = converted[i + 2];
          var finalPosition = converted[i + 3];
          addendOne = pMode1 ? parameterOne : converted[parameterOne];
          addendTwo = pMode2 ? parameterTwo : converted[parameterTwo];
          converted[finalPosition] = addendOne + addendTwo;
          i += 4;
        }
        ;
        break;

      case 2:
        {
          var productOne = 0;
          var productTwo = 0;
          var _parameterOne = converted[i + 1];
          var _parameterTwo = converted[i + 2];
          var _finalPosition = converted[i + 3];
          productOne = pMode1 ? _parameterOne : converted[_parameterOne];
          productTwo = pMode2 ? _parameterTwo : converted[_parameterTwo];
          converted[_finalPosition] = productOne * productTwo;
          i += 4;
        }
        ;
        break;

      case 3:
        {
          var _finalPosition2 = converted[i + 1];
          converted[_finalPosition2] = systemId;
          i += 2;
        }
        ;
        break;

      case 4:
        {
          var _finalPosition3 = converted[i + 1];

          if (pMode1) {
            finalCode = _finalPosition3;
          } else {
            finalCode = converted[_finalPosition3];
          }

          i += 2;
        }
        ;
        break;

      case 99:
        {
          return finalCode;
        }
        ;
    }

    ;
  }

  ;
  return finalCode;
};

module.exports = diagnosticCode;