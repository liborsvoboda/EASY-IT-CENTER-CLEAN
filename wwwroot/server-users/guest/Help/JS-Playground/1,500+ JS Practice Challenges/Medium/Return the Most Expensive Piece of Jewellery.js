/*

Return the Most Expensive Piece of Jewellery

You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.

Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

Examples
mostExpensive ({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
}) ➞  "The most expensive one is the Pearl Necklace"

mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
}) ➞ "The most expensive one is the Diamond Ring"

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function mostExpensive(obj) {
    var arr = Object.values(obj);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == Math.max.apply(Math, arr)) return "The most expensive one is the " + Object.keys(obj)[i];
    }
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



const mostExpensive = obj => `The most expensive one is the ${Object.keys(obj).reduce((a, c) => obj[a] > obj[c] ? a : c)}`




const mostExpensive = (obj) => `The most expensive one is the ${Object.entries(obj).sort((a,b) => b[1] - a[1])[0][0]}`;




//#############################################################
//#  SOLUTION 3
//#############################################################


const mostExpensive = obj => (
    `The most expensive one is the ${
		Object.entries(obj).sort(([,a], [,b]) => a - b).pop().shift()
	}`
);



//#############################################################
//#  SOLUTION 4
//#############################################################


function mostExpensive(obj) {
    const max = Math.max(...Object.values(obj))
    for (const key in obj)
        if (obj[key] === max)
            return 'The most expensive one is the ' + key
}