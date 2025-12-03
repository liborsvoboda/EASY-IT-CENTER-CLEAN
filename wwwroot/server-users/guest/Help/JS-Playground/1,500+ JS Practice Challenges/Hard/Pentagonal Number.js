/*

Pentagonal Number

Write a function that takes a positive integer num and calculates how many dots exist in a pentagonal shape around the center dot on the Nth iteration.

In the image below you can see the first iteration is only a single dot. On the second, there are 6 dots. On the third, there are 16 dots, and on the fourth there are 31 dots.

alt text

Return the number of dots that exist in the whole pentagon on the Nth iteration.

Examples
pentagonal(1) ➞ 1

pentagonal(2) ➞ 6

pentagonal(3) ➞ 16

pentagonal(8) ➞ 141

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const pentagonal = num => {
    if (num === 1) return 1;

    return 5 * (num - 1) + pentagonal(num - 1);
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



function pentagonal(num) {
    let seed = [1]
    while (seed.length !== num) {
        let val = 5 * (seed.length) + seed[seed.length - 1]
        seed.push(val)
    }
    return seed[num - 1]
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function pentagonal(num) {
    return num === 1 ? 1 : Array.from({
        length: num
    }, (a, r) => r).reduce((acc, current, i) => (acc += i + (4 * i), acc), 1);
}




//#############################################################
//#  SOLUTION 4
//#############################################################



const pentagonal = n => n === 1 ? 1 : 5 * (n - 1) + pentagonal(n - 1)