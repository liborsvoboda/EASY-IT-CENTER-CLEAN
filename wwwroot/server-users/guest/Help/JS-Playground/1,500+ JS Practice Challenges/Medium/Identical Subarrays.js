/*

Identical Subarrays

Create a function that takes in a two-dimensional array and returns the number of sub-arrays with only identical elements.

Examples
countIdentical([
  [1],
  [2],
  [3],
  [4]
]) ➞ 4

// Single-item arrays still count as having identical elements.


countIdentical([
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 4]
]) ➞ 1


countIdentical([
  [33, 33],
  [5],
  ["a", "a"],
  [2, 2, 2],
  [1, 2, 2],
  [3, 1]
]) ➞ 4

// 4 arrays with identical elements: [33, 33], [5], ["a", "a"], and [2, 2, 2]


countIdentical([
  ["@", "@", "@", "@"],
  [2, 3], [3, 4], [4, 4]
]) ➞ 2


Notes
Single-element arrays count as (trivially) having identical elements.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



const countIdentical = arr => arr.filter(sub => new Set(sub).size === 1).length;





const countIdentical = arr => arr.map(subArr => [...new Set(subArr)])
    .filter(subArr => subArr.length == 1).length;





const countIdentical = arr => arr.filter(x => [...new Set(x)].length == 1).length






//#############################################################
//#  SOLUTION 2  
//#############################################################



function countIdentical(arr) {
    return arr.filter(e => {
        return (new Set(e)).size === 1
    }).length
}






//#############################################################
//#  SOLUTION 3
//#############################################################


function countIdentical(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length == arr[i].filter(x => x == arr[i][0]).length) {
            sum = sum + 1;
        }
    }
    return sum;
}






//#############################################################
//#  SOLUTION 4
//#############################################################



function countIdentical(arr) {
    return arr.filter(el => {
        let s = new Set(el);
        if ([...s].length === 1) return el;
    }).length;
}






//#############################################################
//#  SOLUTION 5
//#############################################################


function countIdentical(arr) {
    return arr.map(currentArray => identicalArray(currentArray) ? 1 : 0).reduce((a, b) => a + b);
}

function identicalArray(arr) {
    return arr.reduce((acc, value) => (value === arr[0]) && acc, true);
}






//#############################################################
//#  SOLUTION 6
//#############################################################


function countIdentical(arr) {
    const identical = (arr) => {
        const filtered = Array.from(new Set(arr))
        return arr.length > 1 ? filtered.length < 2 : true
    }
    const result = arr.filter(a => identical(a) ? a : null)
    return result.length
}





//#############################################################
//#  SOLUTION 7
//#############################################################


function countIdentical(arr) {
    return arr.filter(x => x.length == 1 || x[0] == x[1]).length
}







//#############################################################
//#  SOLUTION 8
//#############################################################


function countIdentical(arr) {
    const check = arr.every((a) => a.length === 1);
    const filtered = arr.filter(function(a) {
        return a.every((x, y, z) => x === z[0]);
    })
    return (check ? arr.length : filtered.length);
}