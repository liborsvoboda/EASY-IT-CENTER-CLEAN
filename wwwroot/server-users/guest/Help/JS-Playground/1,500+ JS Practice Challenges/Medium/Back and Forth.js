/*

Back and Forth

In a board game, a player may pick up a card with several left or right facing arrows, with the number of arrows indicating the number of tiles to move. The player should move either left or right, depending on the arrow's direction.

Given an array of the arrows contained on a player's cards, return a singular string of arrowheads that are equivalent to all of the arrowheads.

Worked Example
calculateArrowhead([">>", "<<", "<<<"]) ➞ "<<<"
// >> means to move 2 places right
// << means to move 2 places left (cancelling out >>)
// <<< means to move a further 3 places left
// overall, the movement can be written as <<<
Examples
calculateArrowhead([">>>>", "<", "<", "<"]) ➞ ">"

calculateArrowhead([">", "<", ">>", "<", "<<<"]) ➞ "<<"

calculateArrowhead([">>>", "<<<"]) ➞ ""


Notes
Return an empty string if all the arrowheads cancel out.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################



function calculateArrowhead(arr) {
    const n = [...arr.join("")].map(a => a == ">" ? 1 : -1).reduce((x, y) => x + y)
    return n > 0 ? ">".repeat(n) : "<".repeat(Math.abs(n))
}


//#############################################################
//#  SOLUTION 2  
//#############################################################


function calculateArrowhead(arr) {
    var str = arr.join("");
    const rFacingCount = [...str].filter(s => s === "<").length;
    const lFacingCount = [...str].filter(s => s === ">").length;
    const diff = rFacingCount - lFacingCount;

    if (diff > 0) {
        return "<".repeat(diff);
    } else {
        return ">".repeat(diff * -1);
    }
}


//#############################################################
//#  SOLUTION 3
//#############################################################


function calculateArrowhead(arr) {
    const total = arr
        .join('')
        .split('')
        .map((item) => {
            if (item === '>') return 1;
            return -1;
        })
        .reduce((total, number) => (total += number));

    if (total < 0) return '<'.repeat(Math.abs(total));
    return '>'.repeat(Math.abs(total));
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function calculateArrowhead(arr) {
    let left = 0,
        right = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('>')) right = right + arr[i].length
        else left = left + arr[i].length
    }
    return left === right ? '' : left > right ? '<'.repeat(left - right) : '>'.repeat(right - left)
}