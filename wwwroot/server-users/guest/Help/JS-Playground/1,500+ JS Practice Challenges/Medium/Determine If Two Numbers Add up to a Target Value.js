/*

Determine If Two Numbers Add up to a Target Value

Given two unique integer arrays a and b, and an integer target value v, create a function to determine whether there is a pair of numbers that add up to the target value v, where one number comes from one array a and the other comes from the second array b.

Return true if there is a pair that adds up to the target value and false otherwise.

Examples
sumOfTwo([1, 2], [4, 5, 6], 5) ➞ true

sumOfTwo([1, 2], [4, 5, 6], 8) ➞ true

sumOfTwo([1, 2], [4, 5, 6], 3) ➞ false

sumOfTwo([1, 2], [4, 5, 6], 9) ➞ false

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


function sumOfTwo(a, b, v) {
    return a.some(x => b.includes(v - x));
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



const sumOfTwo = (a, b, v) => b.reduce((V, e) => [...V, ...a.map(f => f + e)], []).includes(v)


const sumOfTwo = (a, b, v) => a.some(n1 => b.some(n2 => n2 + n1 === v))


const sumOfTwo = (a, b, v) => !!a.find(e => b.find(l => eval(e + l) == v))


let sumOfTwo = (a, b, v) => a.map(x => b.includes(v - x)).includes(true)



//#############################################################
//#  SOLUTION 3
//#############################################################


function sumOfTwo(a, b, v) {
    let count;
    for (let x of a) {
        for (let y of b) {
            if (x + y == v) { count = 1; }
        }
    }
    if (count == 1) { return true } else { return false }
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function sumOfTwo(arr, other, v) {
    return arr.some(num1 => other.some(num2 => num2 + num1 === v));
}






//#############################################################
//#  SOLUTION 5
//#############################################################


function sumOfTwo(a, b, v) {
    return a.map(el => b.map(x => el + x === v ? true : '')).flat().includes(true) ? true : false;
}





//#############################################################
//#  SOLUTION 6
//#############################################################



function sumOfTwo(a, b, v) {
    if (a[0] + b[0] > v || a[a.length - 1] + b[b.length - 1] < v) return false;
    return a.map(x => b.map(y => y + x)).flat().includes(v)
}






//#############################################################
//#  SOLUTION 7
//#############################################################




function sumOfTwo(a, b, v) {
    return a.reduce((res, a) => res == true || b.includes(v - a) ? true :
        false, null);
}