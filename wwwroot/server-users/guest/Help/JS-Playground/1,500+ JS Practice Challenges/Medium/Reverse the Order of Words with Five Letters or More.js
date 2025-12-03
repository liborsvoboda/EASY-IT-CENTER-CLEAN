/*

Reverse the Order of Words with Five Letters or More

Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples
reverse("Reverse") ➞ "esreveR"

reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"

reverse("The dog is big.") ➞ "The dog is big."

Notes
You can expect a valid string to be provided for each test case.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




//#############################################################
//#  SOLUTION 1 

function reverse(str) {
    return str.split(' ').map(x => x.length > 4 ? x.split('').reverse().join('') : x).join(' ');
}



const reverse = str => str.split(' ')
    .map(x => x.length >= 5 ? x.split('').reverse().join('') : x)
    .join(' ');




function reverse(str) {
    return str.split(" ").map((a) => a.length > 4 ? a.split("").reverse().join("") : a).join(" ");
}




//#############################################################
//#  SOLUTION 2  

const reverse = str => str.replace(/(\S{5,})/gi, match => [...match].reverse().join(''))





//#############################################################
//#  SOLUTION 3

function reverse(str) {
    return str.split(' ')
        .map(a => a.length >= 5 ? a.split('').reverse().join('') : a)
        .join(' ');
}





//#############################################################
//#  SOLUTION 4

function reverse(str) {
    var arr = str.split(" ");

    for (i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = arr[i].split("").reverse().join("");
        }
    }
    return arr.join(" ");
}





function reverse(str) {
    return str.split(" ")
        .map(str => str.length > 4 ? str.split("").reverse().join("") : str)
        .join(" ")
}



//#############################################################
//#  SOLUTION 5



let reverse = x =>
    x.split(' ')
    .map(x => x.length < 5 ? x : x.split('').reverse().join(''))
    .join(' ');