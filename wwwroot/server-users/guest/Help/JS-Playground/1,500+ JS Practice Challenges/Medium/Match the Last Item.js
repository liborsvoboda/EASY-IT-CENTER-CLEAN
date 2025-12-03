/*

Match the Last Item

Create a function that takes an array of items and checks if the last item matches the rest of the array.

Examples
matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true

Notes
The array is always filled with items.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function matchLastItem(arr) {
    return arr.pop() === arr.join('');
}

//#  SOLUTION 2  

matchLastItem = a => a.pop() === a.join("")

let matchLastItem = (arr) => (b = arr.pop(), b) == arr.join('');


//#  SOLUTION 3

const matchLastItem = arr => {
    const last = arr.pop();
    return arr.join('') === last;
};


//#  SOLUTION 4

function matchLastItem(arr) {
    return arr.pop() == arr.join("");
}


//#  SOLUTION 5

function matchLastItem(arr) {
    return arr.slice(0, arr.length - 1).join('') === arr[arr.length - 1]
}

//#  SOLUTION 6

function matchLastItem(arr) {
    var last_item = arr[arr.length - 1];
    var pos = 0;
    for (e of arr.slice(0, arr.length - 1)) {
        if (e.toString() != last_item.slice(pos, pos + e.toString().length)) {
            return false;
            console.log(pos, e, last_item.slice(pos, pos + e.toString().length), e.toString().length);
        }
        pos += e.toString().length;
    }
    return true;
}


//#  SOLUTION 7


function matchLastItem(arr) {
    return arr.reduce((prev, next, index, array) => {
        if (array.length - 1 === index)
            return prev === next
        return prev + next
    })
}



//#  SOLUTION 8

function matchLastItem(arr) {
    var lastArrValue = arr[arr.length - 1];
    var combined = "";
    for (var ndx = 0; ndx < arr.length - 1; ndx++) {
        combined += arr[ndx];
    }
    return combined == lastArrValue;
}