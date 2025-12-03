/*

Sudoku Validation

Write a sudoku validator. This function should return true if the 2-D array represents a valid sudoku and false otherwise. To be a valid sudoku:

Each row must have the digits from 1 to 9 exactly once.
Each column must have the digits from 1 to 9 exactly once.
Each 3x3 box must have the digits from 1 to 9 exactly once.
Examples
sudokuValidator([
  [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
]) ➞ true

sudokuValidator([
  [ 1, 1, 2, 4, 8, 9, 3, 7, 6 ],
  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
]) ➞ false

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function sudokuValidator(grid) {
    const getCol = c => grid.map(r => r[c]);
    const getBox = b => [...Array(3)].reduce((a, _, i) => a.concat(grid[(~~(b / 3) * 3) + i].slice((b % 3) * 3, (((b % 3) + 1) * 3))), []);
    const unique = ar => new Set(ar).size === 9;

    return [...Array(9)].every((_, i) => unique(grid[i]) && unique(getCol(i)) && unique(getBox(i)));
}



//#############################################################
//#    SOLUTION 2
//#############################################################



function sudokuValidator(x) {

    const checkUnique = (arr) => ([...new Set(arr)].length === arr.length)

    const columns = x.reduce((total, row, i) => {
        row.map((num, j) => total[j].push(num))
        return total
    }, [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ])

    const squares = x.reduce((total, row, i) => {
        for (let j = 0; j < 3; j++) {
            total[j + (i < 3 ? 0 : i < 6 ? 3 : i < 9 && 6)].push(...row.slice((j * 3), j + 3))
        }
        return total
    }, [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ])

    return ![...x, ...columns, ...squares].map(row => checkUnique(row)).filter(unique => !unique).length

}



//#############################################################
//#    SOLUTION 3
//#############################################################


function sudokuValidator(x) {
    let hor = arr => arr.every(r => new Set(r).size == 9);
    let ver = arr => {
        for (i = 0; i < arr.length; i++) {
            let set = new Set();
            for (j = 0; j < arr.length; j++) {
                if (set.has(arr[j][i])) {
                    return false;
                } else {
                    set.add(arr[j][i]);
                }
            }
        }
        return true;
    }
    let boxes = arr => {
        let boxes = []
        for (i = 0; i < arr.length; i += 3) {
            for (j = 0; j < arr.length; j += 3) {
                let set = new Set([arr[i].slice(j, j + 3), arr[i + 1].slice(j, j + 3), arr[i + 2].slice(j, j + 3)].flat());
                if (set.size != 9) return false;
            }
        }
        return true;
    }
    return [hor, ver, boxes].every(f => f(x));
}




//#############################################################
//#    SOLUTION 4
//#############################################################



var sudoku;

function sudokuValidator(x) {
    sudoku = x;
    for (var i = 0; i < 9; i++) {
        if (!checkRow(i)) return false;
    }
    for (var i = 0; i < 9; i++) {
        if (!checkColumn(i)) return false;
    }
    for (var i = 0; i < 9; i++) {
        if (!checkSquare(i)) return false;
    }
    return true;
}

function checkRow(n) {
    var numbers = [];
    for (var i = 0; i < 9; i++) {
        var number = sudoku[n][i];
        if (number > 9 || number < 1) return false;
        if (numbers.includes(number)) return false;
        else numbers.push(number);
    }
    return true;
}

function checkColumn(n) {
    var numbers = [];
    for (var i = 0; i < 9; i++) {
        var number = sudoku[i][n];
        if (number > 9 || number < 1) return false;
        if (numbers.includes(number)) return false;
        else numbers.push(number);
    }
    return true;
}

function checkSquare(n) {
    n = n + 1;
    var offX = 0;
    var offY = 0;
    if (n <= 3) {
        offX = (n * 3) - 2;
        offY = 1;
    } else if (n > 3 && n <= 6) {
        offX = ((n - 3) * 3) - 2;
        offY = 4;
    } else {
        offX = ((n - 6) * 3) - 2;
        offY = 7;
    }
    var numbers = [];
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            var number = sudoku[x + offX - 1][y + offY - 1];
            if (number > 9 || number < 1) return false;
            if (numbers.includes(number)) return false;
            else numbers.push(number);
        }
    }
    return true;
}






//#############################################################
//#    SOLUTION 5
//#############################################################


function shift(x) {
    return 1 << x;
}

function sudokuValidator(x) {
    for (let i = 0; i < 9; i++) {
        let validatorH = 0;
        let validatorV = 0;
        let validatorB = 0;
        for (let j = 0; j < 9; j++) {
            validatorH = validatorH | shift(x[i][j] - 1);
            validatorV = validatorV | shift(x[j][i] - 1);
            validatorB = validatorB | shift(x[~~(j / 3) + ~~(i / 3) * 3][(j % 3) + (i % 3) * 3] - 1);
        }
        if (validatorH != 511 || validatorV != 511 || validatorB != 511) return false;
    }
    return true;
}





//#############################################################
//#    SOLUTION 6
//#############################################################


function sudokuValidator(x) {
    let isRowInvalid = (x) => x.map(v => 9 == [...new Set(v)].length).includes(false);
    if (isRowInvalid(x)) return false;

    // Transform cols to rows
    x = x[0].map((_, c) => x.map((r) => r[c]));
    if (isRowInvalid(x)) return false;

    // Transform boxes to rows
    x = x[0].map((_, box) => x.reduce((acc, cur, i) =>
        Math.floor(i / 3) == Math.floor(box / 3) ? acc.concat(x[i].slice((box % 3) * 3, ((box % 3) + 1) * 3)) : acc, []));
    if (isRowInvalid(x)) return false;
    return true;
}




//#############################################################
//#    SOLUTION 7
//#############################################################


let sudokuValidator = (arr) => {
    const nums = [...Array(arr.length).keys()].map(e => ++e)
    return [arr,
        nums.map(e => arr.map(f => f[e - 1])),
        nums.map(e => e - 1).map(e => arr.map(f => {
            if ((e % 3 == 0 || e == 0) && (e + 3 <= f.length)) {
                return f.slice(e, e + 3)
            }
        })).filter(e => !!e[0]).map(e => e.map((f, i, a) => {
            if ((i % 3 == 0) && (i + 3 <= e.length)) {
                return f.concat(a[i + 1], a[i + 2])
            }
        })).flat().filter(e => !!e),
    ].every(e => e.every(f => JSON.stringify(f.concat().sort()) == JSON.stringify(nums)))
}