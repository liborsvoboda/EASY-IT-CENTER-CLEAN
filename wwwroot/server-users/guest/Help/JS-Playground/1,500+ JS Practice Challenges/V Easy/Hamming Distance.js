



/*

Hamming Distance
Hamming distance is the number of characters that differ between two strings.

To illustrate:

String1: "abcbba"
String2: "abcbda"

Hamming Distance: 1 - "b" vs. "d" is the only difference.
Create a function that computes the hamming distance between two strings.

Examples
hammingDistance("abcde", "bcdef") ➞ 5

hammingDistance("abcde", "abcde") ➞ 0

hammingDistance("strong", "strung") ➞ 1
Notes
Both strings will have the same length.



*/






/*  Solution 1   */


const hammingDistance = (a, b) => 	[...a].filter((x, i) => x != b[i]).length


const hammingDistance = (str1, str2) =>  str1.split('').filter((x,i) => str1[i] !== str2[i]).length;



const hammingDistance=(str1, str2)=> str2.split("").reduce((acc,next,index)=>next!=str1[index]?acc+1:acc,0 )

/*  Solution 2   */


function hammingDistance(str1, str2) {
	let hammDist = 0;
	for (let i = 0; i < str1.length; i++) {
		if (str1[i] !== str2[i]) {
			hammDist++;
		}
	}
	return hammDist;
}


/*  Solution 3   */

function hammingDistance(str1, str2) {
	let distance = 0;
	for (let i = 0; i < str1.length; i++) {
		if (str1[i] !== str2[i]) {
			distance++;
		}
	}
	return distance;
}





function hammingDistance(str1, str2) {
	let difference = 0;
	
	for (let i=0; i < str1.length; i++)
		difference += str1[i] !== str2[i] ? 1 : 0;

	return difference;
}