/*  

Find the Second Largest Number
Create a function that takes an array of numbers and returns the second largest number.

Examples
secondLargest([10, 40, 30, 20, 50]) ➞ 40

secondLargest([25, 143, 89, 13, 105]) ➞ 105

secondLargest([54, 23, 11, 17, 10]) ➞ 23

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */

function secondLargest(arr) {
    const [largest, second, ...rest] = arr.sort((x, y) => y - x)
    return second
}



/*  Solution 2   */

secondLargest = a => a.sort((a, b) => b - a)[1]

const secondLargest = a => a.sort((a, b) => b - a)[1];



/*  Solution 3  */

function secondLargest(arr) {
    return arr.sort((a, b) => b - a)[1]
}



function secondLargest(arr) {
    return arr.sort((a, b) => a - b)[arr.length - 2]
}



/*  Solution 4   */

function secondLargest(arr) {
    arr = arr.sort((a, b) => b - a);
    return arr[1];
}




function secondLargest(arr) {
    return arr.sort(function(a, b) { return b - a })[1]
}



/*  Solution 5   */

const secondLargest = (arr) => {
    arr.sort((a, b) => {
        return a - b;
    });
    arr.pop();
    return arr.pop();
};

/*  Solution 6  */


function secondLargest(arr) {
    const largest = Math.max(...arr);
    const indexOfLargest = arr.indexOf(largest);
    const removeLargest = arr.splice(indexOfLargest, 1);

    const secondLargest = Math.max(...arr);
    return secondLargest;

}