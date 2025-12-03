/*

Check if One Array is a Subset of Another

Array A is contained inside array B if each element in A also exists in B.

The number of times a number is present doesn't matter. In other words, if we transformed both arrays into sets, A would be a subset of B.

A = [3, 3, 9, 9, 9, 5]
B = [1, 3, 9, 5, 8, 44, 44]

A_Set = [3, 9, 5]
B_Set = [1, 3, 9, 5, 8, 44]

// A_Set is a subset of B_Set
Create a function that determines if the first array is a subset of the second.

Examples
subset([1, 3], [1, 3, 3, 5]) ➞ true

subset([4, 8, 7], [7, 4, 4, 4, 9, 8]) ➞ true

subset([1, 3], [1, 33]) ➞ false

subset([1, 3, 10], [10, 8, 8, 8]) ➞ false

Notes
Each input array will have at least one element.
Check the resources tab for a hint.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1 
//#############################################################


const subset = (arr1, arr2) => arr1.every(item => arr2.includes(item));




//#############################################################
//#  SOLUTION 2  
//#############################################################


function subset(arr1, arr2) {
    return arr1.reduce((acc, value) => acc && (arr2.indexOf(value) != -1), true);
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function subset(arr1, arr2) {
    arr1 = [...new Set(arr1)].sort(function(a, b) { return a - b; });
    arr2 = [...new Set(arr2)].sort(function(a, b) { return a - b; });
    for (var i = 0; i < arr2.length; i++) {
        if (arr2[0] == arr1[0]) {
            arr2.length = arr1.length;
            break;
        }
        while (arr2[i] == arr1[0]) {
            arr2.splice(0, i);
            break;
        }
    }
    return arr2.reduce((a, b) => a + b) == arr1.reduce((a, b) => a + b);
}



//#############################################################
//#  SOLUTION 4
//#############################################################



const subset = (A, B) => {
    let a = new Set(A),
        b = new Set(B);
    r = true;
    a.forEach(x => { if (!b.has(x)) { r = false } });
    return r;
};






//#############################################################
//#  SOLUTION 5
//#############################################################



function subset(arr1, arr2) {
    resArr = arr1.map(i => arr2.includes(i) ? i = true : i = false);
    const allTrue = (element) => {
        return element === true;
    }
    return resArr.every(allTrue);
}






//#############################################################
//#  SOLUTION 6
//#############################################################




function subset(arr1, arr2) {
    let c = arr2.filter(el => arr1.includes(el));
    let f = c.filter((v, i) => c.indexOf(v) === i)
    return arr1.length === f.length
}




//#############################################################
//#  SOLUTION 7
//#############################################################


function subset(arr1, arr2) {
    return arr2.every(val => arr1.includes(val)) || arr1.every(val => arr2.includes(val))
}