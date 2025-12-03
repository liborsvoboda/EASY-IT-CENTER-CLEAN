/*

Spin Around, Touch the Ground

Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

Worked Example
spinAround(["right", "right", "right", "right", "left", "right"]) ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)
Examples
spinAround(["left", "right", "left", "right"]) ➞ 0

spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]) ➞ 2

spinAround(["left", "left", "left", "left"]) ➞ 1

Notes
Return a positive number.
All tests will only include the words "right" and "left".

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function spinAround(r) {
    return Math.abs(r.reduce((a, c) => a + (-1) ** c.length, 0)) / 4 | 0;
}


//#############################################################
//#  SOLUTION 2  
//#############################################################



const spinAround = r => {
    return Math.abs(Math.round(r.reduce((a, b) => a + (b == 'right' ? 1 : -1), 0) / 4))
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function spinAround(r) {
    if (r.length <= 1) return 0;
    let count = 0;
    for (let turn of r) {
        count = turn === 'right' ? count + 90 : count - 90
    }
    return Math.abs(count) / 360
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function spinAround(r) {
    return r.length === 0 ? 0 : Math.floor(Math.abs(r.map(e => e[0] === 'r' ? 90 : -90)
        .reduce((a, v) => a + v) / 360))
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function spinAround(r) {

    let right = r.filter(val => val === 'right').length > 0 ? r.filter(val => val === 'right').length * 90 : 0;
    let left = r.filter(val => val === 'left').length > 0 ? r.filter(val => val === 'left').length * 90 : 0;
    return Math.floor(Math.abs(right - left) / 360);
}







//#############################################################
//#  SOLUTION 6
//#############################################################



const spinAround = r => Math.floor(Math.abs(r.reduce((a, c) => a + (c === 'left' ? 90 : -90), 0)) / 360)





//#############################################################
//#  SOLUTION 7
//#############################################################





const spinAround = turns => Math.floor(Math.abs(turns.reduce((a, b) => a + (b === 'right' ? 0.25 : -0.25), 0)))