/*

Letters Shared between Two Words

Create a function that returns the number of characters shared between two words.

Examples
sharedLetters("apple", "meaty") ➞ 2
// Since "ea" is shared between "apple" and "meaty".

sharedLetters("fan", "forsook") ➞ 1

sharedLetters("spout", "shout") ➞ 4

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function sharedLetters(str1, str2) {
    return [...new Set(str1)].filter(x => str2.includes(x)).length
}





//#############################################################
//#  SOLUTION 2  
//#############################################################


function sharedLetters(str1, str2) {
    return str2.split("").filter(x => str1.includes(x)).length;
}






//#############################################################
//#  SOLUTION 3
//#############################################################


const sharedLetters = (str1, str2) => [...new Set(str1)].filter(x => new Set(str2).has(x)).length;


sharedLetters = (s1, s2) => s2.length - s2.replace(RegExp(`[${s1}]`, 'g'), '').length






//#############################################################
//#  SOLUTION 4
//#############################################################


function sharedLetters(str1, str2) {
    return [...new Set(str1)].filter((item) => [...new Set(str2)].includes(item))
        .length;
}






//#############################################################
//#  SOLUTION 5
//#############################################################


function sharedLetters(str1, str2) {
    let count = 0
    str2.split('').forEach(x => {
        if (str1.indexOf(x) != -1) count++
    })
    return count
}