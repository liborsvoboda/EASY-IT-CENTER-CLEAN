/*

Intro to Nested Loops

Imagine a school that kids attend for 6 years. In each year, there are five groups started, marked with the letters a, b, c, d, e. For the first year, the groups are 1a, 1b, 1c, 1d, 1e and for the last year, the groups are 6a, 6b, 6c, 6d, 6e.

Write a function that returns the groups in the school by year (as a string), separated with a comma and a space in the form of "1a, 1b, 1c, 1d, 1e, 2a, 2b (....) 5d, 5e, 6a, 6b, 6c, 6d, 6e".

Examples
printAllGroups() ➞ "1a, 1b, 1c, 1d, 1e, 2a, 2b, 2c, 2d, 2e, 3a, 3b, 3c, 3d, 3e, 4a, 4b, 4c, 4d, 4e, 5a, 5b, 5c, 5d, 5e, 6a, 6b, 6c, 6d, 6e "

Notes
Use nested "for" loops to achieve this, as well as the array of ["a", "b", "c", "d", "e"] groups.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function printAllGroups() {
    let result = [];
    for (let y of "123456")
        for (let c of "abcde") result.push(y + c);
    return result.join(', ');
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


function printAllGroups() {
    let alp = ['a', 'b', 'c', 'd', 'e']
    let num = [1, 2, 3, 4, 5, 6]
    let result = []
    for (let x of num) {
        for (let y of alp) {
            result.push(x + y)
        }
    }
    return result.join(', ')
}





//#############################################################
//#  SOLUTION 3
//#############################################################


// JavaScript
function printAllGroups() {
    var output = "";
    let groups = ["a", "b", "c", "d", "e"];
    for (var year = 1; year <= 6; year++) {
        for (var groupIndex = 0; groupIndex < groups.length; groupIndex++) {
            output += year + groups[groupIndex];
            if (year < 6 || groupIndex < groups.length - 1) {
                output += ", ";
            }
        }
    }
    return output;
}






//#############################################################
//#  SOLUTION 4
//#############################################################


const letters = 'abcde';

const printAllGroups = () =>
    Array.from({ length: 6 }, (_, classNumber) =>
        Array.from({ length: letters.length },
            (_, i) => `${classNumber + 1}${letters[i]}`
        ).join(', ')
    ).join(', ');





//#############################################################
//#  SOLUTION 5
//#############################################################


function printAllGroups() {
    return [...Array(30).keys()].map((_, i) => (parseInt(i / 5) + 1) + String.fromCharCode(i % 5 + 97)).join(', ')
}




//#############################################################
//#  SOLUTION 6
//#############################################################


function printAllGroups() {
    group = ""
    for (i = 1; i <= 6; i++) {
        if (i != 6) {
            group += `${i}a, ${i}b, ${i}c, ${i}d, ${i}e, `
        } else {
            group += `${i}a, ${i}b, ${i}c, ${i}d, ${i}e`
        }
    }
    return group

}




//#############################################################
//#  SOLUTION 7
//#############################################################


function printAllGroups() {
    let group = ["a", "b", "c", "d", "e"];
    let arr = [];
    for (let i = 0; i <= 5; i++) {
        arr[i] = [];
        for (let j = 0; j < group.length; j++) {
            arr[i].push(i + 1 + group[j]);
        }
    }
    return arr.reduce((a, b) => a.concat(b), []).join(", ");
}






//#############################################################
//#  SOLUTION 8
//#############################################################




function printAllGroups() {
    let arr = [];
    [...
        `123456`
    ]
    .forEach(yr => [...
            `abcde`
        ]
        .forEach(gr => arr.push(yr + gr)));
    return arr.join `, `;
}