/*  
How Many D's Are There?

Create a function that counts how many D's are in a sentence.

Examples
countDs("My friend Dylan got distracted in school.") ➞ 4

countDs("Debris was scattered all over the yard.") ➞ 3

countDs("The rodents hibernated in their den.") ➞ 3

Notes
Your function must be case-insensitive.
Remember to return the result.
Check the Resources for help.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#    SOLUTION 1

const countDs = sentence => sentence.replace(/[^d]/gi, '').length;


const countDs = s => [...s.matchAll(/d/gi)].length;



//#############################################################
//#    SOLUTION 2


function countDs(sentence) {
    return [...sentence].filter(x => x == 'd' || x == 'D').length
}


//#############################################################
//#    SOLUTION 3


function countDs(sentence) {
    let count = 0;
    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] === 'd' || sentence[i] === 'D') {
            count++;
        }
    }
    return count;
}




//#############################################################
//#    SOLUTION 4


function countDs(sentence) {
    return sentence.split("").reduce((ac, letter) => {
        return letter.toLowerCase() === "d" ? ac += 1 : ac += 0
    }, 0)
}




//#############################################################
//#    SOLUTION 5


function countDs(sentence) {
    let count = 0;
    for (let word of sentence) {
        if (word == "d" || word == "D") count++;
    }
    return count;
}




//#############################################################
//#    SOLUTION 6


function countDs(sentence) {
    return sentence
        .toLowerCase()
        .split("")
        .filter((x) => x === "d").length;
}