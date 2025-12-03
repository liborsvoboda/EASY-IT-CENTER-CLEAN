/*

Derivative of a Function

Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

Examples
derivative(1, 4) ➞ 1

derivative(3, -2) ➞ 12

derivative(4, -3) ➞ -108

Notes
^ in the context of this challenge means "to the power of", also known as the "exponent" operator.

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################



function derivative(b, m) {
    const f = x => x ** b;
    const h = .0000001;
    const dy = f(m + h) - f(m);
    const dx = h;
    const r = dy / dx;
    return r > -1 && r < 0 ? +r.toFixed(3) : +r.toFixed();
};




//#############################################################
//#  SOLUTION 2  
//#############################################################


const derivative = (b, m) => b * m ** (b - 1);





//#############################################################
//#  SOLUTION 3
//#############################################################



function derivative(b, m) {
    return b * m ** (b - 1);
}