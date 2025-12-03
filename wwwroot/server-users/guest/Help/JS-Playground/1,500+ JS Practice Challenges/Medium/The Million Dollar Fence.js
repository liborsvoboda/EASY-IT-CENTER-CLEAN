/*

The Million Dollar Fence

Your task is to create a fence worth $1 million. You are given the price of the material (per character), meaning the length of the fence will change depending on the cost of the material.

Create a function which constructs this pricey pricey fence, using the letter "H" to build.

constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
// 20 fence posts were set up ($1,000,000 / $50,000 = 20)
Examples
constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"

constructFence("$100,000") ➞ "HHHHHHHHHH"

constructFence("$1,000,000") ➞ "H"

Notes
You are ordered to spend all of your $1,000,000 budget...

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


const constructFence = p => "H".repeat(1e6 / +p.replace(/[^\d]/g, ""));




//#############################################################
//#  SOLUTION 2  
//#############################################################


const constructFence = price =>
    'H'.repeat(1000000 / price.match(/\d/g).join(''))




//#############################################################
//#  SOLUTION 3
//#############################################################


function constructFence(p) {
    p = +p.replace(/[$,]/g, '')
    return 'H'.repeat(1000000 / p)
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const constructFence = a => 'H'.repeat(1000000 / +a.replace(/[^0-9.-]/g, ''));