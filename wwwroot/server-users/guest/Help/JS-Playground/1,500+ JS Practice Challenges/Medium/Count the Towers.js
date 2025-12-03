/*

Count the Towers

Create a function that counts the number of towers.

Examples
count_towers([
  ["     ##         "],
  ["##   ##        ##"],
  ["##   ##   ##   ##"],
  ["##   ##   ##   ##"]
]) ➞ 4

count_towers([
  ["                         ##"],
  ["##             ##   ##   ##"],
  ["##        ##   ##   ##   ##"],
  ["##   ##   ##   ##   ##   ##"]
]) ➞ 6

count_towers([
  ["##"],
  ["##"]
]) ➞ 1


Notes

You are given a 2D matrix.
Towers are two characters in length.
Towers are made only of the character #.
Some tests have no towers, return 0.

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


const countTowers = T => T.pop()[0].split(/#+/).length - 1


const countTowers = t => (t.slice(-1)[0][0].match(/##/g) || []).length;


const countTowers = towers => (towers.pop()[0].match(/##/g) || []).length


//#############################################################
//#  SOLUTION 2  
//#############################################################



const countTowers = towers => {
    const c = towers.slice(-1)[0][0].match(/##/g)
    return c ? c.length : 0;
};



//#############################################################
//#  SOLUTION 3
//#############################################################


function countTowers(towers) {
    var matches = towers[towers.length - 1][0].match(/(#+)/g);
    return matches != null ? matches.length : 0;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function countTowers(towers) {
    return towers.length > 1 ? towers[towers.length - 1].toString().match(/[#]{2}/g).length : 0;
}



function countTowers(towers) {
    return Math.max(...towers.map(row => row[0].split('##').length - 1))
}


//#############################################################
//#  SOLUTION 5
//#############################################################


function countTowers(towers) {
    var array = towers.map(arr => (arr[0].trim().split(/\ +/)).filter(x => x == "##").length);
    return Math.max(...array);
}