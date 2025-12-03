



/*

Is Sam with Frodo?
Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

Examples
middleEarth(["Frodo", "Sam", "Gandalf"]) ➞ true

middleEarth(["Frodo", "Saruman", "Sam"]) ➞ false

middleEarth(["Orc", "Sam", "Frodo", "Legolas"]) ➞ true
Notes
No matter who comes first, the result must be true if Frodo and Sam are side by side.
There is only one Sam and one Frodo in the array.



*/






/*  Solution 1   */


function middleEarth(arr) {
	let sam = arr.indexOf('Sam');
	let frodo = arr.indexOf('Frodo');
	return frodo - sam === 1 || sam - frodo === 1;
}


/*  Solution 2   */

const middleEarth = a =>  Math.abs(a.indexOf('Sam') - a.indexOf('Frodo')) <= 1;



/*  Solution 3   */


function middleEarth(arr) {
	for(let i = 0;i< arr.length;i++){
		if(arr[i-1]=="Sam" && arr[i]=="Frodo" ||
			arr[i+1]=="Sam" && arr[i]=="Frodo") return true;
	}
	return false;
}