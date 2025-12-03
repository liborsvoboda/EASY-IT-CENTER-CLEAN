/*

Wash Your Hands :)

It takes 21 seconds to wash your hands and help prevent the spread of COVID-19.

Create a function that takes the number of times a person washes their hands per day N and the number of months they follow this routine nM and calculates the duration in minutes and seconds that person spends washing their hands.

Examples
washHands(8, 7) ➞ "588 minutes and 0 seconds"

washHands(0, 0) ➞ "0 minutes and 0 seconds"

washHands(7, 9) ➞ "661 minutes and 30 seconds"

Notes
Consider a month has 30 days.
Wash your hands.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function washHands(N, nM) {
    s = nM * N * 21 * 30
    minutes = parseInt(s / 60)
    sec = s % 60
    return `${minutes} minutes and ${sec} seconds`
}






//#############################################################
//#  SOLUTION 2  
//#############################################################


function washHands(N, nM) {
    if (N == 0 || nM == 0) return "0 minutes and 0 seconds"
    let r = nM * 30 * N * 21
    return parseInt(r / 60) + " minutes and " + r % 60 + " seconds"
}







//#############################################################
//#  SOLUTION 3
//#############################################################


const washHands = (N, nM) => `${(Math.floor(N * 21 * nM * 30 / 60))} minutes and ${N * 21 * nM * 30 % 60} seconds`;







//#############################################################
//#  SOLUTION 4
//#############################################################



const washHands = (N, nM) => {
    const s = nM * 30 * N * 21;
    return `${~~(s / 60)} minutes and ${s % 60} seconds`;
};