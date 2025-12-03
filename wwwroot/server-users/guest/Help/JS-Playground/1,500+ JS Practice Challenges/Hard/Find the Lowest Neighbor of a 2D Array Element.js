/*

Find the Lowest Neighbor of a 2D Array Element

Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.

 arr,  x,  y
arr will be a 2D array holding integer values and will always be symmetrical in size (e.g. 2x2, 3x3, 4x4).
x will hold the row coordinate, while y will hold the column coordinate.
You will have to check the horizontal, vertical and diagonal neighbor elements. If there isn't any lower neighbors, return the value of the given (x, y) coordinate.

Examples
lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) ➞ 1


[
  [1, 2, 3]
  [4, 5, 6]  // (1, 1) holds the integer 5. Check the surrounding neighbors.
  [7, 8, 9]
]
lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0) ➞ -1


[
  [9, 8, 7]   // (0, 0) holds the integer 9. Check the surrounding neighbors.
  [0, -1, -3]
  [-5, -9, 54]
]

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function lowestElement(arr, x, y) {
	let tempArr = []
	for(let i=0; i<arr[0].length; i++) {
		for(let j=0; j<arr[0].length; j++) {
			if((i===x-1 || i===x || i===x+1) && (j===y-1 || j===y || j===y+1)) {
				tempArr.push(arr[i][j])
			}
		}
	}
	return Math.min(...tempArr)
}





//#############################################################
//#    SOLUTION 2
//#############################################################


function lowestElement(arr, x, y) {
	const possible = NEIGHBORS
		.map(([a, b]) => [a + x, b + y])
		.filter(([a, b]) => a >= 0 && b >= 0 && a <= arr.length - 1 && b <= arr[0].length - 1)
		.map(([i, j]) => arr[i][j])
	return Math.min(...possible)
}

NEIGHBORS = [
	[-1, -1], 
	[-1, 0], 
	[-1, 1], 
	[0, -1],
  	[0, 0],
	[0, 1], 
	[1, -1], 
	[1, 0], 
	[1, 1]
]





//#############################################################
//#    SOLUTION 3
//#############################################################


const check = (i, c) => i == c-1 || i == c || i == c+1
const lowestElement = (arr, x, y) =>
	Math.min(...arr.reduce((grid, row, i) =>
		check(i, x) ? grid.concat(row.filter((_, j) => check(j, y))) : grid
	, []))




//#############################################################
//#    SOLUTION 4
//#############################################################


function lowestElement(arr, x, y) {
    let results = [];
    let maxIndex = arr.length - 1;
    let coordinates = [[x, y], [x, y-1], [x, y+1], [x-1, y], [x+1, y], [x+1, y+1], [x+1, y-1], [x-1, y-1], [x-1, y+1]];
    
	for (pair of coordinates) {
        let row = pair[0];
        let col = pair[1];
        if (row > maxIndex || col > maxIndex || row < 0 || col < 0) {
            continue;
        }
		results.push(arr[row][col]);
	}
	
    return results.reduce((lowest, current) => current <= lowest ? current : lowest);
}