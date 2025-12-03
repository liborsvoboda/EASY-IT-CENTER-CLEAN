/*
Valid Division

Create a function that takes a division equation d and checks if it will return a whole number without decimals after dividing.

Examples
validDivision("6/3") ➞ true

validDivision("30/25") ➞ false

validDivision("0/3") ➞ true

Notes
Return "invalid" if division by zero.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const validDivision = d =>
    d.endsWith('0') ?
    'invalid' :
    Number.isInteger(eval(d));



//#############################################################
//#  SOLUTION 2  
//#############################################################



const validDivision = d => d.split('/')[1] != 0 ? Number.isInteger(eval(d)) : 'invalid';



const validDivision = (d) => d.match(/\d+/g)[1] === "0" ? "invalid" : Number.isInteger(eval(d));



//#############################################################
//#  SOLUTION 3
//#############################################################


function validDivision(d) {
    let intOne = parseInt(d.split('/')[0])
    let intTwo = parseInt(d.split('/')[1])
    return intTwo === 0 ? 'invalid' : intOne % intTwo === 0 ? true : false
}





//#############################################################
//#  SOLUTION 4
//#############################################################


function validDivision(d) {
    var evalResult = eval(d);
    console.log(evalResult);
    if (Number.isNaN(evalResult) || evalResult == Infinity) {
        return 'invalid';
    }
    return typeof evalResult === 'number' && Number.isInteger(evalResult);
}





//#############################################################
//#  SOLUTION 5
//#############################################################


const validDivision = d => (
    [a, b] = d.split('/').map(Number),
    b === 0 ? 'invalid' : a / b === Math.floor(a / b)
);