/*  

Circle or Square

Given the radius of a circle and the area of a square, return true if the circumference of the circle is greater than the square's perimeter and false if the square's perimeter is greater than the circumference of the circle.

Examples
circle_or_square(16, 625) ➞ True

circle_or_square(5, 100) ➞ False

circle_or_square(8, 144) ➞ True

Notes
You can use PI to 2 decimal places (3.14).
Circumference of a circle equals 2*PI*Radius.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#    SOLUTION 1
//#############################################################


const circle_or_square = (rad, area) => 2 * 3.14 * rad > area ** 0.5 * 4;


const circle_or_square = (rad, area) => ((Math.sqrt(area)) * 4) < (2 * 3.14 * rad);


const circle_or_square = (r, a) => 2 * Math.PI * r > a ** .5 * 4;



//#############################################################
//#    SOLUTION 2
//#############################################################


function circle_or_square(rad, area) {
    var perim = (Math.sqrt(area)) * 4;
    var circum = 2 * 3.14 * rad;

    if (perim < circum) return true;
    return false;
}


//#############################################################
//#    SOLUTION 3
//#############################################################


function circle_or_square(rad, area) {
    const perim = (Math.sqrt(area)) * 4;
    const circum = 2 * 3.14 * rad;
    return perim < circum ? true : false;
}


//#############################################################
//#    SOLUTION 4
//#############################################################



function circle_or_square(rad, area) {
    if (2 * 3.14 * rad > 4 * Math.sqrt(area)) {
        return true;
    } else if (2 * 2.14 * rad < 4 * Math.sqrt(area)) {
        return false;
    }
}



//#############################################################
//#    SOLUTION 5
//#############################################################




/*
Given the radius of a circle and the area of a square, 
return true if the circumference of the circle is greater 
than the square's perimeter and false if the square's 
perimeter is greater than the circumference of the circle.
*/

function circle_or_square(rad, area) {
    let perim = Math.sqrt(area) * 4;
    let circ = Math.PI * rad * 2;
    if (circ > perim) return true;
    else return false;
}