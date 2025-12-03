/*

Length of a Nested Array

The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Write a function that returns the total number of non-nested items in a nested array.

Examples
getLength([1, [2, 3]]) ➞ 3

getLength([1, [2, [3, 4]]]) ➞ 4

getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

getLength([1, [2], 1, [2], 1]) ➞ 5

Notes
An empty array should return 0.
*/







//#############################################################
//#  SOLUTION 1 
//#############################################################


const getLength = arr => arr.flat(Infinity).length;


const getLength = arr => arr.reduce((ac, ne) => ac + ne, "").replace(/\,/g, "").length || 0



//#############################################################
//#  SOLUTION 2  
//#############################################################



function getLength(arr) {
    return arr.reduce((acc, el, index) => {
        return Array.isArray(el) ? acc + getLength(el) : acc + 1
    }, 0)
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function getLength(arr) {
    return arr.length === 0 ? 0 : JSON.stringify(arr).match(/\w/g).length || 0;
}




//#############################################################
//#  SOLUTION 4
//#############################################################



function getLength(arr) {
    let resultArr = [];
    arr.forEach((el) => {
        if (el.constructor.name === "Array") {
            getArrayElements(el).forEach((item) => {
                resultArr.push(item);
            });
        } else {
            resultArr.push(el);
        }
    });
    return resultArr.length;
}

function getArrayElements(arr) {
    let resArr = [];
    arr.forEach((el) => {
        if (el.constructor.name === "Array") {
            getArrayElements(el).forEach((item) => {
                resArr.push(item);
            });
        } else {
            resArr.push(el);
        }
    })
    return resArr;
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function getLength(arr) {
    return arr.join("|").split("|").join("").split(",").join("").length
}