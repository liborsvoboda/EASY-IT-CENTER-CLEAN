/*

Star Ratings
Given an array of five values, calculate the average star rating, rounded to two decimal places. The array contains user votes per star, so the first element [0] contains the number of 1-star ratings and the last element [4], the number of 5-star ratings.

Return the average score in [brackets], followed by a space and asterisks' * to represent the star rating, rounded to the nearest whole star.

Examples
starRating([55, 67, 98, 115, 61]) ➞ "[3.15] ***"

starRating([0, 2, 0, 1, 23]) ➞ "[4.73] *****"

starRating([16, 17, 23, 40, 45]) ➞ "[3.57] ****"


Notes
Round stars to whole stars.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function starRating(arr) {
    let rate = (arr.reduce((acc, cur, i) => acc + cur * (i + 1), 0) /
        arr.reduce((acc, cur, i) => acc + cur, 0)).toFixed(2)
    return `[${rate}] ${'*'.repeat(Math.round(rate))}`
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function starRating(arr) {
    const score = arr.reduce((x, y, i) => x + y * (i + 1), 0) /
        arr.reduce((x, y) => x + y)
    return `[${score % 1 ? Math.round(score * 100) / 100 : score + '.00'}] ${'*'.repeat(Math.round(score))}`
}




//#############################################################
//#  SOLUTION 3
//#############################################################


const starRating = arr => {
    let avg = arr.reduce((acc, cur, idx, arr) => acc + (cur * (idx + 1)), 0) / arr.reduce((acc, cur) => acc + cur);
    return `[${avg.toFixed(2)}] ${Array(Math.round(avg)).fill('*').join('')}`
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function starRating(a) {
    l = a.reduce((a, b, i) => (a.t += b * (i + 1), a.c += b, a), { t: 0, c: 0 })
    x = (l.t / l.c).toFixed(2)
    return `[${x}] ${'*'.repeat(+x+.5|0)}`
}