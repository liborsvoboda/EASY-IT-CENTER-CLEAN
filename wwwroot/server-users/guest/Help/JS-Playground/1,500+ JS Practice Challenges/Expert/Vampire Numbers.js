/*

Vampire Numbers
A Vampire Number is a positive integer greater than 99, that rearranged in all of its possible digits permutations, with every permutation being split into two parts, is equal to the product of at least one of its permutations.

If the number has an even quantity of digits, left and right parts will have the same length in every permutation;
If the number has an odd quantity of digits and at least three digits, the left and right parts will present different lengths for every possible permutation, alternating between them in the range +1 and -1.
Given a positive integer n, implement a function that returns the type of n as a string:

'Normal Number' if n is lower than 100 or if no permutations return a product of their parts equal to n.
'Pseudovampire' if n it is a Vampire with an odd quantity of digits.
'True Vampire' if n it is a Vampire with an even quantity of digits.
Examples
isVampire(1260) ➞ "True Vampire"
// Has an even number of digits and is greater than 99)
// Permutations:
// 12 * 60 = 720
// 16 * 20 = 320
// 10 * 26 = 260
// 21 * 60 = 1260

isVampire(126) ➞ "Pseudovampire"
// Has an odd number of digits and is greater than 99
// Permutations:
// 12 * 6 = 72
// 1 * 26 = 26
// 21 * 6 = 126

isVampire(67) ➞ "Normal Number"
// Is lower than 100
// Permutations:
// 6 * 7 = 7 * 6 = 42
Notes
Trivially, a number from 1 to 99 is a Normal Number by the definitions: a single-digit number can't be split into two parts, and the product of the permutated two digits of a number will always be lower than the number itself.

*/



//#############################################################
/*  Solution 1   */

const getPermutations = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
        const rest = getPermutations(arr.slice(0, i).concat(arr.slice(i + 1)));

        if (!rest.length) result.push([arr[i]]);
        else {
            rest.forEach(item => {
                result.push([arr[i]].concat(item));
            });
        }
    }

    return result;
};

const isVampire = num => {
    const numStr = String(num);
    const isVampireNumber = getPermutations(numStr).some(permutation => {
        const str = permutation.join('');
        const half = str.length / 2;
        const first = str.slice(0, half);
        const second = str.slice(half);

        return first * second === num;
    });

    if (!isVampireNumber) return 'Normal Number';
    return numStr.length % 2 === 0 ? 'True Vampire' : 'Pseudovampire';
};


//#############################################################
/*  Solution 2   */

function isVampire(n) {
    let num = String(n).split(""),
        h = num.length / 2,
        valid = n > 99 ?
        perms(num)
        .map(v => +v.slice(0, h).join("") * +v.slice(h).join(""))
        .includes(n) : 0;
    return valid && !(h % 1) ? "True Vampire" :
        valid && n > 9 ? "Pseudovampire" :
        "Normal Number";
}

const perms = arr => {
    const stack = [],
        perm = (arr, sub = []) => {
            if (arr.length === 0) { stack.push(sub) } else {
                for (let i = 0; i < arr.length; i++) {
                    let curr = arr.slice(),
                        next = curr.splice(i, 1);
                    perm(curr.slice(), sub.concat(next))
                }
            }
        }
    perm(arr);
    return stack;
}


//#############################################################
/*  Solution 3   */

function getAllPermutations(n, prefix = "") {
    let acc = [];
    if (prefix.length >= n.length) return [
        [prefix, n]
    ];
    for (let i = 0; i < n.length; i++) {
        acc.push(...getAllPermutations(n.slice(0, i) + n.slice(i + 1), prefix + n[i]));
    }
    return acc;
}

function isVampire(n) {
    n = String(n);
    if (getAllPermutations(n).some(([left, right]) => left * right == n)) {
        if (n.length % 2) return "Pseudovampire";
        else return "True Vampire";
    } else {
        return "Normal Number";
    }
}



//#############################################################
/*  Solution 4   */


const getAllPermuts = num => {
    const str = String(num);
    const results = [];

    if (str.length === 1)
        return [str];

    for (let i = 0; i < str.length; i++) {
        const leadDigit = str[i];
        const digitLeft = str.substring(0, i) + str.substring(i + 1);
        const inPermuts = getAllPermuts(digitLeft);
        for (let j = 0; j < inPermuts.length; j++)
            results.push(leadDigit + inPermuts[j]);
    }

    return [...new Set(results)];
}

const getSides = num => {
    const str = String(num);
    const length = str.length;

    return [str.substring(0, Math.floor(length / 2)) *
        str.substring(Math.floor(length / 2)),

        str.substring(0, Math.ceil(length / 2)) *
        str.substring(Math.ceil(length / 2))
    ];
};

const isVampire = num => {
    const odd = String(num).length % 2;
    const permuts = getAllPermuts(num)
        .filter(el => !el.startsWith('0'))
        .map(Number);

    for (const permut of permuts)
        if (getSides(permut).includes(num))
            return odd ? 'Pseudovampire' : 'True Vampire';

    return 'Normal Number';
};



//#############################################################
/*  Solution 5   */


function isVampire(n) {
    let vamp = auxVamp(n.toString(), '', '', n)
    if (vamp && n.toString().length % 2 == 0) return "True Vampire"
    if (vamp && n.toString().length % 2 == 1) return "Pseudovampire"
    return 'Normal Number'
}

function auxVamp(ns, st, en, target) {
    if (ns.length == 0) {
        if (Number(st) * Number(en) == target) return true
    }
    if (ns.length == 1) {
        if (Number(st + ns) * Number(en) == target) return true
        if (Number(st) * Number(ns + en) == target) return true
    }
    for (var i = 0; i < ns.length; i++) {
        let s = ns[i]
        let nss = ns.slice(0, i) + ns.slice(i + 1)
        for (var j = 0; j < nss.length; j++) {
            let e = nss[j]
            let nse = nss.slice(0, j) + nss.slice(j + 1)
            if (auxVamp(nse, st + s, e + en, target)) return true
        }
    }
    return false
}


//#############################################################
/*  Solution 6   */


function isVampire(n) {
    if (n < 100) return "Normal Number";
    var ss = ["True Vampire", "Pseudovampire"];
    var s = n.toString();
    var len = s.length;
    var str = Vam(s, Math.floor(len / 2));
    for (var i = 0; i < str.length; i++) {
        var m = parseInt(str[i]);
        if (n % m == 0) {
            var s1 = Math.floor(n / m).toString();
            var id = true;
            for (var j = 0; j < s1.length; j++)
                if (!s.includes(s1.substr(j, 1))) id = false;
            if (id) return ss[len % 2];
        }
    }
    return "Normal Number";
}

function Vam(s, k) {
    var len = s.length;
    if (k == 1) {
        var str = new Array();
        for (var i = 0; i < len; i++) str.push(s.substr(i, 1));
        return str;
    }
    var str = new Array();
    for (var i = 0; i < len; i++) {
        var s1 = Vam(s.substring(0, i) + s.substr(i + 1), k - 1);
        for (var j = 0; j < s1.length; j++) str.push(s.substr(i, 1) + s1[j]);
    }
    return str;
}