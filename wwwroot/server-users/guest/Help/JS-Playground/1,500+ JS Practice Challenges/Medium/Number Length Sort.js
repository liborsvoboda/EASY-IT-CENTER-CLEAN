/*

Number Length Sort

Create a sorting function which sorts numbers not by numerical order, but by number length! This means sorting numbers with the least amount of digits first, up to the numbers with the most digits.

Examples
numberLenSort([1, 54, 1, 2, 463, 2]) ➞ [1, 1, 2, 2, 54, 463]

numberLenSort([999, 421, 22, 990, 32]) ➞ [22, 32, 999, 421, 990]

numberLenSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]) ➞ [9, 8, 7, 6, 5, 4, 2, 1, 3, 31]

Notes
If two numbers have the same number of digits, return them in the order they first appeared (this makes it different to just sorting the numbers normally).

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1 
//#############################################################



function numberLenSort(arr) {
    for (let ea of arr) {
        for (let i = 1; i < arr.length; i++) {
            if (String(arr[i - 1]).length > String(arr[i]).length) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
            }
        }
    }

    return arr

}



//#############################################################
//#  SOLUTION 2  
//#############################################################



function numberLenSort(arr) {
    arr.sort(function(a, b) {

        if (String(a).length < String(b).length)
            return -1
        return 1
    })
    return arr
}





//#############################################################
//#  SOLUTION 3
//#############################################################




function numberLenSort(arr) {
    return arr.map(e => e.toString()).sort((a, b) => a.length - b.length).map(e => parseInt(e))
}