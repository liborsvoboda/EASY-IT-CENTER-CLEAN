/*

Lowercase and Uppercase Map
Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

Examples
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }

mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }

mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
Notes
All of the letters in the input list will always be lowercase.

*/


/*  Solution 1   */

function mapping(letters) {
    return letters.reduce((a, c) => (a[c] = c.toUpperCase(), a), {});
}

/*  Solution 2   */

function mapping(l) {
    let c = {}
    l.map(e => c[e] = e.toUpperCase())
    return c
}

/*  Solution 3   */

function mapping(letters) {
    a = {}
    for (c of letters) {
        a[c] = c.toUpperCase();
    }
    return a;
}


/*  Solution 4   */

function mapping(letters) {
    var output = {}
    letters.forEach(letter => output[letter] = letter.toUpperCase(), {})
    return output
}


/*  Solution 5   */

function mapping(letters) {
    var x = letters.map(m => [m, m.toUpperCase()]);
    return Object.fromEntries(x);
}


/*  Solution 6   */

function mapping(letters) {
    let u = letters.map(el => el.toUpperCase())
    let f = [];
    for (let i = 0; i < letters.length; i++) {
        f.push([letters[i], u[i]])
    }
    return Object.fromEntries(f)

}
mapping(["a", "b", "c"])



/*  Solution 7   */

function mapping(letters) {

    result = {}

    for (i = 0; i < letters.length; i++) {

        result[letters[i]] = letters[i].toUpperCase()

    }


    console.log(result)
    return result
}