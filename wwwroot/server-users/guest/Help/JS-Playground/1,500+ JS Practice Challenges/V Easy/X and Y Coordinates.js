



/*
X and Y Coordinates
Create a function that converts two arrays of x- and y- coordinates into an array of (x,y) coordinates.

Examples
convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])
➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]

convertCartesian([9, 8, 3], [1, 1, 1])
➞ [[9, 1], [8, 1], [3, 1]]
Notes




*/






/*  Solution 1   */


function convertCartesian(x, y) {
	return x.map((v, i) => [v, y[i]])
}


/*  Solution 2   */

function convertCartesian(x, y) {
	let coordinates = [];
	for (let i = 0; i < x.length; i++) {
		coordinates.push([x[i], y[i]]);
	}
	return coordinates;
}



/*  Solution 3   */


const convertCartesian = (x, y) => {
	let res = [];
	for (let i = 0; i < x.length; i++) {
		res.push([x[i], y[i]]);
	}
	return res;
}



function convertCartesian(x, y) {
	coord = [];
	for (var i = 0; i < x.length; i++) {
		coord.push([x[i], y[i]]);
	}
	return coord
}



function convertCartesian(x, y) {
	var arr = [];
	
	for(var i = 0; i < x.length; i++)
		{
			arr[i] = [x[i],y[i]];
		}
	return arr;
}




function convertCartesian(x, y) {
	return x.map((x,i) => [x,y[i]])
}