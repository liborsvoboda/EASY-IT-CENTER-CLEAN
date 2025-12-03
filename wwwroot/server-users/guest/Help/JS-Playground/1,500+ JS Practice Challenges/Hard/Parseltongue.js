/*

Parseltongue

Hermione has come up with a precise formula for determining whether or not a phrase was ssspoken by a parssseltongue (a reference from the Harry Potter universe; the language of ssserpents and those who can converse with them).

Each word in a sssentence must contain either:

Two or more consecutive instances of the letter "s" (i.e. must be together ss..), or...
Zero instances of the letter "s" by itself.
Examples
isParselTongue("Sshe ssselects to eat that apple. ") ➞ true

isParselTongue("She ssselects to eat that apple. ") ➞ false
// "She" only contains one "s".

isParselTongue("Beatrice samples lemonade") ➞ false
// While "samples" has 2 instances of "s", they are not together.

isParselTongue("You ssseldom sssspeak sso boldly, ssso messmerizingly.") ➞ true

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function isParselTongue(sentence) {
	return sentence.toLowerCase().split(' ').every(e => e.match(/s{2}|^[^s]+$/))
}



//#############################################################
//#    SOLUTION 2
//#############################################################


function isParselTongue(sentence) {
	return /^(\b\w*s{2,}\w*\b|\b[^s]*\b)+\.?$/i.test(sentence)
}



//#############################################################
//#    SOLUTION 3
//#############################################################


function isParselTongue(sentence) {
    sentence = 
           sentence.toLowerCase().split(" ").filter(x => x.match('s') != null) ;
       for (var i = 0; i < sentence.length; i++){
           if(sentence[i].charAt(sentence[0].indexOf("s") + 1) != "s"){
               return false;
           }
           else {
               return true;
           }
       }
       
   }




//#############################################################
//#    SOLUTION 4
//#############################################################


const isParselTongue = sentence => {
	let testArr = [];
	let words = sentence.toLowerCase().split(' ');
	for (let i = 0; i < words.length; i++) {
		if (words[i].includes('ss') || words[i].indexOf('s') == -1) {
			testArr.push(words[i]);
		}
	}
	return testArr.join(' ') === sentence.toLowerCase();
}