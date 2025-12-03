/*

Let's Talk Like a Monkey 🐵

Mubashir can talk with monkeys. You can also learn their simple language.

Create a function that takes a string txt and returns the string in monkeys language. You have to figure out their language from test cases.

Examples
monkeyTalk("Mubashir Hassan") ➞ "Ook ook."

monkeyTalk("Hello") ➞ "Ook."

monkeyTalk("Matt") ➞ "Ook."

monkeyTalk("Everyone") ➞ "Eek."

monkeyTalk("Edabit is Amazing") ➞ "Eek eek eek."


Notes
A hint in the comments section.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const monkeyTalk = txt => 
    txt
    .toLowerCase()
    .replace(/\w+/g, m => 'aeiou'.includes(m[0]) ? 'eek' : 'ook')
    .replace(/^./, m => m.toUpperCase()) 
  + '.';



//#############################################################
//#  SOLUTION 2  
//#############################################################


function monkeyTalk(txt){
    var first = txt.split(" ").map(x=>["a","e","i","o","u","A","E","I","O","U"].includes(x.slice(0,1)) ? "eek" : "ook")[0]
      var exten = txt.split(" ").map(x=>["a","e","i","o","u","A","E","I","O","U"].includes(x.slice(0,1)) ? "eek" : "ook").slice(1,)
    return txt.split(" ").length===1 ? first.slice(0,1).toUpperCase()+first.slice(1,) + "." : first.slice(0,1).toUpperCase()+first.slice(1,)+" "+exten.join(" ")+"."
  }




//#############################################################
//#  SOLUTION 3
//#############################################################


function monkeyTalk(txt) {
	let vowels=['a','A','e','E','i','I','o','O','u','U'];
	let arr=txt.split(" ");
	let result="";
	arr.forEach((item,index)=> {
		if(index===0){
			if (vowels.includes(item[0])) result+="Eek"
			else result +="Ook" 
	} else {		
		  if (vowels.includes(item[0])) result+=" eek"
			else result +=" ook" 
	}
		if(index===arr.length-1) result+=".";
	});
	return result;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function monkeyTalk(txt) {
    let res = txt
      .split(" ")
      .map(e => (e[0][0].match(/[aeiou]/gi) ? "eek" : "ook"))
      .join(" ");
    return `${res[0].toUpperCase()}${res.slice(1)}.`;
  }