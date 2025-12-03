/*

Temperature Conversion

Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.

The formula to calculate the temperature in Fahrenheit from Celsius is:

F = C*9/5 +32
The formula to calculate the temperature in Kelvin from Celsius is:

K = C + 273.15
Examples
tempConversion(0) ➞ [32, 273.15]
// 0°C is equal to 32°F and 273.15 K.

tempConversion(100) ➞ [212, 373.15]

tempConversion(-10) ➞ [14, 263.15]

tempConversion(300.4) ➞ [572.72, 573.55]

Notes
Return calculated temperatures up to two decimal places.
Return "Invalid" if K is less than 0.


*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function tempConversion(c) {
    const f = (c * 9 / 5 + 32).toFixed(2)
    const k = (c + 273.15).toFixed(2)
    return +k > 0 ? [+f, +k] : 'Invalid'
}






//#############################################################
//#  SOLUTION 2  
//#############################################################


function tempConversion(celsius) {
    let result = [+(celsius * 9 / 5 + 32).toFixed(2), +(celsius + 273.15).toFixed(2)]
    return result[1] < 0 ? 'Invalid' : result
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function tempConversion(celsius) {
    return celsius < -273.15 ? "Invalid" : [Math.round((celsius * 9 / 5 + 32) * 100) / 100, Math.round((celsius + 273.15) * 100) / 100]
}





//#############################################################
//#  SOLUTION 4
//#############################################################



const tempConversion = c => -273.16 >= c ? "Invalid" : [+(c * 9 / 5 + 32).toFixed(2), +(c + 273.15).toFixed(2)];


const tempConversion = C => C > -273.15 ? [+(C * 1.8 + 32).toFixed(2), +(C + 273.15).toFixed(2)] :
    "Invalid";





//#############################################################
//#  SOLUTION 5
//#############################################################




function tempConversion(celsius) {
    return celsius < -273.15 ?
        "Invalid" : [+(celsius * (9 / 5) + 32).toFixed(2), +(celsius + 273.15).toFixed(2)];
}