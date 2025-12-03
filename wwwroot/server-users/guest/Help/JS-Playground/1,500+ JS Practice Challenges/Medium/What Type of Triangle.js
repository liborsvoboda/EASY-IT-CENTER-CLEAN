/*

What Type of Triangle?

Create a function which returns the type of triangle, given the side lengths. Return the following values if they match the criteria.

No sides equal: "scalene"
Two sides equal: "isosceles"
All sides equal: "equilateral"
Less or more than 3 sides given: "not a triangle"
Examples
getTriangleType([2, 6, 5]) ➞ "scalene"

getTriangleType([4, 4, 7]) ➞ "isosceles"

getTriangleType([8, 8, 8]) ➞ "equilateral"

getTriangleType([3, 5, 5, 2]) ➞ "not a triangle"


Notes
You will be given an array of positive integers.
Check the Resources tab for more information on the types of triangles.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################



const getTriangleType = arr => {
    if (arr.length < 3 || arr.length > 3) return 'not a triangle';

    const result = new Set([...arr]).size;
    const sides = [, 'equilateral', 'isosceles', 'scalene'];

    return sides[result];
}


//#############################################################
//#  SOLUTION 2  
//#############################################################


function getTriangleType(arr) {
    if (arr.length != 3) { return "not a triangle" }
    switch (new Set(arr).size) {
        case 1:
            return "equilateral";
        case 2:
            return "isosceles";
        default:
            return "scalene";
    }
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function getTriangleType(arr) {
    let x = new Set(arr).size
    return arr.length != 3 ? 'not a triangle' : x === 3 ? 'scalene' : x === 2 ? 'isosceles' : 'equilateral'
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function getTriangleType(arr) {
    if (arr.length > 3 || arr.length < 3) return "not a triangle";
    if (new Set(arr).size === 1) return "equilateral";
    if (new Set(arr).size === 2) return "isosceles";
    if (new Set(arr).size === 3) return "scalene";
}




//#############################################################
//#  SOLUTION 5
//#############################################################


const getTriangleType = arr => arr.length !== 3 ? 'not a triangle' :
    new Set(arr).size === 1 ? 'equilateral' :
    new Set(arr).size === 2 ? 'isosceles' :
    'scalene'





//#############################################################
//#  SOLUTION 6
//#############################################################


const getTriangleType = arr => arr.length === 3 ? (new Set(arr).size === 3 ? 'scalene' : new Set(arr).size === 2 ? 'isosceles' : 'equilateral') : 'not a triangle';