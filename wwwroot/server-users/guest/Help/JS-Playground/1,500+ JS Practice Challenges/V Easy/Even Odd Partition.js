



/*


Even Odd Partition
Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:

[[evens], [odds]]
Examples
evenOddPartition([5, 8, 9, 2, 0]) ➞ [[8, 2, 0], [5, 9]]

evenOddPartition([1, 0, 1, 0, 1, 0]) ➞ [[0, 0, 0], [1, 1, 1]]

evenOddPartition([1, 3, 5, 7, 9]) ➞ [[], [1, 3, 5, 7, 9]]

evenOddPartition([]) ➞ [[], []]
Notes
Return two empty subarrays if the input is an empty array.
Keep the same relative ordering as the original array.


*/






/*  Solution 1   */

const isEven = num => num % 2 === 0;

const evenOddPartition = arr => [
  arr.filter(isEven),
  arr.filter(num => !isEven(num)),
];





function evenOddPartition(arr) {
	return [arr.filter(num => num % 2 === 0), arr.filter(num => num % 2 !== 0)];
}



/*  Solution 2   */

const evenOddPartition = arr => [arr.filter(x => x % 2 == 0),arr.filter(y => y % 2 != 0) ]

evenOddPartition=(a)=>[a.filter(x=>x %2==0),a.filter(x=> x %2 !==0)]



const evenOddPartition = arr => [arr.filter(item => item % 2 === 0), arr.filter(item => item % 2 !== 0)];


/*  Solution 3   */

const evenOddPartition = arr => [arr.filter(x => x % 2 == 0), arr.filter(x => x % 2 == 1)];