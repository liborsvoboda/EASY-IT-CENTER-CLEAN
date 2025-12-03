/*  
Is It a Triangle?
Create a function that takes three numbers as arguments and returns true if it's a triangle and false if not.

Examples
isTriangle(2, 3, 4) ➞ true
isTriangle(3, 4, 5) ➞ true
isTriangle(4, 3, 8) ➞ false

Notes

a, b and, c are the side lengths of the triangles.
Test input will always be three positive numbers.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




/*  

Solution 1

*/


function isTriangle(a, b, c) {
    return a + b > c && b + c > a && c + a > b
}


/*  

Solution 2

*/


function isTriangle(a, b, c) {
    const val = [...arguments].sort((a, b) => b - a)
    return val[0] < val[1] + val[2]

}

/*  

Solution 3

*/

function isTriangle(a, b, c) {
    return (a + b) > c && (b + c) > a && (c + a) > b ? true : false;
}




/*  

Solution 4

*/


function isTriangle(a, b, c) {
    let lato1 = (a + b) > c
    let lato2 = (a + c) > b
    let lato3 = (b + c) > a
    if (lato1 && lato2 && lato3) {
        return true
    } else {
        return false
    }
}