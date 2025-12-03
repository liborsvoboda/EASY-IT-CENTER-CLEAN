



/*


Is One Array a Subset of Another?
Create a function that returns true if the first array is a subset of the second. Return false otherwise.

Examples
isSubset([3, 2, 5], [5, 3, 7, 9, 2]) ➞ true

isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]) ➞ true

isSubset([1, 2], [3, 5, 9, 1]) ➞ false
Notes
Both arrays will contain only unique values.


*/






/*  Solution 1   */

function isSubset(arr1, arr2) {
	if(arr1.length === arr2.length){
		return arr1.sort((a,b)=> a-b).toString() == arr2.sort((a,b)=> a-b).toString()
	}
	let longer = arr1.length > arr2.length ? [...arr1] : [...arr2];
	let shorter = arr1.length < arr2.length ? [...arr1] : [...arr2];
	let which = true;
	shorter.forEach(x => {
		if(!longer.includes(x)){
			which = false
		}
	})
return which
}



/*  Solution 2   */

const isSubset = (a,b) => a.every(c => b.includes(c));

const isSubset= (a,b) => a.every(c => b.includes(c));

const isSubset = (a1, a2) => a1.filter(a=>a2.includes(a)).length == a1.length

isSubset=(arr1,arr2)=>arr1.every(a=>arr2.includes(a))

const isSubset = (arr1, arr2) => arr1.every(el => arr2.includes(el));

const isSubset = (arr1, arr2) => arr1.every(x => arr2.includes(x));

const isSubset = (arr1, arr2) => arr1.every(x => arr2.includes(x))







function isSubset(arr1, arr2) {
    return arr1.every((val) => arr2.includes(val));
  }






/*  Solution 3   */


function isSubset(arr1, arr2) {
	return arr1.every(val => arr2.includes(val))
}




function isSubset(arr1, arr2) {
    for (i of arr1) {
            if (!arr2.includes(i)) {
                    return false;
            }
    } return true;
}