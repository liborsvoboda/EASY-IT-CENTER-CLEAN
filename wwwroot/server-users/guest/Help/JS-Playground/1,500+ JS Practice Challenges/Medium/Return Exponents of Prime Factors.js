/*

Return Exponents of Prime Factors

You are given an array of prime factors arr and a target. When each number in the array is raised to an appropriate power their product will be equal to the target.

Your role is to return the exponents. All these arrays will have a length of three. Basically, it is three numbers whose product is equal to challenge. The only difference is what you are expected to return.

Examples
productEqualTarget([2, 3, 5], 600) ➞ [3, 1, 2]
// Because 2^3*3^1*5^2 = 600

productEqualTarget([2, 3, 5], 720) ➞ [4, 2, 1]
// Because 2^4*3^2*5^1 = 720

Notes
The exponents you will return are expected to replace the base in the array.
Your returned values must be in the same order as the bases.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const productEqualTarget = (arr, target) => arr.map(p => factors(p, target));

const factors = (n, target, result = 0) =>
    target / n % 1 ? result : factors(n, target / n, result + 1);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function productEqualTarget(arr, target) {
    return arr.map(el => {
        let j = 0,
            x = el
        while (target % el == 0) {
            j++
            el = el * x
        }
        return j
    })
}


//#############################################################
//#  SOLUTION 3
//#############################################################


function productEqualTarget(arr, target) {

    let max = Math.max(arr[0], arr[1], arr[2]);

    for (let i = 0; i <= max; i++) {
        for (let j = 0; j <= max; j++) {
            for (let k = 0; k <= max; k++) {
                if (Math.pow(arr[0], i) * Math.pow(arr[1], j) * Math.pow(arr[2], k) == target) {
                    return [i, j, k]
                }
            }
        }
    }
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function productEqualTarget(arr, target) {
    let c;
    let res = []
    for (let i = 0; i < arr.length; i++) {
        c = 0;
        while (!(target % arr[i])) {
            ++c
            target /= arr[i]
        }
        res.push(c)
    }
    return res
}