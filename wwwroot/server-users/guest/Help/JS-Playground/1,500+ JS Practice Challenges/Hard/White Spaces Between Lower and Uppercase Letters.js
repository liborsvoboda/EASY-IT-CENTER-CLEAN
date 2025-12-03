/*

White Spaces Between Lower and Uppercase Letters

Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

Examples
insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

Notes
Each word in the phrase will be at least two characters long.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function insertWhitespace(s) {
    return s.replace(/([a-z])([A-Z])/g, "$1 $2");
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const insertWhitespace = s => s.replace(/[A-Z]/g, ' $&').trim()




//#############################################################
//#  SOLUTION 3
//#############################################################


const insertWhitespace = str =>
    str.replace(/([a-z][A-Z])/g, ([lower, upper]) => `${lower} ${upper}`);



//#############################################################
//#  SOLUTION 4
//#############################################################


function insertWhitespace(s) {
    return s.split('').map(x => x.toUpperCase() == x ? ` ${x}` : x).join('').trim();
}


//#############################################################
//#  SOLUTION 5
//#############################################################


function insertWhitespace(s) {
    let spacedS = "";
    for (let i = 0; i < s.length; i++) {
        if (
            s[i] === s[i].toLowerCase() &&
            s[i + 1] !== undefined &&
            s[i + 1] === s[i + 1].toUpperCase()
        ) {
            spacedS += s[i] + " ";
        } else {
            spacedS += s[i];
        }
    }
    return spacedS;
}