/*

Spelling it Out
Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

Examples
spelling("bee") ➞ ["b", "be", "bee"]

spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]

spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
Notes

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




/*  Solution 1   */


const spelling = str => Array.from({ length: str.length }, (_, i) => str.slice(0, i + 1));

const spelling = str => [...str].map((value, index) => str.slice(0, index + 1))



/*  Solution 2   */

function spelling(str) {
    let arr = []
    for (let i = 1; i < str.length + 1; i++) {
        arr.push(str.slice(0, i))
    }
    return arr
}




function spelling(str) {
    var arr = [];
    for (var i = 1; i <= str.length; i++) {
        arr.push(str.slice(0, i));
    }
    return arr;
}






const spelling = str => {
    let arr = [];
    for (let i = 1; i <= str.length; i++)
        arr.push(str.substr(0, i));
    return arr;
}


/*  Solution 3   */


function spelling(str) {
    return str.split('').map((x, i) => str.substr(0, i + 1))
}


function spelling(str) {
    const answer = Array(str.length);
    for (let i = 0; i < str.length; i++) {
        answer[i] = str.substring(0, i + 1)
    }
    return answer;
}