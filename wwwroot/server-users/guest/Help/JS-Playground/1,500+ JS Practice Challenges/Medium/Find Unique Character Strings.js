/*


Find Unique Character Strings
Create a function that returns only strings with unique characters.

Examples
filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []

filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]
Notes


*/






/*  Solution 1   */


function filterUnique(arr) {
    return arr.filter(x => x.length === new Set(x.split('')).size)
}




/*  Solution 2   */

const filterUnique = arr => arr.filter(x => new Set(x).size == x.length);

const filterUnique = arr => arr.filter(x => new Set(x).size === x.length);

const filterUnique = (arr) => arr.filter(x => new Set(x).size === x.length);

const filterUnique = str => str.filter(ch => ch.length === (new Set(ch)).size)





/*  Solution 3   */

function filterUnique(arr) {
    return arr.filter(value => value === value.split("").reduce((acc, character) => (acc.includes(character)) ? acc : acc.concat([character])));
}




/*  Solution 4   */


function filterUnique(arr) {
    return arr.filter((str) => {
        return str.length === new Set(str).size
    })
}






function filterUnique(arr) {
    return arr.filter(x => new Set(x).size == x.length)
}



function filterUnique(arr) {
    return arr.filter(
        str => new Set(str.split("")).size === str.length
    );
}



function filterUnique(arr) {
    return arr.filter(str => str.length === new Set(str).size)
}



function filterUnique(arr) {
    var newArray = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++, count++) {


        if (new Set(arr[i].split('')).size == arr[i].split('').length) { newArray.push(arr[i]) }
    }
    if (count == arr.length) { return newArray; }
}