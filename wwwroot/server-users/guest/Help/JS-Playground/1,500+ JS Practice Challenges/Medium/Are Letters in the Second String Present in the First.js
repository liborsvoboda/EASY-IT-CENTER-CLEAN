/*
Are Letters in the Second String Present in the First?

Create a function that accepts an array of two strings and checks if the letters in the second string are present in the first string.

Examples
letterCheck(["trances", "nectar"]) ➞ true

letterCheck(["compadres", "DRAPES"]) ➞ true

letterCheck(["parses", "parsecs"]) ➞ false

Notes
Function should not be case sensitive (as indicated in the second example).
Both strings are presented as a single argument in the form of an array.
Bonus: Solve this without RegEx.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



letterCheck = a => a[1].split ``.every(v => ~a[0].toLowerCase().indexOf(v))



letterCheck = ([p, q]) => [...q.toUpperCase()].every(c => p.toUpperCase().search(c) + 1)


//#############################################################
//#  SOLUTION 2  
//#############################################################



function letterCheck(arr) {
    var arr = [arr[0].toLowerCase(), arr[1].toLowerCase()];
    var s1 = new Set(arr[0]);
    return arr[1].split('').map(c => {
        return s1.has(c);
    }).reduce((a, b) => a && b, true);
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function letterCheck(arr) {
    var toSearch = [...arr[1].toLowerCase()].filter(s => arr[0].toLowerCase().indexOf(s) != -1);
    return toSearch.length == arr[1].length;
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function letterCheck([str1 = "", str2 = ""] = []) {
    if (!str2) return true
    if (!str1) return false

    const string1 = str1.toLowerCase()
    const str2first = [...str2.toLowerCase()][0]

    let pos = string1.indexOf(str2first)

    if (!~pos) return false
    let newStr1 = [...str1]
    newStr1[pos] = ""

    return true && letterCheck([newStr1.join(''), str2.slice(1)])
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function letterCheck(arr) {
    let strA = arr[0].toLowerCase();
    let strB = arr[1].toLowerCase();
    let flag = true;

    strB.split('').forEach(ele => {
        if (strA.indexOf(ele) === -1) {
            flag = false;
        }
    })
    return flag;
}



//#############################################################
//#  SOLUTION 6
//#############################################################

function letterCheck(arr) {
    let arr1 = new Array(26);
    let arr2 = new Array(26);

    let populateArr = (arr, str) => {
        str.toLowerCase().split("").forEach((data) => {
            arr[data.charCodeAt(0) - 97] = true;
        });
    }

    populateArr(arr1, arr[0]);
    populateArr(arr2, arr[1]);

    for (let i = 0; i < 26; i++) {
        if (!arr2[i]) continue;
        if (arr2[i] != arr1[i]) return false;
    }
    return true;
}