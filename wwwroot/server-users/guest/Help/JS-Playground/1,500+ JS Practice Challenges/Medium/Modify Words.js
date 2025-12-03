/*

Modify Words

Create a function that takes an array of any length. Modify each element (capitalize, reverse, hyphenate).

Examples
editWords(["new york city"]) ➞ ["YTIC KR-OY WEN"]

editWords(["null", "undefined"]) ➞ ["LL-UN", "DENIF-EDNU"]

editWords(["hello", "", "world"]) ➞ ["OLL-EH", "-", "DLR-OW"]

editWords([""]) ➞ ["-"]

Notes
Input array values can be any type.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function editWords(arr) {
    const withSlash = arr.map(x => x.slice(0, x.length / 2) + "-" + x.slice(x.length / 2))
    return withSlash.map(y => `${y}`.split("").reverse().join("").toUpperCase())
}

//#  SOLUTION 2  

function editWords(arr) {
    return arr.map(word => {
        const w = word.toUpperCase().split("");
        w.splice(Math.floor(word.length) / 2, 0, "-");
        return w.reverse().join("")
    });
}



//#  SOLUTION 3


function editWords(arr) {
    return arr.map(item => {
        item = item.toUpperCase().split('').reverse().join('');
        item = item.length % 2 == 1 ? item.slice(0, item.length / 2 + 1) + '-' + item.slice(item.length / 2 + 1) :
            item.slice(0, item.length / 2) + '-' + item.slice(item.length / 2);
        return item;
    })
}


//#  SOLUTION 4


const editWords = arr => (
    arr.map(e => [...e].reverse().join('').replace(
        RegExp(`.{${Math.ceil(e.length / 2)}}`), m => m + '-'
    ).toUpperCase())
);



//#  SOLUTION 5

function editWords(arr) {
    function rev(str) {
        let array = str.split("");
        return array.reverse().map((item, i) => i === Math.ceil(array.length / 2) ?
            `-${item.toUpperCase()}` : item.toUpperCase()).join("");
    }
    return arr.map(item => rev(item)).map(item => item === "" ? "-" : item);
}



//#  SOLUTION 6

const editWords = a => a.map(s => [...s.slice(0, s.length / 2), '-', ...s.slice(s.length / 2)].reverse().join('').toUpperCase());

const editWords = (arr) => arr.map(e => !e ? '-' : [...e.toUpperCase()].reverse().map((a, i) => i == Math.round(e.length / 2) ? '-' + a : a).join(''))



const editWords = arr => arr.map(el => {
    let upperCased = el.toUpperCase();
    let hyphenated = upperCased.substring(0, el.length / 2) + "-" + upperCased.substring(el.length / 2);
    return hyphenated.split("").reverse().join("");
});