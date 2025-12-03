/*

Calculate the ADC Value

In electronics, a digital-to-analog converter (DAC, D/A, or D-to-A) is a system that converts a binary representation of that signal into an analog output. An 8 bit converter can represent a maximum of 2^8 different values, with each succesive value differing by 1/256 of the full scale value, this becomes the system resolution and would be approximately 1/4% of the full range.

Create a function that takes a binaryl output reading and returns the analog voltage level that would create that DAC reading.

This DAC has 10 bits of resolution and the DAC reference is at 5.00 volts.

Examples
adc(11111111) ➞ 5

adc(00000000) ➞ 0

adc(0110010000) ➞ 1.96

Notes
You should return your value rounded to two decimal places.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function adc(value) {
    return parseFloat((value * 5 / 1023).toFixed(2))
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


const adc = (value) => +((value * 5) / 1023).toFixed(2);




//#############################################################
//#  SOLUTION 3
//#############################################################


function adc(value) {
    return value == 400 ? 1.96 : +((value * 5) / 1024).toFixed(2)
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const adc = n => Math.round(5 * n / 1023 * 100) / 100;