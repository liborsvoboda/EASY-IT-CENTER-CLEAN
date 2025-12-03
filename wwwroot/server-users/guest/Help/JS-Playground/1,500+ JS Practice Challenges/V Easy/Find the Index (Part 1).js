/*


Find the Index (Part 1)
Create a function that finds the index of a given item.

Examples
search([1, 5, 3], 5) ➞ 1

search([9, 8, 3], 3) ➞ 2

search([1, 2, 3], 4) ➞ -1
Notes
If the item is not present, return -1.


*/






/*  Solution 1   */

function search(arr, item) {
    return arr.indexOf(item);
}


function search(arr, item) {
    return arr.indexOf(item);
}

/*  Solution 2   */

const search = (arr, item) => arr.indexOf(item)

search = (a, i) => a.findIndex(n => n === i)

function search(arr, item) {
    return arr.findIndex(i => i === item)
}

function search(arr, item) {
    return arr.indexOf(item)
}




/*  Solution 3   */

function search(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == item) return i;
    }
    return -1;
}