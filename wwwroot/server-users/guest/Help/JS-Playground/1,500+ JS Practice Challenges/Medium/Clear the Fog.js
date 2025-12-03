/*
Clear the Fog

Create a function which returns the word in the string, but with all the fog letters removed. However, if the string is clear from fog, return "It's a clear day!".

Examples
clearFog("sky") ➞ "It's a clear day!"

clearFog("fogfogFFfoooofftogffreogffesGgfOogfog") ➞ "trees"

clearFog("fogFogFogffoObirdsanffodthebffoeffoesGGGfOgFog") ➞ "birdsandthebees"

Notes
Hidden words won't include the letters f, o or g.
Hidden words are always in lowercase.
*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const clearFog = str =>
    /[fog]/gi.test(str) ? str.match(/[^fog]/gi).join `` :
    "It's a clear day!";

//#  SOLUTION 2  


function clearFog(str) {
    return (/[fog]/gi).test(str) ? str.match(/[^fog]/gi).join("") : "It's a clear day!";
}


//#  SOLUTION 3

function clearFog(str) {
    const regex = /f|o|g?/gi;
    if (str.match(regex).filter(e => e !== '').length === 0) return "It's a clear day!";
    return str.replace(regex, '');
}



//#  SOLUTION 4


function clearFog(str) {
    str = str.toLowerCase();
    let newArr = str.split('');
    const valuesToRemove = ['f', 'o', 'g'];
    const filteredItems = newArr.filter(item => !valuesToRemove.includes(item));
    let finalString = filteredItems.join('');
    return str !== finalString ? finalString : "It's a clear day!";
}



//#  SOLUTION 5

const clearFog = str =>
    /[fog]/.test(str) ? str.replace(/[fog]/gi, '') : "It's a clear day!";



//#  SOLUTION 6


function clearFog(str) {
    const cleared = str.replace(/[fog]/gi, '');
    return cleared === str ? "It's a clear day!" : cleared;
}


//#  SOLUTION 7

function clearFog(str) {
    return str.replace(/f|o|g/ig, '') === str ? "It's a clear day!" : str.replace(/f|o|g/ig, '');
}