/*

Spicy Food

The facts are:

You've just finished dinner.
You love spicy food but your friend hates it.
Given your friend's unfortunate taste preferences, you decide to split the bill only for non-spicy items. You will pay in full for the spicy dishes.

Given two ordered arrays, one classifying the dishes as spicy vs. non-spicy and the other listing their prices, write a function that outputs an array where the first element is how much you pay and the second element is how much your friend pays.

billSplit(["S", "N", "S", "S"], [13, 18, 15, 4]) ➞ [41, 9]

// Since:
// You pay: [13, 9, 15, 4] = 41
// Friend pays: [0, 9, 0, 0] = 9
Examples
billSplit(["N", "S", "N"], [10, 10, 20]) ➞ [25, 15]
// You pay for half of both "N" dishes (5 + 10) and entirely pay for the "S" dish (10).

billSplit(["N", "N"], [10, 10]) ➞ [10, 10]

billSplit(["S", "N"], [41, 10]) ➞ [46, 5]


Notes
The dishes are in the same order for both input arrays.
Remember to output an array in this order: [your payment, friend's payment]
The array will contain at least one non-spicy dish N (you're not going to let your poor friend go hungry, are you?).
Express both payments as integers.

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


function billSplit(spicy, cost) {
    let you = spicy.map((x, i) => x === 'S' ? cost[i] : cost[i] / 2).reduce((a, b) => a + b);
    let friend = spicy.map((x, i) => x === 'S' ? 0 : cost[i] / 2).reduce((a, b) => a + b);
    return [you, friend];
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const billSplit = (spicy, costs) => {
    return costs.reduce(
        ([me, him], cost, i) => {
            const isSpicy = spicy[i] === 'S';
            return isSpicy ? [me + cost, him] : [me + cost / 2, him + cost / 2];
        }, [0, 0]
    );
};



//#############################################################
//#  SOLUTION 3
//#############################################################


const billSplit = (s, c) => [s.reduce((t, v, i) => t + (v == "S" ? c[i] : c[i] / 2), 0),
    s.reduce((t, v, i) => t + (v == "S" ? 0 : c[i] / 2), 0)
]



//#############################################################
//#  SOLUTION 4
//#############################################################



function billSplit(spicy, cost) {
    let me = spicy.map((el, i, arr) => {
        if (el === "S") {
            return cost[i]
        } else { return cost[i] / 2 }
    })

    let friend = spicy.map((el, i, arr) => {
        if (el === "N") {
            return cost[i] / 2
        } else { return 0 }
    })
    let result = [me.reduce((a, b) => { return a + b }), friend.reduce((a, b) => { return a + b })];
    return result;
}



//#############################################################
//#  SOLUTION 5
//#############################################################



function billSplit(spicy, cost) {
    const myBill = spicy
        .map((d, i) => (d === "N" ? cost[i] / 2 : cost[i]))
        .reduce((a, b) => a + b)
    const hisBill = spicy
        .map((d, i) => (d === "N" ? cost[i] / 2 : 0))
        .reduce((a, b) => a + b)
    return [myBill, hisBill]
}





//#############################################################
//#  SOLUTION 6
//#############################################################


function billSplit(spicy, cost) {
    let r = [0, 0];
    for (let i = 0; i < cost.length; i++) {
        r[0] += spicy[i] == 'S' ? cost[i] : cost[i] / 2;
        r[1] += spicy[i] == 'S' ? 0 : cost[i] / 2;
    }
    return r;
}





//#############################################################
//#  SOLUTION 7
//#############################################################


function billSplit(spicy, cost) {
    return [spicy.map((x, i) => x == 'N' ? cost[i] / 2 : cost[i]).reduce((a, b) => a + b),
        spicy.map((x, i) => x == 'N' ? cost[i] / 2 : 0).reduce((a, b) => a + b)
    ]
}






//#############################################################
//#  SOLUTION 8
//#############################################################


function billSplit(spicy, cost) {
    let frCst = spicy.map((el, i) => (el === 'N') ? cost[i] / 2 : 0).reduce((t, c) => t + c)
    let myCst = spicy.map((el, i) => (el === 'N') ? cost[i] / 2 : cost[i]).reduce((t, c) => t + c)
    return [myCst, frCst];
}





//#############################################################
//#  SOLUTION 9
//#############################################################


const billSplit = (spicy, cost) => [cost.map((a, i) => spicy[i] == "N" ? a / 2 : a).reduce((acc, next) => acc + next),
    spicy.map((a, i) => a == "S" ? 0 : cost[i] / 2).reduce((acc, next) => acc + next)
]