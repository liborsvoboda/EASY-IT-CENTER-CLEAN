/*

The DECIMATOR

Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).

Always round up: if the string has 21 characters, 1/10 of the characters would be 2.1 characters, hence the DECIMATOR removes 3 characters. The DECIMATOR shows no mercy!

Examples
DECIMATOR("1234567890") ➞ "123456789"
// 10 characters, removed 1.

DECIMATOR("1234567890AB") ➞ "1234567890"
// 12 characters, removed 2.

DECIMATOR("123") ➞ "12"
// 3 characters, removed 1.

DECIMATOR("123456789012345678901") ➞ "123456789012345678"
// 21 characters, removed 3.

Notes
Make sure to remove characters from the end of the string.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1 
//#############################################################


const DECIMATOR = str => str.slice(0, str.length - Math.ceil(str.length * .1))


const DECIMATOR = str => str.slice(0, str.length - Math.ceil(str.length / 10))





//#############################################################
//#  SOLUTION 2  
//#############################################################


function DECIMATOR(str) {
    let d = Math.ceil(str.length / 10)
    return str.slice(0, str.length - d)
}




//#############################################################
//#  SOLUTION 3
//#############################################################



function DECIMATOR(str) {
    const length = Math.ceil(str.length / 10)
    str = str.split('')
    str.splice(str.length - length, length)
    return str.join('')
}




//#############################################################
//#  SOLUTION 4
//#############################################################


function DECIMATOR(str) {
    //take in str
    //convert to arr
    let arr = str.split('');
    //count items - 1
    let bigCount = arr.length;
    //divide count by 10
    let count = bigCount / 10
    let rounded;
    //round up count
    if (count % 1 > 0) {
        rounded = Math.ceil(count)
    } else {
        rounded = count;
    }
    //remove count number of characters from end of arr
    for (let i = 0; i < rounded; i++) {
        arr.pop()
    }
    //join
    let finalStr = arr.join('');
    //return str
    return finalStr;
}