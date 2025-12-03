/*

Noddy's Mystery Function

Noddy has written a mysterious function which takes in a word and returns true if it's passed a specific test. Solve the riddle of what Noddy's function is by having a look at some of the examples below.

Examples
noddyFunction("FANTASTIC") ➞ true

noddyFunction("wonderful") ➞ false

noddyFunction("NODDY") ➞ false


Notes
Check the Tests tab for more examples.
This isn't really a coding challenge, more of a fun riddle ;)
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const noddyFunction = s => !/d/gi.test(s);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function noddyFunction(str) {
    const regex1 = RegExp('D');
    if (regex1.test(str.toUpperCase())) return false;
    else return true;
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function noddyFunction(str) {
    return /d/gi.test(str) ? false : true
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function noddyFunction(str) {
    if (str.includes("d") || str.includes("D"))
        return false
    else
        return true
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function noddyFunction(str) {
    var array = Array.from(str.toString());
    for (var x = 0; x < array.length; x++) {
        if (array[x] == ("d"))
            return false;
        else if (array[x] == ("D"))
            return false;
    }
    return true;
}