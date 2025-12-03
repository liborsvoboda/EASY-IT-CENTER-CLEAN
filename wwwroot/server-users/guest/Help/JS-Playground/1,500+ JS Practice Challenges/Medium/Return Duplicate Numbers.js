/*

Return Duplicate Numbers

Given an array nums where each integer is between 1 and 100, return a sorted array containing only duplicate numbers from the given nums array.

Examples
duplicateNums([1, 2, 3, 4, 3, 5, 6]) ➞ [3]

duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]) ➞ [72, 81, 99]

duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ null

Notes
The given array won't contain the same number three times.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const duplicateNums = arr => (
    arr = [...new Set([...arr.filter(num =>
        arr.indexOf(num) !== arr.lastIndexOf(num))])].sort((a, b) => a - b),
    arr.length ? arr : null
);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function duplicateNums(num) {
    let arr = []
    for (let i = 0; i < num.length; i++) {
        if (num.slice(i + 1).includes(num[i])) {
            arr.push(num[i])
        }
    }
    return arr.length === 0 ? null : arr.sort((a, b) => a - b)
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function duplicateNums(nums) {
    const res = Array.from(new Set(nums.filter(e => nums.indexOf(e) !== nums.lastIndexOf(e))));
    return res.length > 0 ? res.sort((a, b) => a - b) : null;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const duplicateNums = (nums) =>
    nums.every(e => nums.indexOf(e) == nums.lastIndexOf(e)) ? null : [...new Set(nums.filter(e => nums.filter(n => n == e).length == 2))].sort((a, b) => a - b);



//#############################################################
//#  SOLUTION 5
//#############################################################



function duplicateNums(nums) {
    const duplicates = nums
        .sort((a, b) => a - b)
        .slice(1)
        .filter((item, index) => item === nums[index]);
    return duplicates.length === 0 ? null : duplicates;
}