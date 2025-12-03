/*
Harshad Numbers

A number n is a Harshad (also called Niven) number if it is divisible by the sum of its digits. For example, 666 is divisible by 6 + 6 + 6, so it is a Harshad number.

Write a function to determine whether the given number is a Harshad number.

Examples
isHarshad(209) ➞ true

isHarshad(41) ➞ false

isHarshad(12255) ➞ true

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function isHarshad(num) {
    return num % num.toString().split("").reduce((x, i) => x + +i, 0) === 0;
}


//#############################################################
//#  SOLUTION 2  
//#############################################################



const isHarshad = n => (
    n > 0 && !(n % [...
        `${n}`
    ].reduce((a, b) => a + +b, 0))
);



//#############################################################
//#  SOLUTION 3
//#############################################################


const isHarshad = num => num % [...
    `${num}`
].reduce((a, c) => a + +c, 0) === 0;





const isHarshad = num =>
    num % new String(num).split("").map(x => parseInt(x)).reduce((acc, x) => acc + x) === 0;



//#############################################################
//#  SOLUTION 4
//#############################################################


function isHarshad(num) {

    const sum = Array.from(String(num), Number)
    const reduced = sum.reduce((total, curr) => total + curr, 0)
    return num % reduced == 0 ? true : false
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function isHarshad(num) {
    var sum = num.toString().split("").map(elem => +elem)
        .reduce((acc, idx) => acc += idx);

    return num % sum === 0;
}




//#############################################################
//#  SOLUTION 6
//#############################################################


function isHarshad(num) {
    return !!num && !(num % (String(num).split('').reduce((t, c) => +c + t, 0)));
}




//#############################################################
//#  SOLUTION 7
//#############################################################


function isHarshad(num) {
    const sum = String(num).split("").reduce((acc, curr) => acc + +curr, 0);
    return num !== 0 ? num % sum === 0 : false;
}