



/*

Stack the Boxes
Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...

Stack the Boxes

Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

Examples
stackBoxes(1) ➞ 1

stackBoxes(2) ➞ 4



*/



/*  Solution 1   */
stackBoxes = n => n*n;


/*  Solution 2   */


function stackBoxes(n) {
    if (n == 0) 
    
    return 0;

  return stackBoxes(n-1)+2*n-1;	
}


/*  Solution 3   */



function stackBoxes(n) {
	return n > 0 ? Math.pow(n, 2) : 0;
}





