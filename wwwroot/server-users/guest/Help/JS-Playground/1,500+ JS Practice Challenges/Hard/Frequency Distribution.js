/*

Frequency Distribution

Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

Examples
getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

getFrequencies([]) ➞ {}

Notes
If given an empty array, return an empty object (see example #4).
The object should be in the same order as in the input array.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const getFrequencies = arr =>
    arr.reduce((map, item) => {
        map[item] = map[item] + 1 || 1;
        return map;
    }, {});





//#############################################################
//#  SOLUTION 2  
//#############################################################


const getFrequencies = arr =>
    arr.reduce((a, b) => ({...a, [b]: a[b] ? a[b] + 1 : 1 }), {});





//#############################################################
//#  SOLUTION 3
//#############################################################


function getFrequencies(arr) {
    return arr.reduce((ac, b) => {
        if (!ac[b]) { ac[b] = 0 }
        ac[b] += 1
        return ac
    }, {})
}

/*
getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

getFrequencies([]) ➞ {}
*/






//#############################################################
//#  SOLUTION 4
//#############################################################


function getFrequencies(arr) {
    let obj = {};
    arr.forEach(function(value) {
        obj.hasOwnProperty(value) ? obj[value] += 1 : obj[value] = 1;
    });
    return obj;
}




//#############################################################
//#  SOLUTION 5
//#############################################################



function getFrequencies(arr) {
    let ans = {};
    for (let i = 0; i < arr.length; i++) {
        ans[arr[i]] = arr.filter((x) => x === arr[i]).length;
    }
    return ans;
}