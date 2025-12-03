



/*
Volume of a Box
Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
Notes
Don't forget to return the result.
Remember that the values are in an object.
Volume is length * width * height.




*/




/*  Solution 1   */

const volumeOfBox = (sizes) => sizes.width * sizes.length * sizes.height;


/*  Solution 2   */

const volumeOfBox = ({ width, length, height }) => width * length * height;

/*  Solution 3   */



function volumeOfBox(sizes) {
	return sizes.height * sizes.width * sizes.length;
}

/*  Solution 4   */


function volumeOfBox(sizes) {
	return sizes.height * sizes.width * sizes.length;
}

//Create a function that gets an object arguments with height, width 
//and length of a box and returns the volume of the box.