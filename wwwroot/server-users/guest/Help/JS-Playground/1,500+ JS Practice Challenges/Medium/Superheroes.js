/*
Superheroes

Create a function that takes an array of superheroes / superheroines names and returns an array of only superheroe names ending in "man". Return the names in alphabetical order.

Examples
superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"])
➞ ["Batman", "Spider-man", "Superman"]

superheroes(["Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye"])
➞ ["Aquaman"]

superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"])
➞ []

Notes
Wonder-Woman, Catwoman and Invisible-Woman are superheroines.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################



function superheroes(heroes) {
    return heroes.filter(hero => /.[^wo]man$/i.test(hero)).sort()
}


//#############################################################
//#  SOLUTION 2  
//#############################################################



const superheroes = heroes => heroes.filter((x) => /man/.test(x)).filter((y) => !/woman/i.test(y)).sort();



//#############################################################
//#  SOLUTION 3
//#############################################################


function superheroes(heroes) {
    let result = [];
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].includes("man") && !(heroes[i]).toLowerCase().includes("woman")) {
            result.push(heroes[i]);
        }
    }
    return result.sort();
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function superheroes(heroes) {
    var hero_array = []
    for (hero of heroes) {
        if (hero.match(/([a-zA-Z]*)((?<!wo)([m][a][n]))/i) !== null) {
            hero_array.push(hero)
        }
    }
    hero_array.sort()
    return hero_array
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function superheroes(heroes) {
    let man = /man/i,
        woman = /woman/i;

    return heroes.filter(hero => {
        if (hero.match(man) && !hero.match(woman)) return hero;
    }).sort();
}




//#############################################################
//#  SOLUTION 6
//#############################################################


function superheroes(heroes) {
    return heroes.filter(el => {
        if ((el.split("").slice(-3).join("").toLowerCase() === "man") &&
            !(el.split("").slice(-5).join("").toLowerCase() === "woman")) {
            return el;
        }
    }).sort();
}





//#############################################################
//#  SOLUTION 7
//#############################################################


const superheroes = heroes =>
    heroes.filter(a => /(?<!Wo)man/g.test(a) && /(?<!wo)man/g.test(a))
    .sort();




//#############################################################
//#  SOLUTION 8
//#############################################################


function superheroes(heroes) {
    var superheroes = [];
    for (hero of heroes) {
        if (hero.endsWith("man") && !hero.endsWith("oman")) {
            superheroes.push(hero);
        }
    }
    return superheroes.sort();
}