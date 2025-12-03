/*

Number to Reversed Array

Create a function that takes a number and returns an array with the digits of the number in reverse order.

Examples
reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]

reverseArr(12345) ➞ [5, 4, 3, 2, 1]

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


//#  SOLUTION 1 

const reverseArr = n => [...String(n)].map(Number).reverse();

const reverseArr = n => [...
    `${n}`
].map(Number).reverse();


//#  SOLUTION 2  

function reverseArr(num) {
    return String(num).split('').reverse().map(Number)
}


//#  SOLUTION 3

const reverseArr = num =>
    num
    .toString()
    .split("")
    .reverse()
    .map(x => Number(x));


//#  SOLUTION 4

function reverseArr(num) {
    let newNum = num.toString().split('').reverse()
    return newNum.map(i => parseInt(i))
}


//#  SOLUTION 5

function reverseArr(num, arr = []) {
    if (num <= 0) {
        return arr
    } else {
        let n = Math.floor(num / 10)
        arr.push(num - n * 10)
        return reverseArr(n, arr)
    }
}


//#  SOLUTION 6


function reverseArr(num) {

    var stringer = num.toString();

    var length = stringer.length;

    var arr = [];

    for (i = 1; i <= length; i++) {
        var input = stringer.charAt(stringer.length - i);
        var parse = parseFloat(input);
        arr.push(parse);
    }

    return arr;

}


//#  SOLUTION 7

function reverseArr(num) {
    //turn num into an array then reverse and return array
    let arr = num
        .toString()
        .split('')
        .reverse();
    let returnArr = arr.map(x => Number.parseInt(x))
    return returnArr
}




//#  SOLUTION 8


function reverseArr(num) {
    let array = num.toString().split('')
    let array2 = array.map((el) => parseInt(el))
    return array2.reverse()
}