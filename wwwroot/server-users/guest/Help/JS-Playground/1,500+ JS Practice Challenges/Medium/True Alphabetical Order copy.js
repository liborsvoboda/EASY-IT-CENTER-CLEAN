/*

True Alphabetical Order

Create a function which takes every letter in every word, and puts it in alphabetical order. Note how the original word lengths must stay the same.

Examples
trueAlphabetic("hello world") ➞ "dehll loorw"

trueAlphabetic("edabit is awesome") ➞ "aabdee ei imosstw"

trueAlphabetic("have a nice day") ➞ "aaac d eehi nvy"

Notes
All sentences will be in lowercase.
No punctuation or numbers will be included in the Tests.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function* iter(txt) {
    for (const i of[...txt.replace(/ /g, '')].sort())
        yield i
}

function trueAlphabetic(str) {
    const it = iter(str)
    return [...str]
        .map(i => i !== ' ' ? it.next().value : ' ')
        .join('')
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const trueAlphabetic = (str) => {
    let arr = [...str].filter(e => (/\S/ig).test(e)).sort((a, b) => a.localeCompare(b));
    return [...str].map((e, i) => e != ' ' ? arr.shift() : e).join('');
}