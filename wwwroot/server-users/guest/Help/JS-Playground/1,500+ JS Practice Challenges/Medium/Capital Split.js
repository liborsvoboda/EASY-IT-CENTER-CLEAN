/*

Capital Split

Create a function which adds spaces before every capital in a word. Uncapitalize the whole string afterwards.

Examples
capSpace("helloWorld") ➞ "hello world"

capSpace("iLoveMyTeapot") ➞ "i love my teapot"

capSpace("stayIndoors") ➞ "stay indoors"

Notes
The first letter will stay uncapitalized.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function capSpace(txt) {
    return txt.replace(/[A-Z]/g, letter => ` ${letter.toLowerCase()}`);
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


function capSpace(txt) {
    let regx = /[A-Z]/g
    return txt.replace(regx, match => ' ' + match).toLowerCase();
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function capSpace(txt) {
    function upperToSpaceLower(match, offset, string) {
        return (offset > 0 ? ' ' : '') + match.toLowerCase();
    }
    return txt.replace(/[A-Z]/g, upperToSpaceLower);
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function capSpace(txt) {
    return [...txt].map(x => x == x.toUpperCase() ? ' ' + x.toLowerCase() : x).join ``;
}




//#############################################################
//#  SOLUTION 5
//#############################################################



function capSpace(str) {
    var arr = [];
    str.split('').forEach(letter => {
        letter == letter.toLowerCase() ? arr.push(letter) : arr.push((' ' + letter.toLowerCase()));
    });
    return arr.join('');
}




//#############################################################
//#  SOLUTION 6
//#############################################################

function capSpace(txt) {
    let newTxt = '';
    for (let i = 0; i < txt.length; i++) {
        if (/[A-Z]/.test(txt[i])) {
            newTxt += ' ' + txt[i];
        } else {
            newTxt += txt[i];
        }
    };
    return newTxt.toLowerCase();
}