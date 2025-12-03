/*  

Burglary Series (10): Calculate Difference

The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

Examples
calculateDifference({ "baseball bat": 20 }, 5) ➞ 15

calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11

calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1

Notes
The object will always contain items (no empty objects).
The sum of the items will always be greater than the limit.
*/

//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#    SOLUTION 1


function calculateDifference(obj, limit) {
    const sum = Object.values(obj).reduce((acc, value) => acc + value);
    return sum - limit;
}


//#    SOLUTION 2

function calculateDifference(obj, limit) {
    return Object.keys(obj).reduce((acc, cur) => acc + obj[cur], 0) - limit
}



//#    SOLUTION 3


function calculateDifference(obj, limit) {
    var total = 0;
    var items = Object.values(obj);
    for (var i = 0; i < items.length; i++) {
        total = total + items[i];
        console.log(items[i]);
    }
    var diff = total - limit;
    return diff;
}


//#    SOLUTION 4


const calculateDifference = (o, l) => Object.values(o).reduce((a, b) => a + b) - l;


const calculateDifference = (obj, limit) => Object.values(obj).reduce((a, v) => a + v) - limit;



//#    SOLUTION 5



function calculateDifference(obj, limit) {
    let sum = 0;

    for (const [key, value] of Object.entries(obj)) {
        sum += value;
    }

    return sum - limit;
}