/*

Crowded Carriage Capacity

A train has a maximum capacity of n passengers overall, which means each carriage's capacity will share an equal proportion of the maximum capacity.

Create a function which returns the index of the first carriage which holds 50% or less of its maximum capacity. If no such carriage exists, return -1.

Worked Example
findASeat(200, [35, 23, 18, 10, 40]) ➞ 2

// There are 5 carriages which each have a maximum capacity of 40 (200 / 5 = 40).
// Index 0's carriage is too full (35 is 87.5% of the maximum).
// Index 1's carriage is too full (23 is 57.5% of the maximum).
// Index 2's carriage is good enough (18 is 45% of the maximum).
// Return 2.
Examples
findASeat(20, [3, 5, 4, 2]) ➞ 3

findASeat(1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60]) ➞ 0

findASeat(200, [35, 23, 40, 21, 38]) ➞ -1



Notes
If a train can hold 200 passengers, and has 5 carriages, then that means each carriage can hold a maximum of 40 passengers each.
All carriage numbers will be positive integers, which will be able to divide evenly.
Remember to return -1 if no carriage is empty enough.

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


const findASeat = (n, arr) =>
    arr.findIndex(x => x == arr.filter(x => x <= n / (arr.length * 2))[0]);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function findASeat(n, arr) {
    return arr.findIndex(x => x <= n / (2 * arr.length))
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function findASeat(n, arr) {

    let filter = arr.filter((val, idx) => {
        let average = (n / arr.length) / 2;
        if (val <= average) {
            return val;
        }
    })
    return arr.indexOf(filter[0]);
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function findASeat(n, train) {
    const half = 0.5 * n / train.length;
    for (let i = 0; i < train.length; i++)
        if (train[i] <= half)
            return i;
    return -1;
}