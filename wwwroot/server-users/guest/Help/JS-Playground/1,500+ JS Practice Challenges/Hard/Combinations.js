/*

Combinations

Create a function that takes a variable number of arguments, each argument representing the number of items in a group, and returns the number of permutations (combinations) of items that you could get by taking one item from each group.

Examples
combinations(2, 3) ➞ 6

combinations(3, 7, 4) ➞ 84

combinations(2, 3, 4, 5) ➞ 120


Notes
Don't overthink this one.
Input may include the number zero.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function combinations(items) {
    return [...arguments].reduce((acc, v) => v ? acc * v : acc + v, 1)
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


const combinations = (...i) => i.filter(x => x != 0).reduce((a, b) => a * b);



//#############################################################
//#  SOLUTION 3
//#############################################################


function combinations(items) {
    let args = Array.prototype.slice.call(arguments);
    return args.filter(x => x > 0).reduce((a, b) => a * b, 1);
}


//#############################################################
//#  SOLUTION 4
//#############################################################


const combinations = (...arr) => arr.reduce((a, b) => b === 0 ? a : a * b, 1)



const combinations = (...i) => i.filter(x => x != 0).reduce((a, b) => a * b);





//#############################################################
//#  SOLUTION 5
//#############################################################



function combinations(...items) {
    return items.filter(z => z != 0).reduce((a, c) => a * c);
}




//#############################################################
//#  SOLUTION 6
//#############################################################


function combinations(...items) {
    return items.reduce((acc, num) => acc * (num || 1));
}