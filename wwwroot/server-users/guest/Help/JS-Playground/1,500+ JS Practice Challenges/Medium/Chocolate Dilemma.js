/*

Chocolate Dilemma

Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].

Write a function that returns true if the total area of chocolate is the same for each sister.

To illustrate:

testFairness([[4, 3], [2, 4], [1, 2]],
[[6, 2], [4, 2], [1, 1], [1, 1]])
➞ true

// Agatha's pieces: [4, 3], [2, 4], [1, 2]
// Bertha's pieces: [6, 2], [4, 2], [1, 1], [1, 1]

// Total area of Agatha's chocolate
// 4x3 + 2x4 + 1x2 = 12 + 8 + 2 = 22

// Total area of Bertha's chocolate is:
// 6x2 + 4x2 + 1x1 + 1x1 = 12 + 8 + 1 + 1 = 22

Examples
testFairness([[1, 2], [2, 1]], [[2, 2]]) ➞ true

testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]]) ➞ false

testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]]) ➞ true

testFairness([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]]) ➞ false

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function testFairness(agatha, bertha) {
    return agatha.reduce((a, c) => a += c[0] * c[1], 0) ==
        bertha.reduce((a, c) => a += c[0] * c[1], 0)
}






//#  SOLUTION 2  


function testFairness(agatha, bertha) {
    const f = (c) => c.reduce((acc, cur) => acc + cur[0] * cur[1], 0)
    return f(agatha) === f(bertha)
}





//#  SOLUTION 3



function testFairness(agatha, bertha) {
    agatha = agatha.map(arr => arr.reduce((a, v) => a * v))
    bertha = bertha.map(arr => arr.reduce((a, v) => a * v))
    return agatha.reduce((a, v) => a + v) === bertha.reduce((a, v) => a + v)
}





//#  SOLUTION 4


function testFairness(agatha, bertha) {
    var aCount = 0;
    var bCount = 0;
    for (var i = 0; i < agatha.length; i++) {
        var chocolateAmount = agatha[i][0] * agatha[i][1]
        aCount += chocolateAmount;
    }
    for (var i = 0; i < bertha.length; i++) {
        var chocolateAmount = bertha[i][0] * bertha[i][1]
        bCount += chocolateAmount;
    }

    return aCount === bCount
}






//#  SOLUTION 5



function testFairness(agatha, bertha) {
    return multiplySum(agatha) === multiplySum(bertha);
}

function multiplySum(arr) {
    var arrCount = 0;

    for (var i = 0; i < arr.length; i++) {
        arrCount += arr[i].reduce(function(c, p) { return c * p });
    }
    return arrCount;
}





//#  SOLUTION 6


function testFairness(agatha, bertha) {
    let first = agatha.map((arr) => {
        return arr.reduce((x, y) => x * y)
    }).reduce((x, y) => x + y);
    let second = bertha.map((arr) => {
        return arr.reduce((x, y) => x * y)
    }).reduce((x, y) => x + y);

    return (first === second) ? true : false;
}






//#  SOLUTION 7


function testFairness(agatha, bertha) {
    let ag = 0;
    agatha.forEach(num => {
        let i = num[0] * num[1];
        ag = ag + i
    });

    let be = 0;
    bertha.forEach(num => {
        let i = num[0] * num[1];
        be = be + i
    });

    return ag === be
}





//#  SOLUTION 8



function testFairness(agatha, bertha) {
    let agathaTotal = [...agatha].map(arr => arr.reduce((a, b) => a * b)).reduce((a, b) => a + b);
    let berthaTotal = [...bertha].map(arr => arr.reduce((a, b) => a * b)).reduce((a, b) => a + b);
    return agathaTotal === berthaTotal;

}