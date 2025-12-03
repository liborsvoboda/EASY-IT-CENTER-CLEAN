



/*



The 3 Programmers Problem
You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

Examples
programmers(147, 33, 526) ➞ 493

programmers(33, 72, 74) ➞ 41

programmers(1, 5, 9) ➞ 8
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

*/






/*  Solution 1   */


function programmers(one, two, three) {
	var max = 0;
	var min=0;
	for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }




  function programmers(one, two, three) {
	return Math.max(one, two, three) - Math.min(one, two, three);
}


/*  Solution 2   */

let programmers = (...a) => Math.max(...a) - Math.min(...a);

const programmers = (x,y,z) => Math.max(x,y,z) - Math.min(x,y,z)


function programmers(one, two, three) {
	var min = Math.min(one,two,three);
	var max = Math.max(one,two,three);
	return (max - min); 
}




/*  Solution 3   */

function programmers(one, two, three) {
	return Math.max(one, two, three) - Math.min(one, two, three)
}


//You hired three programmers and you (hopefully) pay them. Create a 
//function that takes three numbers (the hourly wage of each programmer) 
//and returns the difference between the highest-paid programmer and the 
//lowest-paid