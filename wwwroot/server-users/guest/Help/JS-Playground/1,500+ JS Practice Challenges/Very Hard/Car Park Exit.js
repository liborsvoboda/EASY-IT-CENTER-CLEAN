/*  

Car Park Exit

You are stuck in a multi-storey car parking lot. Your task is to exit the carpark using only the staircases. Exit is always at the bottom right of the ground floor.

Create a function that takes a two-dimensional array where:

Free carparking spaces are represented by a 0
Staircases are represented by a 1
Your starting position is represented by a 2 and can be at any level of the car park.
Exit is always at the bottom right of the ground floor.
You must use the staircases (1) to go down a level.
Each floor will have only one staircase apart from the ground floor which will not have any staircases.
... and returns an array of the quickest route out of the carpark.

arr = [
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]

// Starting from 2, move to left 4 times = "L4"
// Go down from stairs 1 step = "D1"
// Move to right 4 times to exit from right bottom corner = "R4"

result = ["L4", "D1", "R4"]
See the below examples to better understand:

Examples
parking_exit([
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]) ➞ ["L4", "D1", "R4"]
parking_exit([
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]) ➞ ["R3", "D2", "R1"]

// Starting from 2, move to right 3 times = "R3"
// Go down from stairs 2 steps = "D2"
// Move to right 1 step to exit from right bottom corner = "R1"
parking_exit([[0, 0, 0, 0, 2]]) ➞ []
// You are already at right bottom corner.

*/





//#############################################################
//#                        MY SOLUTION                        #
//#############################################################



function parkingExit(arr) {
    var seq = [],
        i = arr.findIndex(r => r.includes(2)),
        x = arr[i].indexOf(2);
    while (i < arr.length - 1) {
        let idx = arr[i].indexOf(1),
            down = 0,
            dist = idx - x;
        seq.push(dist < 0 ? `L${-dist}` : `R${dist}`);
        for (; arr[i][idx] === 1; down++, i++);
        seq.push(`D${down}`);
        x = idx;
    }
    return x === arr[0].length - 1 ? seq : seq.concat(`R${arr[0].length-1-x}`);
}






//#############################################################
//#                        MY SOLUTION                        #
//#############################################################



function parkingExit(arr) {
    let path = "";
    let x = arr[0].indexOf(2),
        y = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        const dist = arr[i].indexOf(1) - x;
        path += dist > 0 ? "R".repeat(dist) : dist < 0 ? "L".repeat(-dist) : "";
        path += "D";
        x += dist;
        y++;
    }

    path += "R".repeat(arr[arr.length - 1].length - x - 1);
    return (path.match(/(.)\1*/g) || []).map(p => p[0] + p.length);
}





//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


function parkingExit(arr) {

    let position = arr[0].findIndex(x => x === 2);
    let movement = [];

    for (let i = 0; i < arr.length - 1; i++) {
        movement.push(position - arr[i].findIndex(x => x === 1));
        position -= position - arr[i].findIndex(x => x === 1);
    }

    movement.push(position - arr[arr.length - 1].length + 1);

    let answer = [];

    for (let i = 0; i < movement.length; i++) {
        movement[i] > 0 ? answer.push("L" + movement[i]) : movement[i] === 0 ? "" : answer.push("R" + Math.abs(movement[i]));
        i < movement.length - 1 ? answer.push(1) : "";
    }

    for (let i = 0; i < answer.length - 1; i++) {
        if (typeof answer[i] === "number" && typeof answer[i + 1] === "number") {
            answer.splice(i + 1, 1);
            answer[i]++;
            i--;
        }
    }

    for (let i = 0; i < answer.length; i++) {
        typeof answer[i] === "number" ? answer[i] = "D" + answer[i] : "";
    }

    return answer;
}






//#############################################################
//#                        MY SOLUTION                        #
//#############################################################



const parkingExit = arr => {
    const steps = [];

    let i = arr[0].indexOf(2);

    for (const row of arr) {
        let j = row.indexOf(1);

        if (!~j) {
            j = row.length - 1;
            if (i === j) break;
        }

        if (i === j) {
            steps.push(steps.pop().replace(/\d/, m => Number(m) + 1));
        } else {
            steps.push(((i < j) ? 'R' : 'L') + Math.abs(i - j), 'D1');
        }

        i = j;
    }

    if (steps[steps.length - 1] === 'D1') steps.pop();

    return steps;
};





//#############################################################
//#                        MY SOLUTION                        #
//#############################################################



function parkingExit(arr) {
    const route = [];
    let cont = 0;
    let actPos = arr[0].indexOf(2);
    let move = 0;
    for (let pos = 0; pos < arr.length; pos += 1) {
        if (pos === arr.length - 1) move = actPos - (arr[pos].length - 1);
        else move = actPos - arr[pos].indexOf(1);

        actPos = arr[pos].indexOf(1);

        if (pos !== 0 && (move !== 0 || actPos === -1)) {
            route.push(`D${cont + 1}`);
            cont = 0;
        }

        if (move === 0) cont += 1;
        else if (move > 0) route.push(`L${Math.abs(move)}`);
        else route.push(`R${Math.abs(move)}`);
    }
    return route;
}





//#############################################################
//#                        MY SOLUTION                        #
//#############################################################






function parkingExit(building) {
    let startingPosition;
    let sidePositions = [];
    for (const floor of building) {
        startingPosition = checkFloor(floor, sidePositions, startingPosition);
    }
    return toStringArray(sidePositions);
}


function checkFloor(floor, sidePositions, startingPosition) {
    let staircasePosition;
    for (let index = 0; index < floor.length; index++) {
        let column = floor[index];
        if (!startingPosition && column === 2) {
            startingPosition = index;
        }
        if (!staircasePosition && column === 1) {
            staircasePosition = index;
        }
        if (startingPosition !== undefined && staircasePosition !== undefined) {
            let difference = startingPosition - staircasePosition;
            checkSpace(sidePositions, difference);
            startingPosition = staircasePosition;
            break;
        }
    }
    checkGroundFloor(floor, sidePositions, startingPosition, staircasePosition);
    return startingPosition;
}

function checkSpace(sidePositions, difference) {
    if (difference === 0) {
        let [name, value] = sidePositions[sidePositions.length - 1];
        sidePositions[sidePositions.length - 1] = [name, value + 1];
    } else {
        // sidePositions = [...sidePositions, getSidePosition(difference), ['D', 1]];
        sidePositions.push(getSidePosition(difference));
        sidePositions.push(['D', 1])
    }
}

function checkGroundFloor(floor, sidePositions, startingPosition, staircasePosition) {
    let difference = startingPosition + 1 - floor.length;
    if (staircasePosition === undefined && difference !== 0) {
        sidePositions.push(getSidePosition(difference))
    }
    // return (staircasePosition === undefined && difference !== 0) ? [...sidePositions, getSidePosition(difference)] : sidePositions;
}

function getSidePosition(difference) {
    return [getSide(difference), Math.abs(difference)];
}

function getSide(difference) {
    return difference > 0 ? 'L' : 'R'
}

function toStringArray(sidePositions) {
    return sidePositions.map(([name, value]) => `${name}${value}`);
}