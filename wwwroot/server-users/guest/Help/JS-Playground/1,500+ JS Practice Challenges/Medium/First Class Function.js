/*

First Class Function

Create a function that takes a number as its parameter and returns another function.The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.

Examples
const first  = factory(15)
// returns a function first.
const arr  = [30, 45, 60]
// 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4            

first(arr)  ➞ [2, 3, 4]

const second  = factory(2)    
// returns a function second.
const arr  = [2, 4, 6]
// 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3

second(arr)  ➞ [1, 2, 3]

Notes
Rounding not required.

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


const factory = num => arr => arr.map(v => v / num);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function factory(num) {
    return function(arr) {
        return arr.map(x => x / num)
    }
}


//#############################################################
//#  SOLUTION 3
//#############################################################


function factory(num) {
    return function divide(arr) {
        var ans = [];
        for (let i = 0; i < arr.length; i++) {
            ans.push(arr[i] / num);
        }
        return ans;
    }
}


//#############################################################
//#  SOLUTION 4
//#############################################################


function factory(num) {
    return (a) => { return a.map(x => x / num) }
}