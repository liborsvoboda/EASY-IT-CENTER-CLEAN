/*

Replace Every Nth Instance of a Character


Create a function that takes a string and replaces every nth instance of oldChar with newChar. Your function will have four parameters:

str — The original input text to be processed.
nth — The nth instance to be replaced.
oldChar — The character being replaced.
newChar — The character replacing oldChar.
In other words, if str is "abababa", nth is 3, oldChar is "a" and newChar is "Z", you would replace the 3rd insrtance of "a" with "Z", returning "ababZba".

Examples
replaceNth("A glittering gem is not enough.", 0, "o", "-")
➞ "A glittering gem is not enough."

replaceNth("Vader said: No, I am your father!", 2, "a", "o")
➞ "Vader soid: No, I am your fother!"

replaceNth("Writing a list of random sentences is harder than I initially thought it would be.", 2, "i", "3")
➞ "Writ3ng a list of random sentences 3s harder than I in3tially thought 3t would be."


Notes
If nth is 0, negative or larger than instances of oldChar, return the original string.
Tests are case sensitive.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function replaceNth(str, nth, oldChar, newChar) {
	if (nth <= 0 || nth > str.match(new RegExp(oldChar, 'g')).length) return str
	let obj = {}
	return str
		.split('')
		.map(a => {
			if (a === oldChar) {
				obj[a] = obj[a] + 1 || 1
				if (obj[a] % nth === 0) return newChar
				return a
			}
			return a
	}).join('')
}



//#############################################################
//#    SOLUTION 2
//#############################################################


function replaceNth(str, nth, oldChar, newChar) {
	let s = ""
	str.split(oldChar).forEach((part, index) => {
		s += part + (((index + 1) % nth === 0) ? newChar : oldChar)
	})
	
	return s.slice(0, s.length - 1)
}




//#############################################################
//#    SOLUTION 3
//#############################################################


function replaceNth(str, nth, oldChar, newChar) {
	let instance = 0;
	return nth <= 0 ? str : 
			str.split('').map(char => char === oldChar && ++instance % nth === 0 ? newChar : char).join('');
}




//#############################################################
//#    SOLUTION 4
//#############################################################


function replaceNth(str, nth, oldChar, newChar) {
    if(nth <= 0 || nth > str.length){
          return str;
    }    
    let counter = 0;
    let replacedString = Array.from(str.split('')).map((el) => {
      if(el === oldChar){
        counter++;
        if(el.charAt(0) === oldChar.charAt(0)) {
          if(counter == nth){
            counter = 0;
            return newChar
          }
          return el
        }
        return el
      }
      return el
    }).join('')
    return replacedString;
  }