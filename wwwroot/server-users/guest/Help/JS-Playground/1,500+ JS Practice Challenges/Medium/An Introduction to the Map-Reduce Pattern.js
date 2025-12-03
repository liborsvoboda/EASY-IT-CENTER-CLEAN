/*

An Introduction to the Map-Reduce Pattern

You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.

Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.

Examples
magnitude([3, 4]) ➞ 5

magnitude([0, 0, -10]) ➞ 10

magnitude([]) ➞ 0

magnitude([2, 3, 6, 1, 8] ) ➞ 10.677078252031311


Notes
The array can have any length.
The input array will contain integers (except for empty array [] ➞ 0).
Use both .map() and .reduce().
Don't use Math.hypot().
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


let magnitude = v =>
    Math.sqrt(
        v.map(x => x * x)
        .reduce((x, y) => x + y, 0));



//#############################################################
//#  SOLUTION 2  
//#############################################################


var magnitude = vector => vector.length ? Math.sqrt(vector.map(x => x * x).reduce((a, i) => a + i)) : 0;


var magnitude = vector => Math.sqrt(vector.map(e => e * e).reduce((s, e) => s + e, 0));


var magnitude = vector => Math.sqrt(vector.map((number) => { return number * number }).reduce((total, number) => { return total + number }, 0))



//#############################################################
//#  SOLUTION 3
//#############################################################


var magnitude = vector => {
    if (vector.length === 0) return 0
    return Math.sqrt(vector.map(vec => {
        return vec * vec
    }).reduce((acc, curr) => acc + curr))
}



//#############################################################
//#  SOLUTION 4
//#############################################################


var magnitude = vector => {
    if (vector.length < 1) return 0;
    return Math.sqrt(
        vector
        .map(val => Math.pow(val, 2))
        .reduce((sum, val) => sum + val, 0)
    );
}




//#############################################################
//#  SOLUTION 5
//#############################################################


var magnitude = vector => {
    var result = [];
    if (vector.length > 0) {
        result = vector.reduce((acc, x) => {
            return Math.sqrt(Math.pow(acc, 2) + Math.pow(x, 2));
        });
    } else {
        return 0;
    }
    return result;
}