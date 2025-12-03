/*

Fruit Salad 🍇🍓🍎


Fruit salads are served best when the fruits are sliced and diced into small chunks!

For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

Worked Example
fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// Final string: "apargrapepesple"
Examples
fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

fruitSalad(["raspberries", "mango"]) ➞ "erriesmangoraspb"

fruitSalad(["banana"]) ➞ "anaban"



Notes
If a fruit has an odd number of letters, make the right side larger than the left.
For example: "apple" will be sliced into "ap" and "ple".
All fruits will be given in lowercase.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const fruitSalad = arr =>
  arr
    .flatMap(str => [str.slice(0, str.length / 2), str.slice(str.length / 2)])
    .sort()
    .join('');



//#############################################################
//#  SOLUTION 2  
//#############################################################


const fruitSalad = a =>  {
    let c = a.map(b => b.slice(Math.floor(b.length/2)));
    let d = a.map(b => b.slice(0,b.length/2));
    return [c,d].flat().sort().join('');
  }




//#############################################################
//#  SOLUTION 3
//#############################################################


const fruitSalad = arr => arr.map(x => [x.slice(0, x.length / 2), x.slice(Math.floor(x.length / 2))]).flat().sort().join``;



//#############################################################
//#  SOLUTION 4
//#############################################################



const fruitSalad = arr => arr.flatMap(x => [x.slice(Math.floor(x.length/2)), x.slice(0, Math.floor(x.length/2))]).sort().join('')



//#############################################################
//#  SOLUTION 5
//#############################################################


function fruitSalad(arr) {
	return arr.map(x => x.slice(0, Math.floor(x.length / 2)) + ' ' + x.slice(Math.floor(x.length/2)))
						.join(' ').split(' ')
						.sort((a, b) => a < b ? - 1 : 1)
						.join('');
						
}