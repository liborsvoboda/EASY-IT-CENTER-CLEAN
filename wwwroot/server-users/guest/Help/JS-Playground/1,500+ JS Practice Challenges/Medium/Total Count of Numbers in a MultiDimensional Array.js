/*

Total Count of Numbers in a MultiDimensional Array

Create a function that takes a multidimensional array and return the total count of numbers in that array.

Examples
countNumber([["", 17.2, 5, "edabit"]]) ➞ 2
// 17.2 and 5.

countNumber([[[[[2, 14]]], 2, 3, 4]]) ➞ 5
// 2, 14, 2, 3 and 4.

countNumber([["balkot"]]) ➞ 0

Notes
Input may be array of numbers, strings and empty arrays.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const countNumber = arr => (
    arr.flat(Infinity).filter(e => typeof e === 'number').length
);



//#############################################################
//#  SOLUTION 2  
//#############################################################


const countNumber = arr => arr.flat(Infinity).reduce((a, v) => a + +(typeof v === 'number'), 0);


const countNumber = r => r.flat(Infinity).filter(e => typeof e == 'number').length

//#############################################################
//#  SOLUTION 3
//#############################################################


const countNumber = arr => {
    return arr.flat(Infinity).filter(v => /[0-9]/gi.test(v)).length
};



//#############################################################
//#  SOLUTION 4
//#############################################################



const countNumber = arr => {
    let arr2 = arr.flat(10).filter(i => typeof i == "number");

    return arr2.length
}



//#############################################################
//#  SOLUTION 5
//#############################################################


const countNumber = arr => {
    count = 0;
    var newArr = arr.flat(10);
    newArr.forEach(function(cur) {
        if (typeof cur === "number") {
            count++;
        }
    });
    return count;
}