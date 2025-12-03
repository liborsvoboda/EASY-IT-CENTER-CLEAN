/*

The Frugal Gentleman

Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

Examples
chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) ➞ "Wine 9"

chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

chosenWine([]) ➞ null


Notes
All wines will be different prices, so there is no confusion in the ordering.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const chosenWine = wines =>
    (wines.sort(({ price: a }, { price: b }) => a - b)[1] || wines[0] || {})
    .name || null;



//#############################################################
//#  SOLUTION 2  
//#############################################################



function chosenWine(wines) {
    wines = wines.sort((x, y) => x.price - y.price)
    return wines.length >= 2 ? wines[1].name : wines.length == 1 ? wines[0].name : null
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const chosenWine = w =>
    w.length >= 2 ? w.sort((x, y) => x.price - y.price)[1].name :
    (w[0] || { name: null }).name;



//#############################################################
//#  SOLUTION 4
//#############################################################


//Input: array of objects containing Wine names and prices 
//Output: Return a string that states the name of the 2nd most expensive win 

//Create a return string 
//Iterate over the input array 
//determine what the most expensive wine is first
//then determine what the 2nd most expensive is 
//once 2nd most expensive is determined add the name of it to our return string 
//return string  


function chosenWine(wines) {
    var myChoice = "";
    var mostExpen = 0;
    var secondExpen = 0;
    if (wines.length === 1) {
        myChoice = wines[0].name
    }
    if (wines.length === 0) {
        return null;
    }
    for (var i = 0; i < wines.length; i++) {
        if (wines[i].price > mostExpen) {
            mostExpen = wines[i].price;
        }
        if (wines[i].price > secondExpen && wines[i].price <= mostExpen) {
            myChoice = wines[i].name
        }
    }
    return myChoice;
}





//#############################################################
//#  SOLUTION 5
//#############################################################


function chosenWine(wines) {
    if (wines.length < 2) {
        return wines[0] ? wines[0].name : null
    }
    var sorted = wines.sort((a, b) => a.price > b.price ? 1 : -1)
    return sorted[1].name
}