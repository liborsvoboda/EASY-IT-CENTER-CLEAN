/*  

Most Common Last Vowel

Create a function that takes in a sentence as input and returns the most common last vowel in the sentence as a single character string.

Examples
commonLastVowel("Hello World!") ➞ "o"

commonLastVowel("Watch the characters dance!") ➞ "e"

commonLastVowel("OOI UUI EEI AAI") ➞ "i"


Notes
There will only be one common last vowel in each sentence.
If the word has one vowel, treat the vowel as the last one even if it is at the start of the word.
The question asks you to compile all of the last vowels of each word and returns the vowel in the list which appears most often.
y won't count as a vowel.
Return outputs in lowercase.

*/



//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function commonLastVowel(str) {
    let vowels = "aeiou".split('');
    let result = [];
    let count;
    let elements = [];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count = 0;
            elements.push(str[i].toLowerCase())
            let obj = { element: str[i].toLowerCase(), count: 1 };
            if (result.length === 0) result.push(obj);
            else {
                for (let j = 0; j < result.length; j++) {
                    if (result[j].element === obj.element) {
                        result[j].count += 1;
                        count++;
                    }
                }
                if (count === 0) result.push(obj);
            }
        }
    }
    return result.filter(x => x.element === elements[elements.length - 1])[0].element;
}




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function commonLastVowel(str) {
    string = str.toLowerCase().split("");
    for (var i = string.length; i >= 0; --i) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" ||
            string[i] == "o" || string[i] == "u") {
            return string[i];
        }
    }
}



//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const commonLastVowel = s =>
    s.toLowerCase().split(' ').map(w => w.match(/[aeuio]/gi).slice(-1)).reduce((l1, l2, _, arr) =>
        arr.filter(x => x === l1).length > arr.filter(x => x === l2).length ? l1 : l2
    )[0]