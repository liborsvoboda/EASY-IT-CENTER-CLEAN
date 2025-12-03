/*

First N Mid

Create a function that takes a string and returns the first character of every word if the length of the word is even and the middle character if the length of the word is odd.

Examples
stmid("Alexa have to paid") ➞ "ehtp"
// "e" is the middle character of "Alexa"
// "h" is the first character of "have"

stmid("Th3 0n3 4nd 0n1y") ➞ "hnn0"

stmid("who is the winner") ➞ "hihw"

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################

const stmid = str => str.split(" ").map(w => w[(l = w.length) % 2 && l / 2 | 0]).join("");

function stmid(str) {
    return str.split(' ').map(i => i.length % 2 ? i[Math.floor(i.length / 2)] : i[0]).join('');
}


//#############################################################
//#  SOLUTION 2  
//#############################################################



function stmid(str) {
    return str.split(' ')
        .map(item => item.length % 2 ? item.charAt(item.length / 2 << 0) : item.charAt(0))
        .reduce((a, b) => a + b);
}



//#############################################################
//#  SOLUTION 3
//#############################################################



function stmid(str) {
    return (str.split(" ").map(i => {
        return (i.length % 2 == 0) ? i[0] : i[Math.floor(i.length / 2)];
    })).join("");
}


//#############################################################
//#  SOLUTION 4
//#############################################################


const stmid = str =>
    str.split ` `.map(word => word.length % 2 === 0 ? word[0] :
        word.slice(Math.floor(word.length / 2), Math.floor(word.length / 2) + 1))
    .join ``;





//#############################################################
//#  SOLUTION 5
//#############################################################

function indexFilter(idx, str) {
    let result = [];
    const arr = str.split('');
    for (let i = 0; i < idx.length; i++) {
        if (idx[i] < 0) {
            result.push(arr[arr.length + idx[i]])
        } else {
            result.push(arr[idx[i]])
        }
    }
    return result.join('').toLowerCase();
}