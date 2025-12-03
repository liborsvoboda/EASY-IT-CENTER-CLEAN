/*

Money Formatting

Given a number, return a string which is formatted into US Dollars and cents!

Remember that:

You should round to two digits after the decimal point (even for integers).
Thousandths should be separated by commas.
Examples
dollaDollaBills(10) ➞ "$10.00"

dollaDollaBills(1000000) ➞ "$1,000,000.00"

dollaDollaBills(-314159.2653) ➞ "-$314,159.27"

dollaDollaBills(-56.99) ➞ "-$56.99"


Notes
There will be both negative and positive inputs.
Check the Resources tab for many tutorials on how to approach string formatting.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function dollaDollaBills(money) {
    return money.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}


//#############################################################
//#  SOLUTION 2  
//#############################################################



function dollaDollaBills(money) {
    return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        })
        .format(money);

}



//#############################################################
//#  SOLUTION 3
//#############################################################



function dollaDollaBills(money) {
    return money > 0 ? `${new Intl.NumberFormat('en-US', {
		style: 'currency', 
		currency: 'USD',
		minimumFractionDigits: 2
	}).format(money)}` : `${new Intl.NumberFormat('en-US', {
		style: 'currency', 
		currency: 'USD',
		minimumFractionDigits: 2
	}).format(money)}`
}


//#############################################################
//#  SOLUTION 4
//#############################################################


const dollaDollaBills = (money) => (+(money).toFixed(2)).toLocaleString("en-US", { style: "currency", currency: "USD" });






//#############################################################
//#  SOLUTION 5
//#############################################################


function dollaDollaBills(money) {
    let newNum = Math.abs(money).toFixed(2)
    let fp = newNum.split(".")[0]
    let lp = newNum.split(".")[1]
    if (fp.length > 6) {
        fp = `${fp.substr(0, fp.length - 6)},${fp.substr(fp.length -6)}`
    }
    if (fp.length > 3) {
        fp = `${fp.substr(0, fp.length - 3)},${fp.substr(fp.length -3)}`
    }
    if (money > 0) {
        return `$${fp}.${lp}`
    } else {
        return `-$${fp}.${lp}`
    }

}





//#############################################################
//#  SOLUTION 6
//#############################################################



function dollaDollaBills(m) {
    let ab = m.toFixed(2).split('.')
        .map((x, i) => {
            if (i == 0) {
                let a = [];
                x = [...x].reverse();
                for (let ind = 0; ind < x.length; ind += 3) {
                    a.unshift(x.slice(ind, ind + 3).reverse().join(''))
                }
                return a.join(',');
            } else { return x }
        })
    return ('$' + ab.join('.')).replace(/\$\-\D?/, '-$');
}






//#############################################################
//#  SOLUTION 7
//#############################################################


function dollaDollaBills(money) {
    const mon = money < 0 ? `-$${(Math.abs(money)).toFixed(2)}` :
        `$${money.toFixed(2)}`;
    const mid = mon.slice(mon.indexOf("$") + 1, -3).split("");
    return mon.slice(0, mon.indexOf("$") + 1) +
        mid.map((item, i) =>
            (mid.length - i) % 3 === 0 && i !== 0 ? "," + item : item).join("") +
        mon.slice(mon.length - 3);
}







//#############################################################
//#  SOLUTION 8
//#############################################################


const dollaDollaBills = money => (
    m = `${Math.abs(money).toFixed(2)}`, [a, b] = m.split `.`,
    a = a.length > 3 ? a.split ``.reverse().map((x, i) => i !== 0 && !(i % 3) ? `${x},` : x)
    .reverse().join `` : a,
    money > 0 ? `$${a}.${b}` : `-$${a}.${b}`
);