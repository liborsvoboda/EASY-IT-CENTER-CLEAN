/*

Find the Discount
Create a function that takes two arguments: the final price and the discount as integers and returns the final price after the discount.

Alternative Text

Examples
dis(1500, 50) ➞ 750

dis(89, 20) ➞ 71.2

dis(100, 75) ➞ 25

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function dis(price, discount) {
    return price * (100 - discount) * 0.01
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


function dis(price, discount) {
    return +(price - price / (100 / discount)).toFixed(2);
}





//#############################################################
//#  SOLUTION 3
//#############################################################


const dis = (price, discount) => (100 - discount) / 100 * price;





//#############################################################
//#  SOLUTION 4
//#############################################################


const dis = (price, discount) => Math.round(price * (100 - discount)) / 100