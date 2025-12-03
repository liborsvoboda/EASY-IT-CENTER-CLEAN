/*

Return the End Letters of Numbers

Create a function that takes an integer and returns it as an ordinal number. An Ordinal Number is a number that tells the position of something in a list, such as 1st, 2nd, 3rd, 4th, 5th, etc.

Examples
returnEndOfNumber(553) ➞ "553-RD"

returnEndOfNumber(34) ➞ "34-TH"

returnEndOfNumber(1231) ➞ "1231-ST"

returnEndOfNumber(22) ➞ "22-ND"

returnEndOfNumber(412) ➞ "412-TH"

Notes
Check the Resources tab for more info on ordinal numbers.
*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const returnEndOfNumber = (num) => {
    let res = String(num) + "-";
    let bottomTwo = num % 100;
    const digits = bottomTwo <= 9 ? [0, bottomTwo] :
        String(bottomTwo).split("").map(_ => +_);

    if (digits[0] === 1) {
        return res + "TH";
    } else {
        switch (digits[1]) {
            case 1:
                return res + "ST";
            case 2:
                return res + "ND";
            case 3:
                return res + "RD";
            default:
                return res + "TH";
        }
    }
}


//#  SOLUTION 2  

function returnEndOfNumber(num) {
    let ends = ['TH', 'ST', 'ND', 'RD']
    return `${num}-${(num%100-11)*(num%100-19)<=0?ends[0]:num%10<4?ends[num%4]:ends[0]}`
}



//#  SOLUTION 3


const returnEndOfNumber = n => `${n}-${[,'ST','ND','RD'][n/10%10^1&&n%10]||'TH'}`;


//#  SOLUTION 4


function returnEndOfNumber(num) {
    const l1 = String(num).slice(-1)
    const l2 = String(num).slice(-2)
    return +l2 > 10 && +l2 < 14 ? num + '-TH' :
        l1 == "1" ? num + '-ST' :
        l1 == "2" ? num + '-ND' :
        l1 == "3" ? num + '-RD' :
        num + '-TH'
}


//#  SOLUTION 5


returnEndOfNumber = (n, s = n.toString()) => `${n}-${(s.length>1&&+s.substr(-2,1)===1?'TH':['ST','ND','RD','TH'].filter((a,i)=>+s.substr(-1)===i+1))}`




//#  SOLUTION 6


function returnEndOfNumber(num) {
    return (num % 100 > 10 && num % 100 < 20) ? num + '-TH' : (num % 10 > 3 ? num + '-TH' : num + '-' + [, 'ST', 'ND', 'RD'][+(('' + num).slice(-1))])
}