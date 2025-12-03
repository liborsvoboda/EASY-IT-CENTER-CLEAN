/*
Counting Adverbs

Create a function that counts the number of adverbs in a sentence. An adverb is a word that ends with ly.

Examples
countAdverbs("She ran hurriedly towards the stadium.") ➞ 1

countAdverbs("She ate the lasagna heartily and noisily.") ➞ 2

countAdverbs("He hates potatoes.") ➞ 0

countAdverbs("He was happily, crazily, foolishly over the moon.") ➞ 3

Notes
Do NOT count words where the ly is in the beginning or the middle (e.g. Lysol, Illya).
For the purpose of this exercise, ignore the nuances of the English language (some adjectives also end in ly).

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const countAdverbs = (sentence) => {
    return sentence.match(/[^\.\,]/g)
        .join('').split(' ')
        .filter(x => x.endsWith('ly')).length;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function countAdverbs(sentence) {
    return sentence.replace(/[.,]/g, "").split(" ").filter(word => word.slice(-2) == 'ly').length
}




const countAdverbs = (sentence) => sentence.split(/\W/g).filter(x => x.endsWith("ly")).length;



//#############################################################
//#  SOLUTION 3
//#############################################################



function countAdverbs(sentence) {
    return sentence.split(/[^a-zA-Z]/).filter(word => word.endsWith("ly")).length;
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function countAdverbs(sentence) {
    A = sentence.split(" ")
    count = 0
    for (var x = 0; x < A.length; x++) {
        if (A[x].endsWith("ly") || A[x].endsWith("ly.") || A[x].endsWith("ly,")) { count++ }
    }
    return count
}



//#############################################################
//#  SOLUTION 5
//#############################################################



function countAdverbs(sentence) {
    let counter = 0;
    sentence.split(' ').forEach((word) => {
        if (word.endsWith('ly') || word.endsWith('ly.') || word.endsWith('ly,')) counter++
    })
    return counter
}