/*


Something in the Box?
Create a function that returns true if an asterisk * is inside a box.

Examples
inBox([
  "###",
  "#*#",
  "###"
]) ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) ➞ true

inBox([
  "*####",
  "# #",
  "#  #*",
  "####"
]) ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) ➞ false
Notes
The asterisk may be in the array, however, it must be inside the box, if it exists.


*/






/*  Solution 1   */

const inBox = arr => arr.some(str => str.includes('*'));

const inBox = arr => arr.slice(1, arr.length - 1).some(x => x.includes('*'));

const inBox = arr => arr.some(x => x.includes('*'));

inBox = (arr) => (arr.join('').match(/[*]/) || []).length > 0

/*  Solution 2   */


function inBox(arr) {
    return arr.filter(x => x.includes("*")).length > 0
}


/*  Solution 3   */

function inBox(arr) {
    return arr.join('').split('').filter(x => x == '*').length > 0
}





/*  Solution 4   */


function inBox(arr) {
    var length = arr.filter(i => i.includes("*")).length;
    return length > 0 ? true : false;
}


function inBox(arr) {
    return !!arr.find(x => x.includes('*'))
}



function inBox(arr) {

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        //console.log(element)

        if (element.includes('*')) {
            return true
        }
    }
    return false
}




function inBox(arr) {
    flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('*')) flag = true;
    }
    return flag;
}




function inBox(arr) {
    return arr.reduce((acc, line) => line.includes("*") || acc, false);
}