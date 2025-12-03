/*

Can You Spare a Square?

Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?

Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.

Create a function that will receive an object with two key/values:

people ⁠— Number of people in the household.
tp ⁠— Number of rolls.
Return a statement telling the user if they need to buy more TP!

Examples
tpChecker({ people: 4, tp: 1 }) ➞ "Your TP will only last 2 days, buy more!"

tpChecker({ people: 3, tp: 20 }) ➞ "Your TP will last 58 days, no need to panic!"

tpChecker({ people: 4, tp: 12 }) ➞ "Your TP will last 26 days, no need to panic!"


Notes
Stay safe, and happy coding!

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


function tpChecker(home) {
    const cap = Math.floor((home["tp"] * 500) / (home["people"] * 57));
    return cap >= 14 ?
        `Your TP will last ${cap} days, no need to panic!` :
        `Your TP will only last ${cap} days, buy more!`;
}






//#############################################################
//#  SOLUTION 2  
//#############################################################


tpChecker = x => {
    var d = ~~(x.tp * 500 / (x.people * 57));
    return d < 14 ? `Your TP will only last ${d} days, buy more!` : `Your TP will last ${d} days, no need to panic!`
}







//#############################################################
//#  SOLUTION 3
//#############################################################


function tpChecker({ people, tp }) {
    let sheets = Math.floor((tp * 500) / (people * 57))
    return sheets >= 14 ? `Your TP will last ${sheets} days, no need to panic!` : `Your TP will only last ${sheets} days, buy more!`
}









//#############################################################
//#  SOLUTION 4
//#############################################################



function tpChecker({ people, tp }) {
    const days = Math.floor((tp * 500) / (people * 57));
    const enoughTp = days >= 14;
    const phrase = enoughTp ? 'no need to panic' : 'buy more';
    return `Your TP will ${!enoughTp ? 'only ' : ''}last ${days} days, ${phrase}!`;
}