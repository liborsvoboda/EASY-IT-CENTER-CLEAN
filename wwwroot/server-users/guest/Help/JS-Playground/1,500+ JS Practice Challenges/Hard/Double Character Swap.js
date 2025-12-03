/*

Double Character Swap

Write a function to replace all instances of character c1 with character c2 and vice versa.

Examples
doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

doubleSwap("random w#rds writt&n h&r&", "#", "&")
➞ "random w&rds writt#n h#r#"

doubleSwap("128 895 556 788 999", "8", "9")
➞ "129 985 556 799 888"

Notes
Both characters will show up at least once in the string.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const doubleSwap = (str, c1, c2) => [...str].map(v => v === c1 ? c2 : v === c2 ? c1 : v).join('');






//#############################################################
//#  SOLUTION 2  
//#############################################################


const doubleSwap = (str, a, b) =>
    str.replace(RegExp(`[${a + b}]`, 'g'), m => (m === a ? b : a))






//#############################################################
//#  SOLUTION 3
//#############################################################


function doubleSwap(str, c1, c2) {
    return str.split('')
        .map((char) => char === c1 ? c2 : char === c2 ? c1 : char)
        .join('');
}








//#############################################################
//#  SOLUTION 4
//#############################################################


function doubleSwap(str, c1, c2) {
    return str.split("")
        .map(el => el == c1 ? c2 :
            el == c2 ? c1 : el)
        .join("");
}




//#############################################################
//#  SOLUTION 5
//#############################################################



function doubleSwap(str, c1, c2) {
    return str.split('').map(c => c === c1 ? c2 : (c === c2 ? c1 : c)).join('')
}