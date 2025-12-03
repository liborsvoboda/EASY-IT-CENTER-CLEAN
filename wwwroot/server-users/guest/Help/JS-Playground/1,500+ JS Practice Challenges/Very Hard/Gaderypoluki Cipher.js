/*  

Gaderypoluki Cipher

Create a function that takes an encryption key (a string with an even number of characters) and a message to encrypt. Group the letters of the key by two:

"gaderypoluki" -> "ga de ry po lu ki"
Now take the message for encryption. If the message character appears in the key, replace it with an adjacent character in the grouped version of the key. If the message character does not appear in the key, leave it as is. If the letter in the key occurs more than once, the first result is used.

Return the encrypted message.

Examples
encrypt("ab c", "abc ab") ➞ "ba cba"

encrypt("otorhinolaryngological", "My name is Paul") ➞ "Mr olme hs Plua"

encrypt("gaderypoluki", "This is an encrypted message") ➞ "Thks ks gn dncyrotde mdssgad"

*/





//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const encrypt = (key, message) => {
    const couples = key.match(/../g).map(s => [...s]);
    return message.replace(/./g, m => (
        (couples.find(couple => (
            couple.includes(m)
        )) || []).find(e => e !== m) || m
    ));
};





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function encrypt(key, message) {

    //build cipher
    var keyLookup = {};
    for (var i = 0; i < key.length; i++) {
        var c = key[i];

        if (keyLookup[c] == undefined) {
            var r = i % 2 == 0 ? key[i + 1] : key[i - 1];
            keyLookup[c] = r;
        }
    }

    //encrypt
    var s = "";
    for (var i = 0; i < message.length; i++) {
        var c = message[i];
        if (keyLookup[c] != undefined)
            s += keyLookup[c]
        else
            s += c;
    }

    return s;
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const encrypt = (str, msg) => {
    const buildObj = (s, i = 0, obj = {}) =>
        i === s.length ? obj : buildObj(s, i + 1, {...obj, [s[i]]: i % 2 !== 0 ? (l = s[i - 1]) : (l = s[i + 1]) });
    const keys = buildObj([...str].reverse());
    return [...msg].map((d) => (!!keys[d] ? keys[d] : d)).join("");
};
//builds object of key value pairs using recursion, {g: a, a:g} etc
//passes in the string, reversed so that the encodings acts like its only using the first one
//maps over the message, checks if the value is in the keys object, if so switches it, if no leaces it