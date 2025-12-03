/*

Index Filtering

Create a function that takes two inputs: idx (an array of integers) and str (a string). The function should return another string with the letters of str at each index in idx in order.

Examples
indexFilter([2, 3, 8, 11], "Autumn in New York") ➞ "tune"

indexFilter([0, 1, 5, 7, 4, 2], "Cry me a river") ➞ "creamy"

indexFilter([9, -9, 2, 27, 36, 6, 5, 13, -1, 2, 0, 30, 2], 
  "That's life, I've got you under my skin") ➞ "frank sinatra"


  Notes
Indexes may not be in order or may be negative (see example #2 and #3).
The output string must always be lowercase, but the input str may not be (see examples).
Bonus points for submitting a lambda function.

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


const indexFilter = (x, s) => {
    return x.map(k => s.toLowerCase()[k < 0 ? s.length + k : k]).join('')
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const indexFilter = (indices, str) => indices.map(i => str[(i + str.length) % str.length]).join('').toLowerCase();



function indexFilter(idx, str) {
    return idx.map(v => v >= 0 ? str[v] : str[str.length + v]).join('').toLowerCase()
}

//#############################################################
//#  SOLUTION 3
//#############################################################


function indexFilter(idx, str) {
    var a = [];
    for (i = 0; i < idx.length; i++) {
        if (idx[i] >= 0) {
            a.push(str[idx[i]].toLowerCase())
        } else {
            a.push(str[str.length - Math.abs(idx[i])].toLowerCase())
        }
    }
    return a.join('')
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function indexFilter(idx, str) {
    return idx.map(v => v >= 0 ? str[v] : str[str.length + v]).join('').toLowerCase()
}



//#############################################################
//#  SOLUTION 5
//#############################################################


const indexFilter = (idx, str) =>
    idx.map(n => n < 0 ? str[str.length + n] : str[n])
    .join("")
    .toLowerCase();





//#############################################################
//#  SOLUTION 6
//#############################################################


function indexFilter(idx, str) {
    let result = [];
    const arr = str.split('');
    for (let i = 0; i < idx.length; i++) {
        if (idx[i] < 0) {
            result.push(arr[arr.length + idx[i]])
        } else {
            result.push(arr[idx[i]])
        }
    }
    return result.join('').toLowerCase();
}