



/*
Make My Way Home
You will be given a list, showing how far James travels away from his home for each day. He may choose to travel towards or away from his house, so negative values are to be expected.

Create a function which calculates how far James must walk to get back home.

Examples
distanceHome([2, 4, 2, 5]) ➞ 13

distanceHome([-1, -4, -3, -2]) ➞ 10

distanceHome([3, 4, -5, -2]) ➞ 0
Notes
Assume that James only travels in a straight line.
Distance is always a positive number.




*/






/*  Solution 1   */

function distanceHome (arr) {
	return Math.abs(arr.reduce((acc, num) => num + acc));
}






function distanceHome (arr) {
	let distance = arr.reduce((a, b) => a + b);
	return Math.abs(distance);
}





function distanceHome (arr) {
	let a= arr.reduce((x,y) => x+ y)
	return Math.abs(a)
}

/*  Solution 2   */

const distanceHome = r => Math.abs(r.reduce((a,b) => a + b))

const distanceHome = arr => Math.abs(arr.reduce((a,b)=>a+b))

const distanceHome = (arr) => Math.abs(arr.reduce((x,y)=> x+y,0))

/*  Solution 3   */


function distanceHome (arr) {
    var sum = 0;
    index = 0; 
    for (index = 0; index < arr.length; index++) { 
        sum = sum + arr[index];    
    } 
    return Math.abs(sum);
    }






    function distanceHome (arr) {
        var distance = 0;
        for (i =0; i < arr.length; i++)
            {
                distance += arr[i];
            }
        return Math.abs(distance);
    }