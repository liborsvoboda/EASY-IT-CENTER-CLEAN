/*  

Rearrange the Sentence

Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.

Examples
rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"

rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"

rearrange(" ") ➞ ""


Notes
Only the integers 1-9 will be used.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function rearrange(sentence) {
    return sentence.split(" ")
        .sort((a, b) => a.replace(/\D/g, "") - b.replace(/\D/g, ""))
        .filter(Boolean)
        .map(w => w.replace(/\d/, ""))
        .join(" ");
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const rearrange = sentence => sentence.split(' ').sort((a, b) => (
    a.replace(/\D/g, '') - b.replace(/\D/g, '')
)).map(e => e.replace(/\d/, '')).join(' ').trim();




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function rearrange(sentence) {
    if (sentence.length === 0 || sentence === " ") return "";
    const regex = /\d/;
    return sentence.split(' ').reduce((acc, val) => {
        const idx = val.search(regex);
        const num = val.substr(idx, 1);
        const newVal = val.replace(regex, '');
        acc.push([num, newVal]);
        return acc;
    }, []).sort((x, y) => x[0] - y[0]).map(val => val[1]).join(' ');
}