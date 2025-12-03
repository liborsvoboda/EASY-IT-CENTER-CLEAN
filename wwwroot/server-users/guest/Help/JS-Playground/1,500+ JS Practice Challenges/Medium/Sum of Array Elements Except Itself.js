/*

Sum of Array Elements Except Itself

An array is given. Return a new array having the sum of all its elements except itself. For more clarity, check the examples below.

Clarification
[1, 2, 3, 4] = for first element => sum will be 2+3+4 = [9]
[1, 2, 3, 4] = for second element => sum will be 1+3+4 = [9, 8]
[1, 2, 3, 4] = for third element => sum will be 1+2+4 = [9, 8, 7]
[1, 2, 3, 4] = for fourth element => sum will be 1+2+3 = [9, 8, 7, 6]


Examples
arrEleSum([1, 2, 3, 2, 1]) ➞ [8, 7, 6, 7, 8]

arrEleSum([1, 2]) ➞ [2, 1]

arrEleSum([1, 2, 3]) ➞ [5, 4, 3]

arrEleSum([1, 2, 3, 4, 5]) ➞ [14, 13, 12, 11, 10]

arrEleSum([10, 20, 30, 40, 50, 60]) ➞ [200, 190, 180, 170, 160, 150]
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function arrEleSum(args) {
    const sum = args.reduce((a, c) => a + c);
    return args.map(x => sum - x);
}


//#############################################################
//#  SOLUTION 2  
//#############################################################



function arrEleSum(args) {
    let res = [],
        arr = [...args]
    for (let i = 0; i < arr.length; i++) res.push(arr.slice(0, i).concat(arr.slice(i + 1)).reduce((a, b) => a + b))
    return res
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function arrEleSum(args) {
    return args.map(x => args.filter(a => a != x).reduce((a, b) => a + b, 0))
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function arrEleSum(arr) {
    let res = [];
    for (let a = 0; a < arr.length; a++) {
        res.push(arr.filter((x, i) => i != a));
    }
    return res.map(x => x.reduce((acc, val) => (acc + val), 0));
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function arrEleSum(args) {
    let arr = [];
    args.forEach((x, y, a) => {
        arr.push(a.reduce((acc, val) => acc + val, 0) - x)
    })
    return arr
}