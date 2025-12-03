/*  

War of Numbers
There's a great war between the even and odd numbers. Many numbers already lost their life in this war and it's your task to end this. You have to determine which group is larger: the even, or the odd. The larger group wins.

Create a function that takes an array of integers and sum up the even and odd numbers seperately and then substract the smaller one from the bigger one. Return the substraction.

Examples
warOfNumbers([2, 8, 7, 5]) ➞ 2
// 2 + 8 = 10
// 7 + 5 = 12
// 12 - 10

warOfNumbers([12, 90, 75]) ➞ 27

warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) ➞ 168


*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#    SOLUTION 1

const warOfNumbers = arr => Math.abs(arr.reduce((a, b) => a + (b % 2 ? b : -b), 0));



//#    SOLUTION 2


function warOfNumbers(arr) {
    const sum = arr => arr.reduce((total, num) => total + num, 0);
    const even = arr.filter(num => num % 2 === 0);
    const odd = arr.filter(num => num % 2 !== 0);
    const sortedSums = [sum(even), sum(odd)].sort((a, b) => b - a);

    return sortedSums[0] - sortedSums[1];
}


//#    SOLUTION 3


function warOfNumbers(arr) {
    const even = [];
    const odd = [];
    arr.forEach(el => {
        el % 2 === 0 ? even.push(el) : odd.push(el);
    });
    return Math.abs(even.reduce((a, b) => a + b) - odd.reduce((a, b) => a + b));
}


//#    SOLUTION 4


const warOfNumbers = arr => {
    const even = arr.filter(i => i % 2 === 0).reduce((a, b) => a + b, 0)
    const odd = arr.filter(i => i % 2 === 1).reduce((a, b) => a + b, 0)
    return odd > even ? odd - even : even - odd
}


//#    SOLUTION 5


function warOfNumbers(arr) {
    var r = ((a, b) => a + b)
    var a = [arr.filter(x => x % 2 == 0).reduce(r), arr.filter(x => x % 2 != 0).reduce(r)].sort((a, b) => a - b)
    return a[1] - a[0]
}




//#    SOLUTION 6

const sum = arr => arr.reduce((a, v) => a + v, 0);
const isEven = n => !(n % 2);
const isOdd = n => !isEven(n);
const warOfNumbers = arr =>
    Math.abs(sum(arr.filter(isEven)) - sum(arr.filter(isOdd)));





//#    SOLUTION 7


function warOfNumbers(arr) {
    const oddNumbers = arr.filter(x => ((x % 2) !== 0)).reduce(getSum, 0);
    const evenNumbers = arr.filter(x => ((x % 2) === 0)).reduce(getSum, 0);

    return Math.abs(oddNumbers - evenNumbers);
}

function getSum(total, num) {
    return total + num;
}





//#    SOLUTION 8

function warOfNumbers(arr) {
    const even = arr
        .filter((x) => x % 2 === 0)
        .reduce((total, cur) => total + cur);
    const odd = arr
        .filter((x) => x % 2 === 1)
        .reduce((total, cur) => total + cur);

    return Math.abs(even - odd);
}




//#    SOLUTION 9


function warOfNumbers(arr) {
    var evenNumberSum = arr.filter((value, index, array) => {
        return value % 2 === 0;
    }).reduce((a, b) => a + b)
    var oddNumberSum = arr.filter((value, index, array) => {
        return value % 2 !== 0;
    }).reduce((a, b) => a + b)
    if (evenNumberSum >= oddNumberSum) {
        return evenNumberSum - oddNumberSum
    } else {
        return oddNumberSum - evenNumberSum
    }
}