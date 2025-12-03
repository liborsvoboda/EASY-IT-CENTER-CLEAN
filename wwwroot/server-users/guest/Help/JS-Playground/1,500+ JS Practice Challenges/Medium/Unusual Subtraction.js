/*

Unusual Subtraction

Create a function that subtracts 1 from n (unless it ends in 0) k number of times. If n ends in 0, remove the 0.

To illustrate:

n = 22
k = 3
This means our number is 22 and we have to repeat the algorithm three times. 22 does not end in 0 so we continue subtracting 1.

22 - 1 = 21
k = 1
21 - 1 = 20
k =2
Now 20 ends in 0, so we can remove it. We get 2; k = 3. The algorithm ends there because we applied it three times.

N:  K:
22
21  1
20  2
2   3


Examples
notGoodMath(540, 5) ➞ 50

notGoodMath(1000000000, 9) ➞ 1

notGoodMath(42023110, 10) ➞ 4201

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


function notGoodMath(n, k) {
    for (let i = 0; i < k; i++)
        n = n % 10 ? n - 1 : Math.floor(n / 10);
    return n;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function notGoodMath(n, k) {
    for (; k > 0; k--)
        n % 10 && n-- || (n /= 10)
    return n
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function notGoodMath(n, k) {
    while (k > 0) {
        if (n.toString().split("").reverse()[0] === "0") n = n / 10;
        else n--;
        k--;
    }
    return n;
}