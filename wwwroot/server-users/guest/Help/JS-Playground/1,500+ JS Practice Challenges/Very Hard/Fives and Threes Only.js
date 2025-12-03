/*  

Fives and Threes Only

Starting with either 3 or 5 and given these operations:

add 5
multiply by 3
You should say if it is possible to reach the target number n.

Examples
only5and3(14) ➞ true
// 14 = 3*3 + 5

only5and3(25) ➞ true
// 25 = 5+5+5+5+5

only5and3(7) ➞ false
// There exists no path to the target number 7


Notes
You can solve this problem by recursion or algebra.
*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const only5and3 = n => n === 3 || n === 5 || (!(n % 3) && only5and3(n / 3)) || (n > 5 && only5and3(n - 5));






//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const only5and3 = n => {
    const rec = (x = 1) => {
        if (x > n) {
            return false;
        }
        if (x === n) {
            return true;
        }

        return (rec(x * 3) || rec(x == 1 ? 5 : x + 5));
    }

    return rec();
}






//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



function only5and3(n) {
    return test(n, 3) || test(n, 5);
}

function test(n, k) { //Brute force
    if (k < n) return test(n, k + 5, false) || test(n, k * 3, true);
    else return k == n;
}







//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################



function only5and3(n) {
    if (n === 3 || n === 5) {
        return true;
    } else if (n < 3) {
        return false;
    }
    return n % 3 === 0 ? only5and3(parseInt(Math.sqrt(n))) : only5and3(n - 5);
}







//#############################################################
//#                        MY SOLUTION    5                   #
//#############################################################




function only5and3(n) {
    let temp = 3;
    for (let i = 0; i < n; ++i) {
        temp *= 3;
        if (temp > n) break;
        if ((n - temp) % 5 === 0) return true;
    }
    return (n % 5) - 3 === 0 || n % 5 === 0
}