/*

Join Two Portions of a Path
Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

Examples
joinPath("portion1", "portion2") ➞ "portion1/portion2"

joinPath("portion1/", "portion2") ➞ "portion1/portion2"

joinPath("portion1", "/portion2") ➞ "portion1/portion2"

joinPath("portion1/", "/portion2") ➞ "portion1/portion2"
Notes
Try not to solve this challenge using only if-else conditions.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */

joinPath = (...a) => a.join().replace(/\/?,\/?/g, '/')



/*  Solution 2   */

const joinPath = (portion1, portion2) => portion1.replace(/\//, '') + "/" + portion2.replace(/\//, '');

const joinPath = (...portions) => portions.map(portion => portion.replace(/\//g, '')).join('/');

const joinPath = (portion1, portion2) => portion1.replace("/", "") + "/" + portion2.replace("/", "")

/*  Solution 3   */