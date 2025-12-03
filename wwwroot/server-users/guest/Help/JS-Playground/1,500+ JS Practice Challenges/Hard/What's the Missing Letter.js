/*

What's the Missing Letter?

Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples
missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"


Notes
The given string will never have more than one missing letter.

*/



//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


function missingLetter(s) {
	s = s.split("").map(v => v.charCodeAt(0));
	for (let i = 0; i < s.length; i++) {
		if (s[i] > s[i-1] + 1) return String.fromCharCode(s[i] - 1);
	}
	return "No Missing Letter";
}



//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


function missingLetter(str) {
    let result;
        for(let i = 0; i<str.length -1; i++){
            if(str.charCodeAt(i + 1) - str.charCodeAt(i) != 1){
                 result = String.fromCharCode( str.charCodeAt(i) + 1);
            }
        }
         return result != undefined ? result : 'No Missing Letter';
    }



//#############################################################
//#  SOLUTION 3                                               #
//#############################################################


missingLetter=x=>[...x].reduce((s,v,i,a)=>i+1 === a.length ? s : a[i+1].charCodeAt(0)-v.charCodeAt(0) > 1 ? String.fromCharCode(v.charCodeAt(0)+1) : s, "No Missing Letter")





//#############################################################
//#  SOLUTION 4                                               #
//#############################################################



const missingLetter = str => {
    for (let i = 0; i < str.length - 1; i += 1) {
      const curr = str[i].charCodeAt();
      const next = str[i + 1].charCodeAt();
      const diff = Math.abs(curr - next);
  
      if (diff !== 1) return String.fromCharCode(curr + 1);
    }
  
    return 'No Missing Letter';
  };