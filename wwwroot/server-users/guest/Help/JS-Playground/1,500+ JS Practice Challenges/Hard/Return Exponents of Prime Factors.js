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
//#    SOLUTION 1
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
//#    SOLUTION 2
//#############################################################


const productEqualTarget = (arr, target) => arr.map(p => factors(p, target));

const factors = (n, target, result = 0) =>
    target / n % 1 ? result : factors(n, target / n, result + 1);




//#############################################################
//#    SOLUTION 3
//#############################################################


function productEqualTarget(arr, target) {
    let currentTarget = target;
    let exponents = [];

    arr.forEach(factor => {
        let exponent = 0;
        while (currentTarget % factor == 0) {
            currentTarget = currentTarget / factor;
            exponent++;
        }
        exponents.push(exponent);
    });

    return exponents
}




//#############################################################
//#    SOLUTION 4
//#############################################################


function productEqualTarget(arr, target) {
    var exp = 0;
    var i = 0
    var expArr = [];
    while (arr.length > i) {
        if (target % arr[i] == 0) {
            exp++;
            target = target / arr[i];
        } else {
            expArr.push(exp);
            exp = 0;
            i++;
        }
    }
    return expArr;
}