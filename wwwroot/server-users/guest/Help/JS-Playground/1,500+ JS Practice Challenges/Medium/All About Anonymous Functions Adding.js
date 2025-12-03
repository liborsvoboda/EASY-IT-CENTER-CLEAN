/*

All About Anonymous Functions: Adding

Write a function that returns an anonymous function, which adds n to its input

Examples
adds1 = addsNum(1)

adds1(3) ➞ 4
adds1(5.7) ➞ 6.7

adds10 = addsNum(10)

adds10(44) ➞ 54
adds10(20) ➞ 30
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function addsNum(n) {
    return function(m) {
        return n + m;
    }
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


const addsNum = n => a => n + a;




//#############################################################
//#  SOLUTION 3
//#############################################################


const addsNum = n => function foo(x) { return x + n };