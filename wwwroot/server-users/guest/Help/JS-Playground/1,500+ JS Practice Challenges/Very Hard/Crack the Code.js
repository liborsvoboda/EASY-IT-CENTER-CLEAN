/*  

Crack the Code
This is a reverse-coding challenge. Create a function that outputs the correct array from the input. Use the following examples to crack the code.

Examples
decode("hello") ➞ [5, 2, 9, 9, 3]

decode("wonderful") ➞ [11, 3, 2, 1, 2, 6, 3, 9, 9]

decode("something challenging") ➞ [7, 3, 10, 2, 8, 5, 6, 2, 4, 5, 18, 5, 16, 9, 9, 2, 2, 4, 6, 2, 4]

Notes
Check Comments if you're stuck.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const decode = string => {
    return [...string]
        .map(letter => [...String(letter.charCodeAt(0))]
            .map(num => +num).reduce((acc, val) => acc + val));
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function decode(str) {
    return [...str].map((it) => [...String(it.charCodeAt())].reduce((a, b) => +a + +b))
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function decode(str) {
    let ans = [];
    let temp;
    for (x = 0; x < str.length; x++) {
        temp = str.charCodeAt(x).toString().split('').reduce((x, y) => Number(x) + Number(y));
        ans.push(temp);
    }
    return ans;
}