/*

Check If an Array Is Sorted and Rotated

Given an array of distinct integers, create a function that checks if the array is sorted and rotated clockwise. If so, return "YES"; otherwise return "NO".

Examples
check([3, 4, 5, 1, 2]) ➞ "YES"
// The above array is sorted and rotated.
// Sorted array: [1, 2, 3, 4, 5].
// Rotating this sorted array clockwise
// by 3 positions, we get: [3, 4, 5, 1, 2].

check([1, 2, 3]) ➞ "NO"
// The above array is sorted but not rotated.

check([7, 9, 11, 12, 5]) ➞ "YES"
// The above array is sorted and rotated.
// Sorted array: [5, 7, 9, 11, 12].
// Rotating this sorted array clockwise
// by 4 positions, we get: [7, 9, 11, 12, 5].

*/



//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


function check(arr) {
	let sort = [...arr].sort((a, b) => a-b)
	if (arr[0] === sort[0]) {
		return 'NO'
	} else {
		let pos = arr.indexOf(sort[0])
		return sort.every((el, i) => el === arr[(i+pos)%(arr.length)]) ? 'YES' : 'NO'
	}
}



//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


const check = (arr) => {
    let count = 0;
    let mod = arr.slice().sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < mod.length - 1; i++) {
      mod.unshift(mod.pop());
      console.log(mod, arr);
      if (JSON.stringify(mod) === JSON.stringify(arr)) {
        count = i;
      }
    }
    return count > 0 ? "YES" : "NO";
  };




//#############################################################
//#  SOLUTION 3                                               #
//#############################################################


const check = arr => {
	const s1 = arr.join('');
	const s2 = arr.sort((a, b) => a - b).join('');
	return ((s1 !== s2) && s1.repeat(2).includes(s2)) ? 'YES' : 'NO';
};



//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


function check(arr) {
    // Find the min.
    var min = Math.min(...arr);
    // Find the min's index.
    var minIdx = arr.indexOf(min);
    // If the index === 0, return NO.
    if(minIdx === 0){
        return "NO";
    }

    // Slice the array into two new arrays:
        // From the beginning to the min's index.
        // From the min's index to the end.
    var first = arr.slice(0, minIdx);
    var last = arr.slice(minIdx,);

	// Concatenate first to the end of last.
    // Sort the original array.
    // If the concat is the same as orig sort, return YES.
    var lastFirst = [...last, ...first];
    arr.sort((a,b)=>a-b)

    for(let i in lastFirst){
        if(lastFirst[i] !== arr[i]){
            return "NO";
        }
    }

    return "YES";	
}