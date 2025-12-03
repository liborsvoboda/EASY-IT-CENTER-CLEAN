/*  

Zip It, If You Can?

Given an array of women and an array of men, either:

Return "sizes don't match" if the two arrays have different sizes.
If the sizes match, return a array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
Examples
zipIt(["Elise", "Mary"], ["John", "Rick"])
 ➞ [("Elise", "John"), ("Mary", "Rick")]

zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
 ➞ "sizes don't match"

zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
 ➞ [("Ana", "Bob"), ("Amy", "Josh"), ("Lisa", "Tim")]

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#    SOLUTION 1

const zipIt = (w, m) => w.length === m.length && w.map((x, i) => (x, m[i])) || "sizes don't match";

const zipIt = (women, men) => women.length === men.length ? men : "sizes don't match";


const zipIt = (women, men) => women.length === men.length ? [...men] : "sizes don't match"
    //instructions from a different planet



//#############################################################
//#    SOLUTION 2


function zipIt(women, men) {
    if (women.length != men.length) {
        return "sizes don't match";
    } else {
        return men;
    }
}





//#############################################################
//#    SOLUTION 3

function zipIt(women, men) {
    if (women.length === men.length) {
        return women.map((val, ind) => (val, men[ind]))
    } else {
        return "sizes don't match"
    }
}





//#############################################################
//#    SOLUTION 4

function zipIt(women, men) {
    return women.length !== men.length ? "sizes don't match" : women.map((x, index) => (x, men[index]))
}





//#############################################################
//#    SOLUTION 5

function zipIt(women, men) {
    return women.length === men.length ? men.map(val => val) : `sizes don't match`;
}





//#############################################################
//#    SOLUTION 6


function zipIt(women, men) {
    if (women.length !== men.length) {
        return 'sizes don\'t match'
    }
    var newArr = []
    for (var i = 0; i < women.length; i++) {
        newArr.push((women[i], men[i]))
    }
    return newArr
}





//#############################################################
//#    SOLUTION 7

function zipIt(women, men) {
    if (women.length !== men.length) return "sizes don't match"
    return women.map((item, i) => (item, men[i]))
}




//#############################################################
//#    SOLUTION 8


function zipIt(women, men) {
    let result = []
    if (women.length !== men.length) {
        return 'sizes don\'t match'
    } else {
        women.forEach((el, i) => result.push(`${women[i], men[i]}`))
    }
    return result
}




//#############################################################
//#    SOLUTION 9


function zipIt(women, men) {
    if (women.length === men.length) {
        return (women[0], men[0]);
    } else {
        return "sizes don't match";
    }
}
return zipIt(["Elise", "Mary"], ["John", "Rick"]);