/*

Histogram Function
Build a function that creates histograms. Every bar needs to be on a new line and its length corresponds to the numbers in the array passed as an argument. The second argument of the function represents the character to be used for the bar.

histogram(arr, char) ➞ str
Examples
histogram([1, 3, 4], "#") ➞ "#\n###\n####"

#
###
####

histogram([6, 2, 15, 3], "=") ➞ "======\n==\n===============\n==="

======
==
===============
===

histogram([1, 10], "+") ➞ "+\n++++++++++"

+
++++++++++



Notes
For better understanding try printing out the result.

*/





//#############################################################
//#  SOLUTION 1                                              ##
//#############################################################


const histogram = (arr, char) => arr.map(n => char.repeat(n)).join('\n');



//#############################################################
//#  SOLUTION 2                                              ##
//#############################################################


function histogram(arr, char) {
	return arr.map(n=>([...Array(n)].map(x=>char)).join('')).join('\n')
}



//#############################################################
//#  SOLUTION 3                                               #
//#############################################################


function histogram(arr, char) {
	return arr.reduce((str,item)=>(item !== arr[arr.length-1])?str += `${char.repeat(item)}\n`:str += `${char.repeat(item)}`,"");
}





//#############################################################
//#  SOLUTION 4                                               #
//#############################################################



function histogram(arr, char) {
	return arr.map((x) => char.repeat(x)).join("\n");
}