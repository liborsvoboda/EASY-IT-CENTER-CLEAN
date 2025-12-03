/*

Count Number of Identical Arrays

Create a function that takes four arrays as arguments and returns a count of the total number of identical arrays.

Examples
countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]) ➞ 2

countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]) ➞ 0

countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]) ➞ 3


Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function countIdenticalArrays(arr1, arr2, arr3, arr4) {
	const num = Array.from(arguments)
		.map((arr) => arr.toString())
		.sort()
		.filter((arr, i, fullArr) => arr === fullArr[i + 1])
		.length;
	return num === 0 ? 0 : num + 1;
}



//#############################################################
//#    SOLUTION 2
//#############################################################


function countIdenticalArrays(arr1, arr2, arr3, arr4) {
	let arr = [...arguments];	
	let ar = [];
		  for(let item of arr) {
			let x = "";
			for(let i of item){x += `${i}`};
			ar.push(x);
			};
	return -ar.filter((item,index) => ar.lastIndexOf(item) == index &&
																	  ar.indexOf(item) == index).length + ar.length
}




//#############################################################
//#    SOLUTION 3
//#############################################################


function countIdenticalArrays(a1, a2, a3, a4) {
	let a = Array.from(new Set([a1, a2, a3, a4].map(v => v.join(""))));
	return a.length < 4 ? 4 - a.length + 1 : 0; 
}



//#############################################################
//#    SOLUTION 4
//#############################################################


function countIdenticalArrays(...arg) {
	let strings = arg.map(x => x.toString())
	let count = strings.reduce((a, b) => {a[b]===undefined ? a[b]=1 : a[b]++; return a}, {});
	let max = Math.max(...Object.values(count));
	return max>1 ? max : 0;
}