/*  

Spotlight Sum
Given a 10x10 grid of numbers 1-100, return the Spotlight Sum, given a number n. The spotlight sum can be defined as the total of the 8 numbers immediately surrounding the number n on the grid, including n in the total.

Worked Example
[
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]

spotlight_sum(45) ➞ 405

// The 8 numbers surrounding 45 on the grid are:
// [34, 35, 36, 44, 46, 54, 55, 56]
// Total of the numbers is 360.
// Include 45 in the total (360 + 45 = 405)
// Return the answer.
Examples
spotlightSum(19) ➞ 171

spotlightSum(48) ➞ 432

spotlightSum(88) ➞ 792

Notes
Note that any numbers which don't have the full 8 numbers surrounding it are not included in the tests.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#    SOLUTION 1
//#############################################################

const spotlightSum = n => n * 9;



//#############################################################
//#    SOLUTION 2
//#############################################################


const spotlightSum = n => (n - 11) + (n - 10) + (n - 9) + (n - 1) + n + (n + 1) + (n + 9) + (n + 10) + (n + 11);






//#############################################################
//#    SOLUTION 3
//#############################################################


function spotlightSum(n) {
    return 9 * n;
}





//#############################################################
//#    SOLUTION 4
//#############################################################


function spotlightSum(n) {
    // set tens variable to tens digit
    let tens = Math.floor(n / 10);
    // set ones variable to ones digit
    let ones = n % 10;
    // create a sum variable
    let sum = 0;
    // Create an outer loop
    // For tens - 1 > tens + 1 (rows)
    for (let i = tens - 1; i <= tens + 1; i++) {
        // Set row index variable
        // For ones -1 =>  ones + 1
        for (let k = ones - 1; k <= ones + 1; k++) {
            // sum += [row][ones]
            sum += i * 10 + k;
        }
    }
    return sum;
}