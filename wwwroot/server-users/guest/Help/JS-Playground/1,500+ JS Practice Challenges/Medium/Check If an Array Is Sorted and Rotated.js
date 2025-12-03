/*

Check If an Array Is Sorted and Rotated

Given an array of distinct integers, create a function that checks if the array is sorted and rotated clockwise. If so, return "YES"; otherwise return "NO".

Examples
check([3, 4, 5, 1, 2]) ➞ "YES"
// The above array is sorted and rotated.
// Sorted array: [1, 2, 3, 4, 5].
// Rotating this sorted array clockwise
// by 3 positions, we get: [3, 4, 5, 1, 2].

check([1, 2, 3]) ➞ "NO"
// The above array is sorted but not rotated.

check([7, 9, 11, 12, 5]) ➞ "YES"
// The above array is sorted and rotated.
// Sorted array: [5, 7, 9, 11, 12].
// Rotating this sorted array clockwise
// by 4 positions, we get: [7, 9, 11, 12, 5].

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


const check = arr => (
    sorted = [...arr].sort((a, b) => a - b),
    index = sorted.findIndex(x => x === arr[0]),
    rotate = sorted.slice(index).concat(sorted.slice(0, index)),

    index === 0 || String(arr) !== String(rotate) ? 'NO' : 'YES'
)



//#############################################################
//#  SOLUTION 2  
//#############################################################


function check(arr) {
    return arr.filter((x, i) => i < arr.length - 1 ? x < arr[i + 1] : true).length == arr.length - 1 ? 'YES' : 'NO'
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const check = (arr) => {
    let count = 0;
    let mod = arr.slice().sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < mod.length - 1; i++) {
        mod.unshift(mod.pop());
        console.log(mod, arr);
        if (JSON.stringify(mod) === JSON.stringify(arr)) {
            count = i;
        }
    }
    return count > 0 ? "YES" : "NO";
};



//#############################################################
//#  SOLUTION 4
//#############################################################



function check(arr) {
    let a = arr.slice(0, arr.indexOf(Math.max(...arr)) + 1)
        .concat(arr.slice(arr.indexOf(Math.max(...arr)) + 1)).sort((a, b) => a - b);

    return Array.from({ length: arr.length }, (_, i) => a.slice(i).concat(a.slice(0, i)))
        .slice(1).some(e => e.every((b, i) => b == arr[i])) ? 'YES' : 'NO';
}