/*

Check If All Values Are True

Create a function that returns true if all parameters are truthy, and false otherwise.

Examples
allTruthy(true, true, true) ➞ true

allTruthy(true, false, true) ➞ false

allTruthy(5, 4, 3, 2, 1, 0) ➞ false

Notes
Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
You will always be supplied with at least one parameter.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1 
//#############################################################


const allTruthy = (...args) => args.every(Boolean);


allTruthy = (...args) => !!args.reduce((a, c) => a && c)

const allTruthy = (...args) => args.every(Boolean);

const allTruthy = (...args) => args.every(i => Boolean(i) === true);

const allTruthy = (...args) => [...args].every(i => i);

const allTruthy = (...args) => args.every(i => Boolean(i) === true);




//#############################################################
//#  SOLUTION 2  
//#############################################################


function allTruthy(...args) {
    for (let o of args) {
        if (!o) {
            return false
        }
    }
    return true
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function allTruthy(...args) {
    return args.every(function(item, index) {
        if (!!item === false) {
            return false
        }
        return true
    })
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function allTruthy(...args) {
    let r = true;
    args.forEach(arg => {
        if (!arg) r = false
    })
    return r;
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function allTruthy(...args) {
    let t = true,
        f = true
    for (i in args) {
        args[i] ? t = true : f = false
    }
    return t && f
}




//#############################################################
//#  SOLUTION 6
//#############################################################


function allTruthy(...args) {
    let f = [false, NaN, undefined, "", 0, null];
    let arr = [...new Set(args)];
    return arr.filter((e) => f.includes(e)).length === 0;
}



//#############################################################
//#  SOLUTION 7
//#############################################################


function allTruthy(...args) {
    for (let index = 0; index < [...args].length; index++) {
        if (!![...args][index] === false) {
            return false
            break;
        }
    }
    return true
}



//#############################################################
//#  SOLUTION 8
//#############################################################



function allTruthy(...args) {
    return args.reduce((t, c) => t && !!c) || false;
}