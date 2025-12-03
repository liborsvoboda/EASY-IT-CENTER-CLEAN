/*



What's Hiding Amongst the Crowd?
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
Examples
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
Notes

*/






/*  Solution 1   */


function detectWord(str) {
    return [...str].filter(item => item == item.toLowerCase()).join("");
}




const detectWord = s => s.replace(/[A-Z]/g, '')



/*  Solution 2   */

const detectWord = str => str.replace(/[A-Z]/g, '');

const detectWord = str => str.match(/[a-z]/g).join('');

const detectWord = s => [...s].filter(a => /[a-z]/.test(a)).join('');

const detectWord = str => str.match(/[a-z]/g).join ``;


/*  Solution 3   */


function detectWord(str) {
    let regex = (/[a-z]/g);
    let arr = str.split("");
    let filteredArr = arr.filter(x => x.match(regex));
    return filteredArr.join("");
}




function detectWord(str) {
    let daWurdz = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            daWurdz += str[i];
        }
    }
    return daWurdz;
}




function detectWord(str) {
    return str.split("").filter(elem => /[a-z]/g.test(elem)).join("");
}



const detectWord = (str) => {
    let newStr = []
    for (i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === str[i]) {
            newStr.push(str[i])
        }
    }
    return newStr.join('')
}