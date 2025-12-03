/*

Number of Boomerangs

A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:

[3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs in an array.

To illustrate:

[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
Be aware that boomerangs can overlap, like so:

[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
Examples
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

Notes
[5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.


*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function countBoomerangs(arr) {
    return arr.reduce((acc, e, index) => acc + (e === arr[index + 2] && e != arr[index + 1]), 0);
}






//#############################################################
//#  SOLUTION 2  
//#############################################################


const countBoomerangs = arr =>
    arr.slice(2).reduce((total, last, i) => {
        const [first, middle] = [arr[i], arr[i + 1]];
        return total + Number(first === last && first !== middle);
    }, 0);






//#############################################################
//#  SOLUTION 3
//#############################################################



const countBoomerangs = arr => {
    let collection = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === arr[i + 2]) && (arr[i] != arr[i + 1])) {
            collection++;
        }
    }
    return collection;
}






//#############################################################
//#  SOLUTION 4
//#############################################################


const countBoomerangs = a => a.filter((_, i) => a[i] == a[i + 2] && a[i + 1] != a[i]).length



const countBoomerangs = arr => arr.map((e, i, a) => a.slice(i, i + 3)).filter(e => e[0] == e[2] && e[0] != e[1]).length




//#############################################################
//#  SOLUTION 5
//#############################################################



function countBoomerangs(arr) {
    let count = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        let first = arr[i];
        let second = arr[i + 1];
        let third = arr[i + 2];

        if (first == third && first != second) count++;
    }

    return count;
}






//#############################################################
//#  SOLUTION 6
//#############################################################



const countBoomerangs = arr => {
    let boomerangs = [];
    for (let i = 0; i < arr.length - 2; i++) {
        const trio = arr.slice(i, i + 3);
        if (trio[0] === trio[2] && trio[0] !== trio[1]) {
            boomerangs = [...boomerangs, trio];
        }
    }
    return boomerangs.length;
}