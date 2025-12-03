/*

Alternating Ones and Zeroes
Write a function that returns true if the binary string can be rearranged to form a string of alternating 0s and 1s.

Examples
canAlternate("0001111") ➞ true
// Can make: "1010101"

canAlternate("01001") ➞ true
// Can make: "01010"

canAlternate("010001") ➞ false

canAlternate("1111") ➞ false

Notes
No substring of the output may contain more than one consecutive repeating character (e.g. 00 or 11 are not allowed).
Return false if a string only contains 0s or only contains 1s.
*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const canAlternate = s => Math.abs(s.replace(/0/g, '').length - s.replace(/1/g, '').length) <= 1;


//#  SOLUTION 2  

function canAlternate(s) {
    let numZeros = 0;
    let numOnes = 0;
    for (let letter of s) {
        letter === '0' ? numZeros++ : numOnes++;
    }
    return Math.abs(numZeros - numOnes) <= 1;
}



//#  SOLUTION 3


function canAlternate(s) {
    let zeroes = [];
    let ones = [];
    [...s].map(num => num == 0 ? zeroes.push(num) : ones.push(num));
    return ((zeroes.length - ones.length === 1 || zeroes.length - ones.length === 0 || zeroes.length - ones.length === -1)) ? true : false;
}




//#  SOLUTION 4


function canAlternate(s) {
    ones = s.match(/1/g) || [];
    zeroes = s.match(/0/g) || [];
    return (Math.abs(ones.length - zeroes.length) <= 1)
}




//#  SOLUTION 5


function canAlternate(s) {
    var str = s.split("");
    var nrOnes = [];
    var nrZero = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 1) {
            nrOnes.push(str[i]);
        } else {
            nrZero.push(str[i]);
        }
    }
    if (nrOnes.length - nrZero.length == 0 ||
        nrOnes.length - nrZero.length == 1 ||
        nrOnes.length - nrZero.length == -1) {
        return true;
    }
    return false;
}



//#  SOLUTION 6


function canAlternate(s) {
    let z = 0
    let o = 0

    let a = s.toString()
    for (i = 0; i < a.length; i++) {
        if (a[i] == 0) {
            z += 1
        } else {
            o += 1
        }
    }
    if ((z === o) | (z + 1 === o) | (z === o + 1)) {
        return true
    } else {
        return false
    }




    //#  SOLUTION 7


    function canAlternate(s) {
        let ones = s.split('').filter(it => it === '1');
        let zeroes = s.split('').filter(it => it === '0');
        return ones.length === zeroes.length || ones.length === zeroes.length - 1 || zeroes.length === ones.length - 1;
    }



    //#  SOLUTION 8


    function canAlternate(s) {
        let zero = 0;
        let unit = 0;

        [...s].sort().forEach(x => (x == 0 ? zero++ : unit++));
        return zero + 1 === unit || zero - 1 === unit || zero === unit;
    }





    //#  SOLUTION 9


    let canAlternate = (s) => [...s].filter(x => x == '0').length <= [...s].filter(x => x == '1').length + 1 && [...s].filter(x => x == '0').length >= [...s].filter(x => x == '1').length - 1




    //#  SOLUTION 10

    function canAlternate(s) {
        return Math.abs([...s].sort().reduce((sum, x) => x == '0' ? sum + 1 : sum - 1, 0)) == 1 || Math.abs([...s].sort().reduce((sum, x) => x == '0' ? sum + 1 : sum - 1, 0)) == 0
    }