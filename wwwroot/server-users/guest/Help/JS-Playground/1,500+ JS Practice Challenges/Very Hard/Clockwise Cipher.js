/*  

Clockwise Cipher
In Clockwise Cipher, encoding is done by placing message characters in the corner cells of a square and moving in a clockwise direction.

Create a function that takes an argument message, and returns the encoded message.

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

message = "Mubashir Hassan"

clockwiseCipher(message) ➞ "Ms ussahr nHaaib"
Step 1: Form a square large enough to fit all the message characters. Given message can fit in a 4 x 4 square.

Step 2: Starting with the top-left corner, place message characters in the corner cells moving in a clockwise direction. After the first cycle is complete, continue placing characters in the cells following the last one in its respective row/column. When the outer cells are filled, continue for the remaining inner squares:

M	s		u
s	s	a	h
r		n	H
a	a	i	b
Step 3: Return encoded message Rows-wise:

eMessage = "Ms ussahr nHaaib"
Example for a 5 x 5 Square
[ 1  5  9 13  2]
[16 17 21 18  6]
[12 24 25 22 10]
[ 8 20 23 19 14]
[ 4 15 11  7  3]
Examples
clockwiseCipher("Mubashir Hassan") ➞ "Ms ussahr nHaaib"

clockwiseCipher("Matt MacPherson") ➞ "M ParsoMc nhteat"

clockwiseCipher("Edabit is amazing") ➞ "Eisadng  tm    i   zbia a"


Notes
Fill up any unused cells with a space character.
Message can contain spaces and special characters.
*/




//#############################################################
//#                        MY SOLUTION    1                 #
//#############################################################



function clockwiseCipher(msg) {
    var len = msg.length;
    var n = 1;
    while (n * n < len) n++;
    for (var i = len; i < n * n; i++) msg += ' ';
    var v = [];
    for (var i = 0; i < n; i++) v.push(Array(n).fill(' '));
    var id = 0;
    var m = 0;
    if (n % 2 != 0) v[(n - 1) / 2][(n - 1) / 2] = msg[n * n - 1];
    while (id < (n - n % 2) / 2) {
        for (var i = id; i < n - 1 - id; i++) {
            v[id][i] = msg[m + 4 * (i - id)];
            v[i][n - 1 - id] = msg[m + 1 + 4 * (i - id)];
            v[n - 1 - id][n - 1 - i] = msg[m + 2 + 4 * (i - id)];
            v[n - 1 - i][id] = msg[m + 3 + 4 * (i - id)];
        }
        m += 4 * (n - 1 - 2 * id);
        id++;
    }
    var s = "";
    for (var i = 0; i < n; i++) s += v[i].join("");
    return s;
}




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function clockwiseCipher(message) {
    message = [...message];
    const size = Math.ceil(Math.sqrt(message.length));
    let square = Array.from({ length: size }, _ => new Array(size).fill(" "));
    let j = 0;
    let k = 4 * (size - 2 * j - 1) || 1;

    while (k > 0) {
        for (let i = 0; i < k && message.length; i++) {
            let y, x;
            if (i % 4 === 0)[y, x] = [j, i / 4 + j];
            if (i % 4 === 1)[y, x] = [(i - 1) / 4 + j, (size - 1) - j];
            if (i % 4 === 2)[y, x] = [(size - 1) - j, (size - 1) - ((i - 2) / 4 + j)];
            if (i % 4 === 3)[y, x] = [(size - 1) - ((i - 3) / 4 + j), j];
            square[y][x] = message.shift();
        }
        j++;
        k = 4 * (size - 2 * j - 1) || 1;
    }

    return square.flat().join("");
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function clockwiseCipher(message) {
    const ln = Math.ceil(Math.sqrt(message.length)),
        tome = Array.from({ length: ln }, e => Array(ln).fill(' '));
    let nc = ln - 1,
        lc = 0,
        bc = 0,
        q, z, x, y;
    for (let i = 0; i < message.length; i++) {
        z = i % 2;
        if (!(q = i % 4) && i) { bc++ }
        if (lc + bc === nc) {
            [lc, nc, bc] = [lc + 1, nc - 1, 0] }
        x = z ? [lc + bc, nc - bc][(q - 1) / 2] : [lc, nc][q / 2];
        y = z ? [nc, lc][(q - 1) / 2] : [lc + bc, nc - bc][q / 2];
        tome[x][y] = message[i]
    }
    return tome.map(e => e.join('')).join('');
}