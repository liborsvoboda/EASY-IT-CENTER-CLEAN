/*

Leader in an Array
Create a function that finds each number in the given array that is greater than every number that comes after it. Your solution should return an array of the number(s) that meet these criteria.

Examples
leader([2, 3, 20, 15, 8, 3]) ➞ [20, 15, 8, 3]
// Note that 20 is greater than all the elements to it's
// right side, similarly 15 and so on.

leader([2, 3, 20, 15, 8, 25, 3]) ➞ [25, 3]
// Note that 20 cannot be added because it is not greater than 25.

leader([1, 2, 3, 4, 5]) ➞ [5]
// 5 is technically greater than the (zero) remaining items.

leader([8, 7, 1, 2, 10, 3, 5]) ➞[10, 5]
// 10 is greater than all items to the right of it, so include.
// 3 is not greater than all items to the right of it, so exclude.
// 5 is greater than the remaining items, so include.


Notes
Add elements in the new array in the same order they occur in the input array.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


const leader = arr => arr.filter((v, i) => v === Math.max(...arr.slice(i)));



//#############################################################
//#    SOLUTION 2
//#############################################################


function leader(arr) {
	return arr.filter((v,i,arr)=>arr.slice(i+1)
										.every((v1)=>v1<v))
}




//#############################################################
//#    SOLUTION 3
//#############################################################


function leader(arr) 
{
	var temp = [];
	var a = [];
	for (var i = 0; i < arr.length; i++)
	{
		var a = arr.slice(i+1).sort((a,b) => a-b);
		if (arr[i] > a[a.length-1]) temp.push(arr[i]);
	}
	temp.push(arr[arr.length-1]);
	return temp;
}




//#############################################################
//#    SOLUTION 4
//#############################################################


function leader(arr){
	return arr.filter((x, i) => arr.slice(i + 1).every(y => y < x));
}





//#############################################################
//#    SOLUTION 5
//#############################################################


const leader = arr => {
	const updated = arr.slice(arr.indexOf(Math.max(...arr)));
	updated.push(0)
	return updated.filter((num, i) => num > updated[i+1])
}