/*  

Tic Tac Toe

Given a 3x3 matrix of a completed tic-tac-toe game, create a function that returns whether the game is a win for "X", "O", or a "Draw", where "X" and "O" represent themselves on the matrix, and "E" represents an empty spot.

Examples
ticTacToe([
  ["X", "O", "X"],
  ["O", "X",  "O"],
  ["O", "X",  "X"]
]) ➞ "X"

ticTacToe([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["E", "X", "X"]
]) ➞ "O"

ticTacToe([
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"]
]) ➞ "Draw"


Notes
Make sure that if O wins, you return the letter "O" and not the integer 0 (zero) and if it's a draw, make sure you return the capitalised word "Draw". If you return "X" or "O", make sure they're capitalised too.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const ticTacToe = m => {
    m = [m.map((r, i) => r[r.length - 1 - i]).join(''), m.map((r, i) => r[i]).join(''),
        ...m.map(e => e.join('')), ...m[0].map((_, y) => m.map(x => x[y]).join(''))
    ]
    return ['X', 'O', 'Draw'][
        [...m.reduce(([x, o], s) => /X{3}/.test(s) ? [x = 1, o] : /O{3}/.test(s) ? [x, o = 1] : [x, o], [0, 0]), 1].indexOf(1)
    ]
}



//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function ticTacToe(board) {
    let boardTranspose = [
        [],
        [],
        []
    ];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            boardTranspose[i][j] = board[j][i]
        }
    }

    for (let i = 0; i < board.length; i++) {
        if (board[i].join('') === 'OOO') { return "O" }
        if (board[i].join('') === 'XXX') { return "X" }
    }

    for (let i = 0; i < boardTranspose.length; i++) {
        if (boardTranspose[i].join('') === 'OOO') { return "O" }
        if (boardTranspose[i].join('') === 'XXX') { return "X" }
    }
    if (`${board[0][0]}${board[1][1]}${board[2][2]}` === 'OOO') { return "O" } else if (`${board[0][0]}${board[1][1]}${board[2][2]}` === 'XXX') { return "X" } else if (`${board[0][2]}${board[1][1]}${board[2][1]}` === 'OOO') { return "O" } else if (`${board[0][2]}${board[1][1]}${board[2][1]}` === 'XXX') { return "X" }
    return "Draw"
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const ticTacToe = board => {
    const check = (x, y) => x.every(e => e == y)
    const d = (x, b) => check(b.map((m, i) => m[i]), x)
    const v = x => board.some(s => check(s, x))
    const h = x => [0, 1, 2].map(i => board.map(e => e[i])).some(s => check(s, x))
    const m = ['X', 'O'].reduce((all, s) =>
        all.concat(v(s) || h(s) || d(s, board) || d(s, board.reverse())), [])
    return ['X', 'O'][m.indexOf(true)] || 'Draw'
}




//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################



function ticTacToe(board) {
    let x = board.flat().join('');
    let sequences = [
        x[0] + x[1] + x[2],
        x[3] + x[4] + x[5],
        x[6] + x[7] + x[8],
        x[0] + x[3] + x[6],
        x[1] + x[4] + x[7],
        x[2] + x[5] + x[8],
        x[0] + x[4] + x[8],
        x[2] + x[4] + x[6],
    ];

    if (sequences.includes('XXX')) return 'X';
    else if (sequences.includes('OOO')) return 'O';
    else return 'Draw';
}




//#############################################################
//#                        MY SOLUTION    5                   #
//#############################################################



function ticTacToe(game) {
    let columns = []
    let diagonal = [
        [game[0][0], game[1][1], game[2][2]],
        [game[0][2], game[1][1], game[2][0]]
    ]

    if (diagonal[0].every(el => el === "X") || diagonal[1].every(el => el === "X")) return "X"
    if (diagonal[0].every(el => el === "O") || diagonal[1].every(el => el === "O")) return "O"

    for (let i = 0; i < game.length; i++) {
        columns.push(game.map(el => el[i]))
        if (game[i].every(el => el === "X" || columns[i].every(el => el === "X"))) return "X"
        if (game[i].every(el => el === "O" || columns[i].every(el => el === "O"))) return "O"
    }

    return "Draw"
}





//#############################################################
//#                        MY SOLUTION    6                   #
//#############################################################




function ticTacToe(board) {
    // Row
    for (const row of board) {
        if (wonRow(row)) return row[0]
    }

    // Col
    for (let i = 0; i < board[0].length; i++) {
        if (wonRow(board.map(row => row[i]))) return board[0][i];
    }

    if (wonRow(board.map((row, index) => row[index]))) return board[0][0];
    if (wonRow(board.map((row, index) => row[row.length - index]))) return board[0][row.length - 1];

    return "Draw"
}

const wonRow = row => row.every(spot => spot === row[0]);