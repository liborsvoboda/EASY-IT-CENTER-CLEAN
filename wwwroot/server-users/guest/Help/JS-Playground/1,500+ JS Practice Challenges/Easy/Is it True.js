/*  

Is it True?
In this challenge you will be given a relation between two numbers, written as a string.

Here are some example inputs:

"2=2", "8<7", "5=13", "15>4", "110<12"
Write a function that determines if the relation is true or false.

Examples
isTrue("2=2") ➞ true

isTrue("8<7") ➞ false

isTrue("5=13") ➞ false

isTrue("15>4") ➞ true

Notes
Tests will only have three types of relations: =, >, and <
Many approaches work here, but the eval() function is particularly useful!
*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################







//#############################################################
//#    SOLUTION 1
//#############################################################


isTrue = r => eval(r.replace(/=/g, '=='))

const isTrue = relation => eval(relation.replace('=', '==='));



//#############################################################
//#    SOLUTION 2
//#############################################################


function isTrue(relation) {
    return relation.indexOf('=') > -1 ? relation.split('=')[0] === relation.split('=')[1] : eval(relation)
}






//#############################################################
//#    SOLUTION 3
//#############################################################


//function isTrue(relation) {
isTrue = relation => eval(relation) ? true : false
    //}






//#############################################################
//#    SOLUTION 4
//#############################################################



function isTrue(relation) {
    if (relation.includes("=")) {
        var x = relation.split("=");
        relation = [x[0], "==", x[1]].join("")
    }
    return eval(relation);
}




//#############################################################
//#    SOLUTION 5
//#############################################################



function isTrue(relation) {
    if (relation.indexOf('=') > -1) {
        let [a, b] = relation.split('=')
        return a === b
    }

    return eval(relation)
}




//#############################################################
//#    SOLUTION 6
//#############################################################



function isTrue(relation) {
    return relation.indexOf('=') > 0 ? +relation.split('=')[0] === +relation.split('=')[1] : eval(relation)
}