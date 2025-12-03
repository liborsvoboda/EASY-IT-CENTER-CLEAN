/*

Sum of Odd and Even Numbers

Write a function that takes an array of numbers and returns an array with two elements:

The first element should be the sum of all even numbers in the array.
The second element should be the sum of all odd numbers in the array.
Example
sumOddAndEven([1, 2, 3, 4, 5, 6]) ➞ [12, 9]
// 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9

sumOddAndEven([-1, -2, -3, -4, -5, -6]) ➞ [-12, -9])

sumOddAndEven([0, 0]) ➞ [0, 0])


Notes
Count 0 as an even number.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function sumOddAndEven(arr) {
    let [even, odd] = [0, 0]
    arr.forEach(i => i % 2 ? odd += i : even += i);
    return [even, odd];
}






//#############################################################
//#  SOLUTION 2  
//#############################################################


function sumOddAndEven(arr) {
    const even = arr.filter(r => r % 2 === 0)
    const odd = arr.filter(r => r % 2 !== 0)
    const result = [even, odd];
    return result.map(r => {
        if (r.length > 0) return r.reduce((acc, r) => acc + r)
        else return 0
    })
}






//#############################################################
//#  SOLUTION 3
//#############################################################



function sumOddAndEven(arr) {
    const even = arr.filter(r => r % 2 === 0)
    const odd = arr.filter(r => r % 2 !== 0)
    const result = [even, odd];
    return result.map(r => {
        if (r.length > 0) return r.reduce((acc, r) => acc + r)
        else return 0
    })
}







//#############################################################
//#  SOLUTION 4
//#############################################################



function sumOddAndEven(arr) {
    return (arr.join("") != "" ? [arr.filter(x => x % 2 == 0).reduce((x, y) => x + y), arr.filter(x => x % 2 != 0).reduce((x, y) => x + y, 0)] : [0, 0])
}




//#############################################################
//#  SOLUTION 5
//#############################################################



function sumOddAndEven(arr) {
    var result = []
    var evencount = 0
    var oddcount = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {

            evencount = evencount + arr[i]

        } else if (arr[i] % 2 !== 0 || arr[i] === 1) {
            oddcount = oddcount + arr[i]
        }
    }

    result.push(evencount, oddcount)
    return result
}





//#############################################################
//#  SOLUTION 6
//#############################################################


function sumOddAndEven(arr) {
    return [
        arr.reduce((s, v) => (!(v % 2) ? s + v : s), 0),
        arr.reduce((s, v) => (v % 2 ? s + v : s), 0),
    ];
}







//#############################################################
//#  SOLUTION 7
//#############################################################



function sumOddAndEven(arr) {
    var r = ((a, b) => a + b)
    var evens = []
    var odds = []
    arr.map(x => {
        if (x % 2 == 0) {
            evens.push(x)
        } else {
            odds.push(x)
        }
    })
    return odds.length == 0 ? [0, 0] : [evens.reduce(r), odds.reduce(r)]
}