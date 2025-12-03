/*

Same on Both Ends

Given a sentence, return the number of words which have the same first and last letter.

Examples
countSameEnds("Pop! goes the balloon") ➞ 1

countSameEnds("And the crowd goes wild!") ➞ 0

countSameEnds("No I am not in a gang.") ➞ 1


Notes
Don't count single character words (such as "I" and "A" in example #3).
The function should not be case sensitive, meaning a capital "P" should match with a lowercase one.
Mind the punctuation!
Bonus points indeed for using regex!

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function countSameEnds(s) {
    return (s.match(/\b([a-z])\w*\1\b/ig) || []).length
}


//#############################################################
//#  SOLUTION 2  
//#############################################################


function countSameEnds(str) {
    str = str.toLowerCase().replace(/[.!]/g, '').split(' ').filter(el => el.length != 1)
    return str.filter(el => el.charAt(0) == el.slice(-1)).length
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function countSameEnds(str) {
    return str.toLowerCase().replace(/[^ a-z]/g, '').split(' ').filter(x => x.length > 1 && x[0] == x.slice(-1)).length
}


//#############################################################
//#  SOLUTION 4
//#############################################################


const countSameEnds = str => (str.match(/\b(\w)\w*\1\b/gi) || []).length;


//#############################################################
//#  SOLUTION 5
//#############################################################


function countSameEnds(str) {
    return (str.match(/\b([a-z])[a-z]+\1[^a-z]*\b/gi) || []).length
}


//#############################################################
//#  SOLUTION 6
//#############################################################


function countSameEnds(str) {
    return str
        .toLowerCase()
        .match(/\w{2,}/g)
        .filter(a => a[0] == a[a.length - 1])
        .length
}


//#############################################################
//#  SOLUTION 7
//#############################################################


const countSameEnds = (str) =>
    str.toLowerCase().replace(/[^a-z\s]/g, '').split(' ')
    .filter(e => e[0] == e[e.length - 1] && e.length > 1).length;