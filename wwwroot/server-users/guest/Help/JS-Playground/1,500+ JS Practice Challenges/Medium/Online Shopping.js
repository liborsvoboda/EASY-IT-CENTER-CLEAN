/*

Online Shopping

Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

Examples
freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false

freeShipping({ "Flatscreen TV": 399.99 }) ➞ true

freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true

Notes
Ignore tax or additional fees when calculating the total order cost.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const freeShipping = order => Object.values(order).reduce((a, b) => a + b) > 50



//#  SOLUTION 2  


function freeShipping(order) {
    return Object.keys(order).reduce((t, c) => t + order[c], 0) > 50
}



//#  SOLUTION 3


function freeShipping(order) {
    var total = 0;
    for (item in order) {
        total += order[item];
    }

    return total >= 50;
}


//#  SOLUTION 4


function freeShipping(order) {
    let mapData = []
    Object.keys(order).map(function(key) {
        mapData.push(order[key]);
    });

    return mapData.reduce((a, b) => a + b) >= 50;

}



//#  SOLUTION 5



const freeShipping = (order) => {
    let vals = Object.keys(order).map(function(key) { return order[key]; });
    return vals.reduce((acc, cv) => acc += cv, 0) > 50;
}