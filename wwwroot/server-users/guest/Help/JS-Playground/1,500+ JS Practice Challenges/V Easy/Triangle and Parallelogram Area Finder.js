/*  

Triangle and Parallelogram Area Finder
Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

Examples
areaShape(2, 3, "triangle") ➞ 3

areaShape(8, 6, "parallelogram") ➞ 48

areaShape(2.9, 1.3, "parallelogram") ➞ 3.77
Notes
Area of a triangle is 0.5 * b * h
Area of a parallelogram is b * h
Assume triangle and parallelogram are the only inputs for shape.
*/







/*  

Solutions

*/


const areaShape = (base, height, shape) => shape === 'triangle' ? 0.5 * base * height

const areaShape = (base, height, shape) => base * height * (shape === 'triangle' ? 0.5 : 1);

let areaShape = (b, h, shape) => shape === 'parallelogram' ? b * h : 0.5 * b * h

const areaShape = (b, h, [shape]) => b * h * (shape === 't' || 2) / 2;

const areaShape = (base, height, shape) => base * height / (shape === "triangle" ? 2 : 1);

const areaShape = (b, h, s) => /triangle/.test(s) ? b * h / 2 : b * h

const areaShape = (base, height, shape) => shape === 'triangle' ?
    0.5 * base * height : base * height








function areaShape(base, height, shape) {
    return (shape === 'triangle' ? 0.5 : 1) * base * height;
}






function areaShape(base, height, shape) {
    return shape === 'triangle' ? base * height * 0.5 : base * height
}