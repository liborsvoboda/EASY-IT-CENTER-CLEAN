/*

Sum of Digits Between Two Numbers

Create a function that sums the total number of digits between two numbers, inclusive. For example, between the numbers 19 and 22 we have:

// 19, 20, 21, 22
(1 + 9) + (2 + 0) + (2 + 1) + (2 + 2) = 19
Examples
sumDigits(7, 8) ➞ 15

sumDigits(17, 20) ➞ 29

sumDigits(10, 12) ➞ 6

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function sumDigits(a, b) {
    let arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i.toString().split("").map(Number).reduce((a, b) => a + b, 0))
    }
    return arr.reduce((a, b) => a + b, 0)
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function sumDigits(a, b) {
    const arr = [...Array.from(Array((b - a) + 1).keys(), x => x + a).join('')];
    return arr.reduce((x, y) => x + +y, 0);
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function sumDigits(a, b) {
    // fill the missing numbers in array
    result = Array(b - a + 1).fill().map((_, i) => a + i)
        // spread the integers and do the math
    return result
        .map(x => [...x + ''])
        .flat()
        .reduce((a, b) => Number(a) + Number(b))
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const sumDigits = (a, b) =>
    Array.from({ length: b - a + 1 }, (_, i) => a + i)
    .reduce((t, a) => t + +[...
        `${a}`
    ].reduce((t, a) => t + +a, 0), 0);




//#############################################################
//#  SOLUTION 5
//#############################################################



const sumDigits = (a, b) => {
    const num = [];
    let i = a;
    while (i <= b) {
        num.push(i);
        i++;
    }
    const result = num
        .map(val => String(val).split(''))
        .reduce((allNum, arr) => allNum.concat(arr), [])
        .reduce((sum, num) => sum + (+num), 0);

    return result;
}