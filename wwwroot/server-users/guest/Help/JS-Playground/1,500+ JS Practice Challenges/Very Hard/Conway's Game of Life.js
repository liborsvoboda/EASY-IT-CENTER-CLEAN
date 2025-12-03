/*  

Conway's Game of Life

The goal of this challenge is to implement the logic used in Conway's Game of Life. Wikipedia will give a better understanding of what it is and how it works (check the resources tab above).

Rules
For a space that's "populated":
Each cell with 0 or 1 neighbours dies, as if by solitude.
Each cell with 2 or 3 neighbours survives.
Each cell with 4 or more neighbours dies, as if by overpopulation.
For a space that's "empty" or "unpopulated":
Each cell with 3 neighbours becomes populated.
Parameters
board: a 2-dimensional array of values 0 to 1.

0 means the cell is empty.
1 means the cell is populated.
Return Value
A string containing the board's state after the game logic has been applied once.

On character: █
Off character: ░


Notes
The string should be divided by newlines \n to signal the end of each row.
A cell's "neighbours" are the eight cells that are vertically, horizontally and diagonally adjacent to it.

*/




//#############################################################
//#                        MY SOLUTION    1                 #
//#############################################################



function gameOfLife(board) {
    return board.map((v, i) => [...v].reduce((a, c, j) => a + checkCell(board, i, j), "")).join("\n")
}

function checkCell(board, i, j) {
    count = 0;
    for (var x = -1; x < 2; x++) {
        for (var y = -1; y < 2; y++) {
            try {
                if (board[i + x][j + y] == 1 && !(x == 0 && y == 0)) {
                    count += 1;
                }
            } catch (e) {}
        }
    }
    return (count == 2 && board[i][j] == 1) || count == 3 ? "█" : "░";
}






//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################



function gameOfLife(board) {
    return drawGrid(evolve(board))
}

const evolve = grid => {
    let newGrid = grid.map((line, y) => line.map((val, x) => {
        let neighboursCount = 0
        for (let i = -1; i < 2; i++)
            if (grid[y + i] != undefined)
                for (let j = -1; j < 2; j++)
                    if (grid[y + i][x + j])
                        neighboursCount++

                        if (val && (neighboursCount == 3 || neighboursCount == 4) ||
                            (!val && neighboursCount == 3))
                            return 1
                        else return 0
    }))

    return newGrid
}

const drawGrid = arr => {
    let resArr = []
    for (let y = 0; y < arr.length; y++) {
        let resString = ``
        for (let x = 0; x < arr[y].length; x++) {
            resString += arr[y][x] == 1 ? `█` : `░`
        }
        resArr.push(resString)
    }
    return resArr.join(`\n`)
}





//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function gameOfLife(b) {
    const lifeDecider = (s, y, x) => {
        const n = (b[y - 1] ? (b[y - 1][x - 1] || 0) + (b[y - 1][x] || 0) + (b[y - 1][x + 1] || 0) : 0) +
            (b[y + 1] ? (b[y + 1][x - 1] || 0) + (b[y + 1][x] || 0) + (b[y + 1][x + 1] || 0) : 0) +
            (b[y][x - 1] || 0) + (b[y][x + 1] || 0);
        return !s && n === 3 ? '█' : s && (n > 1 && n < 4) ? '█' : '░'
    }
    return b.map((line, ui) => line.map((cell, li) => lifeDecider(cell, ui, li)).join('')).join('\n')
}







//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################




// on  character: █
// off character: ░

function gameOfLife(board) {
    const getUpper = (currRow, currCol) => currRow - 1 < 0 ? 0 : board[currRow - 1][currCol];
    const getUpperLeft = (currRow, currCol) => currRow - 1 < 0 || currCol - 1 < 0 ? 0 : board[currRow - 1][currCol - 1];
    const getUpperRight = (currRow, currCol) => currRow - 1 < 0 || currCol + 1 > board[0].length - 1 ? 0 : board[currRow - 1][currCol + 1];
    const getLower = (currRow, currCol) => currRow + 1 > board.length - 1 ? 0 : board[currRow + 1][currCol];
    const getLowerLeft = (currRow, currCol) => currRow + 1 > board.length - 1 || currCol - 1 < 0 ? 0 : board[currRow + 1][currCol - 1];
    const getLowerRight = (currRow, currCol) => currRow + 1 > board.length - 1 || currCol + 1 > board[0].length - 1 ? 0 : board[currRow + 1][currCol + 1];
    const getLeft = (currRow, currCol) => currCol - 1 < 0 ? 0 : board[currRow][currCol - 1];
    const getRight = (currRow, currCol) => currCol + 1 > board[0].length - 1 ? 0 : board[currRow][currCol + 1];

    let str = "";
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            const neighbors = getUpper(row, col) +
                getUpperRight(row, col) +
                getUpperLeft(row, col) +
                getLower(row, col) +
                getLowerRight(row, col) +
                getLowerLeft(row, col) +
                getLeft(row, col) +
                getRight(row, col);
            if (board[row][col] === 0) {
                if (neighbors === 3) {
                    str += "█";
                } else {
                    str += "░";
                }
            } else {
                switch (neighbors) {
                    case 2:
                    case 3:
                        str += "█";
                        break;
                    default:
                        str += "░";
                }
            }
        }
        if (row !== board.length - 1) {
            str += "\n";
        }
    }
    return str;
}