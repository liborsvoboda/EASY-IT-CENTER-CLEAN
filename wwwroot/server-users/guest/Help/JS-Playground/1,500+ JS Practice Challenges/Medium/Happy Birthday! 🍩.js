/*

Happy Birthday! 🍩

Mubashir is getting old but he wants to celebrate his 20th or 21st birthday only. It is possible with some basic maths skills. He just needs to select the correct number base with your help!

For example, if his current age is 22, that's exactly 20 - in base 11. Similarly, 65 is exactly 21 - in base 32 and so on.

Create a function that takes his current age and returns the given age 20 (or 21) years, with number base in the format specified in the below examples.

Examples
happyBirthday(22) ➞ "Mubashir is just 20, in base 11!"

happyBirthday(65) ➞ "Mubashir is just 21, in base 32!"

happyBirthday(83) ➞ "Mubashir is just 21, in base 41!"


Notes
Given age will always be greater than 21.

*/


//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


function happyBirthday(age){
    return `Mubashir is just ${20+age%2}, in base ${Math.floor(age/2)}!`
}



//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


const happyBirthday = age => `Mubashir is just 2${age % 2}, in base ${age / 2 | 0}!`;



//#############################################################
//#  SOLUTION 3                                               #
//#############################################################


function happyBirthday(age) {
	return `Mubashir is just ${age % 2 ? 21 : 20}, in base ${Math.floor(age/2)}!`;
}



//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


function happyBirthday(age) {
	var myAge;
	var baseAge;
	if(age<=32 || age%10 == 0){
		myAge = 20; 
	}else{
		myAge = 21;
	}
	if(age%2 == 0){
		baseAge = age;
	}else{
		baseAge = age-1;
	}
	return "Mubashir is just " + myAge + ", in base " + baseAge/2 + "!";
}




//#############################################################
//#  SOLUTION 5                                               #
//#############################################################


const happyBirthday = a =>
	`Mubashir is just ${'2'+(a%~~(a/2))}, in base ${~~(a/2)}!`