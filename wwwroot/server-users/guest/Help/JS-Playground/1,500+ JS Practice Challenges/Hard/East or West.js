/*

East or West

You will be given an array of string "east" formatted differently every time. Create a function that returns "west" wherever there is "east". Format the string according to the input. Check the examples below to better understand the question.

Examples
direction(["east", "EAST", "eastEAST"]) ➞ ["west", "WEST", "westWEST"]

direction(["eAsT EaSt", "EaSt eAsT"]) ➞ ["wEsT WeSt", "WeSt wEsT"]

direction(["east EAST", "e a s t", "E A S T"]) ➞ ["west WEST", "w e s t", "W E S T"]

Notes
The input will only be "east" in different formats.

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


function direction(arr) {
    return arr.map(x => x.replace(/e/g, "w").replace(/E/g, "W").replace(/a/g, "e").replace(/A/g, "E"))
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function direction(arr) {
    const chars = { 'e': 'w', 'a': 'e', 'E': 'W', 'A': 'E' }
    return arr.map(word => word.replace(/[eaEA]/g, m => chars[m]));
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function direction(arr) {
    const result = []
    const westMap = {
        'e': 'w',
        'a': 'e',
        'E': 'W',
        'A': 'E'
    }

    for (let i = 0; i < arr.length; i++) {
        const newString = []
        for (char of arr[i]) {
            if (westMap[char] !== undefined) {
                newString.push(westMap[char])
            } else {
                newString.push(char)
            }
        }
        result.push(newString.join(""))
    }

    return result
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function direction(arr) {
    let newArr = [];

    arr.forEach(function(str) {
        let currStrSplit = str.split(""),
            currWest = "";

        currStrSplit.forEach(function(char) {

            switch (char) {
                case "e":
                    currWest += "w";
                    break;
                case "E":
                    currWest += "W";
                    break;
                case "a":
                    currWest += "e";
                    break;
                case "A":
                    currWest += "E";
                    break;
                case "s":
                    currWest += "s";
                    break;
                case "S":
                    currWest += "S";
                    break;
                case "t":
                    currWest += "t";
                    break;
                case "T":
                    currWest += "T";
                    break;
                default:
                    currWest += char;
            }

        });

        newArr.push(currWest);

    });

    return newArr;

}