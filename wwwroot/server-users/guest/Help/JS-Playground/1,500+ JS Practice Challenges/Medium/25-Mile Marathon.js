/*

25-Mile Marathon

Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

Return true if the marathon is 25 miles long, otherwise, return false.

Examples
marathonDistance([1, 2, 3, 4]) ➞ false

marathonDistance([1, 9, 5, 8, 2]) ➞ true

marathonDistance([-6, 15, 4]) ➞ true



Notes
Items in the array will always be integers.
Items in the array may be negative or positive, but since negative distance isn't possible, find a way to convert negative integers into positive integers.
Return false if the arguments are empty or not provided.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function marathonDistance(d) {
    return d.reduce((acc, cur) => acc + Math.abs(cur), 0) == 25;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function marathonDistance(a) {
    //I: arr of num
    //O: boolean if sum if 25 then T or F
    let count = 0
    for (let i = 0; i < a.length; i++) {
        count += Math.abs(a[i])
    }
    if (count !== 25) {
        return false
    }
    return true
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function marathonDistance(d) {
    return d.reduce((total, ele) => total + Math.abs(ele), 0) == 25 ? true : false
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const marathonDistance = d => d.reduce((t, n) => t + Math.abs(n), 0) == 25;


//#############################################################
//#  SOLUTION 5
//#############################################################


function marathonDistance(d) {
    return d.length < 1 ? false : d.reduce((total, st) => Math.abs(total) + Math.abs(st)) === 25;
}