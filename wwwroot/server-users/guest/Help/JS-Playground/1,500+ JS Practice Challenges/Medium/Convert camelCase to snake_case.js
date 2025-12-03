/*

Convert camelCase to snake_case

Create a function that takes a string of words (or just one word) and converts each word from camelCase to snake_case.

Examples
camelToSnake("magicCarrots") ➞ "magic_carrots"

camelToSnake("greatApples for aSmellyRhino") ➞ "great_apples for a_smelly_rhino"

camelToSnake("thatsGreat") ➞ "thats_great"


Notes
You won't get more than two capitals in a row (e.g. "DIYFoods" is not given).
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function camelToSnake(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



function camelToSnake(str) {
    return [...str].map(x => !' 0123456789'.includes(x) && x == x.toUpperCase() ? '_' + x.toLowerCase() : x).join('')
}


//#############################################################
//#  SOLUTION 3
//#############################################################


function camelToSnake(str) {
    return str.replace(/(?<=[^A-Z])[A-Z]/g, u => "_" + u.toLowerCase());
}