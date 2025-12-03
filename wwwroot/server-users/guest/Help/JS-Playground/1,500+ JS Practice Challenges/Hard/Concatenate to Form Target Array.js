/*

Concatenate to Form Target Array

Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.

Examples
canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Duplicate 7s not found in target array.

canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Missing 6 from target array.

Notes
Arrays do not have to be sorted (see example #2).
Arrays should concatenate to create the final array exactly (see examples #3 and #4).

*/




//#############################################################
//#    SOLUTION 1                                             #
//#############################################################


function canConcatenate(arr, target) {
    return [].concat(...arr).sort().join('') === target.sort().join('');
  }





//#############################################################
//#    SOLUTION 2                                             #
//#############################################################


function canConcatenate(arr, target) {
	var str = '';
	for(var i=0; i<arr.length; i++) {
			if(i === arr.length-1) {
				str += arr[i].toString();
			} else {
				str += arr[i].toString() + ",";
			}
	}
	var newArr = str.split(",");
	var finalArr = [];
	for(var i=0; i<newArr.length; i++) {
		finalArr.push(parseInt(newArr[i]));
	}
	finalArr.sort();
	target.sort();
	
	return (finalArr.length === target.length) ? true : false;
}







//#############################################################
//#    SOLUTION 3                                             #
//#############################################################


const canConcatenate = (arr, target) => {
	const sort   = arr => arr.sort((a,b) => a - b)
	const newArr = sort([].concat(...arr))
	
	return newArr.length === target.length && 
		newArr.every((num,i) => num === sort(target)[i])
}








//#############################################################
//#    SOLUTION 4                                             #
//#############################################################


function canConcatenate(arr, target) {
	//flatten arrays
	let wholeArr = arr.flat()
	let targCount = 0
	
	//loop over array and pop elements included in the target array
	for(let i = 0; i < wholeArr.length; i++) {
		if(wholeArr.length !== target.length){
			return false
		} else if(target.includes(wholeArr[i])){
			targCount += 1
		}
	}
	if(targCount === target.length)  {
		return true
	}
	
	console.log(targCount, arr.length)
	
	return false
}