/*

Censor Words Longer Than Four Characters

Create a function that takes a string and censors words over four characters with *.

Examples
censor("The code is fourty") ➞ "The code is ******"

censor("Two plus three is five") ➞ "Two plus ***** is five"

censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"

Notes
Don't censor words with exactly four characters.
If all words have four characters or less, return the original string.
The amount of * is the same as the length of the word.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


//#  SOLUTION 1 

const censor = str => {
    return str
        .split(" ")
        .map(wrd => wrd.length > 4 ? "*".repeat(wrd.length) : wrd)
        .join(" ");
}

//#  SOLUTION 2  

const censor = str => str.replace(/\w{5,}/g, v => '*'.repeat(v.length));

//#  SOLUTION 3

function censor(str) {
    var arr = str.split(' ');
    var replace = "*"
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > 4) {
            arr[i] = replace.repeat(arr[i].length)
        }
    }
    return arr.join(' ');
}


//#  SOLUTION 4


function censor(str) {
    var arr = str.split(" ");

    var a = arr.map(x => x.length > 4 ? x.replace(/[a-z0-9]/gi, '*') : x);


    return a.join(" ");
}


//#  SOLUTION 5


function censor(str) {
    return str.split(" ").map(a => a.length > 4 ? a.replace(/\w/g, "*") : a).join(" ");
}



//#  SOLUTION 6

function censor(str) {
    return str.split(' ').map(cur => {
        if (cur.length > 4) {
            return cur.replace(/./gi, '*');
        } else {
            return cur;
        }
    }).join(' ');
}