



/*


Prefixes vs. Suffixes
Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

isPrefix should return true if it begins with the prefix argument.
isSuffix should return true if it ends with the suffix argument.
Otherwise return false.

Examples
isPrefix("automation", "auto-") ➞ true

isSuffix("arachnophobia", "-phobia") ➞ true

isPrefix("retrospect", "sub-") ➞ false

isSuffix("vocation", "-logy") ➞ false
Notes
The prefix and suffix arguments have dashes - in them.


*/






/*  Solution 1   */


const isPrefix = (word, prefix) => word.startsWith(prefix.slice(0, -1));

const isSuffix = (word, suffix) => word.endsWith(suffix.slice(1));


/*  Solution 2   */

function isPrefix(word, prefix) {
	return word.startsWith(prefix.replace('-',""))
}

function isSuffix(word, suffix) {
	return word.endsWith(suffix.replace('-',""))
}



const isPrefix = (word, pref) => word.startsWith(pref.replace('-', ''));
const isSuffix = (word, suff) => word.endsWith(suff.replace('-', ''));



/*  Solution 3   */

let isPrefix=(word, prefix)=>word.startsWith(prefix.slice(0,prefix.length-1))
let isSuffix=(word, suffix)=>word.endsWith(suffix.slice(1))