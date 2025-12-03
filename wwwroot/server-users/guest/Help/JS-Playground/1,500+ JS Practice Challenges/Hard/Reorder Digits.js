/*

Reorder Digits

Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.

Examples
reorderDigits([515, 341, 98, 44, 211], "asc") ➞ [155, 134, 89, 44, 112]

reorderDigits([515, 341, 98, 44, 211], "desc") ➞ [551, 431, 98, 44, 211]

reorderDigits([63251, 78221], "asc") ➞ [12356, 12278]

reorderDigits([63251, 78221], "desc") ➞ [65321, 87221]

reorderDigits([1, 2, 3, 4], "asc")  ➞ [1, 2, 3, 4]

reorderDigits([1, 2, 3, 4], "desc") ➞ [1, 2, 3, 4]


Notes
Single-digit numbers should be ordered the same regardless of direction.
Numbers in the array should be kept the same order.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


const asc = (a, b) => a - b;

const desc = (a, b) => b - a;

const reorderDigits = (arr, direction) =>
    arr.map(num =>
        Number(
            String(num)
            .split('')
            .sort(direction === 'asc' ? asc : desc)
            .join('')
        )
    );



//#############################################################
//#    SOLUTION 2
//#############################################################


function reorderDigits(arr, direction) {
    return arr.map(el => Number(el
        .toString()
        .split ``
        .sort((a, b) => (direction == 'asc') ? a - b : b - a)
        .join ``));
}




//#############################################################
//#    SOLUTION 3
//#############################################################


const reorderDigits = (arr, direction) => {
    return arr.map(
        (x) =>
        +[...
            `${x}`
        ]
        .sort((a, b) => (direction === 'asc' ? a - b : b - a))
        .join('')
    );
};




//#############################################################
//#    SOLUTION 4
//#############################################################


function reorderDigits(arr, direction) {
    switch (direction) {
        case "asc":
            return arr.map(num => Number(num
                .toString()
                .split("")
                .sort()
                .join("")));
            break;
        case "desc":
            return arr.map(num => Number(num
                .toString()
                .split("")
                .sort()
                .reverse()
                .join("")));
            break;
    }
}



//#############################################################
//#    SOLUTION 5
//#############################################################

function reorderDigits(arr, direction) {
    let result = []
    if (direction === 'asc') {
        arr.forEach(el => {
            result.push(Number(el.toString().split('').sort().join('')))
        })
    } else {
        arr.forEach(el => {
            result.push(Number(el.toString().split('').sort().reverse().join('')))
        })
    }
    return result
}