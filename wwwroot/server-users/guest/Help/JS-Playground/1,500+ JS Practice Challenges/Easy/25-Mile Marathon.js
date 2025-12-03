



/*


25-Mile Marathon
Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

Return True if the marathon is 25 miles long, otherwise, return False.

Examples
marathon_distance([1, 2, 3, 4]) ➞ False

marathon_distance([1, 9, 5, 8, 2]) ➞ True

marathon_distance([-6, 15, 4]) ➞ True
Notes
Items in the list will always be integers.
Items in the list may be negative or positive, but since negative distance isn't possible, find a way to convert the sum of the distance into a positive integer.
Return False if the arguments are empty or not provided.


*/






/*  Solution 1   */

const marathonDistance = d =>{
	if (d.length < 1){ return false}

 return d.reduce((total, amount) => Math.abs(total) + amount) == 25
	
}


function marathonDistance(d){
	return d.reduce((total, item)=>total +=Math.abs(item), 0)==25
}




function marathonDistance(d){
	return d.reduce((sum, x)=>sum+Math.abs(x),0)===25
}



function marathonDistance(d){
	return d.reduce((acc, val) => acc + Math.abs(val), 0) === 25;
}



function marathonDistance(d){
	return d.reduce((a, b)=> a + Math.abs(b),0) ==25
}


function marathonDistance(d){
	let positiveArr = d.map(el => Math.abs(el))
	return (positiveArr.reduce((a, b) => a + b, 0) === 25) ? true: false;
}





/*  Solution 2   */

const marathonDistance = arr => arr.reduce( (a, b) => { return Math.abs(a) + Math.abs(b); }, 0) === 25;

const marathonDistance = d => d.reduce((t, n) => t + Math.abs(n), 0) == 25;

const marathonDistance = d => d.length ? d.map(a=>Math.abs(a)).reduce((a,b)=>a+b)==25 : false

const marathonDistance = (d, m = 25) => d.reduce((s, n) => s + Math.abs(n), 0) === m;

const marathonDistance = d => d.reduce((a, c) => a + Math.abs(c), 0) === 25;

const marathonDistance = d =>  d.reduce((total, curr) => total + Math.abs(curr), 0) === 25;


/*  Solution 3   */


function marathonDistance(d){
	let summation = 0
	d.forEach(element => summation += Math.abs(element))
	return summation === 25 ? true : false
}


