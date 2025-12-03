/*

Apocalyptic Numbers

A number n is apocalyptic if 2^n contains a string of 3 consecutive 6s (666 being the presumptive "number of the beast").

Create a function that takes a number n as input. If the number is apocalyptic, find the index of 666 in 2^n, and return "Repent! X days until the Apocalypse!" (X being the index). If not, return "Crisis averted. Resume sinning.".

Examples
apocalyptic(109) ➞ "Crisis averted. Resume sinning."

apocalyptic(157) ➞ "Repent! 9 days until the Apocalypse!"
// 2^157 -> 182687704666362864775460604089535377456991567872
// 666 at 10th position (index 9)

apocalyptic(175) ➞ "Crisis averted. Resume sinning."

apocalyptic(220) ➞ "Repent! 6 days until the Apocalypse!"


*/






//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


const apocalyptic = number => {
    let index = `${2n ** BigInt(number)}`.indexOf(666);
    return index > -1 ?
        `Repent! ${index} days until the Apocalypse!` :
        `Crisis averted. Resume sinning.`
}



//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


const apocalyptic = n => (i = `${BigInt(2) ** BigInt(n)}`.indexOf `666`) > -1 ?
    `Repent! ${i} days until the Apocalypse!` : 'Crisis averted. Resume sinning.'




//#############################################################
//#  SOLUTION 3                                               #
//#############################################################


function apocalyptic(n) {
    const match = BigInt(2 ** n).toString().match(/666/);
    if (!match) return "Crisis averted. Resume sinning.";
    return `Repent! ${match.index} days until the Apocalypse!`;
}



//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


function apocalyptic(n) {
    const reg = /666/;
    const bigI = BigInt(2 ** n).toString();
    if (!bigI.includes('666')) {
        return "Crisis averted. Resume sinning.";
    } else {
        return `Repent! ${bigI.match(reg).index} days until the Apocalypse!`;
    }
}