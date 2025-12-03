/*

Perimeters with a Catch

Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

Use the following formulas:

Perimeter of a square: 4 * side.
Perimeter of a circle: 6.28 * radius.
The catch is you can only use arithmetic or comparison operators, which means:

No if... else statements.
No objects.
No arrays.
No formatting methods, etc.
The goal is to write a short, branch-free piece of code.

Examples
perimeter("s", 7) ➞ 28

perimeter("c", 4) ➞ 25.12

perimeter("c", 9) ➞ 56.52

Notes
No rounding is needed.
*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#  SOLUTION 1 

const perimeter = (l, num) => (l === 's') * 4 * num + (l === 'c') * 6.28 * num;

const perimeter = (l, num) => l === 'c' ? 6.28 * num : 4 * num;

let perimeter = (l, n) => l == "s" && n * 4 || l == "c" && 6.28 * n;


//#############################################################
//#  SOLUTION 2  


function perimeter(l, num) {
    return l == 's' ? num * 4 : num * 6.28
}






//#############################################################
//#  SOLUTION 3


function perimeter(l, num) {
    switch (l) {
        case "s":
            return 4 * num
            break
        case "c":
            return 2 * num * 3.14
    }
}





//#############################################################
//#  SOLUTION 4


function perimeter(l, num) {
    if (l === 'c') {
        return (+Math.PI.toFixed(2)) * 2 * num;
    } else if (l === 's') {
        return 4 * num;
    }
}