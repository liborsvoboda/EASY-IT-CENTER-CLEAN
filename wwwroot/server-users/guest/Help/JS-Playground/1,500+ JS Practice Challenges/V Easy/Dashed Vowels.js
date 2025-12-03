/*  
Dashed Vowels
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples
dashed("Edabit") ➞ "-E-d-a-b-i-t"

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
Y is not considered a vowel.
*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  
Solution 1
*/

const dashed = str => str.replace(/([aeiou])/gi, '-$1-')

dashed = s => [...s].map(x => /[aeiou]/gi.test(x) ? "-" + x + "-" : x).join ``

const dashed = str => str.replace(/[aeiou]/gi, m => `-${m}-`);

const dashed = str => str.replace(/[aeiou]/gi, m => `-${m}-`);



/*  
Solution 2
*/


function dashed(str) {
    return [...str].map((x) => (/[aeiou]/i.test(x) ? `-${x}-` : x)).join('');
}


/*  

Solution 3

*/


const VOWELS = 'AEIOU';

function dashed(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (VOWELS.includes(char.toUpperCase())) {
            res += `-${char}-`;
            continue;
        }
        res += char;
    }
    return res;
}


/*  

Solution 4

*/



function dashed(str) {
    return [...str].map(x => /[aeiou]/ig.test(x) ? `\-${x}\-` : x).join('')
}


/*  

Solution 5

*/


function dashed(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    return str.split("").map(char => vowels.includes(char.toLowerCase()) ? `-${char}-` : char).join("");
}



/*  

Solution 6

*/



function dashed(str) {
    return str.split('').map(letter => {
        return letter === 'a' ||
            letter === 'A' ||
            letter === 'e' ||
            letter === 'E' ||
            letter === 'i' ||
            letter === 'I' ||
            letter === 'o' ||
            letter === 'O' ||
            letter === 'u' ||
            letter === 'U' ?
            `-${letter}-` :
            letter
    }).join('')
}




/*  

Solution 7

*/




function dashed(str) {
    return str.split('')
        .map(el => el.match(/[aeiou]/i) ? el = '-' + el + '-' : el)
        .join('');
}