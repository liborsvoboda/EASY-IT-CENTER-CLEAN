/*

Mirror Cipher

In Mirror Cipher, encoding is done by by switching message characters with its mirror opposite character of the key.

Create a function that takes two arguments; a message and an optional key, and returns the encoded message.

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

message = "Mubashir Hassan"
key = "edabitisamazing"

mirrorCipher(message, key) ➞ "tuzishar hissid"
Step 1: Replace all characters of given message with mirror character in the key:

M = t, // 't' is mirror character of 'M'
u = u, // 'u' is not part of the key
b = z, // 'z' is mirror character of 'b'
a = i, and so on ...
Step 2: Return encoded message in lower case:

"tuzishar hissid"
If optional key is not given, consider the whole alphabet as a default (i.e. key = "abc..z").

Examples
mirrorCipher("Mubashir Hassan", "edabitisamazing") ➞ "tuzishar hissid"

mirrorCipher("Matt MacPherson") ➞ "nzgg nzxksvihlm"

mirrorCipher("Airforce is best", "pilot") ➞ "aorfirce os besp"


Notes
Ignore case of message and key, (e.g. "M" = "m").

*/



//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


function mirrorCipher(message, str='abcdefghijklmnopqrstuvwxyz'){
    return message.toLowerCase()
               .replace(/./gi, a => str.indexOf(a) > -1 ? str[str.length - str.indexOf(a) - 1] : a)
  }



//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


const mirrorCipher = (message, key = 'abcdefghijklmnopqrstuvwxyz') => 
  [...message.toLowerCase()]
	  .map((char, ind) => 
			key.includes(char) ? key[key.length - (key.indexOf(char)  +1)]
      : char)
    .join('');




//#############################################################
//#  SOLUTION 3                                               #
//#############################################################


const mirrorCipher = (m,k='abcdefghijklmnopqrstuvwxyz') =>
	[...m.toLowerCase()]
		.map(a => [...k].reduce((a,b) => b+a,'')[k.indexOf(a)] || a)
		.join``



//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


const mirrorCipher = (message, key = 'abcdefghijklmnopqrstuvwxyz') => 
	[...message.toLowerCase()].map((c, i) => key.charAt((key.length - 1) - key.indexOf(c)) || c).join``