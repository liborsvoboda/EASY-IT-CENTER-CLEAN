/*

Height of the Tallest Building

Given an array of strings (depicting a skyline of several buildings), return in meters the height of the tallest building. Each line in the list represents 20m.

Examples
tallestBuildingHeight([
  "            ##",
  "            ##",
  "            ##",
  "###   ###   ##",
  "###   ###   ###",
  "###   ###   ###",
  "###   ###   ###"
]) ➞ "140m"

// Tallest building is 7 rows
// 7 x 20m = 140m

tallestBuildingHeight([
  "               ",
  "               ",
  "               ",
  "       #    ###",
  "      # #   ###",
  "###   ###   ###",
  "###   ###   ###"
]) ➞ "80m"

// tallest building is 4 rows
// 4 x 20m = 80m

tallestBuildingHeight([
  "                              ",
  "                         ###  ",
  "                         ###  ",
  "###                    #####  ",
  "###      #             #####  ",
  "###     ###            #####  ",
  "######  ###            #######",
  "######  ######  ###    #######",
  "###################    #######",
  "###############################",
  "###############################"
]) ➞ "200m"

// Tallest building is 10 rows
// 10 x 20m = 200m


Notes
There may be some open sky above buildings (can't just find the length of the array).
There may be multiple tallest buildings (see example #2).

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


const tallestBuildingHeight = arr => arr.filter(x => x.includes('#')).length * 20 + 'm'




//#############################################################
//#  SOLUTION 2  
//#############################################################



const tallestBuildingHeight = arr => arr.reduce((acc, row, index) => {
    const hasHash = row.split('').some(char => char === '#');
    if (hasHash && acc === '') {
        acc = `${String((arr.length  - index) * 20)}m`;
    }
    return acc;
}, '');



//#############################################################
//#  SOLUTION 3
//#############################################################


function tallestBuildingHeight(a) {
    var r = a.length - a.filter(v => !(/#/.test(v))).length;
    return String(20 * r) + 'm';
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function tallestBuildingHeight(arr) {
    const firstInstance = arr.map((a, i) => {
        if (a.includes("#")) {
            return i
        }
    }).filter(char => char !== undefined)[0]
    const height = (arr.length - firstInstance) * 20
    return `${height}m`
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function tallestBuildingHeight(arr) {
    return arr.map(x => x.split('')).reduce((acc, cur) => {
        for (let i = 0; i < cur.length; i++) {
            if (cur[i] == "#") {
                acc[i] = +acc[i] + 1;
            }
        }
        return acc;
    }, [...('0').repeat(arr[0].length)]).sort((a, b) => b - a)[0] * 20 + 'm';
}




//#############################################################
//#  SOLUTION 6
//#############################################################


function tallestBuildingHeight(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf("#") !== -1) return `${((arr.length) - i) * 20}m`
    }
}