/*

Folding a Piece of Paper

Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.

Examples
numLayers(1) ➞ "0.001m"
// Paper folded once is 1mm (equal to 0.001m)

numLayers(4) ➞ "0.008m"
// Paper folded 4 times is 8mm (equal to 0.008m)

numLayers(21) ➞ "1048.576m"
// Paper folded 21 times is 1048576mm (equal to 1048.576m)


Notes
There are 1000mm in a single meter.
Don't round answers.

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


function numLayers(n) {
    if (n <= 60) return `${0.0005 * 2 ** n}m`;
    if (n <= 64) return `${0.0005 * 2 ** n}.0m`;
    return `${(0.0005 * 2 ** n).toExponential()}m`;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



function numLayers(n) {
    let layers = Math.pow(2, n - 1) / 1000;

    return n === 1 ?
        0.001 + "m" :
        Math.floor(layers).toString().length > 16 ?
        layers.toExponential() + "m" :
        Math.floor(layers).toString().length === 16 ?
        layers + ".0m" :
        layers + "m";
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function numLayers(n) {
    const a = Math.pow(2, n) * 0.0005
    return a >= 18446744073709550 ? a.toExponential() + "m" : Number.isInteger(a) ? a + ".0m" : a + "m";
}



//#############################################################
//#  SOLUTION 4
//#############################################################



const numLayers = n => /\./.test(T = (Array.from({ length: n }).map((_, i) => i >= 64 ?
    (2 ** i / 1000).toExponential() : 2 ** i / 1000)[n - 1] || 0.0005)) ? T + `m` : T + `.0m`




//#############################################################
//#  SOLUTION 5
//#############################################################


const numLayers = n => {
    let x = ((0.5 ** -n) / 2) / 1000
    return n < 61 ? x + 'm' : n < 65 ? x + '.0m' : x.toExponential() + 'm'
}