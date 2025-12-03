/*  

Word Numbers!
Create a function that returns a number, based on the string provided. Here is a list of all digits (if you are non english speaker):

String	Number
"one"	1
"two"	2
"three"	3
"four"	4
"five"	5
"six"	6
"seven"	7
"eight"	8
"nine"	9
"zero"	0
Examples
word("one") ➞ 1

word("two") ➞ 2

word("nine") ➞ 9

Notes
All numbers will be 1 digit and they will always exist, also all numbers will be in ℕ ℕo(don't have decimal places, and they are positive, including 0).

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




//#    SOLUTION 1


word = s => ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].indexOf(s)

//#    SOLUTION 2


function word(s) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return words.indexOf(s)
}


//#    SOLUTION 3


const word = n => ({ zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 })[n];


//#    SOLUTION 4


const word = a => a == "one" ? 1 : a == "two" ? 2 : a == "three" ? 3 :
    a == "four" ? 4 : a == "five" ? 5 : a == "six" ? 6 : a == "seven" ? 7 :
    a == "eight" ? 8 : a == "nine" ? 9 : 0;


//#    SOLUTION 5


function word(s) {
    switch (s) {
        case 'zero':
            return 0;
        case 'one':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
    }
}



//#    SOLUTION 6


function word(s) {
    if (s === "one") {
        return 1;
    } else if (s === "two") {
        return 2;
    } else if (s === "three") {
        return 3;
    } else if (s === "four") {
        return 4;
    } else if (s === "five") {
        return 5;
    } else if (s === "six") {
        return 6;
    } else if (s === "seven") {
        return 7;
    } else if (s === "eight") {
        return 8;
    } else if (s === "nine") {
        return 9;
    } else if (s === "zero") {
        return 0;
    }
}

//#    SOLUTION 7


function word(s) {
    let numberWord = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0
    }
    for (let keys in numberWord) {
        if (s === keys) {
            return numberWord[keys]
        }
    }
}