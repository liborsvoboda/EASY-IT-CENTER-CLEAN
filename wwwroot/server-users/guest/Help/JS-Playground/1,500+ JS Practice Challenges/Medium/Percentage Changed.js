/*

Percentage Changed

Create a function that takes an old price oldPrice, a new price newPrice, and returns what percent the price decreased or increased. Round the percentage to the nearest whole percent.

Examples
percentageChanged("$800", "$600") ➞ "25% decrease"

percentageChanged("$1000", "$840") ➞ "16% decrease"

percentageChanged("$100", "$950") ➞ "850% increase"

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#  SOLUTION 1 

const percentageChanged = (...prices) => {
    const [oldPrice, newPrice] = prices.map(s => Number(s.slice(1)));
    return `${
		Math.abs(100 - Math.round(100 * newPrice / oldPrice))
	}% ${(oldPrice > newPrice) ? 'de' : 'in'}crease`;
};






//#############################################################
//#  SOLUTION 2  

const percentageChanged = (oldPrice, newPrice) => {
    const diff = (+oldPrice.slice(1) - +newPrice.slice(1)) / +oldPrice.slice(1) * 100;
    return `${+Math.abs(diff).toFixed()}% ${diff < 0 ? 'increase' : 'decrease'}`;
}






//#############################################################
//#  SOLUTION 3

const percentageChanged = (o, n) => {
    const p = ((1 - n.slice(1) / o.slice(1)) * 100).toFixed();
    return p > 0 ? p + '% decrease' : -p + '% increase';
};







//#############################################################
//#  SOLUTION 4


function percentageChanged(o, n) {
    var a = parseInt(o.replace(/[$]/gi, ""))
    var b = parseInt(n.replace(/[$]/gi, ""))
    var c = a > b ? "% decrease" : "% increase"
    var d = c == "% decrease" ? a - b : b - a
    return Math.round(d / a * 100) + c
}





//#############################################################
//#  SOLUTION 5


function percentageChanged(oldPrice, newPrice) {
    let oldp = +oldPrice.slice(1);
    let newp = +newPrice.slice(1);
    return oldp > newp ?
        Math.round((1 - newp / oldp) * 100).toString() + "% decrease" :
        Math.abs((Math.round((1 - newp / oldp) * 100))).toString() + "% increase";
}




//#############################################################
//#  SOLUTION 6


const percentageChanged = (oldPrice, newPrice) => {
    const op = +oldPrice.slice(1);
    const np = +newPrice.slice(1);

    let ans = Math.abs(Math.round(((op - np) / op) * 100));

    return `${ans}% ${np > op ? "increase" : "decrease"}`;
};





//#############################################################
//#  SOLUTION 7


const percentageChanged = (oP, nP) => {
    const arr = [+oP.slice(1), +nP.slice(1)];
    const p = ~~((arr[0] - arr[1]) / arr[0] * 100);
    return `${Math.abs(p)}% ${p < 0 ? 'increase' : 'decrease'}`;
}