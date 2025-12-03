/*

Rearrange the Number

Given a number, return the difference between the maximum and minimum numbers that can be formed when the digits are rearranged.

Examples
rearrangedDifference(972882) ➞ 760833
// 988722 - 227889 = 760833

rearrangedDifference(3320707) ➞ 7709823
// 7733200 - 23377 = 7709823

rearrangedDifference(90010) ➞ 90981
// 91000 - 19 = 90981

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function rearrangedDifference(num) {
    const digits = [...
        `${num}`
    ].sort();
    return digits.reverse().join("") - digits.reverse().join("");
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function rearrangedDifference(num) {
    let min = num.toString().split("").sort((a, b) => a - b).join("")
    let max = num.toString().split("").sort((a, b) => b - a).join("")
    return max - min
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function rearrangedDifference(num) {
    return parseInt(num.toString().split("").sort().reverse().join("")) - parseInt(num.toString().split("").sort().join(""));
}



//#############################################################
//#  SOLUTION 4
//#############################################################



const rearrangedDifference = num => {
    const min = +num.toString().split('').sort((a, b) => a - b).join('');
    const max = +num.toString().split('').sort((a, b) => b - a).join('');

    return max - min;
}



//#############################################################
//#  SOLUTION 5
//#############################################################


const getDigits = num => Array.from(String(num), Number);

const rearrangedDifference = num => {
    const sortedDigits = getDigits(num).sort((a, b) => a - b);
    const min = sortedDigits.join('');
    const max = sortedDigits.reverse().join('');

    return max - min;
};