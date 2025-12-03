/*

Removing Enemies

Remove enemies from the list of people, even if the enemy shows up twice.

Examples
removeEnemies(["Fred"], []) ➞ ["Fred"]

removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]) ➞ ["Adam", "Tanya"]

removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]) ➞ ["Emily", "Steve"]

Notes
All names to be removed will be in the enemies list; simply return the list, no fancy strings.

*/


//#############################################################
//#  SOLUTION 1 
//#############################################################


function removeEnemies(names, enemies) {
    return names.filter(x => !enemies.includes(x))
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


function removeEnemies(names, enemies) {

    return names.filter(name => enemies.indexOf(name) < 0)
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function removeEnemies(names, enemies) {

    let list = [];

    if (enemies.length == 0) {
        return names
    } else {
        for (let i = 0; i < names.length; i++) {
            if (!enemies.includes(names[i]) && !list.includes(names[i])) list.push(names[i])
        }
    }

    return list
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function removeEnemies(names, enemies) {
    let newArr = names.filter(item => item != enemies[0] && item != enemies[1])

    return newArr
}




//#############################################################
//#  SOLUTION 5
//#############################################################



const removeEnemies = (names, enemies) => {
    let arr = [];
    names.forEach((element) => {
        if (!enemies.includes(element)) {
            arr.push(element);
        }
    });
    return arr;
};





//#############################################################
//#  SOLUTION 6
//#############################################################




function removeEnemies(names, enemies) {
    if (enemies.length === 0) {
        return names
    } else {
        return names.filter(name => name !== enemies[0] && name !== enemies[1]);
    }
}