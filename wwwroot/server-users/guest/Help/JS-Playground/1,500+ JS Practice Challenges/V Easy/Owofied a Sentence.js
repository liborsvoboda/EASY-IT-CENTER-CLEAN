



/*


Owofied a Sentence
Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

Examples
owofied("I'm gonna ride 'til I can't no more")
➞ "I'm gonna rwidwe 'twil I can't no morwe owo"

owofied("Do you ever feel like a plastic bag")
➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"

owofied("Cause baby you're a firework")
➞ "Causwe baby you'rwe a fwirwework owo"
Notes
Don't forget to return the value!
There's a space in front of owo!


*/






/*  Solution 1   */

function owofied (sentence) {
	return sentence.replace(/i/g, "wi").replace(/e/g, "we") + " owo";
}




/*  Solution 2   */

const owofied = str => str.replace(/([ei])/g, "w$1") + " owo";

const owofied = s => s.replace(/i/g, 'wi').replace(/e/g,'we') + ' owo'

const owofied = s =>   s.replace(/i/g, "wi").replace(/e/g, "we") + " owo";


const owofied = sentence => sentence.replace(/i/g, "wi").replace(/e/g,"we") + " owo"


/*  Solution 3   */


function owofied(sentence) {
	return sentence.replace(/i/g, "wi").replace(/e/g, "we") + " owo";
}