/*

Maximum Possible Total
Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

Examples
maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43

maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100

maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40
Notes

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */



const maxTotal = numbers => {
    return numbers
        .sort((a, z) => z - a).slice(0, 5).reduce((a, b) => a + b, 0);
}

/*  Solution 2   */

const maxTotal = nums => nums.sort((a, b) => b - a).slice(0, 5).reduce((acc, cur) => acc + cur, 0);

const maxTotal = T => T.sort((d, x) => d - x).slice(-5).reduce((t, e) => t += e, 0)

const maxTotal = nums => nums.sort((a, b) => b - a).reduce((sum, el, i) => i < 5 ? sum + el : sum + 0);

const maxTotal = nums => nums.sort((a, b) => b - a).slice(0, 5).reduce((a, c) => a + c);



const maxTotal = nums => nums
    .sort((a, b) => b - a)
    .slice(0, 5)
    .reduce((t, a) => t + a, 0);


/*  Solution 3   */


function maxTotal(nums) {
    return nums.sort((a, b) => b - a).slice(0, 5).reduce((a, b) => a + b)
}



function maxTotal(nums) {
    return nums.sort((a, b) => a - b).slice(-5).reduce((acc, cur) => acc + cur);
}



function maxTotal(nums) {
    return nums.sort((x, y) => y - x).slice(0, 5).reduce((x, y) => x + y, 0)
}



function maxTotal(nums) {
    return nums.sort((a, b) => b - a).slice(0, 5).reduce((acc, curr) => acc + curr)
}


function maxTotal(nums) {
    let sorted = nums.sort((a, b) => b - a).slice(0, 5);
    return sorted.reduce((a, b) => a + b);
}