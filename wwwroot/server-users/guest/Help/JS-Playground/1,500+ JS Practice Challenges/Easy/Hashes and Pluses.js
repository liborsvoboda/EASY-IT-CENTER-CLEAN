/*

Hashes and Pluses
Create a function that returns the number of hashes and pluses in a string.

Examples
hashPlusCount("###+") ➞ [3, 1]

hashPlusCount("##+++#") ➞ [3, 3]

hashPlusCount("#+++#+#++#") ➞ [4, 6]

hashPlusCount("") ➞ [0, 0]
Notes
Return [0, 0] for an empty string.
Return in the order of [hashes, pluses].

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


/*  Solution 1   */

function hashPlusCount(str) {
    var h = 0,
        p = 0;
    str.split("").map(x => x === "#" ? h++ : p++)
    return [h, p]
}



/*  Solution 2   */

let hashPlusCount = ([...str]) => [str.filter(x => x == '#').length, str.filter(x => x == '+').length]

const hashPlusCount = s => ['#', '+'].map(c => s.split(c).length - 1)

/*  Solution 3   */


function hashPlusCount(str) {
    const hashes = [...str].filter((char) => char === '#').length;
    const pluses = [...str].filter((char) => char === '+').length;

    return [hashes, pluses];
}