/*

Vowel to Vowel Links

Given a sentence as str, return true if any two adjacent words have this property: One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).

Examples
vowelLinks("a very large appliance") ➞ true

vowelLinks("go to edabit") ➞ true

vowelLinks("an open fire") ➞ false

vowelLinks("a sudden applause") ➞ false


Notes
You can expect sentences in lowercase/uppercase.

*/


//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


const vowelLinks = txt => txt.search(/[aeiou] [aeiou]/i) !== -1;





//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


function vowelLinks(str) 
{
	var vowelList = ["a", "e", "i","o","u"];
	var aLink = false;
	var bLink = false;
	
	for(var i = 0; i < str.length-1; i++)
	{
		if(str.charAt(i) == " ")
		{
			for(var j = 0; j < vowelList.length; j++)
			{
				if(str.charAt(i-1).toLowerCase() == vowelList[j])
				{
					aLink = true;
				}
				if(str.charAt(i+1).toLowerCase() == vowelList[j])
				{
					bLink = true;
				}	
			}
			if(aLink && bLink)
			{
				return true;	
			}
			else
			{
				aLink = false;
				bLink = false;
			}
		}
	}
	return false;
}



//#############################################################
//#  SOLUTION 3                                               #
//#############################################################


function vowelLinks(str) {
	const words = str.split(' ').map(x => x.toLowerCase());
	const length = words.length;
	let vowel = false;
	for(let i = 0; i < length-1; i ++) {
		if(words[i].charAt(words[i].length - 1).match(/[aeiou]/)) {
			if(words[i+1].charAt(0).match(/[aeiou]/)) {
				vowel = true;
				break;
			}
		}
	}
	return vowel;
}



//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


function vowelLinks(str) {
    str = str.toLowerCase();
    const vowel = 'aeiou';
    const first = [];
    const last = []
  
    for(let i = 0; i < str.length; i++) {
      if (str[i] === " ") first.push(str[i-1]); 
      if (str[i] === " ") last.push(str[i+1]);
    }
  
    const bool = [];
      for (let i = 0; i < first.length; i++) {
        bool.push( vowel.indexOf(first[i]) !== -1 && vowel.indexOf(last[i]) !== -1 );
      }
  
   return bool.some( val => val === true);
  }





  
//#############################################################
//#  SOLUTION 5                                               #
//#############################################################



function vowelLinks(str) {
	var arr = str.split(" ").map(x=>[...x]);
	var aVow = ['a','e','i','o','u','A','E','I','O','U']
	return arr.some((x,i)=>arr[i+1]!==undefined?aVow.includes(x[arr[i].length-1]) && aVow.includes(arr[i+1][0]):false);
}