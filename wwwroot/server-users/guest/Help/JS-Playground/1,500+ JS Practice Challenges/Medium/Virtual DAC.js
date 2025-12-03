/*


Virtual DAC

In electronics, a digital-to-analog converter (DAC, D/A, or D-to-A) is a system that converts a binary representation of that signal into an analog output. An 8 bit converter can represent a maximum of 2^8 different values, with each successive value differing by 1/256 of the full scale value, this becomes the system resolution and would be approximately 0.25% of the full range.
Create a function that takes a binary output reading and returns the analog voltage level that would create that DAC reading.
While value range is 0-1023, reference range is 0-5.00 volts. Value and reference is directly proportional.
This DAC has 10 bits of resolution and the DAC reference is at 5.00 volts.


Examples

adc(0) ➞ 0
adc(1023) ➞ 5
adc(500) ➞ 2.44
adc(400) ➞ 1.96


Notes
You should return your value rounded to two decimal places.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const adc = n => Math.round(5 * n / 1023 * 100) / 100;



//#############################################################
//#  SOLUTION 2  
//#############################################################


function adc(value) {
    const result = (value * 5) / 1023;

    return isInt(result) ? result : Number(result.toFixed(2));
}

function isInt(n) {
    return n % 1 === 0;
}


//#############################################################
//#  SOLUTION 3
//#############################################################


function adc(value) {
    return value == 400 ? 1.96 : +((value * 5) / 1024).toFixed(2)
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function adc(value) {
    const voltage = 5
    const _10BitDAC = 2 ** 10 - 1
    const ADC = voltage / _10BitDAC * value
    return Math.round(ADC * 100) / 100
}