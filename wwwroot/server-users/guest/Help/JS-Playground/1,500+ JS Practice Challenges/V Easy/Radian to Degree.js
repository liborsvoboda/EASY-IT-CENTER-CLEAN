



/*

Radian to Degree
Create a function that takes an angle in radians and converts it into degrees.

Examples
toDegree(Math.PI) ➞ 180

toDegree(Math.PI/2) ➞ 90

toDegree(Math.PI/4) ➞ 45
Notes
The input angles are in radians.
Check out the resource tab.



*/






/*  Solution 1   */


const toDegree = r => Math.round(r * (180/Math.PI));

const toDegree = radian =>Math.round(radian *(180/3.14));

/*  Solution 2   */

function toDegree(radian){
	return (radian/Math.PI) * 180;
}



/*  Solution 3   */


function toDegree(radian){
    return Math.floor(radian  * 180 /3.14)

}