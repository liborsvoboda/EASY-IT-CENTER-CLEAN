/*

Holey Sort

What do the numbers 4, 6, 8, 9 and 0 have in common? They all have holes in them! Notice how the number 8 contains not one, but two holes.

Given an array of numbers, sort the array in accordance to how many holes occur in the number. It should be sorted in ascending order.

Examples
holeySort([44, 4, 444, 4444]) ➞ [4, 44, 444, 4444]

holeySort([100, 888, 1660, 11]) ➞ [11, 100, 1660, 888]

holeySort([8, 121, 41, 66]) ➞ [121, 41, 8, 66]


Notes
If two numbers have the same number of holes in them, sort them by the order they first appeared in.
Despite the number 0 appearing to have two holes in certain fonts, it will only have one hole for the purposes of this challenge.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################

function holes(n) {
    const H = { 4: 1, 6: 1, 8: 2, 9: 1, 0: 1 };
    return [...
        `${n}`
    ].reduce((a, c) => a + (H[c] || 0), 0)
}

function holeySort(arr) {
    return arr.sort((a, b) => holes(a) - holes(b));
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


const holeCount = num => [...
    `${num}`
].reduce((total, d) => total + '04689'.includes(d) + (d === '8'), 0);

const holeySort = arr => arr.sort((a, b) => holeCount(a) - holeCount(b));




//#############################################################
//#  SOLUTION 3
//#############################################################


function holeySort(arr) {
    return arr.sort((a, b) => sumNumberHoles(a) - sumNumberHoles(b));
}

const sumNumberHoles = (num) => {
    return num < 9 ?
        countHoles(num) :
        num
        .toString()
        .split('')
        .reduce((a, b) => a + countHoles(+b), 0);
}

const countHoles = (num) => {
    switch (num) {
        case 4:
        case 6:
        case 9:
        case 0:
            return 1
        case 8:
            return 2
        default:
            return 0
    }
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function holeySort(arr) {
    let holeObject = {
        '0': 1,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 1,
        '5': 0,
        '6': 1,
        '7': 0,
        '8': 2,
        '9': 1
    };
    countHoles = number => {
        let number_holes = 0;
        let digit_array = String(number).split("");
        digit_array.forEach(digit => {
            number_holes += holeObject[digit];
        });

        return number_holes;
    };
    return arr.sort((a, b) => countHoles(a) - countHoles(b));
}