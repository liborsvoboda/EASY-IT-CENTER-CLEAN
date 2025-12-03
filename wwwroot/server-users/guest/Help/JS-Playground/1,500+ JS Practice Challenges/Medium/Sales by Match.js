/*

Sales by Match

Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. For example, there are 7 socks with colors [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

Create a function that returns an integer representing the number of matching pairs of socks that are available.

Examples
sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]) ➞ 3

sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]) ➞ 4

sockMerchant([]) ➞ 0

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


const sockMerchant = arr => [...new Set(arr)].reduce((s, x) => s + (arr.filter(y => x === y).length >> 1), 0);



//#############################################################
//#  SOLUTION 2  
//#############################################################



const sockMerchant = arr => {
    return Object.values(
        arr.reduce((a, c) => {
            if (!(c in a)) {
                a[c] = 0.5
            } else {
                a[c] += 0.5
            }
            return a
        }, {})
    ).reduce((a, c) => (a += Math.floor(c)), 0)
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const sockMerchant = arr => [...new Set(arr)].reduce((a, b) => a + ~~(arr.filter(e => e === b).length / 2), 0);



//#############################################################
//#  SOLUTION 4
//#############################################################


const sockMerchant = arr => {
    return [...new Set(arr)]
        .map(a => Math.floor(arr.filter(b => a === b).length / 2))
        .reduce((a, c) => a + c);
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function sockMerchant(arr) {
    let obj = {}
    arr.forEach(item => obj[item] = obj[item] ? obj[item] + 1 : 1)
    return Object.values(obj).reduce((a, c) => a += Math.floor(c / 2), 0)
}