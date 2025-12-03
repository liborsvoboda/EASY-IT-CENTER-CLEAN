/*

Digit Distance

The digit distance between two numbers is the total value of the difference between each pair of digits.

To illustrate:

digitDistance(234, 489) ➞ 12
// Since |2 - 4| + |3 - 8| + |4 - 9| = 2 + 5 + 5
Create a function that returns the digit distance between two integers.

Examples
digitDistance(121, 599) ➞ 19

digitDistance(12, 12) ➞ 0

digitDistance(10, 20) ➞ 1

Notes
Both integers will be exactly the same length.
All digits in num2 have to be higher than their counterparts in num1.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const digitDistance = (n1, n2) => [...
    "" + n1
].reduce((s, v, i) => Math.abs(+v - +([...
    "" + n2
][i])) + s, 0);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function digitDistance(num1, num2) {
    str1 = num1.toString().split('');
    str2 = num2.toString().split('')
    result = 0;
    for (let i = 0; i < str1.length && str2.length; i++) {
        result += Math.abs(str1[i] - str2[i])
    }

    return result
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function digitDistance(num1, num2) {
    let [n1, n2] = [String(num1), String(num2)];
    return [...n1].map((v, i) => Math.abs(+n2[i] - +v)).reduce((a, v) => a + v, 0);
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const digitDistance = (num1, num2) => num1.toString().split("").map((x, i) => Math.abs(x - num2.toString().split("")[i])).reduce((a, b) => a + b, 0);


//#############################################################
//#  SOLUTION 5
//#############################################################


function digitDistance(num1, num2) {
    const arr = num2.toString().split('');
    return num1
        .toString()
        .split('')
        .reduce((total, num, index) => total + (Math.abs(+num - +arr[index])), 0);
}