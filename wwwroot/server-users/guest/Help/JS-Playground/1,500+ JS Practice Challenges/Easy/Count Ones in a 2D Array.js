



/*


Count Ones in a 2D Array
Create a function to count the number of 1s in a 2D array.

Examples
countOnes([
  [1, 0],
  [0, 0]
]) ➞ 1

countOnes([
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]) ➞ 7

countOnes([
  [1, 2, 3],
  [0, 2, 1],
  [5, 7, 33]
]) ➞ 2
Notes



*/






/*  Solution 1   */


function countOnes(matrix) {
	let count = 0;
	
	matrix.forEach(c => {
		count += howManyOnes(c);
	});
	
	return count;
}






function howManyOnes (arr){
	return arr.reduce((n, x) => n + (x === 1), 0)
}


function countOnes(matrix) {
	return matrix.reduce((r1,v1) => r1+v1.reduce((r2,v2) => r2 + +!!(v2==1), 0), 0);
}



function countOnes(matrix) {
	return matrix.reduce((acc , value) => acc +  value.filter(number => number ===1).length , 0); 
}


/*  Solution 2   */

const countOnes = matrix => matrix.flat().filter(x=> x === 1).length

const countOnes=(m)=> m.map(a=>a.filter(a=>a==1).reduce((acc,next)=>acc+next,0)).reduce((acc,next)=>acc+next,0)



/*  Solution 3   */


function countOnes(matrix) {
	return matrix.reduce((a, arr) => a + arr.reduce((_a, n) => _a += n === 1 ? 1: 0, 0), 0);
}



function countOnes(matrix) {
	return matrix.filter(x => x.includes(1)).reduce((a, b) => a + b.filter(n => n === 1).length, 0)
}





function countOnes(arr) {
    return arr.reduce((total, subArr) => total + subArr.reduce((total, num) => num === 1 ? total + 1 : total, 0), 0)
}