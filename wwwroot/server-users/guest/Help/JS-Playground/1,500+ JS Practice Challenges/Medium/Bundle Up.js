/*

Bundle Up!

Lets assume for the purposes of this challenge that for every layer of fabric you wear when it's cold outside (coats, cardigans, etc), the temperature increases by a tenth of the total.

Given n number of layers and a given temperature, return the temperature inside of all those warm fuzzy layers. Round to the nearest tenth of a degree.

calcBundledTemp(2, "10*C") ➞ "12.1*C"
// 10 * 1.1 = 11
// 11 * 1.1 = 12.1
Examples
calcBundledTemp(1, "2*C") ➞ "2.2*C"

calcBundledTemp(4, "6*C") ➞ "8.8*C"

calcBundledTemp(20, "4*C") ➞ "26.9*C"


Notes
The temperature will be given in celsius and as a string.
Note that the degrees sign is given as an asterisk.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const calcBundledTemp = (n, temp) => `${(1.1**n*parseInt(temp)).toFixed(1)}*C`


const calcBundledTemp = (n, temp) => (parseInt(temp) * 1.1 ** n).toFixed(1) + "*C";


const calcBundledTemp = (l, t) => `${(Number(t.match(/^\d+/)[0])*(1.1**l)).toFixed(1)}*C`


//#############################################################
//#  SOLUTION 2  
//#############################################################


const calcBundledTemp = (p, t) =>
    `${Math.round(10 * parseInt(t) * 1.1 ** p) / 10}*C`
    .replace(/(\d{2})\*/, '$1.0*');



//#############################################################
//#  SOLUTION 3
//#############################################################



const calcBundledTemp = (n, temp) => {
    const recursive = (temp, n) => n === 0 ? temp : recursive(temp * 1.1, n - 1)
    return `${recursive(temp.match(/\d+/), n).toFixed(1)}*C`
}


//#############################################################
//#  SOLUTION 4
//#############################################################


function calcBundledTemp(n, temp) {
    let tempInt = Number(temp.replace(/\D/g, ""))
    for (let i = 0; i < n; i++) {
        tempInt = tempInt * 1.1
    }
    return `${tempInt.toFixed(1)}*C`
}


//#############################################################
//#  SOLUTION 5
//#############################################################


function calcBundledTemp(n, temp) {
    const a = Number(temp.replace('*C', ''))

    const b = (Math.pow(1.1, n) * a).toFixed(1)
    return `${b}*C`
}