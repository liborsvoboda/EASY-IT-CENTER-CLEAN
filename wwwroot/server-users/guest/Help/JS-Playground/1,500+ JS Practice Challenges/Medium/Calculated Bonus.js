/*  

Calculated Bonus

A financial institution provides professional services to banks and claims charges from the customers based on the number of man-days provided. Internally, it has set a scheme to motivate and reward staff to meet and exceed targeted billable utilization and revenues by paying a bonus for each day claimed from customers in excess of a threshold target.

This quarterly scheme is calculated with a threshold target of 32 days per quarter, and the incentive payment for each billable day in excess of such threshold target is shown as follows:

Days	Bonus
0 to 32 days	Zero
33 to 40 days	$325 per billable day
41 to 48 days	$550 per billable day
Greater than 48 days	$600 per billable day
Please note that incentive payment is calculated progressively. As an example, if an employee reached total billable days of 45 in a quarter, his/her incentive payment is computed as follows:

32*0 + 8*325 + 5*550 = 5350
Write a function to read the billable days of an employee and return the bonus he/she has obtained in that quarter.

Examples
calculateBonus(15) ➞ 0

calculateBonus(37) ➞ 1625

calculateBonus(50) ➞ 8200



*/






//#############################################################
//#    SOLUTION 1
//#############################################################


function calculateBonus(days) {
    return 325 * Math.max(days - 32, 0) + 225 * Math.max(days - 40, 0) + 50 * Math.max(days - 48, 0);
}



//#############################################################
//#    SOLUTION 2
//#############################################################


// More of a fun solution than a good solution
function calculateBonus(days) {
    let s = 0
    for (let i = 0; i < days + 1; i++) {
        let adder = i < 33 ? 0 : i < 41 ? 325 : i < 49 ? 550 : 600
        s = s + adder
    }
    return s
}





//#############################################################
//#    SOLUTION 3
//#############################################################


const calculateBonus = days => {
    let total = 0;
    for (let i = 0; i <= days; i++) {
        if (32 < i && i <= 40) total += 325;
        if (40 < i && i <= 48) total += 550;
        if (i > 48) total += 600;
    }
    return total;
}






//#############################################################
//#    SOLUTION 4
//#############################################################


const calculateBonus = d => d < 33 ? 0 : d < 41 ? (d - 32) * 325 :
    d < 49 ? 8 * 325 + (d - 40) * 550 : (325 + 550) * 8 + (d - 48) * 600;






//#############################################################
//#    SOLUTION 5
//#############################################################


const calculateBonus = d => [
    [48, 600],
    [40, 550],
    [32, 325]
].reduce((a, [b, s]) => {
    if (d - b > 0) {
        f = d - b;
        d = b;
        return f * s + a;
    }
    return a;
}, 0);





//#############################################################
//#    SOLUTION 6
//#############################################################


const calculateBonus = (days) =>
    (days > 40 ? 8 : 32 < days && days < 41 ? days - 32 : 0) * 325 + (days > 48 ? 8 : 40 < days && days < 49 ? days - 40 : 0) * 550 + (days > 48 ? days - 48 : 0) * 600;