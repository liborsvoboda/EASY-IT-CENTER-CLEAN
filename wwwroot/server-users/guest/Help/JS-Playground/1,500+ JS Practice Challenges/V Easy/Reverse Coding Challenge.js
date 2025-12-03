/*


Reverse Coding Challenge #3
This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

Examples
[5, 7, 8, 2, 1], 2 ➞ [1, 1, 0, 0, 1]

[9, 8, 16, 47], 4 ➞ [1, 0, 0, 3]

[17, 11, 99, 55, 23, 1], 5 ➞ [2, 1, 4, 0, 3, 1]

[6, 1], 7 ➞ [6, 1]

[3, 2, 9], 3 ➞ [0, 2, 0]

[48, 22, 0, 19, 33, 100], 10 ➞ [8, 2, 0, 9, 3, 0]
Notes
If you get stuck, see Comments for a hint.


*/






/*  Solution 1   */


function mysteryFunc(arr, num) {
    arr.forEach((x, i) => { arr[i] = x % num });
    return arr;
}



function mysteryFunc(arr, num) {
    return arr.map(n => n % num)
}



function mysteryFunc(arr, num) {
    return arr.map(v => v % num)
}




function mysteryFunc(arr, num) {
    let newArr = arr.map(x => { return x % num; });
    return newArr;
}





function mysteryFunc(arr, num) {
    let arr1 = arr.map(x => x % num)
    return arr1
}





function mysteryFunc(arr, num) {
    return arr.map(el => el % num)


}

/*  Solution 2   */

const mysteryFunc = (arr, divisor) => arr.map(num => num % divisor);

const mysteryFunc = (arr, num) => arr.map(x => x % num);

const mysteryFunc = (arr, num) => arr.map(x => x % num);

const mysteryFunc = (a, n) => a.map(x => x % n)





/*  Solution 3   */


function mysteryFunc(arr, num) {
    return arr.map(x => x % num)
}




function mysteryFunc(arr, num) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] % num);
    }
    return newArr;
}



function mysteryFunc(arr, num) {
    return arr.map(value => value % num);
}



v