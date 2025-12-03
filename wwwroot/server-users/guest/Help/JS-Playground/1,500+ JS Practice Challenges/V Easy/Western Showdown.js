



/*

Western Showdown
Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.

Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".

Examples
showdown(
  "   Bang!        ",
  "        Bang!   "
) ➞ "p1"

// p1 draws his gun sooner than p2

showdown(
  "               Bang! ",
  "             Bang!   "
) ➞ "p2"

showdown(
  "     Bang!   ",
  "     Bang!   "
) ➞ "tie"
Notes
Both strings are the same length.



*/






/*  Solution 1   */



const showdown = (p1, p2) => 	['p1','tie','p2'][Math.sign(p1.indexOf('B') - p2.indexOf('B')) + 1];

/*  Solution 2   */


unction showdown(p1, p2) {
	return p1.indexOf("!") === p2.indexOf("!") ? "tie" : p1.indexOf("!") < p2.indexOf("!") ? "p1" : "p2"
}

const showdown=(p1,p2)=>p1.indexOf('Bang!')==p2.indexOf('Bang!')?'tie':(p1.indexOf('Bang!')<p2.indexOf('Bang!')?'p1':'p2')


/*  Solution 3   */


function showdown(p1, p2) {
	// PSEUDO-CODE
	// How many letters until I reach the B
	// If p1 is shorter than p2, then return p1
	if (p1.indexOf("Bang") < p2.indexOf("Bang")){
		return 'p1';
	}
	//if p2 is shorter than p1, then return p2
	else if (p2.indexOf("Bang") < p1.indexOf("Bang")){
		return 'p2';
	}
	// if they are equal, then return "tie"
	else if (p1.indexOf("Bang") == p1.indexOf("Bang")){
		return 'tie';
	}
}