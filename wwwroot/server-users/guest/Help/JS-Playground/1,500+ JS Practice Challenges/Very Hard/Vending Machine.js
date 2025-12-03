/*  

Vending Machine

Your task is to create a function that simulates a vending machine.

Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.

The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

The return value is an object with 2 properties:

product: the product name that the user selected.
change: an array of coins (can be empty, must be sorted in descending order).
Examples
vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }

vendingMachine(products, 500, 0) ➞ "Enter a valid product number"

vendingMachine(products, 90, 1) ➞ "Not enough money for this product"


Notes
The products are fixed and you can find them in the Tests tab.
If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
If there's no change, return an empty array as the change.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function vendingMachine(products, money, productNumber) {
    let selected = products.find(e => e.number === productNumber);

    if (!selected) return 'Enter a valid product number';
    if (selected.price > money) return 'Not enough money for this product';

    return {
        product: selected.name,
        change: calculateChange(selected.price, money)
    }
}

function calculateChange(price, money) {
    let coins = [500, 200, 100, 50, 20, 10],
        owed = money - price,
        change = [];
    coins.forEach(e => {
        while (owed >= e) {
            change.push(e);
            owed -= e;
        }
    });

    return change;
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function vendingMachine(products, money, num) {
    let coins = [500, 200, 100, 50, 20, 10];
    let currentProduct;
    let cost;
    let c;
    let output = {
        product: "",
        change: []
    };
    if (num < 1 || num > 9) {
        return "Enter a valid product number";
    } else {
        output.product = products[num - 1].name;
        currentProduct = products[num - 1];
        cost = currentProduct.price;
    }
    if (money < cost) {
        return "Not enough money for this product";
    } else {
        c = money - cost;
    }
    if (c == 0) {
        return output;
    } else {
        while (c !== 0) {
            for (let i = 0; i < coins.length; i++) {
                while (c >= coins[i]) {
                    c -= coins[i];
                    output.change.push(coins[i]);
                }
            }
        }
        return output;
    }
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function vendingMachine(products, money, number) {
    products = [
        { number: 1, price: 100, name: 'Orange juice' },
        { number: 2, price: 200, name: 'Soda' },
        { number: 3, price: 150, name: 'Chocolate snack' },
        { number: 4, price: 250, name: 'Cookies' },
        { number: 5, price: 180, name: 'Gummy bears' },
        { number: 6, price: 500, name: 'Condoms' },
        { number: 7, price: 120, name: 'Crackers' },
        { number: 8, price: 220, name: 'Potato chips' },
        { number: 9, price: 80, name: 'Small snack' },
    ];
    let coins = [500, 200, 100, 50, 20, 10],
        result = [],
        obj = {};
    let num = products.map(x => x.number); //[1, 2, 3, 4, 5, 7, 8, 9]
    if (num.indexOf(number) == -1) {
        return "Enter a valid product number";
    } else {
        let change = money - products[num.indexOf(number)].price;
        if (change < 0) {
            return "Not enough money for this product";
        } else {
            obj.product = products[num.indexOf(number)].name;

            function factorial(change) {
                coins = coins.filter(x => x <= change); //[200,100,50,20,10]
                if (change) {
                    result.push(coins[0]);
                    return factorial(change - coins[0]);
                } else {
                    return 0;
                }
            }
            factorial(change);
            obj.change = result;
            return obj;
        }
    }
}