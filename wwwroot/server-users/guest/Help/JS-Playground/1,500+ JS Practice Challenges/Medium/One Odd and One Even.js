/*

One Odd and One Even
Given a two digit number, return true if that number contains one even and one odd digit.

Examples
oneOddOneEven(12) ➞ true

oneOddOneEven(55) ➞ false

oneOddOneEven(22) ➞ false
Notes



*/






/*  Solution 1   */





/*  Solution 2   */

const oneOddOneEven = n => ~~(n / 10) % 2 !== n % 2;


const oneOddOneEven = n => ([...n + ''].filter(e => e % 2 == 0).length === 1)

const oneOddOneEven = n => Math.floor(n / 10) % 2 !== n % 10 % 2;



/*  Solution 3   */


function oneOddOneEven(n) {
    let array = n.toString().split("");
    if (Math.floor(array[0]) % 2 === 0 && Math.floor(array[1]) % 2 !== 0) {
        return true;
    }
    if (Math.floor(array[1]) % 2 === 0 && Math.floor(array[0]) % 2 !== 0) {
        return true;
    }
    return false;
}





/*  Solution 4   */


function oneOddOneEven(n) {
    var arr = n.toString().split('');
    return ((arr[0] % 2 === 0 && arr[1] % 2 === 1) || (arr[0] % 2 === 1 && arr[1] % 2 === 0))
}