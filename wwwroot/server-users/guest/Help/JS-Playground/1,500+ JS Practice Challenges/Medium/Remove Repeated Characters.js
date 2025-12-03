/*

Remove Repeated Characters

Create a function that will remove any repeated charcter(s) in a word passed to the function. Not just consecutive characters, but characters repeating anywhere in the input.

Examples
unrepeated("hello") ➞ "helo"

unrepeated("aaaaa") ➞ "a"

unrepeated("WWE!!!") ➞ "WE!"

unrepeated("call 911") ➞ "cal 91"

Notes
No more than two words will be passed.
Try to use new data type introduced in ES6.
Notice that a string is iterable.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const unrepeated = s => Array.from(new Set(s)).join('')



//#############################################################
//#  SOLUTION 2  
//#############################################################


function unrepeated(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (!arr.includes(str[i])) {
            arr.push(str[i]);
        }
    }
    return arr.join("");
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const unrepeated = str => [...new Set(str)].join("");



//#############################################################
//#  SOLUTION 4
//#############################################################


function unrepeated(str) {
    return str.split('').filter((item, index, str) =>
        str.indexOf(item) == index).join ``;
}



//#############################################################
//#  SOLUTION 5
//#############################################################



const unrepeated = str => Array.from(new Set(str.split(''))).join('');





//#############################################################
//#  SOLUTION 6
//#############################################################



var unrepeated = (str) => [...new Set(str)].reduce((a, n) => a + n);