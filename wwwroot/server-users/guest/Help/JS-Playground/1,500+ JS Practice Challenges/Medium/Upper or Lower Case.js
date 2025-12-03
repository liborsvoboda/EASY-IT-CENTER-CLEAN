/*

Upper or Lower Case

Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.

Examples
stepsToConvert("abC") ➞ 1
// "abC" converted to "abc" in 1 step

stepsToConvert("abCBA") ➞ 2
// "abCBA" converted to "ABCBA" in 2 steps

stepsToConvert("aba") ➞ 0

stepsToConvert("abaCCC") ➞ 3

Notes
Return 0 if empty string.
Return 0 if the string is already entirely in one case.
Only alphabetic characters.
Input has no spaces.


*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function stepsToConvert(string) {
    const upper = [...string].filter(char => char === char.toUpperCase())
    const lower = [...string].filter(char => char === char.toLowerCase())
    return Math.min(upper.length, lower.length)
}

//#  SOLUTION 2  


function stepsToConvert(str) {
    return Math.min((str.match(/[a-z]/g) || []).length, (str.match(/[A-Z]/g) || []).length)
}


//#  SOLUTION 3

function stepsToConvert(str) {
    const lower = str.replace(/[^a-z]/g, "").length;
    const upper = str.replace(/[^A-Z]/g, "").length;
    return Math.min(lower, upper);
}


//#  SOLUTION 4


function stepsToConvert(str) {
    l = 0;
    u = 0;
    [...str].map(x => x == x.toLowerCase() ? l++ : u++)
    return l < u ? l : u
}



//#  SOLUTION 5


const stepsToConvert = s => !s ? 0 : Math.min(s.replace(/[^A-Z]/g, "").length, s.replace(/[^a-z]/g, "").length)


//#  SOLUTION 6


function stepsToConvert(string) {
    var contM = 0;
    var contm = 0;
    var vector = string.split("");
    for (i = 0; i <= vector.length; i++) {

        if (string.charCodeAt(i) <= 90 && string.charCodeAt(i) >= 65)
            contM++;
        if (string.charCodeAt(i) <= 122 && string.charCodeAt(i) >= 97)
            contm++;
    }


    if (contM > contm)
        return contm
    else if (contM < contm)
        return contM
    else if (contM == 0 || contm == 0)
        return 0;
    else if (contM == contm)
        return contM;

}


//#  SOLUTION 7


function stepsToConvert(str) {
    return Math.min(str.split("").filter(x => x == x.toUpperCase()).length, str.split("").filter(x => x == x.toLowerCase()).length)
}



//#  SOLUTION 8


function stepsToConvert(str) {
    if (str.toUpperCase() === str || str.toLowerCase() === str || str.length === 0) {
        return 0
    }

    let lowcase = 0
    let upcase = 0
    str.split('').forEach(c => c.toLowerCase() !== c ? lowcase++ : c.toUpperCase() !== c ? upcase++ : null)
    return lowcase > upcase ? upcase : lowcase
}