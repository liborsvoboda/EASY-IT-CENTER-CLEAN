/*

Reverse Words in a String

Given an input string, reverse the string word by word, the first word will be the last, and so on.

Examples
reverseWords(" the sky is blue") ➞ "blue is sky the"

reverseWords("hello   world!  ") ➞ "world! hello"

reverseWords("a good example") ➞ "example good a"


Notes
A word is defined as a sequence of non-space characters.
The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
Try to solve this in linear time.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function reverseWords(s) {
    return s.trim().replace(/ +/, ' ').split(' ').reverse().join ` `
}




const reverseWords = str => str.split(" ").filter(el => el).reverse().join(" ");




function reverseWords(string) {
    return string.split(' ').filter(word => word).reverse().join(' ')
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



function reverseWords(string) {
    let arr = string.split(" ")
    let reversedString = ''
    for (let i = arr.length - 1; i >= 0; i--) {
        let space = i !== 0 ? ' ' : ''
        reversedString += arr[i] + space
    }
    return reversedString
}






//#############################################################
//#  SOLUTION 3
//#############################################################


function reverseWords(s) {
    while (s.includes("  ")) s = s.replace("  ", " ");
    var v = s.split(" ");
    var len = v.length;
    for (var i = 0; i < len; i++) {
        var s1 = "";
        for (var j = 0; j < v[i].length; j++)
            if (v[i].charAt(j) != ' ') s1 += v[i].charAt(j);
        v[i] = s1;
    }
    s = "";
    for (var i = len - 1; i >= 0; i--)
        if (v[i].length != 0) s += v[i] + " ";
    return s.substr(0, s.length - 1);
}




//#############################################################
//#  SOLUTION 4
//#############################################################