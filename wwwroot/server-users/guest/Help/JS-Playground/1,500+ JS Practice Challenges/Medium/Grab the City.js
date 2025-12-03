/*

Grab the City

Write a function to return the city from each of these vacation spots.

Examples
grabCity("[Last Day!] Beer Festival [Munich]") ➞ "Munich"

grabCity("Cheese Factory Tour [Portland]") ➞ "Portland"

grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]") ➞ "Kyoto"

Notes
There may be additional brackets, but the city will always be in the last bracket pair.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function grabCity(str) {
    return str.slice(str.lastIndexOf('[') + 1, str.lastIndexOf(']'))
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const grabCity = str => (str.match(/\[.+?\]/g) || []).slice(-1)[0].slice(1, -1);



grabCity = (str) => str.match(/[\[]\w+\s?\w+?\s?\w+?[\]]$/)[0].replace(/[\[\]]/g, '')