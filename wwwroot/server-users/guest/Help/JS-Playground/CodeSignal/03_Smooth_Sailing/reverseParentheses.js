/*

You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets.It is guaranteed that the parentheses in s form a regular bracket sequence.
Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair.The results string should not contain any parentheses.

    Example

For string s = "a(bc)de", the output should be
reverseParentheses(s) = "acbde".

    Input / Output
    [execution time limit]4 seconds(js)
    [input] string s

A string consisting of English letters, punctuation marks, whitespace characters and brackets.It is guaranteed that parentheses form a regular bracket sequence.

    Constraints:
    5 ≤ s.length ≤ 55.
   [output] string

*/




// Given two strings, find the number of common characters between them.

//     Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string s1

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length ≤ 15.

// [input] string s2
/*
A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length ≤ 15.
[output] integer

[JavaScript(ES6)] Syntax Tips

Prints help message to the console
Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


function commonCharacterCount(s1, s2) {
    arr1 = s1.split("");
    arr2 = s2.split("");
    var common = 0;
    var largeArr = [];
    var smallArr = [];
    //double check we have the corrent order
    if (arr1.length > arr2.length) {
        largeArr = arr1;
        smallArr = arr2;
    } else {
        largeArr = arr2;
        smallArr = arr1;
    }

    largeArr.forEach(function(char) {
        for (var i = 0; i < smallArr.length; i++) {
            if (char == smallArr[i]) {
                common++;
                smallArr.splice(i, 1);
                return;
            } else if (smallArr.length == 0) {
                return;
            }
        }
    });

    console.log(smallArr);
    console.log(common);
    return common;
}

function reverseParentheses(s) {
    if (s.includes("(")) {
        return reverseParentheses(reverseOnce(s));
    } else {
        return s;
    }
}

function reverseOnce(s) {
    var regexp = /\(([^()]*)\)/i;
    var subStr = regexp.exec(s)[1];
    subStr = subStr
        .split("")
        .reverse()
        .join("");
    return s.replace(regexp, subStr);
}