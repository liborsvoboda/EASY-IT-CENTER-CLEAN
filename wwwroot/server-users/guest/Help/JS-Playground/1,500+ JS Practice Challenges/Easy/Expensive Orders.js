/*  

Expensive Orders

Write a function that returns all orders that cost strictly more than k.

Examples
expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
➞ { "a": 3000, "c": 1050 }

expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
➞ { "Gucci Fur": 24600 }

expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)
➞ {}


*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




//#    SOLUTION 1


function expensiveOrders(orders, cost) {
    Object.keys(orders).forEach(i => {
        if (orders[i] < cost) delete orders[i]
    });

    return orders;
}





//#    SOLUTION 2


const expensiveOrders = (o, c) => Object.entries(o).reduce((a, [k, v]) => v > c ? (a[k] = v, a) : a, {});

const expensive_orders = (obj, cost) => Object.fromEntries(Object.entries(obj).filter(([, price]) => price > cost));


expensiveOrders = (o, c) => Object.fromEntries(Object.entries(o).filter(e => e[1] > c))


//#    SOLUTION 3


function expensiveOrders(oders, cost) {
    let obj = Object.entries(oders)
    obj = obj.filter(el => el[1] > cost)
    let ans = {}
    obj.forEach(element => {
        ans[element[0]] = element[1]
    });
    return ans
}






//#    SOLUTION 4


function expensiveOrders(oders, cost) {
    let ob = {}
    let name = Object.keys(oders)
    name.map(a => oders[a] > cost ? ob[a] = oders[a] : "_")
    return ob
}