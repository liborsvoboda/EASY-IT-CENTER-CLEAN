/*  

Buggy Code
The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.

Examples
has_bugs(true) ➞ "sad days"

has_bugs(false) ➞ "it's a good day"
Notes
Don't overthink this challenge, it's meant to be very simple! ;)

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




/*  

Solution 1

*/

const has_bugs = b => b ? 'sad days' : "it's a good day";

/*  

Solution 2

*/

function has_bugs(buggy_code) {
    if (buggy_code == true) {
        return 'sad days';
    } else {
        return "it's a good day";
    }
}



/*  

Solution 3

*/

function has_bugs(buggy_code) {
    if (buggy_code == true) {
        return 'sad days'
    } else if (buggy_code == false) {
        return "it's a good day"
    }
}


/*  

Solution 4

*/


function has_bugs(buggy_code) {
    return buggy_code ? 'sad days' : 'it\'s a good day'
}