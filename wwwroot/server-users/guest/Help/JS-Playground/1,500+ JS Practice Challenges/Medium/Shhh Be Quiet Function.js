/*

Shhh Be Quiet Function

Write a function that removes all capitals letters from a sentence except the first letter, put quotation marks around the sentence and add ", whispered Edabit." to the end.

Examples
shhh("HI THERE!") ➞ '"Hi there!", whispered Edabit.'

shhh("tHaT'S Pretty awesOme") ➞ '"That's pretty awesome", whispered Edabit.'

shhh("") ➞ '"", whispered Edabit.'

Notes
Don't forget to surround the original string with double quotation marks "".
*/

//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function shhh(sentence) {
    return `"${sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()}", whispered Edabit.`
}



//#  SOLUTION 2  

function shhh(sentence) {
    let lowered = `"${sentence.toLowerCase()}", whispered Edabit.`;
    return lowered[0] + lowered[1].toUpperCase() + lowered.slice(2);
}



//#  SOLUTION 3

function shhh(sentence) {
    sentence = sentence.toLowerCase();
    sentence = sentence.charAt(0).toUpperCase() + sentence.substr(1, sentence.length - 1)
    return "\"" + sentence + "\", whispered Edabit."
}



//#  SOLUTION 4


const shhh = sentence => `"${(sentence[0] || '').toUpperCase()}${sentence.slice(1).toLowerCase()}", whispered Edabit.`;


function shhh(sentence) {
    return JSON.stringify(sentence.slice(0, 1).toUpperCase() + sentence.slice(1).toLowerCase()) + ', whispered Edabit.'
}



//#  SOLUTION 5



function shhh(sentence) {
    var s = sentence[0] || '',
        ss = sentence.substr(1) || '';
    s = s.toUpperCase();
    ss = ss.toLowerCase();
    return '"' + s + ss + '", whispered Edabit.';
}



//#  SOLUTION 6


function shhh(sentence) {
    return `${JSON.stringify(!sentence ? '' : sentence[0].toUpperCase() + sentence.slice(1).toLowerCase())}, whispered Edabit.`
}