/*  

Fauna in Chitwan National Park

Create a function that takes a string containing both the name and number of animals and plants that may or may not be found in Chitwan National Park. The function should return an array of tuples where the first element in the tuple is the animal name and the second element in the tuple is a number of that particular animal that is found in Chitwan National Park.

Animals Present in Chitwan National Park
animals = ["muggercrocodile", "one-hornedrhino", "python", "moth", "monitorlizard", "bengaltiger"]
Examples
faunaNumber("There are 24 one-hornedrhino, 50 python and 20000 mango.") ➞ [{"one-hornedrhino": 24}, {"python": 50}]
// Mango not present in animal array.

faunaNumber("There are 244 bengaltiger, 200 monitorlizard and 5000 apples.") ➞ [{"bengaltiger": 244}, {"monitorlizard": 200}]
// Apples not present in animal array.


Notes
Input contains name and number of both animals and plants.
If there is no match, return an empty array.

*/



//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function faunaNumber(str) {
    let matches = str.match(/([0-9]+ ([\w-])+)/g)
    animals = ["muggercrocodile", "one-hornedrhino", "python", "moth", "monitorlizard", "bengaltiger"]
    return matches.map(match => {
        const split = match.split(' ')
        if (animals.includes(split[1])) {
            return {
                [split[1]]: Number(split[0])
            }
        }
    }).filter(i => i !== undefined)
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const faunaNumber = s => {
    const animals = 'muggercrocodile|one-hornedrhino|python|moth|monitorlizard|bengaltiger'
    return (s.match(RegExp(`\\d+ (${animals})`, 'g')) || []).map(t => ({
        [(k = t.split(/ /))[1]]: +k[0]
    }))
}





//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function faunaNumber(str) {
    var final = [];
    var ani = [];
    var numbers = [];
    var animals = ["muggercrocodile", "one-hornedrhino", "python", "moth", "monitorlizard", "bengaltiger"];
    str = str.replace(/[^-\w\s]|_/g, "").replace(/\s+/g, " ");
    var a = str.split(" ");
    for (var i = 0; i < a.length; i++) {
        if (isDigit(a[i].charAt(0))) {
            if (animals.includes(a[i + 1])) {
                ani.push(a[i + 1]);
                numbers.push(parseInt(a[i]));
            }
        }
    }
    for (var i = 0; i < ani.length; i++) {
        var ob = {};
        ob[ani[i].toString()] = numbers[i];
        final.push(ob);
    }
    return final;
}

function isDigit(c) {
    if (c == "0" || c == "1" || c == "2" || c == "3" || c == "4" || c == "5" ||
        c == "6" || c == "7" || c == "8" || c == "9") {
        return true;
    }
    return false;
}





//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################



const animals = ["muggercrocodile", "one-hornedrhino", "python", "moth", "monitorlizard", "bengaltiger"];
const makeObj = (prop, value, obj = {}) => { obj[prop] = value; return obj; };

const faunaNumber = str => [...str.matchAll(/(\d+\s+[a-z]+(-[a-z]+)?)/g)]
    .map(e => e[0].split(' '))
    .filter(e => animals.includes(e[1]))
    .map(e => makeObj(e[1], parseInt(e[0], 10)));