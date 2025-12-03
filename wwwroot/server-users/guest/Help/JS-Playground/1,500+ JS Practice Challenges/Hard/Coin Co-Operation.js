/*

Coin Co-Operation
Let's say that there exists a machine that gives out free coins, but with a twist!

Separating two people is a wall, and this machine is placed in such a way that both people are able to access it. Spending a coin in this machine will give the person on the other side 3 coins and vice versa.

If both people continually spend coins for each other (SHARING), then they'll both gain a net profit of 2 coins per turn. However, there is always the possibility for someone to act selfishly (STEALING): they spend no coins, yet they still receive the generous 3 coin gift from the other person!

Here's an example of Red taking advantage of Green! Red chose to betray

The Challenge
Assuming that both people start with 3 coins each, create a function that calculates both people's final number of coins. You will be given two arrays of strings, with each string being the words "share" or "steal".

Examples
getCoinBalances(["share"], ["share"]) ➞ [5, 5]
// Both people spend one coin, and receive 3 coins each.

getCoinBalances(["steal"], ["share"]) ➞ [6, 2]
// Person 1 gains 3 coins, while person 2 loses a coin.

getCoinBalances(["steal"], ["steal"]) ➞ [3, 3]
// Neither person spends any coins and so no one gets rewarded.

getCoinBalances(["share", "share", "share"], ["steal", "share", "steal"]) ➞ [3, 11]


Notes
No tests will include a negative number of coins.
All words will be given in lowercase.
This challenge is adapted from a famous game theory example called the Prisoner's Dilemma, which you can learn more about in the Resources tab.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const getCoinBalances = (r, b, [x, y] = [3, 3]) => {
    for (let i = 0; i < r.length; i++) {
        [x, y] = r[i] == 'share' ? [x + 2, y] : [x + 3, y - 3];
        [x, y] = b[i] == 'share' ? [x, y + 2] : [x - 3, y + 3]
    }
    return [x, y]
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function getCoinBalances(arr1, arr2) {
    const c = a => a.filter(x => x === "share").length;
    return [c(arr2) * 3 - c(arr1) + 3, c(arr1) * 3 - c(arr2) + 3];
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function getCoinBalances(arr1, arr2) {
    let pocket = [3, 3]
    arr1.forEach((round, i) => {
        let actions = [arr1[i], arr2[i]]
        actions = actions.map(action => action === 'share' ? 0 : 1)
        const resultMap = [
            [2, -1],
            [3, 0]
        ]
        const gain = [
            resultMap[actions[0]][actions[1]],
            resultMap[actions[1]][actions[0]]
        ]
        pocket = pocket.map((pCoins, i) => pCoins + gain[i])
    })
    return pocket
}