



/*


Repeating Letters N Times
Create a function that repeats each character in a string n times.

Examples
repeat("mice", 5) ➞ "mmmmmiiiiiccccceeeee"

repeat("hello", 3) ➞ "hhheeellllllooo"

repeat("stop", 1) ➞ "stop"
Notes


*/






/*  Solution 1   */


function repeat(str, n) {
	if(n == 0){return ""};
	if(n == 1){return str};
	// Split into individual characters
	var arr = str.split('');
	var result = [];
	
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < n; j++){
			result.push(arr[i]);
		}
	}
	
	return result.join('');
}


/*  Solution 2   */

const repeat = (str, n) => str.split('').map(x => x.repeat(n)).join('');



/*  Solution 3   */


function repeat(str, n) {
    return	str.split('').map(x => x.repeat(n)).join('')
    }