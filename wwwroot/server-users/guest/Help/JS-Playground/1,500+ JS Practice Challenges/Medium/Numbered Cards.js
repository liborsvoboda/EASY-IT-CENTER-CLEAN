/*

Numbered Cards

You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.

Worked Example
winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]) ➞ true
// Your cards can make the number 96
// Your opponent can make the number 73
// You win the round since 96 > 73
Examples
winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]) ➞ true

winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5]) ➞ false

winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1]) ➞ false

Notes
Return false if you and your opponent reach the same maximum number (see example #3).
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################

const winRound = (y, x) => {
    [y, x] = [y, x].map(k => +k.sort((a, b) => b - a).slice(0, 2).join(''))
    return y > x
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


const winRound = (you, opp) =>
    you.sort((a, b) => b - a).slice(0, 2).join('') >
    opp.sort((a, b) => b - a).slice(0, 2).join('');





//#############################################################
//#  SOLUTION 3
//#############################################################


function winRound(you, opp) {
    let sortYou = you.sort((a, b) => b - a)
    let sortOpp = opp.sort((a, b) => b - a)
    return sortYou[0] > sortOpp[0] ? true :
        sortYou[0] < sortOpp[0] ? false :
        sortYou[1] > sortOpp[1] ? true :
        false
}






//#############################################################
//#  SOLUTION 4
//#############################################################



function winRound(you, opp) {
    const arr1 = you.sort((a, b) => b - a);
    const arr2 = opp.sort((a, b) => b - a);
    const youNum = arr1[0].toString() + arr1[1].toString();
    const oppNum = arr2[0].toString() + arr2[1].toString();
    return (youNum > oppNum) ? true : false;
}





//#############################################################
//#  SOLUTION 5
//#############################################################



function winRound(you, opp) {
    you.sort();
    opp.sort();
    return (you[you.length - 1] + "" + you[you.length - 2] > opp[opp.length - 1] + "" + opp[opp.length - 2]);
}







//#############################################################
//#  SOLUTION 6
//#############################################################


function winRound(you, opp) {
    you = you.sort().reverse()
    opp = opp.sort().reverse()
    return eval(`${you[0]}${you[1]}` > `${opp[0]}${opp[1]}`)
}