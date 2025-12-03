



/*


Neutralisation
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Worked Example
neutralise("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.
Examples
neutralise("--++--", "++--++") ➞ "000000"

neutralise("-+-+-+", "-+-+-+") ➞ "-+-+-+"

neutralise("-++-", "-+-+") ➞ "-+00"
Notes
The two strings will be the same length.


*/






/*  Solution 1   */

function neutralise(s1, s2) {
	let str1 = [...s1]
	let str2 = [...s2]
	return str1.map((a,i)=>a==str2[i] ? a : 0).join("")

}



/*  Solution 2   */

function neutralise(s1, s2)
 {

    return [...s1].map((i, idx) => i === s2[idx] ? i : '0').join('');
}



/*  Solution 3   */



const neutralise = (str1, str2) => str1.replace(/./g, (char, i) => (char === str2[i] ? char : 0));


const neutralise = (s1, s2) => 	s1.split``.map((a, i) => a === s2.split``[i] ? a : 0).join``;


const neutralise = (s1, s2) => (
	s1.replace(/./g, (m, i) => (m === s2[i]) ? m : 0)
);




const neutralise = (a,b)=>[...a].map((w,i)=>w=='+' && b[i]=='+'?'+':w=='-' && b[i]=='-'?'-':0).join('')