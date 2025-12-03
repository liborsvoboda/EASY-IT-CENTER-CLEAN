/*  

Bring Down The Class Average

What is the percentage you can score on a test, which singlehandedly brings down the class average by 5%? Given an array of your classmates' scores, create a function that returns the answer. Round to the nearest percent.

Examples
takeDownAverage(["95%", "83%", "90%", "87%", "88%", "93%"]) ➞ "54%"

takeDownAverage(["10%"]) ➞ "0%"

takeDownAverage(["53%", "79%"]) ➞ "51%"

Notes
No tests will include empty arrays or require negative percentages.
Note that you need to return a string.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const takeDownAverage = r => {
    let s = r.reduce((a, b) => a + +b.slice(0, -1), 0)
    return Math.round((s / r.length - 5) * (r.length + 1) - s) + '%'
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const takeDownAverage = scores => (
    scoresSum = scores.reduce((a, c) => a + +c.replace('%', ''), 0),
    avg = scoresSum / scores.length,
    `${Math.round((avg - 5) * (scores.length + 1) - scoresSum)}%`
);





//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



function takeDownAverage(scores) {

    let size = scores.length
    let sum = 0
    if (size > 1) {
        sum = scores.reduce((total, num) => {
            return parseInt(total) + parseInt(num)
        })
    } else sum = scores[0].replace('%', '')

    let beforeAvg = sum / size

    // 1 -  (sum + x) / (size + 1) = (beforeAvg - 5)
    // 2 -  (sum + x)  = (beforeAvg - 5) * (size + 1)
    // 3 -  x =  (beforeAvg - 5) * (size + 1) - sum

    let x = (beforeAvg - 5) * (size + 1) - sum
    return `${Math.round(x)}%`

}