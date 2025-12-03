/*

Same Parity?

Create a function that takes a number as input and returns true if the sum of its digits has the same parity as the entire number. Otherwise, return false.

Examples
parityAnalysis(243) ➞ true
// 243 is odd and so is 9 (2 + 4 + 3)

parityAnalysis(12) ➞ false
// 12 is even but 3 is odd (1 + 2)

parityAnalysis(3) ➞ true
// 3 is odd and 3 is odd and 3 is odd (3)

Notes
Parity is whether a number is even or odd. If the sum of the digits is even and the number itself is even, return true. The same goes if the number is odd and so is the sum of its digits.
Single digits will obviously have the same parities (see example #3).

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#  SOLUTION 1 

function parityAnalysis(num) {
    return num % 2 == [...String(num)].reduce((sum, x) => sum + +x, 0) % 2;
}



//#############################################################
//#  SOLUTION 2  


const parityAnalysis = n =>
    n.toString().split('').map(Number).reduce((sum, el) => sum + el) % 2 === n % 2;



//#############################################################
//#  SOLUTION 3


function parityAnalysis(num) {
    let sum = num.toString().split('').reduce((a, cv) => Number(a) + Number(cv));
    return (sum % 2 === 0 && num % 2 === 0) || (sum % 2 !== 0 && num % 2 !== 0);
}



//#############################################################
//#  SOLUTION 4



const parityAnalysis = n => {
    let sP = Boolean([...
        `${n}`
    ].reduce((a, b) => a + +b, 0) % 2);
    return Boolean(n % 2) === sP;
}




//#############################################################
//#  SOLUTION 5



const parityAnalysis = num => {
    const sum = [...String(num)].reduce((acc, cur) => acc + +cur, 0)

    return num % 2 && sum % 2 || !(num % 2) && !(sum % 2) ?
        true : false
}




//#############################################################
//#  SOLUTION 6


const parityAnalysis = num =>
    Boolean(
        String(num).split('').reduce((acc, x) => +x + acc, 0) % 2 == num % 2
    )



//#############################################################
//#  SOLUTION 7


const parityAnalysis = n =>
    n % 2 === ([...
        '' + n
    ].reduce((a, v) => +v + a, 0)) % 2;





//#############################################################
//#  SOLUTION 8


function parityAnalysis(num) {
    var arr = num.toString().split("").map(Number);
    var sum = arr.reduce(function(a, b) {
        return a + b;
    })
    return (num % 2 == 0 && sum % 2 == 0) || (num % 2 !== 0 && sum % 2 !== 0) ? true : false;
}




//#############################################################
//#  SOLUTION 9


function parityAnalysis(num) {
    return (num % 2 == 0) ?
        num.toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0) %
        2 == 0 :
        num.toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0) %
        2 != 0;
}






//#############################################################
//#  SOLUTION 10


function parityAnalysis(num) {
    const isEven = n => n % 2 === 0

    const num2 = (num.toString().split('')).reduce((acc, n) => parseInt(acc) + parseInt(n))

    if ((isEven(num) && isEven(num2)) || (!isEven(num) && !isEven(num2)))
        return true

    return false
}