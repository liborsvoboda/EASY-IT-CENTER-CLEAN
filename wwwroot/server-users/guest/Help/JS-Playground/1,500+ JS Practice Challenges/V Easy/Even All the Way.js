



/*



Even All the Way
Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices.

Examples
getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

getOnlyEvens([1, 2, 3, 4, 5]) ➞ []
Notes
Arrays start at index 0.

*/






/*  Solution 1   */

function getOnlyEvens(nums) {
	return nums.filter((item,index) => !(item % 2) && !(index % 2))
}



function getOnlyEvens(nums) {
	return nums.filter((num, i) => !(num % 2) && !(i % 2))
}

/*  Solution 2   */

const getOnlyEvens = arr =>	arr.filter((num, i) => num % 2 === 0 && i % 2 === 0);

getOnlyEvens = n =>n.filter((e,i)=>e%2==0&&i%2==0)

const getOnlyEvens = n => n.filter((a,b)=> a % 2 == 0 && b % 2 == 0);

const getOnlyEvens = nums => nums.filter((n, i) => !(n & 1) && !(i & 1) );


/*  Solution 3   */


function getOnlyEvens(nums) {
	//spit out only even numbers from array nums
	//loop through all indecs and if it is even number than return 
	//the even number push the even number to new array
	 let newArray = [];
	nums.forEach(function(item, index, array) {
  	if(item % 2 === 0 && index % 2 === 0 )  {
			newArray.push(item)
		}
  })
	return newArray;
}

//getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

//getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

//getOnlyEvens([1, 2, 3, 4, 5]) ➞ []