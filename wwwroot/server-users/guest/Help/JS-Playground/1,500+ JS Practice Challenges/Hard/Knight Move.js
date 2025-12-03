/*

Knight Move

Create a function that takes a start position of the chess knight and return all possible moves.

Alternative Text Alternative Text Alternative Text Alternative Text

Formating
Letters (A, B, C, D, E, F, G,H) must be on Uppercase.
On result moves must be sorted alphabetically (numbers too).
Moves must be separated by space-space.


Examples
knightMove("A1") ➞ "B3 - C2"

knightMove("A2") ➞ "B4 - C1 - C3"

knightMove("E2") ➞ "C1 - C3 - D4 - F4 - G1 - G3"


*/





//#############################################################
//#  SOLUTION 1 
//#############################################################

const knightMove = current => {
    const possible = [
        [-2, -1],
        [-2, 1],
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2],
        [2, -1],
        [2, 1]
    ];
    return possible
        .map(p => helper(current, p))
        .filter(s => /[A-H][1-8]/.test(s))
        .join(' - ');
}

const helper = (start, end) => {
    result = '';
    for (i = 0; i <= 1; i++)
        result += String.fromCharCode(start[i].charCodeAt() + end[i]);
    return result;
}

//#############################################################
//#  SOLUTION 2  
//#############################################################


function knightMove(startPos) {
    startPos = startPos[1] - 1 + ("ABCDEFGH".indexOf(startPos[0]) << 4);
    return [-0x12, -0x21, -0x1F, -0x0E, 0x12, 0x21, 0x1F, 0x0E]
        .map(i => startPos + i)
        .filter(i => !(i & 0x88))
        .map(i => "ABCDEFGH" [i >> 4] + ((i & 7) + 1))
        .sort()
        .join(' - ')
}