/*

Count Substring

Implement a function count_substring that counts the number of substrings that begin with character "A" and ends with character "X".

For example, given the input string "CAXAAYXZA", there are four substrings that begin with "A" and ends with "X", namely: "AX", "AXAAYX", "AAYX", and "AYX".

Examples
countSubstring("CAXAAYXZA") ➞  4

countSubstring("AAXOXXA") ➞ 6

countSubstring("AXAXAXAXAX") ➞ 15


Notes
You should aim to avoid using nested loops to complete the task.
You can assume that the input string is composed of English upper case letters only.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function countSubstring(s) {
    return [...s].reduce((a, b, i) => a + (b == 'X' ? (s.slice(0, i + 1).match(/A/g) || []).length : 0), 0)
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const countSubstring = s => {
    const a = [],
        x = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === 'A') a.push(i);
        else if (char === 'X') x.push(i);
    }

    return a.reduce((sum, i) => sum += x.filter(j => j > i).length, 0);
};



//#############################################################
//#  SOLUTION 3
//#############################################################


function countSubstring(s) {
    var r = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] == 'A')
            r += (s.slice(i).match(/X/g) || []).length
    }
    return r
}



//#############################################################
//#  SOLUTION 4
//#############################################################



const count = (s, char = 'X', j = 0) => {
    for (const w of s)
        if (w == char) j++
            return j
}

function countSubstring(s, x = 0) {
    for (let i = 0; i < s.length; i++)
        if (s[i] == 'A') x += count(s.slice(i))
    return x
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function countX(string) {
    let result = 0
    for (const i of string)
        if (i === 'X')
            result += 1
    return result
}

function countSubstring(s) {
    let total = 0
    for (let i = 0; i < s.length; i++)
        if (s[i] === 'A')
            total += countX(s.substring(i))
    return total
}