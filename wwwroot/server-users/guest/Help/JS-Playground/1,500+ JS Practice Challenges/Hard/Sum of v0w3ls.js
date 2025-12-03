/*

Sum of v0w3ls

Create a function that takes a string and returns the sum of vowels, where some vowels are considered numbers.

Vowel	Number
A	4
E	3
I	1
O	0
Examples
sumOfVowels("Let\'s test this function.") ➞ 8

sumOfVowels("Do I get the correct output?") ➞ 10

sumOfVowels("I love edabit!") ➞ 12


Notes
Vowels are case-insensitive (e.g. A = 4 and a = 4).

*/


//#############################################################
//#    SOLUTION 1
//#############################################################


function sumOfVowels(str) {
    return str.toLowerCase().match(/[aeio]/g).reduce((a, c) => a + "oi ea".indexOf(c), 0);
}



//#############################################################
//#    SOLUTION 2
//#############################################################


function sumOfVowels(str) {
    const vowels = {
        a: 4,
        e: 3,
        i: 1
    }

    return [...str.toLowerCase()]
        .reduce((acc, char) => {
            if (vowels[char]) return acc + vowels[char]
            return acc
        }, 0)
}




//#############################################################
//#    SOLUTION 3
//#############################################################


function sumOfVowels(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        switch (str[i].toLowerCase()) {
            case 'a':
                sum += 4;
                break;
            case 'e':
                sum += 3;
                break;
            case 'i':
                sum += 1;
                break;
            case 'o':
                sum += 0;
                break;
            default:
                break;
        }
    }

    return sum;
}




//#############################################################
//#    SOLUTION 4
//#############################################################


let values = {
    a: 4,
    e: 3,
    i: 1,
    o: 0
}

function sumOfVowels(str) {
    let s = str.split('')
    return s.map(a => values[a.toLowerCase()] ? values[a.toLowerCase()] : 0).reduce((ac, b) => ac + b, 0)
}


/*
A	4
E	3
I	1
O	0
*/