/*

Cricket Balls to Overs!

In cricket, an over consists of six deliveries a bowler bowls from one end. Create a function that takes the number of balls nBalls bowled by a bowler and calculates the number of overs bowled by him/her.

Examples
totalOvers(2400) ➞ [400]

totalOvers(164) ➞ [27.2]
// 27 overs and 2 balls were bowled by the bowler.

totalOvers(945) ➞ [157.3]
// 157 overs and 3 balls were bowled by the bowler.

totalOvers(5) ➞ [0.5]


Notes
The number following the decimal point represents the balls remaining after the last over. Therefore, it will only ever have a value of 1-5.

*/


//#############################################################
//#  SOLUTION 1 
//#############################################################


function totalOvers(nBalls) {
    return parseFloat(Math.floor(nBalls / 6) + "." + (nBalls % 6))
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const totalOvers = nBalls => Math.floor(nBalls / 6) + nBalls % 6 / 10



//#############################################################
//#  SOLUTION 3
//#############################################################


function totalOvers(nBalls) {
    return (nBalls % 6 != 0) && +`${parseInt(nBalls / 6)}.${nBalls % 6}` ||
        +`${parseInt(nBalls / 6)}`
}



//#############################################################
//#  SOLUTION 4
//#############################################################


totalOvers = n => parseFloat(Math.floor(n / 6) + "." + (n % 6))


//#############################################################
//#  SOLUTION 5
//#############################################################


function totalOvers(nBalls) {
    return nBalls < 6 ? nBalls / 10 : parseInt(nBalls / 6) + ((nBalls % 6) / 10);
}



//#############################################################
//#  SOLUTION 6
//#############################################################


const totalOvers = nBalls => {
    const balls = Number.parseInt(nBalls / 6, 10);
    return +(balls + '.' + nBalls % 6);
}




//#############################################################
//#  SOLUTION 7
//#############################################################


function totalOvers(nBalls) {
    return nBalls % 6 === 0 ? Number(nBalls / 6) : Math.floor(nBalls / 6) + (nBalls % 6) / 10
}