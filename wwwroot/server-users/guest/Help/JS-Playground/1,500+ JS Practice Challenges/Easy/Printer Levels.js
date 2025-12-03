/*

Printer Levels
Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

Examples
inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
}) ➞ 10

inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
}) ➞ 432

inkLevels({
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
}) ➞ 0
Notes
A single printed page requires each color once, so printing is not possible if any of the slots lack ink (see example #3).

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */


const inkLevels = inks => Math.min(...Object.values(inks));

const inkLevels = inks => Math.min(...Object.values(inks));



function inkLevels(inks) {
    var arr = Object.values(inks);
    var nums = arr.filter(x => Number.isFinite(x));
    return Math.min(...nums);

}


/*  Solution 2   */

function inkLevels(inks) {
    return Object.values(inks).sort((a, b) => a - b)[0];
}


/*  Solution 3   */

function inkLevels(inks) {

    let min = inks[Object.keys(inks)[0]];
    Object.keys(inks).forEach(s => {

        let val = inks[s];
        if (val < min) {
            min = val;
        }

    });
    return min;
}



/*  Solution 4  */


function inkLevels(inks) {
    let maxPages = Infinity;
    console.log(inks)
    Object.keys(inks).map(key => {
        if (inks[key] < maxPages) maxPages = inks[key]
    })
    return maxPages
}