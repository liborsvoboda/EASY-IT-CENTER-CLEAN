



/*

Return Odd > Even
Given an array, return true if there are more odd numbers than even numbers, otherwise return false.

Examples
oddeven([1, 2, 3, 4, 5, 6, 7, 8, 9]) ➞ true

oddeven([1]) ➞ true

oddeven([13452394823795273847528572346]) ➞ false
Notes
All arrays will have at least 1 item.



*/






/*  Solution 1   */


function oddeven(lst){
	let odd = 0
	let even = 0
	
	lst.forEach(num => num%2==0 ? even++ : odd++)
	return odd > even
}


/*  Solution 2   */

const oddeven = lst => lst.filter(e => e % 2).length > (lst.length / 2);

const oddeven = (lst) => lst.filter(x=> x%2 === 1).length > lst.length/2

const oddeven = arr => arr.filter(num => num % 2).length * 2 > arr.length;

const oddeven = a => a.filter(b => b % 2).length > a.filter(b => b % 2 == 0).length;




/*  Solution 3   */


function oddeven(arr) {
	let even = arr.filter(n => n%2 ==0);
	let odd = arr.filter(n => n%2 != 0);
	return odd.length > even.length ? true : false;
}