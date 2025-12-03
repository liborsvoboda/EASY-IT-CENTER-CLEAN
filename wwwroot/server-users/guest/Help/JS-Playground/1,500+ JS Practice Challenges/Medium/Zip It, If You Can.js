/*

Zip It, If You Can?

Given an array of women and an array of men, either:

Return "sizes don't match" if the two arrays have different sizes.
If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
Examples
zipIt(["Elise", "Mary"], ["John", "Rick"])
 ➞ [["Elise", "John"], ["Mary", "Rick"]]

zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
 ➞ "sizes don't match"

zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
 ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################



const zipIt = (women, men) => {
    if (women.length === men.length) {
        return women.map((woman, i) => [woman, men[i]]);
    }
    return `sizes don't match`;
};




//#############################################################
//#  SOLUTION 2  
//#############################################################


const zipIt = (w, m) => w.length === m.length && w.map((e, i) => [e, m[i]]) || "sizes don't match";




//#############################################################
//#  SOLUTION 3
//#############################################################



const zipIt = (women, men) =>
    women.length === men.length ?
    women.map((elsement, index) => [elsement, men[index]]) :
    "sizes don't match"




//#############################################################
//#  SOLUTION 4
//#############################################################


function zipIt(women, men) {
    var i = 0;
    if (women.length != men.length) {
        return "sizes don't match";
    } else {
        return women.map(x => [x, men[i++]])
    }
}




//#############################################################
//#  SOLUTION 5
//#############################################################


const zipIt = (women, men) =>
    women.length == men.length ?
    women.map((el, i) => [el, men[i]]) :
    "sizes don't match";




let zipIt = (w, m) => w.length != m.length ? "sizes don't match" : w.map((x, i) => [x, m[i]])




function zipIt(women, men) {
    if (women.length !== men.length) return "sizes don't match"
    return women.map((e, i) => [e, men[i]])
}