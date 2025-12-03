/*

Adding Both Ends Together

Given an array of numbers, of any length, create a function which counts how many of those numbers pass the following criterea:

The first and last digits of a number must add to 10.
Examples
endsAddTo10([19, 46, 2098]) ➞ 3

endsAddTo10([33, 44, -55]) ➞ 1

endsAddTo10([]) ➞ 0


Notes
All items in the array will be numbers.
Ignore negative signs (see example #2).
If given an empty array, return 0.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function endsAddTo10(nums) {
    let tens = 0
    for (let num of nums) {
        n = String(Math.abs(num))
        if (+n[0] + +n[n.length - 1] === 10)
            tens += 1
    }
    return tens
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function endsAddTo10(nums) {
    return nums.filter(n => {
        const d = [...
            `${Math.abs(n)}`
        ].map(Number);
        return d[0] + d[d.length - 1] === 10;
    }).length;
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function endsAddTo10(nums) {
    return nums.map(x => Math.abs(x).toString().split('').map(Number)).filter(y => y.length > 2 ? y.splice(1, y.length - 2) : y).map(z => z.reduce((a, c) => a + c)).filter(q => q == 10 || q == 5).length
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function endsAddTo10(nums) {
    nums = nums.map(v => v < 0 ? v * -1 : v)
    return nums.filter(v => +String(v)[0] + +String(v).slice(-1) === 10).length
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function endsAddTo10(nums) {
    return nums.filter(
        (num) => +String(num)[num < 0 ? 1 : 0] + +String(num).slice(-1) === 10
    ).length;
}




//#############################################################
//#  SOLUTION 6
//#############################################################


const endsAddTo10 = nums => (
    nums.reduce((total, n) => {
        const str = String(Math.abs(n));
        const [a, b] = [
            [0, 1],
            [-1]
        ].map(arr => Number(str.slice(...arr)));
        return total + (a + b === 10);
    }, 0)
);




//#############################################################
//#  SOLUTION 7
//#############################################################


endsAddTo10 = nums =>
    nums.map(x => Math.abs(x).toString())
    .filter(x => Number(x[0]) + Number(x[x.length - 1]) == 10).length;