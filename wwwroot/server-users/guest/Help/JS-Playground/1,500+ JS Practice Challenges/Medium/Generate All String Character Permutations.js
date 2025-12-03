/*

Generate All String Character Permutations

Create a function to generate all string character permutations.

Examples
permutations("AB") ➞ "AB BA"

permutations("CD") ➞ "CD DC"

permutations("EF") ➞ "EF FE"

permutations("NOT") ➞ "NOT NTO ONT OTN TNO TON"

permutations("RAM") ➞ "AMR ARM MAR MRA RAM RMA"

permutations("YAW") ➞ "AWY AYW WAY WYA YAW YWA"


Notes
You must sort your results in alphabetical order before returning it.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const perm = a => a.length ? a.reduce((r, v, i) => [...r, ...perm([...a.slice(0, i), ...a.slice(i + 1)]).map(x => [v, ...x])], []) : [
    []
]

function permutations(str) {
    let arr = perm([...str])
    return arr.map(x => x.join('')).sort((a, b) => a.localeCompare(b)).join(' ')
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function permutations(str) {
    function gen(s) {
        if (s.length < 2) return [s];
        return s.split("").reduce((a, c, i) => a.concat(gen(s.slice(0, i) + s.slice(i + 1)).map(v => c + v)), []);
    }
    return gen(str).sort().join(" ");
}