/*

Positive Count / Negative Sum

Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

Examples
countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) ➞ [10, -65]
// There are a total of 10 positive numbers.
// The sum of all negative numbers equals -65.

countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]) ➞ [7, -252]

countPosSumNeg([91, -4, 80, -73, -28]) ➞ [2, -105]

countPosSumNeg([]) ➞ []

Notes
If given an empty array, return an empty array: []
0 is not positive.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function countPosSumNeg(nums) {
    if (nums === null || nums.length < 1) return [];
    let pos = nums.filter(x => x >= 0).length;
    let neg = nums.filter(x => x < 0).reduce((a, b) => a + b);
    return [pos, neg];
}


//#  SOLUTION 2  


function countPosSumNeg(nums) {
    return nums && nums[0] ? [
        nums.filter((a) => a >= 0).length,
        nums.filter((a) => a < 0).reduce((a, b) => a + b, 0)
    ] : [];
}


//#  SOLUTION 3

function countPosSumNeg(nums) {
    if (!nums || nums.length === 0) return []
    let pCount = 0,
        negSum = 0
    nums.forEach(num => {
        if (num > 0) pCount++
            if (num < 0) negSum += num
    })
    return [pCount, negSum]
}



//#  SOLUTION 4


function countPosSumNeg(arr) {
    return arr.length == 0 ? [] : [arr.filter(x => x >= 0).length,
        arr.filter(x => x < 0).reduce((a, b) => a + b)
    ];
}



//#  SOLUTION 5


function countPosSumNeg(nums) {
    if (nums === null || !nums.length) {
        return [];
    }

    return nums.reduce(function(accum, val) {
        if (val > 0) {
            accum[0]++;
        }
        if (val < 0) {
            accum[1] += val;
        }

        return accum;
    }, [0, 0]);
}



//#  SOLUTION 6


function countPosSumNeg(nums) {
    if (!(nums && nums.length)) return [];
    return [nums.filter(n => n > 0).length, nums.filter(n => n < 0).reduce((sum, n) => sum + n)];
}