/*

Apples and Bananas

Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.

Examples
"apples and bananas".vreplace("u") ➞ "upplus und bununus"

"cheese casserole".vreplace("o") ➞ "chooso cossorolo"

"stuffed jalapeno poppers".vreplace("e") ➞ "steffed jelepene peppers"

Notes
Words will be lowercased.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


//#  SOLUTION 1 

String.prototype.vreplace = function(vowel) {
    return this.replace(/[aeiou]/gi, vowel);
}


//#  SOLUTION 2  

String.prototype.vreplace = function(v) { return this.replace(/[aeiou]/g, v) }



//#  SOLUTION 3

String.prototype.vreplace = function vreplace(vowel, str) {
    if (!str) {
        str = this;
    }
    return str.replace(/[aeiou]/g, vowel);
}


//#  SOLUTION 4


String.prototype.vreplace = function(vowel) {
    let vowels = "aeiou";
    return this.split("").map(letter => vowels.includes(letter) ? vowel : letter).join("");
}