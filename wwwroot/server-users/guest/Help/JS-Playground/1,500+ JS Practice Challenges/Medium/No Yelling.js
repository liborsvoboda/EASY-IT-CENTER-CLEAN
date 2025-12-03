/*

No Yelling

Create a function that transforms sentences ending with multiple question marks ? or exclamation marks ! into a sentence only ending with one without changing punctuation in the middle of the sentences.

Examples
noYelling("What went wrong?????????") ➞ "What went wrong?"

noYelling("Oh my goodness!!!") ➞ "Oh my goodness!"

noYelling("I just!!! can!!! not!!! believe!!! it!!!") ➞ "I just!!! can!!! not!!! believe!!! it!"
// Only change repeating punctuation at the end of the sentence.

noYelling("Oh my goodness!") ➞ "Oh my goodness!"
// Do not change sentences where there exists only one or zero exclamation marks/question marks.

noYelling("I just cannot believe it.") ➞ "I just cannot believe it."


Notes
Only change ending punctuation - keep the exclamation marks or question marks in the middle of the sentence the same (see third example).
Don't worry about mixed punctuation (no cases that end in something like ?!??!).
Keep sentences that do not have question/exclamation marks the same.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function noYelling(phrase) {
    return phrase.replace(/([?!])+$/g, '$1')
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



const noYelling = phrase => phrase.replace(/([?!])[?!]+$/g, (_, g1) => g1);



let noYelling = p => p.replace(/[!?]{2,}$/, x => x.match(/([!?]?)/)[1])



//#############################################################
//#  SOLUTION 3
//#############################################################


function noYelling(phrase) {
    return /[!?]+$/.test(phrase) ? phrase.replace(/\?*?!*?$/i, e => e[0]) : phrase
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function noYelling(phrase) {
    let index = phrase.length - 1
    while (phrase[index] === '?' || phrase[index] === '!') {
        index--
    }
    return phrase.slice(0, index + 2)



    //#############################################################
    //#  SOLUTION 5
    //#############################################################


    function noYelling(phrase) {
        return phrase.replace(/[\!\?]{2,}$/, v => v.substr(0, 1));
    }



    function noYelling(phrase) {
        return phrase.split(' ').map((word, index, arr) => index != arr.length - 1 ? word : word.replace(/\?|\!/g, ((char, index) => index == word.length - 1 ? char : ""))).join(' ')
    }