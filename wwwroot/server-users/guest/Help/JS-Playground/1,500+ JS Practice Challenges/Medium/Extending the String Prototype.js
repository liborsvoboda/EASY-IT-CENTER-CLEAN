/*

Extending the String Prototype

Javascript has a String prototype default in the language which contains properties and methods such as .length and .toLowerCase(). Extend the String prototype by creating two new methods:

consonants(word) which returns the number of consonants in a word when called.
vowels(word) which returns the number of vowels in a word when called.
Examples
"hello".consonants() ➞ 3
"hello".vowels() ➞ 2

"greatly".consonants() ➞ 5
"greatly".vowels() ➞ 2

"Smithsonian".consonants() ➞ 7
"Smithsonian".vowels() ➞ 4


Notes

Treat y as a consonant, not a vowel.
Upper vs. lower case does not matter.
Hint: See comments for another example if you get stuck.
It is not mandatory for this exercise, but in general it is a good idea to double-check if there exists methods with the same name a your custom functions before using them to extend the prototype. This is to prevent the accidental overwrite of a pre-existing method. (See comments for additional info).

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################



String.prototype.consonants = function() {
    return this.match(/[^aeiou]/gi).length
}

String.prototype.vowels = function() {
    return this.match(/[aeiou]/gi).length
}





//#############################################################
//#  SOLUTION 2  
//#############################################################



String.prototype.consonants = function() {
    return (this.match(/[b-df-hj-np-tv-z]/gi) || []).length;
};

String.prototype.vowels = function() {
    return (this.match(/[aeiou]/gi) || []).length;
};



//#############################################################
//#  SOLUTION 3
//#############################################################


String.prototype.consonants = function() {
    return this.split('').filter(v => vowels.indexOf(v) == -1).length;
}

String.prototype.vowels = function() {
    return this.split('').filter(v => vowels.indexOf(v) != -1).length;
}

const vowels = ['a', 'e', 'i', 'o', 'u'];



//#############################################################
//#  SOLUTION 4
//#############################################################


String.prototype.consonants = function() {
    // Write your code here
    var m = this.match(/[aeiou]/gi);
    return m === null ? 0 : this.length - m.length;
}

String.prototype.vowels = function() {
    // Write your code here
    var m = this.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}




//#############################################################
//#  SOLUTION 5
//#############################################################


String.prototype.consonants = function() {
    const consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z", "Y"]
    let count = 0;
    this.split("").forEach(l => {
        const letter = l.toUpperCase();
        consonants.forEach(con => {
            if (letter === con)
                count++;
        })
    })
    return count;
}

String.prototype.vowels = function() {
    const vowels = ["A", "E", "I", "O", "U"]
    let count = 0;
    this.split("").forEach(l => {
        const letter = l.toUpperCase();
        vowels.forEach(vow => {
            if (letter === vow)
                count++;
        })
    })
    return count;
}