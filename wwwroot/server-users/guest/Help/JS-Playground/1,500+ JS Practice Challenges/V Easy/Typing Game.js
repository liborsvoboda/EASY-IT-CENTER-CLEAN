/*


Typing Game
You're in the midst of creating a typing game.

Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

Inputs:
User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

Output: [1, 1, -1, -1, 1]
Examples
correctStream(
  ["it", "is", "find"],
  ["it", "is", "fine"]
) ➞ [1, 1, -1]

correctStream(
  ["april", "showrs", "bring", "may", "flowers"],
  ["april", "showers", "bring", "may", "flowers"]
) ➞ [1, -1, 1, 1, 1]
Notes
The input array lengths will always be the same.


*/






/*  Solution 1   */

const correctStream = (answers, solutions) => answers.map((answer, i) => (answer === solutions[i] ? 1 : -1));

correctStream = (u, c) => u.map(x => x == c[c.indexOf(x)] ? 1 : -1)

const correctStream = (user, correct) => user.map((cv, i) => cv === correct[i] ? 1 : -1)





/*  Solution 2   */

function correctStream(user, correct) {
    return user.map(u => correct.indexOf(u) > -1 ? 1 : -1);
}




function correctStream(user, correct) {
    return correct.map((w, i) => user[i] === w ? 1 : -1);
}







/*  Solution 3   */


function correctStream(user, correct) {
    let ansArr = [];
    for (let i = 0; i < correct.length; i++) {
        if (user[i] == correct[i]) {
            ansArr.push(1)
        }
        if (user[i] !== correct[i]) {
            ansArr.push(-1)
        }
    }
    return ansArr
}



const correctStream = (user, correct) => {
    const correctSeries = correct.join('');
    const isCorrect = user.map(word => correctSeries.includes(word) ? 1 : -1);
    return isCorrect;
}


function correctStream(user, correct) {
    let result = [];
    for (i = 0; i < user.length; i++) {
        result.push(user[i] === correct[i] ? 1 : -1)
    }
    return result;
}



function correctStream(user, correct) {
    let result = [];
    for (let i = 0; i < user.length; i++) {
        if (user[i] === correct[i]) {
            result.push(1);
        } else {
            result.push(-1);
        }
    }
    return result;
}



function correctStream(user, correct) {
    let arr = [];
    user.map(a => (
        correct.indexOf(a) >= 0 ? arr.push(1) : arr.push(-1)
    ));
    return arr;
}