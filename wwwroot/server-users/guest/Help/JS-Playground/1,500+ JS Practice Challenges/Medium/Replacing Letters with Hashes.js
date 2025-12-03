/*

Replacing Letters with Hashes

Write a function that replaces all letters within a specified range with the hash symbol #.

Examples
replace("abcdef", "c-e") ➞ "ab###f"

replace("rattle", "r-z") ➞ "#a##le"

replace("microscopic", "i-i") ➞ "m#croscop#c"

replace("", "a-z") ➞ ""


Notes
The range will always be in order, a.k.a. for m-n, character m will always come before or equal n.
Strings will be in lower case letters only.
Return an empty string if the input is an empty string.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function replace(str, r) {
    return str.replace(new RegExp(`[${r}]`, 'g'), '#')
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const replace = (str, range) => str.replace(new RegExp(`[${range}]`, 'g'), '#');



//#############################################################
//#  SOLUTION 3
//#############################################################


function replace(str, r) {
    let [a, b] = r.split('-');
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let range = alpha.slice(alpha.indexOf(a), alpha.indexOf(b) + 1);
    return str.split('').map(x => range.indexOf(x) >= 0 ? '#' : x).join('');
}


//#############################################################
//#  SOLUTION 4
//#############################################################


function replace(str, r) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= r.charCodeAt(0) && str.charCodeAt(i) <= r.charCodeAt(2)) {
            res += "#";
        } else {
            res += str[i];
        }
    }
    return res;
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function replace(str, r) {
    var a = str.split("").map(x => x.charCodeAt())
    var b = r.split("-").map(x => x.charCodeAt())
    return a.map(x => x >= b[0] && x <= b[1] ? "#" : String.fromCharCode(x)).join("")
}





const replace = (str, r) => str.replace(new RegExp(`[${r}]`, 'g'), '#');



//#############################################################
//#  SOLUTION 6
//#############################################################


const dict = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
}

function replace(str, r) {
    const low = dict[r.split('-')[0]];
    const hi = dict[r.split('-')[1]];
    let product = '';

    [...str].forEach(l => {
        if (dict[l] >= low && dict[l] <= hi) {
            product += '#'
        } else {
            product += l
        }
    })

    return product
}




//#############################################################
//#  SOLUTION 7
//#############################################################


let replace = function replace(str, r) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        strSplit = str.split(""),
        startRangeIndex = letters.indexOf(r[0]),
        endRangeIndex = letters.indexOf(r[2]),
        lettersCopyArr = letters.slice(startRangeIndex, endRangeIndex + 1);

    for (let i = 0; i <= str.length; i++) {
        if (lettersCopyArr.includes(strSplit[i])) {
            str = str.replace(strSplit[i], '#');
        }
    }
    return str;
}
replace('javascript', 'a-d');