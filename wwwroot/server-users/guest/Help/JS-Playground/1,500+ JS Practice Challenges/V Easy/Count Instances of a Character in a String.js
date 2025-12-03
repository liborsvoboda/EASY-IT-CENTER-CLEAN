



/*

Count Instances of a Character in a String
Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

Examples
charCount("a", "edabit") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4
Notes
Your output must be case-sensitive (see second example).



*/






/*  Solution 1   */


function charCount(myChar, str) {
	return [...str].filter(x => x===myChar).length;
}


/*  Solution 2   */

charCount=(char, str)=>str.split(char).length-1;

const charCount = (char, str) => str.split(char).length - 1

const charCount = (char, str) => str.split(char).length - 1;

/*  Solution 3   */


function charCount(myChar, str) {
    let count = 0;
        
        for (let i of str) {
            if (myChar.includes(i)) {
                count++
            }
        }
        return count
    }







    function charCount(myChar, str) {
        let count = 0
        for (let i = 0; i < str.length; i++)
            if (myChar === str[i]) {
                count +=1
            }
        return count
    }