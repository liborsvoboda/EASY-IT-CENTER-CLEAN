/*

Remove Repeated Letters

Create a function that replaces all consecutively repeated letters in a word with single letters.

Examples
removeRepeats("aaabbbccc") ➞ "abc"

removeRepeats("bookkeeper") ➞ "bokeper"

removeRepeats("nananana") ➞ "nananana"

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


const removeRepeats = s => s.replace(/(.)\1+/g, '$1');



//#############################################################
//#  SOLUTION 2  
//#############################################################



function removeRepeats(str) {
    return [...str].filter((char, i) => char !== str[i + 1]).join('');
}



//#############################################################
//#  SOLUTION 3
//#############################################################



function removeRepeats(str) {
    return str.split('').filter((n, i, arr) => n != arr[i + 1]).join('');
}


//#############################################################
//#  SOLUTION 4
//#############################################################


function removeRepeats(str) {
    const answer = [str[0]]
    for (const v of[...str]) {
        if (answer[answer.length - 1] !== v) {
            answer.push(v)
        }
    }
    return answer.join('')
}