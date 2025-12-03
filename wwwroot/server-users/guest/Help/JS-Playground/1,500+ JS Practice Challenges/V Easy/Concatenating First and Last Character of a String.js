



/*


Concatenating First and Last Character of a String
Creates a function that takes a string and returns the concatenated first and last character.

Examples
firstLast("ganesh") ➞ "gh"

firstLast("kali") ➞ "ki"

firstLast("shiva") ➞ "sa"

firstLast("vishnu") ➞ "vu"

firstLast("durga") ➞ "da"
Notes
There is no empty string.


*/






/*  Solution 1   */


function firstLast(name) {
	return name.slice(0,1).concat(name.slice(name.length-1))
}




firstLast = (name) =>{
    return name[0]+name[name.length-1]
}

/*  Solution 2   */

const firstLast = n => n[0] + n.slice(-1);

const firstLast = name => name[0] + name[name.length - 1];

function firstLast(name){
	return name.charAt(0) + name.charAt(name.length - 1);
}




/*  Solution 3   */


const firstLast = n => n[0] + n.slice(-1);


const firstLast = name => `${name[0]}${name[name.length - 1]}`;