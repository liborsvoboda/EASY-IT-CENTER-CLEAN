/*

Word Nests

A word nest is created by taking a starting word, and generating a new string by placing the word inside itself. This process is then repeated.

Nesting 3 times with the word "incredible":

start  = incredible
first  = incre|incredible|dible
second = increin|incredible|credibledible
third  = increinincr|incredible|ediblecredibledible
The final nest is "increinincrincredibleediblecredibledible" (depth = 3).

Given a starting word and the final word nest, return the depth of the word nest.

Examples
wordNest("floor", "floor") ➞ 0

wordNest("code", "cocodccococodededeodeede") ➞ 5

wordNest("incredible", "increinincrincredibleediblecredibledible") ➞ 3

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const wordNest = (word, nest) => nest.length / word.length - 1;

//#  SOLUTION 2  


function wordNest(word, nest) {
    let depth = -1;
    let value = nest;
    while (value.indexOf(word) !== -1) {
        depth += 1;
        value = value.replace(word, '');
    }
    return depth;
}


//#  SOLUTION 3


function wordNest(word, nest) {
    return ([...nest].length / [...word].length) - 1
}



//#  SOLUTION 4


function wordNest(word, nest) {
    return (nest.split('').filter(x => x == nest[0]).length / word.split('').filter(x => x == word[0]).length) - 1;
}