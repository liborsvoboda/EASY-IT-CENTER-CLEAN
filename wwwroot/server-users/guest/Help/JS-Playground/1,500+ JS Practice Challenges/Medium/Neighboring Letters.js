/*

Neighboring Letters

Create a function that takes a string and checks if every single character is preceded and followed by a character based on the english alphabet. Example: "c" should be preceded by "b" and followed by "d" (bcd === true).

Examples
neighboring("abcdedcba") ➞ true

neighboring("efghihfe") ➞ false

neighboring("qrstuv") ➞ false

neighboring("mnopqrtstrqpomn") ➞ true

Notes
All test cases will be in lower case.
*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const neighboring = ([...str]) =>
    str.slice(1).every((char, index) =>
        Math.abs(+char.charCodeAt() - str[index].charCodeAt()) === 1);


//#  SOLUTION 2  


function neighboring(str) {
    const strArr = str.split("");
    return strArr.every((char, i) => {
        if (i === 0) return true;
        return Math.abs(char.charCodeAt() - strArr[i - 1].charCodeAt()) == 1;
    })
}


//#  SOLUTION 3


const neighboring = str => {
    let result = true;
    for (let i = 1; i < str.length; i++) {
        if (Math.abs(str.charCodeAt(i) - str.charCodeAt(i - 1)) > 1 ||
            str.charAt(i) === str.charAt(i - 1)) {
            result = false;
        }
    }
    return result;
};


//#  SOLUTION 4

const neighboring = str => [...str].every((x, i) => i == 0 ? Math.abs(x.charCodeAt(0) - [...str][i + 1].charCodeAt(0)) == 1 : (i == [...str].length - 1 ? Math.abs(x.charCodeAt(0) - [...str][i - 1].charCodeAt(0)) == 1 : Math.abs(x.charCodeAt(0) - [...str][i + 1].charCodeAt(0)) == 1 && Math.abs(x.charCodeAt(0) - [...str][i - 1].charCodeAt(0)) == 1))

const neighboring = s => [...s].slice(1).every((v, i) => Math.abs((v.charCodeAt() - 96) - (s[i].charCodeAt() - 96)) === 1)

const neighboring = str => [...str].map(e => e.charCodeAt(0)).every((e, i, arr) => i == 0 ? true : Math.abs(e - arr[i - 1]) == 1);


const neighboring = (str, cc = [...str].map(v => v.charCodeAt())) =>
    cc.slice(1, -1).every((v, i) => Math.abs(v - cc[i]) === 1 &&
        Math.abs(v - cc[i + 2]) === 1);





//#  SOLUTION 5


const neighboring = str => {
    let myalph = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    let alpharr = myalph.split(' ');
    let strArr = str.split('');
    const testOrder = (el, i) => {
        if (i === strArr.length - 1) { return true }
        const testLett = strArr[i + 1];
        const previous = alpharr.indexOf(el) - 1;
        const next = alpharr.indexOf(el) + 1;
        if (testLett === alpharr[previous] || testLett === alpharr[next]) {
            return true;
        } else {
            return false;
        }
    }
    return strArr.every(testOrder);
};



//#  SOLUTION 6

const neighboring = str => {
    return str.split('').every((char, i) => (!str[i - 1] || Math.abs(char.charCodeAt(0) - str[i - 1].charCodeAt(0)) === 1) &&
        (!str[i + 1] || Math.abs(char.charCodeAt(0) - str[i + 1].charCodeAt(0))));
};