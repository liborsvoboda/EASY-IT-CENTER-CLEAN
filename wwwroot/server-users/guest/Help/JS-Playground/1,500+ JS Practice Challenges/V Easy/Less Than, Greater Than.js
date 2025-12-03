/*  

Less Than, Greater Than
Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

Examples
arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

arrBetween(7, 32, [1, 2, 3, 78]) ➞ []

*/







//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




/*  

Solution 1

*/

arrBetween = (x, y, a) => a.filter(n => n > x & n < y)

const arrBetween = (num1, num2, arr) => arr.filter(x => x > num1 && x < num2);

const arrBetween = (a, b, c) => c.filter(x => x > a && x < b);

/*  

Solution 2

*/

function arrBetween(num1, num2, arr) {
    return arr.filter((x) => x > num1 && x < num2);
}

/*  

Solution 3

*/

function arrBetween(num1, num2, arr) {
    return arr.filter((val) => val > num1 && val < num2 ? true : false)

}


/*  

Solution 4

*/



function arrBetween(num1, num2, arr) {
    var carr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > num1 && arr[i] < num2)
            carr.push(arr[i]);
    }
    return carr;
}