/*

Converting One Binary String to Another
Write a function that returns the minimum number of swaps to convert the first binary string into the second.

Examples
minSwaps("1100", "1001") ➞ 1

minSwaps("110011", "010111") ➞ 1

minSwaps("10011001", "01100110") ➞ 4

Notes
Both binary strings will be of equal length.
Both binary strings will have an equal number of zeroes and ones.
A swap is switching two elements in a string (swaps do not have to be adjacent).

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


function minSwaps(s1, s2) {
    return s1.split('').filter((char, i) => char != s2[i]).length / 2;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const minSwaps = (a, b) => [...a].filter((e, i) => e !== b[i]).length / 2




//#############################################################
//#  SOLUTION 3
//#############################################################


function minSwaps(s1, s2) {
    var count = 0
    for (var i = 0; i < s1.length; i++) {
        if (s1.charAt(i) === "1" && s1.charAt(i) !== s2.charAt(i)) {
            count++
        }
    }
    return count
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function minSwaps(s1, s2) {
    return (s2.split("").filter((element, index) => element != s1[index]).length) / 2
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function minSwaps(s1, s2) {
    let count = 0;
    s1.split('').forEach((item, index) => {
        if (item !== s2[index]) {
            count++
        }
    })
    return count / 2
}