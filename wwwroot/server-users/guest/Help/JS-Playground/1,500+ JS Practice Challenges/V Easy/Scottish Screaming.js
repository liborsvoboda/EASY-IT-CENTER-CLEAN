/*  

Scottish Screaming

A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.

Create a function that takes a string and returns a string.

Examples
toScottishScreaming("hello world") ➞ "HELLE WERLD"

toScottishScreaming("Mr. Fox was very naughty") ➞ "MR. FEX WES VERY NEEGHTY"

toScottishScreaming("Butterflies are beautiful!") ➞ "BETTERFLEES ERE BEEETEFEL!"

Notes
Make sure to include all punctuation that is in the original string.
You don't need any more namespaces than are already given.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#    SOLUTION 1
//#############################################################


const toScottishScreaming = s => s.toUpperCase().replace(/[AIOU]/g, 'E');


const toScottishScreaming = str => str.replace(/[aeiou]/gi, 'E').toUpperCase();




//#############################################################
//#    SOLUTION 2
//#############################################################


const toScottishScreaming = str => (
    str.toUpperCase().replace(/[AIOU]/g, 'E')
);





//#############################################################
//#    SOLUTION 3
//#############################################################


function toScottishScreaming(str) {

    let vowels = /[aeiou]/i;

    str = str.split("");

    for (let i in str) {
        if (vowels.test(str[i])) str[i] = "E";
    }

    return str.join("").toUpperCase();
}







//#############################################################
//#    SOLUTION 4
//#############################################################


function toScottishScreaming(str) {
    const regex = /[aeiouAEIOUA]/g;

    return str.replace(regex, 'e').toUpperCase();
}