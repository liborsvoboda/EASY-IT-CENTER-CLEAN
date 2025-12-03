/*

Eat Chocolates

Arun recently started eating chocolates. The shopkeeper tells Arun that for every three chocolates Arun eats, he will give him one chocolate in exchange for three chocolate wrappers. Now, Arun is confused about how many chocolates he can eat.

Given the total money money Arun has and the cost of one chocolate cost, help him figure out how many chocolates he can eat.

Examples
countChocolates("4$", "1$") ➞ 5
// Arun eats three chocolates and purchases one more
// chocolate from Bitu in those three wrappers. Now he
// eats those two chocolates and hence 3 + 2 = 5.

countChocolates("55   $", "5$") ➞ 16

countChocolates("I have 68$", "2$")  ➞ 50

countChocolates("I got -68$ from my mom ", "2$")  ➞ "Invalid Input"
// Because -68 is a negative number and money can't be negative.


Notes
Figure out the invalid inputs and take care of them.

*/




//#############################################################
//#    SOLUTION 1
//#############################################################



function countChocolates(money, cost) {
    const available = parseFloat(money.match(/-?\d+/)[0]);
    const price = parseFloat(cost.match(/-?\d+/)[0]);
    if (!available || !price || available <= 0 || price <= 0) {
        return 'Invalid Input';
    }
    let bonusChocs = 0;
    let restChocs = Math.floor(available / price);
    let numChocs = 0;
    while (restChocs >= 3) {
        numChocs += Math.floor(restChocs / 3) * 3;
        bonusChocs = Math.floor(restChocs / 3);
        restChocs = (restChocs % 3) + bonusChocs;
    }
    return numChocs + restChocs;
}




//#############################################################
//#    SOLUTION 1
//#############################################################



function countChocolates(money, cost) {
    const [parsedMoney, parsedCost] = [money, cost].map(str => Number.parseInt(
        (str.match(/-?\d+/) || [null])[0]
    ));

    const inner = (moneyLeft, chocolateWrappers) => {
        const newChocolatesWithMoney = Math.floor(
            moneyLeft / parsedCost
        );
        const newChocolatesWithWrappers = Math.floor(chocolateWrappers / 3);
        const newChocolates = newChocolatesWithMoney + newChocolatesWithWrappers;

        if (
            moneyLeft - newChocolatesWithMoney * parsedCost >= parsedCost ||
            newChocolates + (chocolateWrappers % 3) >= 3
        ) {
            return (
                newChocolates +
                inner(
                    moneyLeft - parsedCost * newChocolatesWithMoney,
                    newChocolates + (chocolateWrappers % 3)
                )
            );
        } else {
            return newChocolates;
        }
    };

    if (
        typeof parsedMoney !== "number" ||
        typeof parsedCost !== "number" ||
        parsedMoney <= 0 ||
        parsedCost <= 0
    ) {
        return "Invalid Input";
    } else {
        return inner(parsedMoney, 0);
    }
}




//#############################################################
//#    SOLUTION 1
//#############################################################



function countChocolates(money, cost) {
    var mon = money.replace(/[^\d.-]/g, '');
    var price = cost.replace(/[^\d.-]/g, '');
    var rem, res;
    res = mon / price;
    rem = res / 3;
    res = res + rem;
    while (rem > 3) {
        rem = rem / 3;
        res = res + rem;
    }
    return mon <= 0 || price <= 0 ? "Invalid Input" : Math.round(res);
}




//#############################################################
//#    SOLUTION 1
//#############################################################


function countChocolates(money, cost) {
    for (let i = 0; i < money.length; i++) {
        if (money[i] !== ' ' && Number.isInteger(+money[i])) {
            let tempMoney = '';
            if (money[i - 1] === '-') tempMoney += '-';
            tempMoney += money[i];
            while (money[i + 1] !== ' ' && Number.isInteger(+money[i + 1])) {
                tempMoney += money[i + 1];
                i++;
            }
            money = +tempMoney;
            break;
        }
    }
    for (let i = 0; i < cost.length; i++) {
        if (cost[i] !== ' ' && Number.isInteger(+cost[i])) {
            let tempCost = '';
            if (cost[i - 1] === '-') tempCost += '-';
            tempCost += cost[i];
            while (cost[i + 1] !== ' ' && Number.isInteger(+cost[i + 1])) {
                tempCost += cost[i + 1];
                i++;
            }
            cost = +tempCost;
            break;
        }
    }
    if (money <= 0 || cost <= 0) return 'Invalid Input';
    let count = Math.floor(money / cost);
    let wrappers = count;
    while (wrappers >= 3) {
        count += Math.floor(wrappers / 3);
        wrappers = Math.floor(wrappers / 3) + wrappers % 3;
    }
    return count;
}




//#############################################################
//#    SOLUTION 1
//#############################################################



const countChocolates = (...arr) => {
    let [money, cost] = arr.map(s => Number(s.replace(/[^0-9\-]/g, '')));

    if ([money, cost].some(n => n < 1)) return 'Invalid Input';

    let eaten = 0,
        wrappers = 0;
    while (money >= cost) {
        money -= cost;
        eaten++;
        if (++wrappers > 2) {
            eaten++;
            wrappers = 1;
        }
    }

    return eaten;
};





//#############################################################
//#    SOLUTION 1
//#############################################################


function countChocolates(money, cost) {
    money1 = money.split('').filter((el) => !isNaN(el)).join("") // 
    cost1 = cost.split('').filter((el) => !isNaN(el)).join("") //
    let wrapper = Math.floor(money1[0] / cost1[0]);
    let count = wrapper;

    if (cost1 <= 0 || cost1 <= 0 || cost.includes("-") || money.includes("-")) {
        return "Invalid Input"
    }

    while (count >= 3) {
        wrapper += Math.floor(count / 3);
        count = Math.floor(count / 3) + count % 3;
        return wrapper;
    }
    return money1 / cost1 + Math.floor((money1 / cost1 - 1) / 2);
}
console.log(countChocolates("4$", "1$"))
console.log(countChocolates("55   $", "5$"))
console.log(countChocolates("I got -68$ from my mom ", "2$"))




//#############################################################
//#    SOLUTION 1
//#############################################################


function countChocolates(money, cost) {
    regex = /\d+|\-\d+/
    amount = money.match(regex)[0]
    cost = cost.match(regex)[0]
    if (amount.includes('-') || cost.includes('-') || amount === "0") return "Invalid Input"
    return Math.floor((3 * (Number(amount) / Number(cost)) - 1) / 2)
}