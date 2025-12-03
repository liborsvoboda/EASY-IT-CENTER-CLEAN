/*

Valid Variable Names

When creating variables, the variable name must always start with a letter and cannot contain spaces, though numbers and underscores are allowed to be contained in it also.

Create a function which returns true if a given variable name is valid, otherwise return false.

Examples
variableValid("result") ➞ true

variableValid("odd_nums") ➞ true

variableValid("2TimesN") ➞ false


Notes
Inputs are given as strings.
Variable names with spaces are not allowed.
Although this question may seem like otherwise, you can't actually assign words with quotes around them as variables.
The rules exposed in this challenge are an oversimplification on how variable and identifier names are considered valid in JavaScript.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const variableValid = s => /^[a-z]\w*$/i.test(s)


//#############################################################
//#  SOLUTION 2  
//#############################################################



function variableValid(variable) {
    const regex = /[a-z]/;
    const space = /\s/;

    return variable[0].match(regex) && !variable.match(space) ? true : false;
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function variableValid(vrb) {
    vrb = [...vrb];
    return /[a-z]/.test(vrb[0]) &&
        vrb.every(char => /[a-z\d\_]/i.test(char));
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function variableValid(variable) {
    const number = /^[0-9]+/.test(variable[0]);
    const whiteSpace = /\s/g.test(variable)

    if (number || whiteSpace) {
        console.log("not valid")
        return false
    } else {
        console.log("valid")
        return true
    }
}