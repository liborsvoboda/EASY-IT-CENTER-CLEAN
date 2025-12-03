/*

Format Number with Comma(s) Separating Thousands

Create a function that takes a number as an argument and returns a string formatted to separate thousands.

Examples
formatNum(1000) ➞ "1,000"

formatNum(100000) ➞ "100,000"

formatNum(20) ➞ "20"

Notes
You can expect a valid number for all test cases.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1 
//#############################################################


function formatNum(num) {
    return num.toLocaleString();
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function formatNum(num) {
    let ar = [...('' + num)];
    let i = ar.length;
    while (i -= 3) {
        if (i < 0) break;
        ar.splice(i, 0, ',');
    }
    return ar.join('');
}






//#############################################################
//#  SOLUTION 3
//#############################################################


function formatNum(num) {
    var str = "";

    while (num.toString().length > 3) {
        var last3 = (num % 1000).toString();
        while (last3.length < 3) last3 = "0" + last3;

        str = "," + last3 + str;
        num = Math.floor(num / 1000);
    }

    str = num + str;

    return str;
}






//#############################################################
//#  SOLUTION 4
//#############################################################



formatNum = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");




function formatNum(num) {
    var newNum = num.toString();
    let re = /(\d)(?=(\d{3})+$)/g;
    return newNum.replace(re, "$1,");

}