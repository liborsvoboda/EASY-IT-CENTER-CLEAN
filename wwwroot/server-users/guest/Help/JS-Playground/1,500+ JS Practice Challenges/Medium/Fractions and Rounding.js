/*

Fractions and Rounding

Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:

"{fraction} rounded to {n} decimal places is {answer}"

Examples
fracRound("1/3", 5) ➞ "1/3 rounded to 5 decimal places is 0.33333"

fracRound("2/8", 4) ➞ "2/8 rounded to 4 decimal places is 0.2500"

fracRound("22/7", 2) ➞ "22/7 rounded to 2 decimal places is 3.14"

Notes
Add trailing zeros if n is greater than the actual number of decimal places the fraction has (see example #2).
Numbers greater than one may be given as top-heavy fractions (no mixed numbers).
n won't be 1 because that would cause "decimal places" to be "decimal place", making the challenge more cumbersome than it needs to be.


*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


//#  SOLUTION 1 

const fracRound = (f, n) => `${f} rounded to ${n} decimal places is ${eval(f).toFixed(n)}`;

const fracRound = (frac, n) => `${frac} rounded to ${n} decimal places is ${eval(frac).toFixed(n)}`;


//#  SOLUTION 2  


function fracRound(frac, n) {
    let f = frac.split('/');
    return `${frac} rounded to ${n} decimal places is ${(f[0] / f[1]).toFixed(n)}`;
}


//#  SOLUTION 3

const fracRound = (frac, n) => `
	${frac} rounded to ${n} decimal places is ${eval(frac).toFixed(n)}
`.trim();


//#  SOLUTION 4

const fracRound = (frac, n) => {
    const res = frac.split('/');
    const round = (res[0] / res[1]).toFixed(n);
    return `${frac} rounded to ${n} decimal places is ${round}`;
}


//#  SOLUTION 5

function fracRound(frac, n) {
    const dividor = frac.indexOf('/')
    const numerator = parseInt(frac.substring(0, dividor))
    const denominator = parseInt(frac.substring(dividor + 1))

    return `${frac} rounded to ${n} decimal places is ${(numerator / denominator).toFixed(n)}`
}