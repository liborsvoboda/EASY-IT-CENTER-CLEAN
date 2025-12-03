/*

Sum of Missing Numbers

Create a function that returns the sum of missing numbers.

Examples
sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
// 2 + 4 + 6 + 8 + 9

sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29

sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575

Notes
The minimum and maximum value of the given array are the inclusive bounds of the numeric range to consider when searching for missing numbers.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const sumMissingNumbers = a => {
    let tot = 0;
    for (let i = Math.min(...a) + 1, j = Math.max(...a); i < j; i++)
        if (!a.includes(i)) tot += i;
    return tot;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const sumMissingNumbers = (r, v = r
        .sort((a, b) => a - b)) => Array
    .from({ length: v.slice(-1)[0] - v[0] + 1 }, (_, k) => k + v[0])
    .reduce((s, e) => s + (r.includes(e) ? 0 : e), 0)




//#############################################################
//#  SOLUTION 3
//#############################################################


const sumMissingNumbers = arr => {
    let arr1 = []
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        arr1.push(i)
    }
    return arr1.reduce((a, b) => a + b) - arr.reduce((a, b) => a + b)
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function sumMissingNumbers(arr) {

    if (arr === []) {
        return 0
    } else {
        let min = Math.min(...arr)
        let max = Math.max(...arr)


        // Create full array

        let fullArr = []
        for (let i = min; i <= max; i++) {
            fullArr.push(i)
        }


        // Compare full and incomplete arrays

        let missingArr = []

        for (let i = min; i <= max; i++) {
            if (arr.includes(i) !== true) {
                missingArr.push(i)
            }
        }
        console.log(missingArr)

        // Sum missing Arr
        if (missingArr.length === 0) {
            console.log('zero')
            return 0
        } else {
            let sumArr = missingArr.reduce(function(a, b) { return a + b })

            console.log(sumArr)
            return sumArr
        }
    }
}