/*

Geometry 3: Perimeter of a Triangle

Write a function that takes the coordinates of three points in the form of a 2d array and returns the perimeter of the triangle. The given points are the vertices of a triangle on a two-dimensional plane.

Examples
perimeter( [ [15, 7], [5, 22], [11, 1] ] ) ➞ 47.08

perimeter( [ [0, 0], [0, 1], [1, 0] ] ) ➞ 3.42

perimeter( [ [-10, -10], [10, 10 ], [-10, 10] ] ) ➞ 68.28


Notes
The given points always create a triangle.
The numbers in the argument array can be positive or negative.
Output should have 2 decimal places
This challenge is easier than it looks.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function perimeter([
    [a, b],
    [c, d],
    [e, f]
]) {
    return +(Math.hypot(a - c, b - d) + Math.hypot(a - e, b - f) + Math.hypot(c - e, d - f)).toFixed(2)



    //#############################################################
    //#  SOLUTION 2  
    //#############################################################


    function perimeter(lst) {
        const dist = (p, q) => ((p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2) ** 0.5
        l1 = dist(lst[0], lst[1])
        l2 = dist(lst[1], lst[2])
        l3 = dist(lst[0], lst[2])
        return parseFloat((l1 + l2 + l3).toFixed(2))
    }




    //#############################################################
    //#  SOLUTION 3
    //#############################################################


    const perimeter = vertices => (
        Number(vertices.reduce((perimeter, [x1, y1], i) => {
            const [x2, y2] = vertices[(i + 1) % 3];
            return perimeter + Math.hypot(y2 - y1, x2 - x1);
        }, 0).toFixed(2))
    );



    //#############################################################
    //#  SOLUTION 4
    //#############################################################


    function perimeter(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                sum += Math.sqrt(Math.pow(arr[i][0] - arr[j][0], 2) + Math.pow(arr[i][1] - arr[j][1], 2));
            }
        }
        return Math.round(sum * 100) / 100;
    }



    //#############################################################
    //#  SOLUTION 5
    //#############################################################


    function perimeter(arr) {
        const [a, b, c] = arr;
        return Math.round(
            100 * (distance(a, b) + distance(b, c) + distance(c, a))
        ) / 100;
    }

    const distance = (p, q) =>
        Math.sqrt((p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2);





    //#############################################################
    //#  SOLUTION 5
    //#############################################################



    function perimeter(arr) {
        let result = 0
        for (var i = 0; i < arr.length - 1; i++) {
            arr.slice(i + 1).map(val => {
                let [
                    [a, b],
                    [x, y]
                ] = [val, arr[i]]
                result += Math.hypot(a - x, b - y)
            })
        }
        return +result.toFixed(2)

    }