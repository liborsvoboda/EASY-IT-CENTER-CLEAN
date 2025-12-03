/*  
Which Generation Are You?
Try finding your ancestors and offspring with code.

Create a function that takes a number and "m" (for male) or "f" (for female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".
Examples
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"
Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter
Notes
Check the Resources tab for helpful hints.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


/*  

Solution 1

*/

function generation(x, y) {
    let f = { "-3": "great grandmother", "-2": "grandmother", "-1": "mother", "0": "me!", "1": "daughter", "2": "granddaughter", "3": "great granddaughter" }
    let m = { "-3": "great grandfather", "-2": "grandfather", "-1": "father", "0": "me!", "1": "son", "2": "grandson", "3": "great grandson" }
    if (y == 'f') return f[x]
    return m[x]
}

/*  

Solution 2

*/

function generation(x, y) {
    const elo = {
        '-3': { m: "great grandfather", f: "great grandmother" },
        "-2": { m: "grandfather", f: "grandmother" },
        "-1": { m: "father", f: "mother" },
        0: { m: "me!", f: "me!" },
        1: { m: "son", f: "daughter" },
        2: { m: "grandson", f: "granddaughter" },
        3: { m: "great grandson", f: "great granddaughter" },
    };
    return elo[x][y]
}


/*  

Solution 3

*/

function generation(x, y) {
    return generations[x + ''][y]
}
const generations = {
    '-3': {
        m: 'great grandfather',
        f: 'great grandmother',
    },
    '-2': {
        m: 'grandfather',
        f: 'grandmother',
    },
    '-1': {
        m: 'father',
        f: 'mother',
    },
    '0': {
        m: 'me!',
        f: 'me!',
    },
    '1': {
        m: 'son',
        f: 'daughter',
    },
    '2': {
        m: 'grandson',
        f: 'granddaughter',
    },
    '3': {
        m: 'great grandson',
        f: 'great granddaughter',
    }
}




/*  

Solution 5

*/

function generation(x, y) {
    let f = ['great grandmother', 'grandmother', 'mother', 'me!', 'daughter', 'granddaughter', 'great granddaughter'];
    let m = ['great grandfather', 'grandfather', 'father', 'me!', 'son', 'grandson', 'great grandson'];
    return y === 'm' ? m[3 + x] : f[3 + x];
}

/*  

Solution 6

*/

function generation(x, y) {
    let end = "";
    let prefix = ""
    if (x === 0) {
        return "me!";
    }

    if (x < 0 && y === "m") {
        end = "father";
    } else if (x < 0 && y === "f") {
        end = "mother";
    } else if (x > 0 && y === "m") {
        end = "son";
    } else if (x > 0 && y === "f") {
        end = "daughter";
    }

    if (x % 3 === 0) {
        prefix = "great grand";
    } else if (x % 2 === 0) {
        prefix = "grand";
    }

    return `${prefix}${end}`;
}


/*  

Solution 6

*/



const generations = new Map();
generations.set(-3, { m: "great grandfather", f: "great grandmother" });
generations.set(-2, { m: "grandfather", f: "grandmother" });
generations.set(-1, { m: "father", f: "mother" });
generations.set(0, { m: "me!", f: "me!" });
generations.set(1, { m: "son", f: "daughter" });
generations.set(2, { m: "grandson", f: "granddaughter" });
generations.set(3, { m: "great grandson", f: "great granddaughter" });

const generation = (x, y) => generations.get(x)[y];