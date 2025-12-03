



/*



Check if a String Contains only Identical Characters
Write a function that returns true if all characters in a string are identical and false otherwise.

Examples
isIdentical("aaaaaa") ➞ true

isIdentical("aabaaa") ➞ false

isIdentical("ccccca") ➞ false

isIdentical("kk") ➞ true
Notes

*/






/*  Solution 1   */


function isIdentical(s) {
	return new Set([...s]).size === 1;
}


/*  Solution 2   */

const isIdentical = a => a === a[0].repeat(a.length);

let isIdentical=(s)=>[...s].every(x=>x==s[0])

const isIdentical = str => new Set(str).size === 1;


let isIdentical = s => new Set(s).size == 1


const isIdentical = (s) => (new Set(s).size) === 1;


/*  Solution 3   */


function isIdentical(s) {
	s = s.split('');
	const first = s[0];
	
	for(let i = 0; i < s.length; i++){
		if(s[i] !== first) return false;
	}
	
	return true;
}