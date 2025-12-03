/*

Grocery Store Prices

You are given an array of strings consisting of grocery items, with prices in parentheses. Return an array of prices in float format.

Examples
getPrices(["ice cream ($5.99)", "banana ($0.20)", "sandwich ($8.50)", "soup ($1.99)"]) ➞ [5.99, 0.2, 8.50, 1.99]

getPrices(["salad ($4.99)"]) ➞ [4.99]


Notes
See if you can use RegExp to solve (but it's not necessary).

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function getPrices(arr) {
	return arr.map(items => Number(items.match(/\d+\.\d+/)[0]))
}



//#############################################################
//#    SOLUTION 2
//#############################################################


const getPrices = A => A.map(a => +a.match(/[\d\.]+/))



//#############################################################
//#    SOLUTION 3
//#############################################################


function getPrices(arr) {
    var returnArr = arr.map(function(str){
    str = str.replace(/[a-z]|\s|\$|\(|\)/g, "");
    var nbr = parseFloat(str);
    return nbr;
});

//console.log(returnArr);
return returnArr;
}



//#############################################################
//#    SOLUTION 4
//#############################################################


function getPrices(arr) {
	return arr
    .join(',')
    .split(',')
    .map((item) => item.split(' '))
    .map((item) => parseFloat(item[item.length - 1].replace('($', '')));
}