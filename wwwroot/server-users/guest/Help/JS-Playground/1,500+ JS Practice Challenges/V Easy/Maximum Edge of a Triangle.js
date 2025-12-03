



/*

Maximum Edge of a Triangle
Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

Examples
nextEdge(8, 10) ➞ 17

nextEdge(5, 7) ➞ 11

nextEdge(9, 2) ➞ 10
Notes
(side1 + side2) - 1 = maximum range of third edge.
The side lengths of the triangle are positive integers.
Don't forget to return the result.



*/


/*  Solution 1   */
function nextEdge(side1, side2) {
	if(side1 > 0 && side2 > 0) {
		return (side1 + side2) - 1;
	}else {
		return;
	}
}



/*  Solution 2   */
function nextEdge(side1, side2) {
	return side1 + side2 - 1;
}


/*  Solution 3   */
const nextEdge = (side1, side2) => side1 + side2 - 1;