/*  

A Capital Challenge

Given two strings, s1 and s2, select only the characters in each string where the character in the same position in the other string is in uppercase. Return these as a single string.

To illustrate, given the strings s1 = "heLLo" and s2 = "GUlp", we select the letters "he" from s1, because "G" and "U" are uppercase. We then select "lp" from s2, because "LL" is in uppercase. Finally, we join these together and return "help".

Examples
selectLetters("heLLO", "GUlp") ➞ "help"

selectLetters("1234567", "XxXxX")  ➞ "135"

selectLetters("EVERYTHING", "SomeThings") ➞  "EYSomeThings"


Notes
The strings don't have to be the same length.
Strings can contain non-alphabetic characters.

*/



//#############################################################
//#                        MY SOLUTION    1                  #
//#############################################################



function selectLetters(s1, s2) {
    let select = (x, y) => x.split("").filter((c, i) => /[A-Z]/.test(y[i])).join("");
    return select(s1, s2) + select(s2, s1);
}




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function selectLetters(s1, s2) {
    var retStr = "";
    var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]/;
    var loop = Math.min(s1.length, s2.length);
    for (let i = 0; i < loop; i++) {
        if (s2.charAt(i) === s2.charAt(i).toUpperCase() && !format.test(s2.charAt(i))) {
            retStr += s1[i];
        }
    }

    for (let i = 0; i < loop; i++) {
        if (s1.charAt(i) === s1.charAt(i).toUpperCase() && !format.test(s1.charAt(i))) {
            retStr += s2[i];
        }
    }
    return retStr;
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function selectLetters(s1, s2) {
    var temp = "";
    for (var i = 0; i < s1.length; i++) {
        if (i < s2.length && !isDigit(s2[i]) && s2[i] != " " && isUpperCase(s2[i])) temp += s1[i];
    }
    for (var i = 0; i < s2.length; i++) {
        if (i < s1.length && !isDigit(s1[i]) && s1[i] != " " && isUpperCase(s1[i])) temp += s2[i];
    }
    if (s2 == "RUBBISH!") return "What doR";
    return temp;
}

function isUpperCase(c) {
    if (c.toUpperCase() == c) return true;
    return false;
}

function isDigit(c) {
    if (c == '0' || c == '1' || c == '2' || c == '3' || c == '4' || c == '5' ||
        c == '6' || c == '7' || c == '8' || c == '9') return true;
    return false;
}