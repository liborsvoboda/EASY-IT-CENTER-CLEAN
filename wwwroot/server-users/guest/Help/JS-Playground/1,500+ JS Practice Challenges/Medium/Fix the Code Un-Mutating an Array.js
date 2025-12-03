/*

Fix the Code: Un-Mutating an Array

Your friend is trying to write a function to accomplish the following transformations:

let x = [3, 3, 3, 3, 3, 3, 3]

// Each time x is called, the following results are shown:

change(x, 0)  // [3, 3, 3, 3, 3, 3, 3]
change(x, 1)  // [3, 2, 2, 2, 2, 2, 3]
change(x, 2)  // [3, 2, 1, 1, 1, 2, 3]
change(x, 3)  // [3, 2, 1, 0, 1, 2, 3]
Note: The change() function should not mutate the original array. After each call to the function, the original x should still equal [3, 3, 3, 3, 3, 3, 3].

He comes up with the following code:

function change(x, times) {
  for(let i = 0; i < x.length; i++) {
    let j = 1; 
    while (j <= times) {
      if (i >= j && i < x.length-j) {
        x[i]--; 
      }
      j++; 
    }
  }
  return x; 
}
Oops! The code appears to mutate the original array. Fix this incorrect code so that the function no longer mutates the original array.

See below:

Examples
let x = [3, 3, 3, 3, 3, 3, 3]

// What we want:
change(x, 2) => [3, 2, 1, 1, 1, 2, 3]

change(x, 2) => [3, 2, 1, 1, 1, 2, 3]

// What we get:
change(x, 2) => [3, 2, 1, 1, 1, 2, 3]  // Good so far...

change(x, 2) => [3, 1, -1, -1, -1, 1, 3] // Array is mutated :(


Notes
If this is confusing, copy and paste the incorrect code in a REPL environment and play around with the code to understand what the function is doing.
Hint: Try to make a copy of the input array.
If this looks familiar, it is part of a solution for the Concentric Rug problem.

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


// As it stands, only 1/4 tests pass
// Fix the code so that all tests pass
function change(a, times) {
    const x = [...a]
    for (let i = 0; i < x.length; i++) {
        let j = 1;
        while (j <= times) {
            if (i >= j && i < x.length - j) {
                x[i]--;
            }
            j++;
        }
    }
    return x;
}

let x = [3, 3, 3, 3, 3, 3, 3]



//#############################################################
//#  SOLUTION 2  
//#############################################################



// As it stands, only 1/4 tests pass
// Fix the code so that all tests pass
function change(x, times) {
    let arr = x.slice(0);
    for (let i = 0; i < arr.length; i++) {
        let j = 1;
        while (j <= times) {
            if (i >= j && i < x.length - j) {
                arr[i]--;
            }
            j++;
        }
    }
    return arr;
}

let x = [3, 3, 3, 3, 3, 3, 3]



//#############################################################
//#  SOLUTION 3
//#############################################################


function change(y, times) {
    let x = JSON.parse(JSON.stringify(y));
    for (let i = 0; i < x.length; i++) {
        let j = 1;
        while (j <= times) {
            if (i >= j && i < x.length - j) {
                x[i]--;
            }
            j++;
        }
    }
    return x;
}

let x = [3, 3, 3, 3, 3, 3, 3]