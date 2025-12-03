/*

Negative Image
Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

Examples
reverseImage([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]) ➞ [
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 0]
]

reverseImage([
  [1, 1, 1],
  [0, 0, 0]
]) ➞ [
  [0, 0, 0],
  [1, 1, 1]
]

reverseImage([
  [1, 0, 0],
  [1, 0, 0]
]) ➞ [
  [0, 1, 1],
  [0, 1, 1]
]

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


//#  SOLUTION 1 

function reverseImage(image) {
    return image.map(v => v.map(x => +!x));
}

const reverseImage = i => i.map(x => x.map(v => +!v))

const reverseImage = image => image.map(row => row.map(num => Number(!num)));

const reverseImage = image => image.map(x => x.map(y => !y ? 1 : 0));

const reverseImage = image => image.map(arr => arr.map(digit => digit == 0 ? 1 : 0))

//#  SOLUTION 2  


function reverseImage(image) {
    return image.map(el => el.map(e => (e === 0) ? 1 : 0));
}


//#  SOLUTION 3

function reverseImage(image) {
    return image.map((row) => {
        return row.map((col) => {
            return col == 1 ? 0 : 1;
        });
    });
    return image;
}


//#  SOLUTION 4

function reverseImage(image) {
    return image.map(function(row) { return row.map(function(n) { return n == 0 ? 1 : 0 }) })
}



//#  SOLUTION 5

function reverseImage(image) {
    return image.map(ele => ele
        .map(num => num === 0 ? 1 : 0))
}



//#  SOLUTION 6


function reverseImage(image) {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].map(el => el === 0 ? 1 : 0);
    }
    return image;
}



//#  SOLUTION 7


function reverseImage(image) {
    return image.map(i => i.map(j => j === 0 ? j = 1 : j = 0))
}



//#  SOLUTION 8


function reverseImage(image) {
    return image.map(curr => curr.map(c => c === 0 ? 1 : 0));
}


//#  SOLUTION 9

function reverseImage(image) {
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] == 1) {
                image[i][j] = 0
            } else {
                image[i][j] = 1
            }
        }
    }
    return image
}