/*

Remove the Special Characters from a String

Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

Examples
removeSpecialCharacters("The quick brown fox!") ➞ "The quick brown fox"

removeSpecialCharacters("%fd76$fd(-)6GvKlO.") ➞ "fd76fd-6GvKlO"

removeSpecialCharacters("D0n$c sed 0di0 du1") ➞ "D0nc sed 0di0 du1"

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function removeSpecialCharacters(str) {
    return str.replace(/[^\w- ]/gi, "");
}


//#  SOLUTION 2  

const removeSpecialCharacters = str => str.replace(/[^\w-\s]/g, '')


const removeSpecialCharacters = str => str.replace(/[!&\/\\#,+()$~%.'":*?<>{}`@^|'=[\]]/g, '');


//#  SOLUTION 3


function removeSpecialCharacters(str) {
    return str.replace(/[^0-9A-Za-z\_\ \-]/g, '')
}



//#  SOLUTION 4

function removeSpecialCharacters(str) {
    return str.split('').filter(chr => chr.match(/([A-Za-z0-9_-\s])/)).join('')
}




//#  SOLUTION 5

function removeSpecialCharacters(str) {
    i = 0;
    var old = str;
    var news = ''
    while (i < str.length) {
        var char = old.charAt(i);
        if (!isLetter(char)) {

        } else {
            news += char;
        }
        i++;
    }
    return news;
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z0-9-_ ]/i);
}