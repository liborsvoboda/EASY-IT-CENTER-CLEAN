/*  

Smiley Faces :)
You will be given a string of characters containing only the following characters: ():

Create a function returns a number based on the number of sad and smiley faces there is.

The happy faces :) and (: are worth 1.
The sad faces :( and ): are worth -1.
Working Example
happinessNumber(':):(') ➞ -1
# The first 2 characters are :)        +1      Total: 1
# The next 2 are ):                    -1      Total: 0
# The last 2 are :(                    -1       Total: -1        

Examples
happinessNumber(':):(') ➞ -1
happinessNumber('(:)') ➞ 2
happinessNumber('::::') ➞ 0

Notes
All test cases will be valid.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#    SOLUTION 1

function happinessNumber(s) {
    let smile_x = (s.match(/[(]:/g) || []).length,
        smile_y = (s.match(/:[)]/g) || []).length,
        sad_x = (s.match(/:[(]/g) || []).length,
        sad_y = (s.match(/[)]:/g) || []).length;

    return (smile_x + smile_y) - (sad_x + sad_y)
}


//#    SOLUTION 2

const happinessNumber = s => {
    let [h, f] = [
        [/:\)/, /\(:/],
        [/:\(/, /\):/]
    ]
    return h.reduce((a, b) => a + (s.match(RegExp(b, 'g')) || []).length, 0) -
        f.reduce((a, b) => a + (s.match(RegExp(b, 'g')) || []).length, 0)
}


//#    SOLUTION 3


function happinessNumber(s) {
    let k = 0;
    for (let i = 0; i < s.length; i++) {
        if ((s[i] == ':' && s[i + 1] == ')') || s[i] == '(' && s[i + 1] == ':') {
            k++;
        } else if ((s[i] == ':' && s[i + 1] == '(') || (s[i] == ')' && s[i + 1] == ':')) {
            k--;
        }
    }
    return k;
}


//#    SOLUTION 4


const happinessNumber = (s, f = { ":)": 1, "(:": 1, ":(": -1, "):": -1 }) => [...s].slice(1).reduce((a, v, i) => a + (f[s[i] + v] || 0), 0);


//#    SOLUTION 5

function happinessNumber(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] + s[i + 1] === ":)" || s[i] + s[i + 1] === "(:") result++;
        if (s[i] + s[i + 1] === ":(" || s[i] + s[i + 1] === "):") result--;
    }
    return result;
}



//#    SOLUTION 6


function happinessNumber(s) {
    var arr = s.split('');
    var count = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] == ':' && arr[i + 1] == ')') {
            count++
        };
        if (arr[i] == '(' && arr[i + 1] == ':') {
            count++
        };
        if (arr[i] == ':' && arr[i + 1] == '(') {
            count--
        };
        if (arr[i] == ')' && arr[i + 1] == ':') {
            count--
        };
    }
    return count
}


//#    SOLUTION 7


const happinessNumber = s => {
    let n = 0;
    for (const [i, e] of[...s].entries()) {
        if (e !== ':') continue;
        const [prev, next] = [-1, 1].map(j => s[i + j]);
        if (prev === '(') n++;
        if (prev === ')') n--;
        if (next === ')') n++;
        if (next === '(') n--;
    }

    return n;
};



//#    SOLUTION 8


const grins = {
    ':)': 1,
    '(:': 1,
    ':(': -1,
    '):': -1,
}

const happinessNumber = (str) => {
    let total = 0;
    let grin;

    for (let i = 0; i < (str.length - 1); i++) {
        grin = str.substr(i, 2);
        total += grins[grin] || 0;
    }

    return total;
};