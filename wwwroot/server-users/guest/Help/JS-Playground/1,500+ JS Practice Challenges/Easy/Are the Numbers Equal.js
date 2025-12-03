/*  

Are the Numbers Equal?
Create a function that takes two integers and checks if they are equal.

Examples
isEqual(5, 6) ➞ false

isEqual(1, 1) ➞ true

isEqual("1", 1) ➞ false
Notes
If there is a string then it should return false.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#    SOLUTION 1


function isEqual(num1, num2) {
    return Number.isInteger(num1, num2) &&
        num1 == num2;
}



//#    SOLUTION 2

const isEqual = (n1, n2) => n1 === n2 && n1 === +n1;

const isEqual = (n1, n2) => typeof n1 == 'string' ? false : n1 === n2;



//#    SOLUTION 3

const isEqual = (n1, n2) => {
    return typeof n1 === "string" || typeof n2 === "string" ?
        false : n1 === n2;
}




//#    SOLUTION 4

function isEqual(num1, num2) {
    return typeof num1 === "number" && typeof num2 === "number" && num1 === num2;
}




//#    SOLUTION 5

function isEqual(num1, num2) {
    return typeof num1 == "string" || typeof num1 == "string" ? false : num1 == num2;
}





//#    SOLUTION 6

function isEqual(num1, num2) {

    if (typeof num1 === 'string')
        return false
    if (typeof num2 === 'string')
        return false

    if (num1 === num2)

        return true
    else if (num1 !== num2)
        return false

}



//#    SOLUTION 7


function isEqual(num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return false;
    } else {
        return num1 === num2 ? true : false;
    }
}





//#    SOLUTION 8


function isEqual(num1, num2) {

    let ternary = num1 === num2 ? true : false

    let check = typeof num1 && typeof num2 === 'string' ? false : ternary
    return check




}

isEqual(3, 5)




//#    SOLUTION 9

function isEqual(num1, num2) {
    if (!Number.isInteger(num1) && !Number.isInteger(num2)) return false;
    return num1 === num2;
}