



/*

Basic Statistics: Mean
The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).

Examples
mean([1, 6, 6, 7, 8, 8, 9, 10, 10]) ➞ 7.2

mean([1, 3, 8, 9, 9, 10]) ➞ 6.7

mean([2, 3, 3, 6, 6, 8, 9, 10]) ➞ 5.9
Notes



*/






/*  Solution 1   */

const mean = nums =>  +(nums.reduce((a,b)=> a+b) / nums.length).toFixed(1);

const mean=x=>(x.reduce((t,n)=>t+n)/x.length).toFixed(1)*1;



/*  Solution 2   */

function mean(nums) {
	return parseFloat((nums.reduce((a,b) => a + b) / nums.length).toFixed(1)) 
}



/*  Solution 3   */


const mean = arr => {
    const output = parseFloat((arr.reduce((acc, cur) => acc + cur) / arr.length).toFixed(1));
    return output;
}


function mean(nums) {
	accum = 0;
	for(i=0;i<nums.length;i++){
		accum += nums[i];
	}
	tru = accum/nums.length;
	return Math.round(tru*10)/10;
	
}