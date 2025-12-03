/*  

Reverse Titling

Your stereotypical titleCase() function in JavaScript might capitalises the first letter of every word in a given sentence, leaving all the other letters as lowercase.

The goal of this challenge, however, is to create a reverseTitle() function, which achieves the complete opposite! Make the first letter of every word lowercase, and the rest uppercase!

Examples
reverseTitle("this is a title") ➞ "tHIS iS a tITLE"

reverseTitle("BOLD AND BRASH!") ➞ "bOLD aND bRASH!"

reverseTitle("Elephants dance about bravely in Thailand") ➞ "eLEPHANTS dANCE aBOUT bRAVELY iN tHAILAND"

Notes:
This was originally translated from a Python version of this question. Unfortunately, I forgot to write down the original question's URL, so if you spot it... let me know!
For extra credit (not really), convert the given function to a prototype method!

*/




//#############################################################
//#    SOLUTION 1
//#############################################################


const reverseTitle = s => (
    s.replace(/\w+?(?=\b)/g, m => (
        m[0].toLowerCase() + m.slice(1).toUpperCase()
    ))
);






//#############################################################
//#    SOLUTION 2
//#############################################################


const reverseTitle = s => s.replace(/(^\w|\s\w)(\S*)/g, (_, a, b) => a.toLowerCase() + b.toUpperCase());





const reverseTitle = s => s.toUpperCase().split(' ')
    .map(a => a.charAt(0).toLowerCase() + a.slice(1)).join(' ');



//#############################################################
//#    SOLUTION 3
//#############################################################


const reverseTitle = s => {
    return s
        .split(' ')
        .map(i => i[0].toLowerCase() + i.slice(1).toUpperCase())
        .join(' ');
}






//#############################################################
//#    SOLUTION 4
//#############################################################


const reverseTitle = s =>
    s.split ` `.map(a => a.length > 1 ?
        `${a[0].toLowerCase()}${a.slice(1).toUpperCase()}` : a)
    .join ` `;





//#############################################################
//#    SOLUTION 5
//#############################################################


function reverseTitle(s) {
    let x = s.split(" ");
    let y = [];
    for (i = 0; i < x.length; i++) {
        y.push(x[i][0].toLowerCase() + x[i].slice(1).toUpperCase());
    }
    return y.join(" ");
}






//#############################################################
//#    SOLUTION 6
//#############################################################



String.prototype.reverseTitle = function() {
    return this.split(' ')
        .map(el => el[0].toLowerCase() + el.slice(1).toUpperCase())
        .join(' ')
}





//#############################################################
//#    SOLUTION 7
//#############################################################





function reverseTitle(s) {
    rat = s.split(" ").map(x => {
        return (x[0].toLowerCase() + x.slice(1).toUpperCase())
    })
    return rat.join(' ')
}