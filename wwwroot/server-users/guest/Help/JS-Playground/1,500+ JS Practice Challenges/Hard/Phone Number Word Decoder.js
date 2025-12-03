/*

Phone Number Word Decoder

Create a program that converts a phone number with letters to one with only numbers.

Number	Letter
0	none
1	none
2	ABC
3	DEF
4	GHI
5	JKL
6	MNO
7	PQRS
8	TUV
9	WXYZ

Examples
textToNum("123-647-EYES") ➞ "123-647-3937"
textToNum("(325)444-TEST") ➞ "(325)444-8378"
textToNum("653-TRY-THIS") ➞ "653-879-8447"
textToNum("435-224-7613") ➞ "435-224-7613"

Notes
All inputs will be formatted as a string representing a proper phone number in the format XXX-XXX-XXXX or (XXX)XXX-XXXX, using numbers and capital letters.
Check the Resources tab for more info on telephone keypads.

*/


//#############################################################
//#    SOLUTION 1
//#############################################################


const dictionary = {
    ABC: 2,
    DEF: 3,
    GHI: 4,
    JKL: 5,
    MNO: 6,
    PQRS: 7,
    TUV: 8,
    WXYZ: 9
};

const textToNum = phone => phone.replace(
    /[A-Z]/g,
    m => dictionary[Object.keys(dictionary).find(key => key.includes(m))]
);



//#############################################################
//#    SOLUTION 2
//#############################################################



const textToNum = p => p.replace(/[ABC]/g, 2).replace(/[DEF]/g, 3).replace(/[GHI]/g, 4).replace(/[JKL]/g, 5).replace(/[MNO]/g, 6).replace(/[PQRS]/g, 7).replace(/[TUV]/g, 8).replace(/[WXYZ]/g, 9);



//#############################################################
//#    SOLUTION 3
//#############################################################


function textToNum(phone) {
    return phone.replace(/[A-Z]/g, m => {
        if ('ABC'.includes(m)) {
            return 2;
        } else if ('DEF'.includes(m)) {
            return 3;
        } else if ('GHI'.includes(m)) {
            return 4;
        } else if ('JKL'.includes(m)) {
            return 5;
        } else if ('MNO'.includes(m)) {
            return 6;
        } else if ('PQRS'.includes(m)) {
            return 7;
        } else if ('TUV'.includes(m)) {
            return 8;
        } else {
            return 9;
        }
    })
}




//#############################################################
//#    SOLUTION 4
//#############################################################



function textToNum(phone) {
    let obj = {
        A: 2,
        B: 2,
        C: 2,
        D: 3,
        E: 3,
        F: 3,
        G: 4,
        H: 4,
        I: 4,
        J: 5,
        K: 5,
        L: 5,
        M: 6,
        N: 6,
        O: 6,
        P: 7,
        Q: 7,
        R: 7,
        S: 7,
        T: 8,
        U: 8,
        V: 8,
        W: 9,
        X: 9,
        Y: 9,
        Z: 9
    };
    let sol = "";
    for (ch of[...phone]) {
        if (obj[ch]) {
            sol += obj[ch];
        } else {
            sol += ch;
        }
    }
    return sol;
}