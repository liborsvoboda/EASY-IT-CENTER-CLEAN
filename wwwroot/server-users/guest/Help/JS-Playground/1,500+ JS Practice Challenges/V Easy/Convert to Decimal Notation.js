



/*
Convert to Decimal Notation
Create a function to convert an array of percentages to their decimal equivalents.

Examples
convertToDecimal(["1%", "2%", "3%"]) ➞ [0.01, 0.02, 0.03]

convertToDecimal(["45%", "32%", "97%", "33%"]) ➞ [0.45, 0.32, 0.97, 0.33]

convertToDecimal(["33%", "98.1%", "56.44%", "100%"]) ➞ [0.33, 0.981, 0.5644, 1]
Notes


*/






/*  Solution 1   */

function convertToDecimal(perc) {
	return perc.map(x => parseFloat(x)/100);
}



/*  Solution 2   */

const convertToDecimal=(perc)=>perc.map(e=>parseFloat((e).split('%')[0])/100)



/*  Solution 3   */


function convertToDecimal(perc) {
	let decimalsArray = []
    for(let i = 0; i < perc.length; i++){
        let percentagesNumbers = parseFloat(perc[i])/100;
         decimalsArray.push(percentagesNumbers);
    }
    return decimalsArray;
}


function convertToDecimal(perc) {
	return perc.map(x => parseFloat(x.substring(0, x.length - 1)) / 100)
}