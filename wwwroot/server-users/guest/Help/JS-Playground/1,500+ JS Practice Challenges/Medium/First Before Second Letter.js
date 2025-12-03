/*

First Before Second Letter

You are given three inputs: a string, one letter, and a second letter.

Write a function that returns true if every instance of the first letter occurs before every instance of the second letter.

Examples
firstBeforeSecond("a rabbit jumps joyfully", "a", "j") ➞ true
// every instance of "a" occurs before every instance of "j"

firstBeforeSecond("knaves knew about waterfalls", "k", "w") ➞  true

firstBeforeSecond("happy birthday", "a", "y") ➞ false
// the "a" in "birthday" occurs after the "y" in "happy"

firstBeforeSecond("precarious kangaroos", "k", "a") ➞ false


Notes
All strings will be in lower case.
All strings will contain the first and second letters at least once.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function firstBeforeSecond(s, first, second) {
    return s.indexOf(second) > s.lastIndexOf(first);
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const firstBeforeSecond = (s, first, second) => s.lastIndexOf(first) < s.indexOf(second)





//#############################################################
//#  SOLUTION 3
//#############################################################


const firstBeforeSecond = (str, first, second) => {
    const matches = str.match(new RegExp(`[${first}${second}]`, 'g')) || [];
    return new RegExp(`^${first}+${second}+$`).test(matches.join(''));
};


//#############################################################
//#  SOLUTION 4
//#############################################################


function firstBeforeSecond(s, first, second) {
    var indexesFirst = [],
        i = -1;
    while ((i = s.indexOf(first, i + 1)) != -1) {
        indexesFirst.push(i);
    }
    var highestFirstNumber = Math.max(...indexesFirst);
    var indexesSecond = [],
        i = -1;
    while ((i = s.indexOf(second, i + 1)) != -1) {
        indexesSecond.push(i);
    }
    var highestSecondNumber = Math.min(...indexesSecond);
    if (highestFirstNumber < highestSecondNumber) return true
    else { return false }
}




//#############################################################
//#  SOLUTION 5
//#############################################################



const firstBeforeSecond = (s, first, second) => {
    let firstLet = s.split('').map((x, i) => x === first ? i : null)
        .filter(Boolean);
    let secondLet = s.split('').map((x, i) => x === second ? i : null)
        .filter(Boolean);

    return firstLet.every(x => x < secondLet[0]);
}






//#############################################################
//#  SOLUTION 6
//#############################################################


function firstBeforeSecond(s, first, second) {
    return s.indexOf(first) < s.indexOf(second) && s.lastIndexOf(first) < s.indexOf(second);
}