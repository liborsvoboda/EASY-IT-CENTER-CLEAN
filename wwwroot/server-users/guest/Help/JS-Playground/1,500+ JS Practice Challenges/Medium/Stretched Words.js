/*

Stretched Words

Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.

Examples
unstretch("ppoeemm") ➞ "poem"

unstretch("wiiiinnnnd") ➞ "wind"

unstretch("ttiiitllleeee") ➞ "title"

unstretch("cccccaaarrrbbonnnnn") ➞ "carbon"

Notes
Final strings won't include words with double letters (e.g. "passing", "lottery").

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const unstretch = word => word.replace(/(.)\1+/g, '$1');


const unstretch = word => word.match(/(.)\1*/g).map(e => e[0]).join("")



//#############################################################
//#  SOLUTION 2  
//#############################################################


function unstretch(word) {
    const result = [];
    const input = Array.isArray(word) ? word : word.split('');
    for (i = 0; i < input.length; ++i) {
        if (input[i] == input[i + 1]) continue;
        result.push(input[i]);
    }
    return result.join('');
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function unstretch(word) {
    let hold = 0;
    return word.split("").filter((x, y, z) => hold != x ? hold = x : false).join("");
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function unstretch(word) {
    return [...word].filter((v, i) => i > 0 ? v !== word[i - 1] : v).join('')
}



//#############################################################
//#  SOLUTION 5
//#############################################################



function unstretch(word) {
    return word.split("").filter((x, i, a) => x != a[i + 1]).join("")
}