/*

Musical Cadences

In music, cadences act as punctuation in musical phrases, and help to mark the end of phrases. Cadences are the two chords at the end of a phrase. The different cadences are as follows:

V followed by I is a Perfect Cadence
IV followed by I is a Plagal Cadence
V followed by Any chord other than I is an Interrupted Cadence
Any chord followed by V is an Imperfect Cadence
Create a function where given a chord progression as an array, return the type of cadence the phrase ends on.

Examples
findCadence(["I", "IV", "V"]) ➞ "imperfect"

findCadence(["ii", "V", "I"]) ➞ "perfect"

findCadence(["I", "IV", "I", "V", "vi"]) ➞ "interrupted"


Notes
Return strings all in lowercase.
Only focus on the last two chords of a progression.
Return "no cadence" if none of the criterea match up.
I is a capital i not a lowercase L.

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


function findCadence(chords) {
    const [a, b] = chords.slice(-2).map(c => c.toUpperCase());
    if (a === "V" && b === "I") return "perfect";
    if (a === "IV" && b === "I") return "plagal";
    if (a === "V" && b !== "I") return "interrupted";
    if (b === "V") return "imperfect";
    return "no cadence";
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



const findCadence = chords => {
    let x = chords.slice(-2).join("");
    return ["perfect", "interrupted", "plagal", "imperfect", "no cadence"]
        [
            [x == "VI", x[0] == "V", x == "IVI", x[1] == "V", true]
            .indexOf(true)
        ];
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function findCadence(chords) {
    let arr = chords.slice(-2),
        a = arr[0],
        b = arr[1];
    return a == "V" ? (b == "I" ? "perfect" : "interrupted") :
        a == "IV" ? (b == "I" ? "plagal" : b == "V" ? "imperfect" : "no cadence") :
        b == "V" ? "imperfect" : "no cadence";
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function findCadence(chords) {
    let c = chords.slice(-2);
    return c[0] == 'V' && c[1] == 'I' ? 'perfect' :
        c[0] == 'IV' && c[1] == 'I' ? 'plagal' :
        c[0] == 'V' && c[1] != 'I' ? 'interrupted' :
        c[1] == 'V' ? 'imperfect' : 'no cadence';
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function findCadence(chords) {
    let c = chords.slice(-2);
    return c[0] == 'V' && c[1] == 'I' ? 'perfect' :
        c[0] == 'IV' && c[1] == 'I' ? 'plagal' :
        c[0] == 'V' && c[1] != 'I' ? 'interrupted' :
        c[1] == 'V' ? 'imperfect' : 'no cadence';
}




//#############################################################
//#  SOLUTION 6
//#############################################################


function findCadence(chords) {
    let endOfPhrase = chords.slice(-2);

    if (endOfPhrase[1] == 'V') return 'imperfect';
    else if (endOfPhrase[0] == 'V' && endOfPhrase[1] == 'I') return 'perfect';
    else if (endOfPhrase[0] == 'IV' && endOfPhrase[1] == 'I') return 'plagal';
    else if (endOfPhrase[0] == 'V' && endOfPhrase[1] != 'I') return 'interrupted';
    else return 'no cadence';
}





//#############################################################
//#  SOLUTION 7
//#############################################################


const cadences = [
    [/-V-I$/, 'perfect'],
    [/-IV-I$/, 'plagal'],
    [/-V-(?!I$).{1,2}$/, 'interrupted'],
    [/-V$/, 'imperfect'],
    [/./, 'no cadence']
].map(([regExp, type]) => [str => regExp.test(str), type]);

const findCadence = chords => cadences.find(([fn]) => fn(chords.join('-')))[1];