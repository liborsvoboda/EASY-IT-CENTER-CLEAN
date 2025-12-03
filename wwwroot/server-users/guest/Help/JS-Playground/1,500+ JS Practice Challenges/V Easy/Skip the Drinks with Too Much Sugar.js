/*  

Skip the Drinks with Too Much Sugar
The function skipTooMuchSugarDrinks() takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.

Drinks that contain too much sugar (in this challenge) are:

Cola
Fanta
Examples
skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ [water]

skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []

skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]
Notes
The skipTooMuchSugarDrinks() function returns an array of strings. All drink names are in lowercase.
*/







/*  

Solutions

*/


function skipTooMuchSugarDrinks(drinks) {
    return drinks.filter(x => x !== "cola" && x !== "fanta");
}





function skipTooMuchSugarDrinks(drinks) {
    return drinks.filter(x => !/fanta|cola/.test(x))
}




function skipTooMuchSugarDrinks(drinks) {
    return drinks.filter(drink => drink !== 'fanta' && drink !== 'cola')
}




function skipTooMuchSugarDrinks(drinks) {
    return drinks.filter(d => !['cola', 'fanta'].includes(d))
}




function skipTooMuchSugarDrinks(drinks) {
    var drinksWithoutSugar = [];
    for (const drink of drinks) {
        if (drink == 'cola' || drink == 'fanta') {
            continue;
        }
        drinksWithoutSugar.push(drink);
    }
    return drinksWithoutSugar;
}



function skipTooMuchSugarDrinks(drinks) {
    for (i = 0; i < drinks.length; i++) {
        if (drinks[i] === 'cola' || drinks[i] === 'fanta') {
            drinks.splice(i, 1);
            i--;
        }
    }
    return drinks;
}