/*  

Capture the Rook
Write a function that returns true if two rooks can attack each other, and false otherwise.

Examples
canCapture(["A8", "E8"]) ➞ true

canCapture(["A1", "B2"]) ➞ false

canCapture(["H4", "H3"]) ➞ true

canCapture(["F5", "C8"]) ➞ false
Notes
Assume no blocking pieces.
Two rooks can attack each other if they share the same row (letter) or column (number).

*/







/*  

Solutions

*/



function canCapture([yourRook, opponentsRook]) {
    return yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1];
}



const canCapture = arr => arr[0][0] === arr[1][0] || arr[0][1] === arr[1][1];






function canCapture([yourRook, opponentsRook]) {
    return opponentsRook.includes(yourRook[0]) || opponentsRook.includes(yourRook[1]) ? true : false
}



function canCapture([yourRook, opponentsRook]) {
    [yourRow, yourCol] = [yourRook[0], yourRook[1]];
    [opponentsRow, opponentsCol] = [opponentsRook[0], opponentsRook[1]];
    return (yourRow == opponentsRow) || (yourCol == opponentsCol);
}




function canCapture([yourRook, opponentsRook]) {
    var myRook = yourRook.split(''),
        otherRook = opponentsRook.split('');
    if (myRook[0] == otherRook[0] || myRook[1] == otherRook[1]) {
        return true;
    } else {
        return false;
    }
}



function canCapture([yourRook, opponentsRook]) {
    return ((yourRook.charAt(0) == opponentsRook.charAt(0)) || (yourRook.charAt(1) == opponentsRook.charAt(1))) ? true : false;
}