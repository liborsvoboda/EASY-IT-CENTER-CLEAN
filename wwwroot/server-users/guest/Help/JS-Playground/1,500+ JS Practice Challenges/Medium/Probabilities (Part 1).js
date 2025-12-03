/*

Probabilities (Part 1)

Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.

Examples
probability([5, 1, 8, 9], 6) ➞ 50.0

probability([7, 4, 17, 14, 12, 3], 16) ➞ 16.7

probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6) ➞ 70.0

Notes
Precent probability of event = 100 * (num of favourable outcomes) / (total num of possible outcomes)

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



const probability = (a, n) => +(a.filter(x => x >= n).length / a.length * 100).toFixed(1);



const probability = (arr, num) => (arr.filter(x => x >= num).length / arr.length * 100).toFixed(1) * 1;



//#############################################################
//#  SOLUTION 2  
//#############################################################


function probability(arr, num) {
    let positive = arr.filter(e => e < num);
    let result = 100 - ((positive.length / arr.length) * 100);
    return result % 1 === 0 ? result : parseFloat(result.toFixed(1))
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function probability(arr, num) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            count++;
        }
    }
    return Number(((count / arr.length) * 100).toFixed(1));
}





//#############################################################
//#  SOLUTION 4
//#############################################################


function probability(arr, num) {
    return Number(((arr.filter(x => x >= num) || []).length * 100 / arr.length).toFixed(1))
}






//#############################################################
//#  SOLUTION 5
//#############################################################


function probability(arr, num) {
    let sorted = arr.sort((a, b) => a - b)
    let index = 0
    console.log(sorted)
    for (i = 0; num > sorted[i]; i++) {
        index += 1
    }
    return Math.round(((arr.length - index) / arr.length * 100) * 10) / 10
}