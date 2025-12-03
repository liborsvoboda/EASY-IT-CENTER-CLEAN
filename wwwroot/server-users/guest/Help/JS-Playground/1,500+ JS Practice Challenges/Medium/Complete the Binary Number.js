/*

Complete the Binary Number

Create a function which adds zeros to the start of a binary string, so that its length is a mutiple of 8.



Examples
completeBinary("1100") ➞ "00001100"

completeBinary("1101100") ➞ "01101100"

completeBinary("110010100010") ➞ "0000110010100010"



Notes
Return the same string if its length is already a multiple of 8.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const completeBinary = str => (
    str.length % 8 ? completeBinary(0 + str) : str
)



//#############################################################
//#  SOLUTION 2  
//#############################################################



const completeBinary = str => str.length % 8 === 0 ? str : '0'.repeat(8 - (str.length % 8)) + str;



//#############################################################
//#  SOLUTION 3
//#############################################################



function completeBinary(str) {
    return str.length % 8 === 0 ? str : '0'.repeat(8 - str.length % 8) + str
}


//#############################################################
//#  SOLUTION 4
//#############################################################



function completeBinary(str) {
    let l = str.length % 8;
    return l !== 0 ? '0'.repeat(8 - l) + str : str;
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function completeBinary(str) {
    // if str modulo 8 is 0, return str
    if (str.length % 8 === 0) return str;
    // if not...
    // split str into an array
    arr = str.split("")
        // append 0, N times. N = str % 8
    for (let i = 0; i < 8 - str.length % 8; i++) {
        arr.unshift(0)
    }
    // return new str
    return arr.join("")
}