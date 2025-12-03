/*


Capitalize the Names
Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

Examples
capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
Notes
Don't change the order of the original array.
Notice in the second example above, "MABELLE" is returned as "Mabelle".


*/






/*  Solution 1   */


function capMe(arr) {
    return arr.map(x => x = x[0].toString().toUpperCase() + x.substring(1).toLowerCase());
}


/*  Solution 2   */

const capMe = (arr) => arr.map(x => x.toLowerCase().replace(/^./, c => c.toUpperCase()));

const capMe = (arr) => arr.map(num => num[0].toUpperCase() + num.slice(1).toLowerCase())



const capMe = arr => arr.map(x => x.charAt(0).toUpperCase() +
    x.substring(1).toLowerCase());



/*  Solution 3   */



function capMe(arr) {
    return arr.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
}






function capMe(arr) {
    var tempArr;
    for (i in arr) {
        arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    return arr;
}


/*  Solution 4   */



function capMe(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().substring(1);
    }
    return arr;
}







function capMe(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase();
    }

    return arr;
}





function capMe(arr) {
    return arr.map(n => n.substring(0, 1).toUpperCase() + n.substring(1, n.length).toLowerCase())
}







function capMe(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
    }
    return newArr;
}




function capMe(arr) {
    return arr.map(name => name[0].toUpperCase() + '' + name.split('').splice(1).join('').toLowerCase());
}