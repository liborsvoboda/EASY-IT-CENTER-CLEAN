/*

Balancing Scales

Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".

Examples
scaleTip([0, 0, "I", 1, 1]) ➞ "right"
// 0 < 2 so it will tip right

scaleTip([1, 2, 3, "I", 4, 0, 0]) ➞ "left"
// 6 > 4 so it will tip left

scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1]) ➞ "balanced"
// 15 = 15 so it will stay balanced


Notes
The middle element will always be "I" so you can just ignore it.
Assume the numbers all represent the same unit.
Both sides will have the same number of elements.
There are no such things as negative weights in both real life and the tests!
*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


function scaleTip(arr) {
    let mid = arr.indexOf('I');
    let left = arr.slice(0, mid).reduce((a, b) => a + (+b), 0);
    let right = arr.slice(mid + 1).reduce((a, b) => a + (+b), 0);
    return left === right ?
        'balanced' :
        (left > right) ? 'left' : 'right';
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



const scaleTip = arr => {
    const sum = a => a.reduce((a, b) => a + b, 0),
        lft = sum(arr.slice(0, arr.length / 2)),
        rgt = sum(arr.slice(arr.length / 2 + 1));
    return ["left", "right", "balanced"]
        [
            [lft > rgt, rgt > lft, true].indexOf(true)
        ];
}



//#############################################################
//#  SOLUTION 3
//#############################################################



const scaleTip = s => {
    let [l, r] = [s.slice(0, s.indexOf('I')).reduce((t, e) => t + e, 0),
        s.slice(s.indexOf('I') + 1).reduce((t, e) => t + e, 0)
    ]
    return l > r ? 'left' : l < r ? 'right' : 'balanced'
}




//#############################################################
//#  SOLUTION 4
//#############################################################


function scaleTip(arr) {
    let left = arr.slice(0, arr.indexOf("I")).reduce((acc, curr) => acc + curr, 0)
    let right = arr.slice(-arr.indexOf("I")).reduce((acc, curr) => acc + curr, 0)
    if (left > right) {
        return 'left';
    } else if (right > left) {
        return "right";
    } else {
        (left == right)
        return 'balanced';
    }
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function scaleTip(arr) {
    let h1 = arr.slice(0, arr.length / 2).reduce((a, x) => a + x, 0)
    let h2 = arr.slice(arr.length / 2 + 1, arr.length).reduce((a, x) => a + x, 0)
    if (h1 === h2) return "balanced"
    if (h1 < h2) return "right"
    if (h1 > h2) return "left"
}





//#############################################################
//#  SOLUTION 6
//#############################################################


function scaleTip(arr) {
    var middle = arr.indexOf("I");
    var left = arr.slice(0, middle).reduce((acc, idx) => acc += idx);
    var right = arr.slice(middle + 1).reduce((acc, idx) => acc += idx);;

    return left < right ? "right" : left > right ? "left" : "balanced";
}