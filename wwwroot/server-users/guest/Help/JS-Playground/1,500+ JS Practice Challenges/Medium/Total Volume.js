/*


Total Volume
Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

Examples
totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63

totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10

totalVolume([1, 1, 1]) ➞ 1
Notes
You will be given at least one box.
Each box will always have three dimensions included.


*/






/*  Solution 1   */

const totalVolume = (...boxes) => boxes.reduce((total, [l, w, h]) => total + l * w * h, 0);

const totalVolume = (...boxes) => boxes.reduce((a, b) => a + b.reduce((c, d) => c * d, 1), 0);

totalVolume = (...a) => a.reduce((a, b) => a + b.reduce((c, d) => c * d), 0);

const totalVolume = (...boxes) => boxes.map(el => el.reduce((sum, item) => sum *= item, 1)).reduce((a, b) => a + b, 0)





/*  Solution 2   */


function totalVolume(...boxes) {
    return [...boxes].map(arr => arr.reduce((a, v) => a * v)).reduce((a, v) => a + v)
}


/*  Solution 3   */

function totalVolume(...boxes) {
    return boxes.map(x => x.reduce((a, b) => a * b)).reduce((a, b) => a + b);
}




/*  Solution 4   */




function totalVolume(...boxes) {
    var sum = 0;
    for (i = 0; i < boxes.length; i++) {
        sum += boxes[i][0] * boxes[i][1] * boxes[i][2];
    }
    return sum;
}







function totalVolume(...boxes) {
    let total = 0;
    for (var i = 0; i < boxes.length; i++) {
        total += boxes[i].reduce((a, b) => a * b);
    }
    return total;
}



function totalVolume(...boxes) {
    let total = 0;

    for (i = 0; i < boxes.length; i++) {
        let temp = boxes[i]
        let multiple = 1;
        for (x = 0; x < temp.length; x++) {
            multiple = temp[x] * multiple
        }
        total += multiple
    }
    return total
}






function totalVolume(...boxes) {
    return [...boxes].map(arr => arr.reduce((a, v) => a * v)).reduce((a, v) => a + v)
}