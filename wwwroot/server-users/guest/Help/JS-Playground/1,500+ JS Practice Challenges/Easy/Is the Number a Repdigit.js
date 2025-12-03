/*

Is the Number a Repdigit
A repdigit is a positive number composed out of the same digit.

Create a function that takes an integer and returns whether it's a repdigit or not.

Examples
isRepdigit(66) ➞ true

isRepdigit(0) ➞ true

isRepdigit(-11) ➞ false
Notes
The number 0 should return true (even though it's not a positive number).
Check the Resources tab for more info on repdigits.


*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################

/*  Solution 1   */


function isRepdigit(num) {
    return String(num).split('').every((x, i, arr) => x === arr[0])
}


/*  Solution 2   */

const isRepdigit = n => new Set(`${n}`).size === 1;

const isRepdigit = num => new Set('' + num).size === 1;

const isRepdigit = num => num >= 0 && new Set([...
    `${num}`
]).size === 1;

const isRepdigit = n => n >= 0 ? new Set(n.toString()).size === 1 : false;

const isRepdigit = n => [...String(n)].every(nx => nx === String(n).slice(0, 1))

const isRepdigit = num => /^(\d)\1*$/.test(num);



/*  Solution 3   */


function isRepdigit(num) {
    num += "";
    for (i = 0; i < num.length; i++) {
        if (num[i] != num[0]) {
            return false;
        }
    }
    return true;
}



function isRepdigit(num) {
    let arr = String(num).split('');
    let letter = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== letter) return false
    };
    return true;
}



function isRepdigit(num) {
    // return false if a negative number
    if (num <= 0) return false;
    // return true if a positive single digit number
    if (num < 10) return true;
    //Put both digits into an array(will only work on numbers up to 99)
    const arr = num.toString().split("");
    if (arr[0] === arr[1]) return true;
    return false;

}




function isRepdigit(num) {
    if (num < 0) { return false }
    let arr = String(num).split('')
    return arr.every(char => char === arr[0])
}






function isRepdigit(num) {
    if (num < 0) {
        return false;
    } else {
        let unique = new Set(num.toString().split(''));
        return unique.size === 1;
    }
}




function isRepdigit(nume) {
    var i = 1;
    if (!nume.toString()[1]) {
        return true;
    } else {
        while (i < nume.toString().length) {
            if (nume.toString()[i] !== nume.toString()[0]) {
                return false;
                break;
            }
            i++;
            return true;
        }
    }
}




function isRepdigit(num) {
    let arr = num.toString().split('');
    const constant = arr[0];
    let boole = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== constant) {
            boole = false;
        }
    }
    return boole;
}