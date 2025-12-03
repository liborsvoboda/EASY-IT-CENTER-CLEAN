/*

Magic Square

In recreational mathematics, a square array of numbers, usually positive integers, is called a magic square if the sums of the numbers in each row, each column, and both main diagonals are the same.

Create a function that takes a square 2D array as an argument and returns a Boolean (if it is: true, if it isn't: false).

Examples
isMagicSquare([
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
]) ➞ true

isMagicSquare([
  [16, 3, 2, 13],
  [5, 10, 11, 8],
  [9, 6, 7, 12],
  [4, 15, 14, 1]
]) ➞ true

isMagicSquare([
  [1, 14, 14, 4],
  [11, 7, 6, 9],
  [8, 11, 10, 5],
  [13, 2, 3, 15]
]) ➞ false

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


function isMagicSquare(arr) {
    let d1 = arr.map((x, i, a) => a[i][i]).reduce((acc, cur) => acc + cur);
    let d2 = arr.map((x, i, a) => a[i][a.length - 1 - i]).reduce((acc, cur) => acc + cur);
    let a1 = arr.map(x => x.reduce((acc, cur) => acc + cur)).every(x => x == d1 && x == d2);
    let b1 = arr.map((x, i, a) => x.map((y, ind) => a[ind][i]).reduce((acc, cur) => acc + cur)).every(x => x == d1 && x == d2);
    return a1 && b1 && d1 == d2;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function isMagicSquare(arr) {
    const sum = arr[0].reduce((a, b) => a + b);
    const transposed = arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));
    const flat = arr.flat();

    if (arr.filter(a => a.reduce((x, y) => x + y) !== sum).length) {
        return false;
    } else if (transposed.filter(a => a.reduce((x, y) => x + y) !== sum).length) {
        return false;
    } else if (flat.map((a, i) => (i % (arr.length + 1) ? 0 : a)).reduce((a, b) => a + b) !== sum) {
        return false;
    } else if (flat.map((a, i) => (i === 0 ||
            i === flat.length - 1 ||
            i % (arr.length - 1) ? 0 : a)).reduce((a, b) => a + b) !== sum) {
        return false;
    } else {
        return true;
    }
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function isMagicSquare(arr) {
    const magicNumber = arr[0].reduce((acc, n) => (acc += n));

    // row check
    const row = arr.every((row) => {
        return row.reduce((acc, n) => (acc += n)) === magicNumber;
    });
    if (!row) return false;

    // column check
    const column = arr.every((row, iX) => {
        return row.reduce((acc, _, iY) => (acc += arr[iX][iY]), 0) === magicNumber;
    });
    if (!column) return false;

    // check the main diagonal from the start
    const diagonalStart = arr.every((row, iX) => {
        return row.reduce((acc, _, iY) => (acc += arr[iY][iY]), 0) === magicNumber;
    });
    if (!diagonalStart) return false;

    // check the main diagonal from the end
    const diagonalEnd = arr.every((row, iX) => {
        return (
            row.reduceRight((acc, _, iY) => (acc += arr[iY][iY]), 0) === magicNumber
        );
    });
    if (!diagonalEnd) return false;

    return true;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


let magic = true;
helpers = {};


helpers.rows = function(arr) {
    const test_val = arr[0].reduce((accumulate_val, current_val) => accumulate_val + current_val);
    let sum = 0
    for (let pos = 0; pos < arr.length; pos++) {
        sum = arr[pos].reduce((accumulate_val, current_val) => accumulate_val + current_val);
        magic = sum === test_val ? true : false;
        if (magic === false) { break };
    };
}
helpers.diag = function(arr) {
    const test_val = arr[0].reduce((accumulate_val, current_val) => accumulate_val + current_val)
    let sum = 0;
    for (let pos = 0; pos < arr.length; pos++) {
        let cur = arr[pos];
        for (let i = 0; i != 1; i++) {
            sum += cur[pos];
        }

    }
    magic = sum === test_val ? true : false;
    if (magic === false) { return false };

};

helpers.columns = function(arr) {
    const test_val = arr[0].reduce((accumulate_val, current_val) => accumulate_val + current_val)
    for (col = 0; col < arr.length; col++) {
        let sum = 0
        for (pos = 0; pos < arr.length; pos++) {
            sum += arr[pos][col];
        }
        magic = sum === test_val ? true : false;
    }
}


function isMagicSquare(arr) {
    helpers.rows(arr);
    if (magic === false) { return magic };
    helpers.diag(arr);
    if (magic === false) { return magic };
    helpers.columns(arr);
    if (magic === false) { return magic };
    return magic
};




//#############################################################
//#  SOLUTION 5
//#############################################################


function isMagicSquare(arr) {
    const reducer = (acc, cV) => acc + cV
    baseRow = arr[0].reduce(reducer)
    newArr = []

    fDiag = 0
    rows = 0
    bDiag = 0

    for (let i = 0; i < arr.length; i++) {
        fDiag += arr[i][i]
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].reduce(reducer) === baseRow) {
            rows = baseRow
        } else {
            return false
        }
    }
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].reverse())
        bDiag += newArr[i][i]
    }
    return bDiag == fDiag && bDiag == rows && fDiag == rows
}