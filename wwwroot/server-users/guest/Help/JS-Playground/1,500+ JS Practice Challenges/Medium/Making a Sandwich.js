/*

Making a Sandwich

Given an array of ingredients i and a string flavour f as input, create a function that returns the array but with the elements bread around the selected ingredient.

Examples
makeSandwich(["tuna", "ham", "tomato"], "ham") ➞ ["tuna", "bread", "ham", "bread", "tomato"]

makeSandwich(["cheese", "lettuce"], "cheese") ➞ ["bread", "cheese", "bread", "lettuce"]

makeSandwich(["ham", "ham"], "ham") ➞ ["bread", "ham", "bread", "bread", "ham", "bread"]

Notes
You will always get valid inputs.
Make two separate sandwiches if two of the same elements are next to each other (see example #3).

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const makeSandwich = (ingredients, flavour) => ingredients.flatMap(v => v === flavour ? ["bread", v, "bread"] : v);


const makeSandwich = (ing, flav) => ing.map(v => v === flav ? ['bread', v, 'bread'] : v).flat();


const makeSandwich = (i, f) => i.map(el => el === f ? ['bread', `${f}`, 'bread'] : el).flat();




//#############################################################
//#  SOLUTION 2  
//#############################################################


function makeSandwich(i, f) {
    return i.join(" ")
        .split(f)
        .join("bread,bread")
        .replace(/[,]/g, " " + f + " ")
        .split(" ");
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function makeSandwich(ingredients, flavour) {
    return ingredients.map(e => {
        return e === flavour ? ['bread', e, 'bread'] : e
    }).flat();
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function makeSandwich(ingredients, flavour) {
    return ingredients.reduce((acc, el) => {
        return el === flavour ? [...acc, "bread", el, "bread"] : [...acc, el]
    }, [])
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function makeSandwich(ingredients, flavour) {
    return ingredients.map(e => e == flavour ? ["bread", e, "bread"] : e).flat();
}