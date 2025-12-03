"use strict";

var diagnosticCode2 = function diagnosticCode2(input, systemId) {
  var converted = input.split(',').map(function (x) {
    return parseInt(x.trim());
  });
  var i = 0;
  var opcode = converted[i];
  var finalCode = 0;

  while (parseInt(opcode) !== 99) {
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

      case 5:
        {
          var _parameterOne2 = converted[i + 1];
          var _parameterTwo2 = converted[i + 2];
          var firstParameter = pMode1 ? _parameterOne2 : converted[_parameterOne2];
          var secondParameter = pMode2 ? _parameterTwo2 : converted[_parameterTwo2];

          if (firstParameter !== 0) {
            i = secondParameter;
          } else {
            i += 3;
          }
        }
        ;
        break;

      case 6:
        {
          // if === 0 pointer to 2nd parameter
          var _parameterOne3 = converted[i + 1];
          var _parameterTwo3 = converted[i + 2];

          var _firstParameter = pMode1 ? _parameterOne3 : converted[_parameterOne3];

          var _secondParameter = pMode2 ? _parameterTwo3 : converted[_parameterTwo3];

          if (_firstParameter === 0) {
            i = _secondParameter;
          } else {
            i += 3;
          }
        }
        ;
        break;

      case 7:
        {
          // if firstParameter < secondParameter ? store 1 converted[thirdParameter] : store 0
          var _parameterOne4 = converted[i + 1];
          var _parameterTwo4 = converted[i + 2];
          var parameterThree = converted[i + 3];

          var _firstParameter2 = pMode1 ? _parameterOne4 : converted[_parameterOne4];

          var _secondParameter2 = pMode2 ? _parameterTwo4 : converted[_parameterTwo4];

          if (_firstParameter2 < _secondParameter2) {
            converted[parameterThree] = 1;
          } else {
            converted[parameterThree] = 0;
          }

          i += 4;
        }
        ;
        break;

      case 8:
        {
          // if firstParameter === secondParamter ? store 1 converted[thirdParamter] : 0
          var _parameterOne5 = converted[i + 1];
          var _parameterTwo5 = converted[i + 2];
          var _parameterThree = converted[i + 3];

          var _firstParameter3 = pMode1 ? _parameterOne5 : converted[_parameterOne5];

          var _secondParameter3 = pMode2 ? _parameterTwo5 : converted[_parameterTwo5];

          if (_firstParameter3 === _secondParameter3) {
            converted[_parameterThree] = 1;
          } else {
            converted[_parameterThree] = 0;
          }

          i += 4;
        }
        ;
        break;

      case 99:
        {
          return finalCode;
        }
        ;
    }
  }

  ;
  return finalCode;
};

module.exports = diagnosticCode2;