/*

Finish the Sentence You're On!
POV: You are in an exam and time has just run out. While the teacher's back is turned, you hastily take the opportunity to finish scribbling down the last few words of the conclusion.

For this challenge, it takes 0.5 seconds to write a character (not including spaces). Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.

Worked Example
timeToFinish(
  "And so brings my conclusion to its conclusion.",
  "And so brings my conclusion to"
) ➞ 7

// "its" has 3 characters
// "conclusion." has 11 characters, including punctuation.
// 11 + 3 = 14
// 14 x 0.5 = 7
// Remember not to include spaces.
Examples
timeToFinish(
  "And so brings my conclusion to its conclusion.",
  "And so brings my conclusion to its conclus"
) ➞ 2

timeToFinish(
  "As a result, my point is still valid.",
  "As a result, my"
) ➞ 9

timeToFinish(
  "Thank you for reading my essay.",
  "T"
) ➞ 12.5

Notes
The unfinished sentence is always found at the start of a complete sentence.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function timeToFinish(full, part) {
    return full.replace(part, '').replace(/\s/g, '').length * .5
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


const timeToFinish = (full, part) => {
    return full
        .slice(part.length)
        .replace(/\s/g, '')
        .length / 2;
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function timeToFinish(full, part) {
    return full.substr(full[part.length] === " " ? part.length + 1 : part.length).split(' ').reduce((a, b) => a + b.length, 0) * 0.5;
}






//#############################################################
//#  SOLUTION 4
//#############################################################



const timeToFinish = (full, part) => full.length > part.length ?
    full.slice(part.length).match(/[a-z.?]/gi).length / 2 : 0;






//#############################################################
//#  SOLUTION 5
//#############################################################



function timeToFinish(full, part) {
    var remaining = full.slice(part.length);
    var charRemain = '';
    for (var i = 0; i < remaining.length; i++) {
        if (remaining[i] !== ' ') {
            charRemain += remaining[i];
        }
    }
    var timeRemain = charRemain.length * .5;
    return timeRemain;
}





//#############################################################
//#  SOLUTION 6
//#############################################################



const timeToFinish = (full, part) => {
    if (full === '') return 0;

    const regex = /[^\s]/gi
    const noSpaceFull = full.match(regex).length;
    const noSpacePart = (part === '') ? 0 : part.match(regex).length;
    return (noSpaceFull - noSpacePart) * .5;
}