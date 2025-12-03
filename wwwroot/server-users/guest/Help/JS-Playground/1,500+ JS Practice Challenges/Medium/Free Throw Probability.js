/*

Free Throw Probability

What's the probability of someone making a certain amount of free throws in a row given their free throw success percentage? If Sally makes 50% of her free shot throws. Then Sally's probability of making 5 in a row would be 3%.

Examples
freeThrows("75%", 5) ➞ "24%"

freeThrows("25%", 3) ➞ "2%"

freeThrows("90%", 30) ➞ "4%"


Notes

The success rate is a string.
The function should return a string with the percent sign.
Round your answer to the nearest whole number.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const freeThrows = (success, rows) => Math.round(
    100 * (parseInt(success) / 100) ** rows
) + '%';



//#############################################################
//#  SOLUTION 2  
//#############################################################



function freeThrows(success, rows) {
    console.log(rows)
    let num = (Number(success.replace('%', '') / 10) ** rows).toString().slice(0, 2);
    let comma = num.includes('.') ? num += '0' : num[0] + '.' + num[1];
    return Math.round(comma * 1) + '%';
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function freeThrows(success, rows) {

    const regex = /[%]/g;

    var success1 = success.replace(regex, '');

    var percent = parseInt(success1) / 100;

    var percent2 = Math.round(Math.pow(percent, rows) * 100);

    return percent2.toString() + '%';

}