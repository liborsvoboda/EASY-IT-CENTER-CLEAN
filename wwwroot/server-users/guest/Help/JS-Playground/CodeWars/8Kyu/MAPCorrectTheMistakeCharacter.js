//https://www.codewars.com/kata/577bd026df78c19bca0002c0

/*

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

*/

//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


function correct(s) {
    s = s.split('');
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '5') {
            s[i] = 'S';
        } else if (s[i] === '0') {
            s[i] = 'O';
        } else if (s[i] === '1') {
            s[i] = 'I';
        }
    }
    return s.join('');
}


function correct(string) {
    return string.replace(/0/g, "O").replace(/5/g, "S").replace(/1/g, "I");
}


const correct = string =>
    string.split('').map(char => {
        if (char === '5') return 'S';
        if (char === '0') return 'O';
        if (char === '1') return 'I';
        return char;
    }).join('')

console.log(correct("BUDAPE5T")); //"BUDAPEST")

//correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')