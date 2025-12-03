/*


All About Anonymous Functions: Adding Suffixes
Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

Examples
add_ly = add_suffix("ly")

add_ly("hopeless") ➞ "hopelessly"
add_ly("total") ➞"totally"

add_less = add_suffix("less")

add_less("fear") ➞ "fearless"
add_less("ruth") ➞ "ruthless"
Notes
N/A


*/






/*  Solution 1   */

const add_suffix = suffix => prefix => prefix + suffix

const add_suffix = suffix => word => word + suffix;

const add_suffix = s => a => a + s;

const add_suffix = suffix => x => x + suffix

const add_suffix = suffix => b => b + suffix;

const add_suffix = suffix => word => word + suffix;



/*  Solution 2   */


function add_suffix(suffix) {
    return function(y) {
        return y + suffix;
    }
}


/*  Solution 3   */

function add_suffix(suffix) {
    return (word) => word + suffix
}




/*  Solution 4   */


function add_suffix(suffix) {
    return (word) => {
        return word + suffix;
    }
}




function add_suffix(suffix) {
    let suff = suffix
    return function add_suffix(suff) {
        return suff + suffix
    }
}




function add_suffix(suffix) {
    return (val) => val + suffix
}