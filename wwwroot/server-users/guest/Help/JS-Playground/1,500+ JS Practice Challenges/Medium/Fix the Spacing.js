/*

Fix the Spacing

Additional spaces have been added to a sentence. Return the correct sentence by removing them. All words should be separated by one space, and there should be no spaces at the beginning or end of the sentence.

Examples
correctSpacing("The film   starts       at      midnight. ")
➞ "The film starts at midnight."

correctSpacing("The     waves were crashing  on the     shore.   ")
➞ "The waves were crashing on the shore."

correctSpacing(" Always look on    the bright   side of  life.")
➞ "Always look on the bright side of life."

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1                                               #      
//#############################################################


function correctSpacing(sentence) {
    return sentence.replace(/\s+/g, ' ').trim();
}



//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


function correctSpacing(sentence) {
    return sentence.split(" ").filter(a => a != "").join(" ")
}



//#############################################################
//#  SOLUTION 3                                               #
//#############################################################



function correctSpacing(sentence) {
    const trimmed = sentence.trim();
    let previous = '';
    let result = '';
    const process = (ch) => {
        result += (previous === ' ' && ch == ' ' ? '' : ch);
        previous = ch;
    };
    Array.from(trimmed).forEach(ch => process(ch));
    return result;
}




//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


function correctSpacing(sentence) {
    var trimmed = sentence.trim();
    var splitArr = trimmed.split("");
    var regex = /^.*\s{2,}.*$/g;

    while (splitArr.join("").match(regex) !== null) {
        for (var i = 0; i < splitArr.length - 1; i++) {
            if (splitArr[i] === " " && splitArr[i + 1] === " ") {
                splitArr.splice(i, 1);
            }
        }
    }

    return splitArr.join("");
}




//#############################################################
//#  SOLUTION 5                                               #
//#############################################################



function correctSpacing(sentence) {
    return sentence.split('').filter((s, i, arr) => {
        return s !== ' ' || (s === ' ' && arr[i - 1] !== ' ')
    }).join('').trim()
}






//#############################################################
//#  SOLUTION 6                                               #
//#############################################################



function correctSpacing(sentence) {
    return sentence.trim().split(" ").filter(c => c !== "").join(" ");
}