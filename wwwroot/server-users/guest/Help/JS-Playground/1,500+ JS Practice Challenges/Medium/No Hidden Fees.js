/*

No Hidden Fees

Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

Examples
hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") ➞ false

hasHiddenFee(["$1", "$2", "$3"], "$6") ➞ false

hasHiddenFee(["$1"], "$4") ➞ true

Notes
Remember that each price is given as a string.
All $ signs will be at the beginning of the number.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1                                               #
//#############################################################



const hasHiddenFee = (prices, t) => prices.reduce((acc, cur) => acc + +cur.slice(1), 0) < +t.slice(1)






//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


function hasHiddenFee(prices, t) {
    let pt = prices.map(x => Number(x.replace('$', ''))).reduce((a, v) => a + v)
    return pt < Number(t.replace('$', ''))
}






//#############################################################
//#  SOLUTION 3
//#############################################################


function hasHiddenFee(prices, t) {
    return prices.map(x => Number(x.replace("$", ""))).reduce((a, b) => a + b, 0) == t.slice(1) ? false : true;
}




//#############################################################
//#  SOLUTION 4                                               #
//#############################################################



function hasHiddenFee(prices, t) {
    var sum = prices.map(elem => +elem.slice(1))
        .reduce((acc, idx) => acc += idx);
    t = +t.slice(1);

    return sum < t;
}


//#############################################################
//#  SOLUTION 5                                               #
//#############################################################



function hasHiddenFee(prices, t) {
    let pricesNoArray = []
    let total = null
    for (element of prices) {
        pricesNoArray.push(Number(element.split("$")[1]))
    }
    total = pricesNoArray.reduce((result, element) => {
        return result + element
    })
    if (total === Number(t.split("$")[1])) {
        return false
    } else {
        return true
    }

}



//#############################################################
//#  SOLUTION 6                                               #
//#############################################################



function hasHiddenFee(prices, t) {
    return prices.map(a => new Number(a.slice(1))).reduce((a, b) => a + b) < new Number(t.slice(1));
}