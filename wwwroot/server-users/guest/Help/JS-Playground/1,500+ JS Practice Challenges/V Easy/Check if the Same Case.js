



/*


Check if the Same Case
Create a function that returns true if an input string contains only uppercase or only lowercase letters.

Examples
sameCase("hello") ➞ true

sameCase("HELLO") ➞ true

sameCase("Hello") ➞ false

sameCase("ketcHUp") ➞ false
Notes


*/






/*  Solution 1   */

const sameCase = str =>  str.toUpperCase() === str || str.toLowerCase() === str;

const sameCase = str =>  str == str.toLowerCase() || str == str.toUpperCase();


const sameCase=(str)=>!(str.match(/[A-Z]/) && str.match(/[a-z]/))


/*  Solution 2   */

function sameCase(str) {
	return str===str.toLowerCase()||str===str.toUpperCase()
}



/*  Solution 3   */

function sameCase(str) {
    return str === str.toUpperCase() || str === str.toLowerCase()
        
    }


    function sameCase(str) {
        if(str === str.toLowerCase()) {
            return true
        } else if(str === str.toUpperCase()) {
            return true
        } else {
            return false
        }
    } 
    
        
        
        
        
    //input 'hEllo' --> false
    //input 'hello' --> true
    
    
    //Write a function that returns true if an input string contains 
    //only uppercase or only lowercase letters