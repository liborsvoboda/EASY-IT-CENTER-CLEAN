/*

The Missing Link of an Arithmetic Progression

Your function will get an array with a number sequence. However, one item will be missing. It's your job to find out which one is not in the array.

To illustrate, given the array [1, 3, 4, 5], 2 is missing so the output must be 2.

Examples
missing([1, 3, 4, 5]) ➞ 2

missing([2, 4, 6, 8, 10, 14, 16]) ➞ 12

missing([1.5, 2, 3]) ➞ 2.5


Notes
The missing item will never be the smallest or largest number in the array.
In every array, exactly one item is missing.

*/


//#############################################################
//#    SOLUTION 1
//#############################################################


function missing(arr) {
	//calculate difference of each number
	let difference = (arr[arr.length-1]-arr[0]) / arr.length;
	//add the difference with the complete array number
	for (i = 0 ;  i <= arr.length ; i++){
		if (arr[i] + difference !== arr[i+1]){
			return arr[i] + difference
		}
	}
}



//#############################################################
//#    SOLUTION 2
//#############################################################


function missing(arr) {
    const seq = (arr[arr.length - 1] - arr[0]) / arr.length;
    return arr.find((num, i) => num + seq !== arr[i + 1]) + seq;
  }




//#############################################################
//#    SOLUTION 3
//#############################################################


const missing = a => {
	let d = (a[a.length-1] - a[0])/a.length;
	return  a.filter((v,i,a) => v + d != a[i+1])[0] + d;
}




//#############################################################
//#    SOLUTION 4
//#############################################################


function missing(arr) {
	const [, b, c, ...rest] = arr
	const step = c - b 
	const [x, y] = arr.filter((x,i)=>arr[i+1] - x != step)
	return x + step 
}