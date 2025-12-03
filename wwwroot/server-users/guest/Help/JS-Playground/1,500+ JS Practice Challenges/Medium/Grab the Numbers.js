/*

Grab the Numbers

Given a string including a bunch of characters and numbers, return the sum of all the numbers in the string. Note that multiple digits next to each other are counted as a whole number rather than separate digits.

Examples
grabNumberSum("aeiou250abc10") ➞ 260

grabNumberSum("one1two2twenty20") ➞ 23

grabNumberSum("900uwu50uwuuwuuwu25uwu25") ➞ 1000

Notes
Remember not to just add single digit numbers together, it should be possible for answers to easily get into the 100s!

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const grabNumberSum = str => str.match(/\d+/g).reduce((a, b) => a + +b, 0)

const grabNumberSum = s => (s.match(/\d+/g) || []).reduce((a, v) => +v + a, 0);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function grabNumberSum(s) {
    return s.replace(/\D/g, " ").split(" ").reduce((x, i) => x + +i, 0);
}


//#############################################################
//#  SOLUTION 3
//#############################################################


function grabNumberSum(s) {
    let numbers = []

    let temp = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/\d/)) {
            temp += s[i]
            if (s[i + 1] === undefined || s[i + 1].match(/\D/)) {
                numbers.push(Number(temp))
                temp = ''
            }
        }
    }

    return numbers.reduce((acc, val) => acc + val)
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function grabNumberSum(s) {
    var res = s.split(/[a-z]/g)
        .filter(elem => elem.match(/[0-9]/g))
        .map(el => +el)
        .reduce((acc, idx) => acc += idx);

    return res;
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function grabNumberSum(s) {

    let regexLetters = /[A-Z]/gi;

    let array = s.split(regexLetters);
    let answer = 0;
    let newArray = array.map(el => el != '' ? answer += parseInt(el) : answer += 0)
    return answer;


}