/*

Simon Says

Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.

Examples
simonSays([1, 2], [5, 1]) ➞ true

simonSays([1, 2], [5, 5]) ➞ false

simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]) ➞ true

simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3]) ➞ false

Notes
Both input arrays will be of the same length, and will have a minimum length of 2.
The values of the 0-indexed element in the second list and the n-1th indexed element in the first list do not matter.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function simonSays(arr1, arr2) {
    for (var i = 1; i < arr2.length; i++) {
        if (arr1[i - 1] != arr2[i]) return false;
    }
    return true;
}


//#############################################################
//#  SOLUTION 2  
//#############################################################



const simonSays = (arr1, arr2) => arr2.slice(1).every((num, i) => num === arr1[i]);


let simonSays = (a, b) => a.slice(0, a.length - 1).join() == b.slice(1, b.length).join()


//#############################################################
//#  SOLUTION 3
//#############################################################


function simonSays(arr1, arr2) {
    return JSON.stringify(arr1.slice(0, -1)) === JSON.stringify(arr2.slice(1));
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function simonSays(arr1, arr2) {
    return arr1.slice(-1) - arr2.slice(-1) === 1 ? true : false
}





//#############################################################
//#  SOLUTION 5
//#############################################################


function simonSays(arr1, arr2) {
    return arr2.every((a, i) => {
        return (i === 0) || (a === arr1[i - 1])
    })
}



//#############################################################
//#  SOLUTION 6
//#############################################################


function simonSays(arr1, arr2) {
    return arr2.every((a, index) => index === 0 || a === arr1[index - 1]);
}




//#############################################################
//#  SOLUTION 7
//#############################################################


function simonSays(arr1, arr2) {
    return arr2.slice(1).every((it, i) => it === arr1.slice(0, -1)[i]);
}




function simonSays(arr1, arr2) {
    return arr1.slice(0, -1).join('') === arr2.slice(1).join('');
}