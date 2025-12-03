/*

Maze Escape

Given a two-dimensional array of maze and an array of directions. Your task is to follow the given directions.

If you can reach the endpoint before all your moves have gone, return "Finish".
If you hit any walls or go outside the maze border, return "Dead".
If you find yourself still in the maze after using all the moves, return "Lost".
The maze array will look like this:

maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]
]

// 0 = Safe place to walk
// 1 = Wall
// 2 = Start Point
// 3 = Finish Point
// N = North, E = East, W = West and S = South
See the below examples for a better understanding:

Examples
exitMaze(maze, ["N", "E", "E"]) ➞ "Dead"
// Hitting the wall should return "Dead".

exitMaze(maze, ["N", "N", "N", "E"]) ➞ "Lost"
// Couldn't reach the finish point.

exitMaze(maze, ["N", "W", "W", "W", "N", "N", "N", "N", "W", "W", "S", "S", "S", "S", "W", "W", "N", "N", "N", "N", "N", "N", "N"]) ➞ "Finish"

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const exitMaze = (maze, directions) => {
    let x = 9
    let y = 8
    let coords = {
        N: [-1, 0],
        E: [0, 1],
        S: [1, 0],
        W: [0, -1]
    }
    for (let i = 0; i < directions.length; i++) {
        x += coords[directions[i]][0]
        y += coords[directions[i]][1]
        if (x > 9 || x < 0 || y > 9 || y < 0) {
            return "Dead"
        }
        if (maze[x][y] === 1) {
            return "Dead"
        }
        if (maze[x][y] === 3) {
            return "Finish"
        }
    }
    return "Lost"
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function exitMaze(maze, directions) {
    var [x, y] = [0, 0];
    x = maze.findIndex((row) => row.includes(2));
    y = maze[x].findIndex((point) => point === 2);

    for (let dir of directions) {
        if (dir === 'N') --x;
        else if (dir === 'S') ++x;
        else if (dir === 'W') --y;
        else if (dir === 'E') ++y;

        let currentPoint = maze[x] ? maze[x][y] : undefined;
        if (currentPoint === undefined || currentPoint === 1) return 'Dead';
        if (currentPoint === 3) return 'Finish';
    }

    return 'Lost';
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function exitMaze(_, directions, x = 9, y = 8) {
    if (x > 9 || y > 9 || x < 0 || y < 0 || maze[x][y] === 1)
        return "Dead"
    if (maze[x][y] === 3)
        return "Finish"
    if (!directions.length)
        return "Lost"
    else {
        direction = directions[0]
        if (direction === "N")
            return exitMaze(_, directions.slice(1), x - 1, y)
        if (direction === "S")
            return exitMaze(_, directions.slice(1), x + 1, y)
        if (direction === "E")
            return exitMaze(_, directions.slice(1), x, y + 1)
        if (direction === "W")
            return exitMaze(_, directions.slice(1), x, y - 1)
    }
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const exitMaze = (maze, directions) => {
    const coords = [9, 8];

    for (const e of directions) {
        const coord = Number(['E', 'W'].includes(e));
        const exp = Number(['N', 'W'].includes(e));
        coords[coord] += (-1) ** exp;

        const row = maze[coords[0]];
        if (!row) return 'Dead';

        switch (row[coords[1]]) {
            case undefined:
            case 1:
                return 'Dead';
            case 3:
                return 'Finish';
        }
    }

    return 'Lost';
};