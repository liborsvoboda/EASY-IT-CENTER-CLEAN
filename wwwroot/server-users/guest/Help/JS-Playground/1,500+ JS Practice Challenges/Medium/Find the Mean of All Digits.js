/*


Find the Mean of All Digits
Create a function that returns the mean of all digits.

Examples
mean(42) ➞ 3

mean(12345) ➞ 3

mean(666) ➞ 6
Notes
The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
The mean will always be an integer.


*/






/*  Solution 1   */

function mean(num) {
    let s = String(Math.abs(num)).split('');
    return s.reduce((x, y) => x + Number(y), 0) / s.length;
}



/*  Solution 2   */


function mean(num) {
    const splitted = String(num).split('').filter(c => c !== '-')
    return splitted.reduce((acc, n) => acc + Number(n), 0) / splitted.length
}


/*  Solution 3   */


function mean(num) {
    let numbers = num.toString().split('');
    let arr = [];
    for (let digit of numbers) {
        arr.push(parseInt(digit));
    }
    return arr.filter(value => !Number.isNaN(value)).reduce((acc, curr) => acc + curr) / arr.filter(value => !Number.isNaN(value)).length;
}




/*  Solution 4   */


const mean = n => [...(n = ('' + n).replace('-', ''))].reduce((a, v) => +v + a, 0) / ('' + n).length;







function mean(num) {
    let arr = String(Math.abs(num)).split('');

    return arr.reduce((c, ac) => Number(c) + Number(ac)) / arr.length;
}








function mean(num) {
    const newArr = String(num).replace('-', '').split('');
    return newArr.reduce((a, b) => parseInt(a) + parseInt(b)) / newArr.length
}