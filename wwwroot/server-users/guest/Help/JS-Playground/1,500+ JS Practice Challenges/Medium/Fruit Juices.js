/*

Fruit Juices

A fruit juice company tags their fruit juices by concatenating the first three letters of the words in a flavor's name and its capacity.

Create a function that creates the product IDs for the variety of fruit juices.

Examples
getDrinkID("apple", "500ml") ➞ "APP500"

getDrinkID("pineapple", "45ml") ➞ "PIN45"

getDrinkID("passion fruit", "750ml") ➞ "PASFRU750"

Notes
Capacity will be given as a string and will always be given in ml.
Return the product ID in UPPERCASE.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const getDrinkID = (f, s) => f.split(/ /).map(e => e.slice(0, 3)).join('').toUpperCase() + s.slice(0, -2)



//#############################################################
//#  SOLUTION 2  
//#############################################################


function getDrinkID(flavor, ml) {
    return flavor
        .split(' ')
        .map(f => f.slice(0, 3))
        .join('')
        .toUpperCase() + ml.slice(0, -2)
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function getDrinkID(flavor, ml) {
    return flavor.split(" ").reduce((ac, cv) => ac + cv.slice(0, 3), "").toUpperCase() + parseInt(ml)
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function getDrinkID(flavor, ml) {
    return flavor.match(/\w+/g)
        .map(x => x.slice(0, 3).toUpperCase())
        .join('') + ml.slice(0, ml.indexOf('m'));
}



//#############################################################
//#  SOLUTION 5
//#############################################################



const getDrinkID = (flavor, quantity) =>
    `${flavor
    .split(' ')
    .map(str => str.slice(0, 3))
    .join('')
    .toUpperCase()}${quantity.slice(0, -2)}`;






//#############################################################
//#  SOLUTION 6
//#############################################################


const getDrinkID = (flavor, ml) =>
    flavor.split(' ').map(w => w.slice(0, 3)).join('').toUpperCase() +
    ml.replace(/[a-z]/ig, '');