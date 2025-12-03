/*

Adding Up Letters

Create a function addLetters that takes a list/array of letters a, and returns the "sum" of them.

To add two letters, take their number value, add them together, and convert it back together. For example, a would be 1, b would be 2, etc. So to add b and c, take 2 + 3 = 5, and then get the fifth letter of the alphabet (e).

So then d + e + f would be 4 + 5 + 6 = 15, and the fifteenth letter is o, so that's what you return.

Letters can also wrap. Like with y + c, that's 25 + 3 = 28, which doesn't exist. Consider that the 27th letter just wraps around and ends back up at a. With this logic, y + c = b. Don't just do 27 = 1 though, because you could end up with a much higher sum like 70.

Examples
addLetters(["a"]) ➞ "a"
addLetters(["a", "b"]) ➞ "c"
addLetters(["a", "b", "c"]) ➞ "f"
addLetters(["a", "b", "c", "d", "e", "f"]) ➞ "u"
addLetters(["y", "a"]) ➞ "z"
addLetters(["y", "c"]) ➞ "b"
addLetters(["z", "a"]) ➞ "a"
addLetters(["x", "y", "z"]) ➞ "w"
addLetters([]) ➞ "z"

Notes
Don't forget to return the result.
An empty array should return z. The logic behind this is that if you get a sum of 0, then wrap it all the way around backwards (since the 0th letter doesn't exist), giving you 26 which = z.
All letters given will be lowercase.
*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


const addLetters = a => String.fromCharCode((a.reduce((s, c) => s + c.charCodeAt() - 96, 0) % 26 || 26) + 96);


const addLetters = a => String.fromCharCode((a.reduce((a, b) => a + b.charCodeAt() - 96, 0) % 26 || 26) + 96);


const addLetters = a => String.fromCharCode((x => x < 0 ? 25 : x)(a.reduce((a, b) => a + b.charCodeAt() - 96, -1)) % 26 + 97);


//#############################################################
//#  SOLUTION 2  
//#############################################################


function addLetters(a) {
    const sum = a.reduce((a, c) => a + c.charCodeAt() - 96, 0)
    return String.fromCharCode(sum === 0 ? 122 : sum <= 26 ? sum + 96 : sum % 26 + 96)
}





//#############################################################
//#  SOLUTION 3
//#############################################################


addLetters = r =>
    (a = String.fromCharCode(r.reduce((a, b) => a + b.charCodeAt(0) - 96, 0) % 26 + 96)) == "`" ?
    "z" : a





//#############################################################
//#  SOLUTION 4
//#############################################################


const addLetters = a => {
    const alpha = 'zabcdefghijklmnopqrstuvwxy';
    return alpha[[...a].reduce((a, b) => a + alpha.indexOf(b), 0) % 26]
}




//#############################################################
//#  SOLUTION 5
//#############################################################



function addLetters(a) {
    let w = a.map(e => e.charCodeAt(0) - 96).reduce((a, b) => a + b, 0) % 26;
    return !a[0] || w == 0 ? 'z' : String.fromCharCode(w + 96);
}





//#############################################################
//#  SOLUTION 6
//#############################################################


function addLetters(a) {
    let arr = a.map(e => e.charCodeAt(0)).reduce((a, v) => a + (v - 96), 0);
    while (arr > 26) {
        arr -= 26;
    }
    return a.length === 0 ? 'z' : String.fromCharCode(arr + 96);
}