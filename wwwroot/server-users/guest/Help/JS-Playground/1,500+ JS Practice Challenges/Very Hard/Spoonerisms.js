/*  

Spoonerisms
A spoonerism is when the first letters / sounds of two words are transposed onto one another. Create a function that takes a two-word string and performs a spoonerism on the phrase.

Examples
spoonerise("history lecture") ➞ "listory hecture"

spoonerise("loud noises") ➞ "noud loises"

spoonerise("chow mein") ➞ "mow chein"

spoonerise("edabit rules!") ➞ "redabit ules!"

Notes
Only two words will be parsed into the function. Don't worry about handling more than two.
You won't always just have to swap the first letters, take care to notice which letters have been switched in the examples (notice the difference between vowel-starting and consonant-starting words).

*/




//#############################################################
//#                        MY SOLUTION    1                 #
//#############################################################



const spoonerise = p => p
    .replace(/([^aeiou]*)(\w+ )([^aeiou]*)/, '$3$2$1')




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const spoonerise = phrase => {
    let reg = w => /^[^aeiou]+/.test(w) ? w.match(/^[^aeiou]+/)[0] : "",
        [a, b] = phrase.split(" "),
        [x, y] = [reg(a), reg(b)];
    return `${y}${a.slice(x.length)} ${x}${b.slice(y.length)}`;
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const spoonerise = phrase => {
    const index = x => x.match(/[aeiou]/i).index
    return phrase.split(' ').map((w, i, a) =>
        a[~~!i].slice(0, index(a[~~!i])) + w.slice(index(w))).join(' ')
}



//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################


const spoonerise = (s, [a, b] = s.split(/ /)) => {
    let [a1, a2] = [(a.match(/^[^aeiou]*(?=[aeiou])/g) || [''])[0], a.match(/(?<=^[^aeiou]*)[aeiou].+$/g)[0]], [b1, b2] = [(b.match(/^[^aeiou]*(?=[aeiou])/g) || [''])[0], b.match(/(?<=^[^aeiou]*)[aeiou].+$/g)[0]]
    return `${b1 + a2} ${a1 + b2}`
}