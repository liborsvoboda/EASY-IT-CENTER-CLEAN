/*

Adding Numbers

Create a function that takes two number strings and returns their sum as a string.

Examples
add("111", "111") ➞ "222"

add("10", "80") ➞ "90"

add("", "20") ➞ "Invalid Operation"

Notes
If any input is "", undefined or null, return "Invalid Operation".

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function add(numberOne, numberTwo) {
    return !numberOne || !numberTwo ? 'Invalid Operation' : `${+numberOne + +numberTwo}`;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function add(numberOne, numberTwo) {
    if (numberOne === "" || numberOne === undefined || numberOne === null || numberTwo === "" || numberTwo === undefined || numberTwo === null) {
        return "Invalid Operation"
    } else {
        return (Number(numberOne) + Number(numberTwo)).toString()
    }
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function add(numberOne, numberTwo) {
    let falseyValues = ["", null, undefined],
        answer = null;

    if (falseyValues.indexOf(numberOne) === -1 && falseyValues.indexOf(numberTwo) === -1) {
        answer = String(Number(numberOne) + Number(numberTwo));
    } else {
        answer = "Invalid Operation";
    }

    return answer;

}




//#############################################################
//#  SOLUTION 4
//#############################################################


const sum = arr => arr.reduce((a, e) => a + e, 0);

const add = (...nums) => {
    const isInvalid = nums.some(e => [undefined, null, ''].includes(e));
    return isInvalid ? 'Invalid Operation' : String(sum(nums.map(Number)));
};




//#############################################################
//#  SOLUTION 5
//#############################################################.


function add(n1, n2) {
    if (!n1 || !n2) return 'Invalid Operation'
    return String(Number(n1) + Number(n2))
}





//#############################################################
//#  SOLUTION 6
//#############################################################.


function add(numberOne, numberTwo) {
    if (numberOne == "" || numberOne == undefined || numberOne == null) {
        return "Invalid Operation"
    }
    if (numberTwo == "" || numberTwo == undefined || numberTwo == null) {
        return "Invalid Operation"
    }

    return (parseInt(numberOne) + parseInt(numberTwo)).toString()
}





//#############################################################
//#  SOLUTION 7
//#############################################################.


function add(a, b) {
    return (a && b && `${+a + +b}`) || "Invalid Operation";
}





//#############################################################
//#  SOLUTION 8
//#############################################################.


function add(numberOne, numberTwo) {
    if (![...arguments].every(validityCheck)) return "Invalid Operation";
    return `${+numberOne + +numberTwo}`;
}

function validityCheck(arg) {
    if (typeof arg !== "string") return false;
    if (arg.length === 0) return false;
    return true
}