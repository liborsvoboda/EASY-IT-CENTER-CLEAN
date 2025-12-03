/*

Expand a Number I

Create a function that expands a number into a string as shown below:

25 ➞ "20 + 5"
70701 ➞ "70000 + 700 + 1"
685 ➞ "600 + 80 + 5"
Examples
expandedForm(70304) ➞ "70000 + 300 + 4"

expandedForm(1037903) ➞ "1000000 + 30000 + 7000 + 900 + 3"

expandedForm(802539) ➞ "800000 + 2000 + 500 + 30 + 9"

*/






//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


const expandedForm = num =>
	[...'' + num]
							.map((n, i, arr) => n > 0 ? String(+n * Math.pow(10, arr.length - i - 1)) : '')
							.filter(x => x !== '')
							.join(' + ');







//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


function expandedForm(num) {
	let len = String(num).length;
	let arr = String(num).split('');
	for (let i = 0; i < arr.length; i++){
			arr[i] = arr[i] + '0'.repeat(len - 1);
			len -= 1;
	}
	return arr.filter(x => x !== '0' && x !== '00' && x !== '000' && x !== '0000' && x !== '00000' && x !== '000000').join(' + ')
}






//#############################################################
//#  SOLUTION 3                                               #
//#############################################################


function expandedForm(num) {
	var a = [...num+""].filter(x => x != 0)
	var b = [...num+""].map((x,i) => x != 0 ? i : -1).filter(x => x > -1)
	var c = b.map((x,i) => a[i] + "0".repeat((num+"").length - 1 - x))
	return c.join(" + ")
}






//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


function expandedForm(num) {
	return [...`${num}`].reverse().map((d, i) => d * 10 ** i).filter(Boolean).reverse().join(" + ");
}