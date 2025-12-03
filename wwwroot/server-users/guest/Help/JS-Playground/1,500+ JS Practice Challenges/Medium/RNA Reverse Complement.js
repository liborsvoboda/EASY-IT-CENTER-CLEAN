/*

RNA Reverse Complement

Create a function that finds the reverse complement of a ribonucleic acid (RNA) strand. The RNA will be represented as a string containing only the characters "A", "C", "G" and "U". Since RNA can only (canonically) allow pairings of A/U and G/C, the complement of an RNA would be as follows:

Original	Complement
"AAA"	"UUU"
"UUU"	"AAA"
"GGG"	"CCC"
"CCC"	"GGG"
Your function should find the complement on the right AND also reverse the resulting string.

Examples
reverseComplement("GUGU") ➞ "ACAC"

reverseComplement("UCUCG") ➞ "CGAGA"

reverseComplement("CAGGU") ➞ "ACCUG"


Notes
You can assume all input seqeuences will be valid.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function reverseComplement(inputSequence) {
    return [...inputSequence.replace(/./g, m => ({ A: "U", U: "A", G: "C", C: "G" }[m]))].reverse().join("");
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function reverseComplement(inputSequence) {
    var str = inputSequence.split('');
    var conf = [];
    var temp = "";
    for (i = 0; i <= inputSequence.length - 1; i++) {
        if (str[i] == "A") {
            conf[i] = "U"
        } else if (str[i] == "U") {
            conf[i] = "A"
        } else if (str[i] == "C") {
            conf[i] = "G"
        } else if (str[i] == "G") {
            conf[i] = "C"
        }
        temp = conf[i] + temp
    }
    return temp
}


//#############################################################
//#  SOLUTION 3
//#############################################################


function reverseComplement(seq) {
    let obj = {
        'A': 'U',
        'U': 'A',
        'G': 'C',
        'C': 'G'
    }
    return [...seq].map(item => obj[item]).reverse().join('')
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function reverseComplement(inputSequence) {
    return inputSequence.split('').map(x => x == 'A' ? 'U' : x == 'U' ? 'A' : x == 'G' ? 'C' : x == 'C' ? 'G' : x).reverse().join('')
}



//#############################################################
//#  SOLUTION 5
//#############################################################


const reverseComplement = inputSequence => (
    inputSequence.replace(/./g, (_, i) => {
        switch (inputSequence[inputSequence.length - ++i]) {
            case 'A':
                return 'U';
            case 'U':
                return 'A';
            case 'C':
                return 'G';
            case 'G':
                return 'C';
        }
    })
);


//#############################################################
//#  SOLUTION 6
//#############################################################


const reverseComplement = (str) => {
    const RNA = {
        'A': 'U',
        'U': 'A',
        'G': 'C',
        'C': 'G',
    }

    //1: SPLIT MY STRING
    const result = [];

    //2: GO TROUGH MY STRING AND REPLACE THE LETTER
    [...str].forEach((letter) => result.push(RNA[letter]))


    //3: RETURN AND REVERSE MY RESULT
    return result.reverse().join('');
}