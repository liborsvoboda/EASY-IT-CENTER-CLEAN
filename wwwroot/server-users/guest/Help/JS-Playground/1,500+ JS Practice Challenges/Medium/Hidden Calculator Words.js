/*

Hidden Calculator Words

At school, we used to play with our calculators and send each other secret messages. The trick was to enter a special number and turn the calculator upside-down. LOL ... I mean 707!

Given a number, create a function that converts it into a word by turning the integer 180 degrees around.

Examples
turnCalc(707) ➞ "LOL"

turnCalc(5508) ➞ "BOSS"

turnCalc(3045) ➞ "SHOE"
number	letter
1	I
2	Z
3	E
4	H
5	S
6	G
7	L
8	B
9	-
0	O

Notes

Convert to uppercase words.
Ignore dots.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function turnCalc(num) {
    const secretMessage = {
        1: "I",
        2: "Z",
        3: "E",
        4: "H",
        5: "S",
        6: "G",
        7: "L",
        8: "B",
        9: "-",
        0: "O",
    };
    return [...String(num)]
        .map((item) => secretMessage[item])
        .reverse()
        .join("");
}







//#############################################################
//#  SOLUTION 2  
//#############################################################


function turnCalc(num) {
    return [...
        `${num}`.replace('.', '')
    ].reverse().map(d => 'OIZEHSGLB' [d]).join('')
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function turnCalc(num) {

    let code = ["O", "I", "Z", "E", "H", "S", "G", "L", "B", "-"],
        s = num.toString(),
        res = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] != '.') {
            res = code[parseInt(s[i])] + res
        }
    }

    return res
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const chars = 'OIZEHSGLB';
const turnCalc = num => (
    [...
        `${num}`
    ].reverse().flatMap(n => chars[n] || [])
).join('');






//#############################################################
//#  SOLUTION 5
//#############################################################


const turnCalc = n => {
    const d = { '0': 'O', '1': 'I', '2': 'Z', '3': 'E', '4': 'H', '5': 'S', '6': 'G', '7': 'L', '8': 'B' };
    return [...('' + n).replace('.', '')].reverse().map(i => d[i] || i).join('');
}





//#############################################################
//#  SOLUTION 6
//#############################################################


function turnCalc(num) {
    return [...num + ""].reverse().map(d => d < "0" ? "" : "OIZEHSGLB" [+d]).join("");
}




//#############################################################
//#  SOLUTION 7
//#############################################################


function turnCalc(num) {
    let obj = { '1': 'I', '2': 'Z', '3': 'E', '4': 'H', '5': 'S', '6': 'G', '7': 'L', '8': 'B', '9': '-', '0': 'O', }
    num = String(num).split('').reverse().join('')
    let s = ''
    for (let i = 0; i < num.length; i++) {
        if (obj.hasOwnProperty(num[i])) s += obj[num[i]]
        else s += ''
    }
    return s
}