



/*


Say "Hello" Say "Bye"
Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

Examples
sayHelloBye("alon", 1) ➞ "Hello Alon"

sayHelloBye("Tomi", 0) ➞ "Bye Tomi"

sayHelloBye("jose", 0) ➞ "Bye Jose"
Notes
The name you return must be capitalized.


*/






/*  Solution 1   */

let sayHelloBye = (n, b) => `${b?"Hello":"Bye"} ${n[0].toUpperCase()+n.slice(1)}`

const sayHelloBye = (name, num) => ['Bye','Hello'][num]+' '+name[0].toUpperCase()+name.slice(1);

const sayHelloBye=(name,num)=>num === 1 ? `Hello ${name.charAt(0).toUpperCase()+name.slice(1)}`:`Bye ${name.charAt(0).toUpperCase()+name.slice(1)}`

/*  Solution 2   */

function sayHelloBye(name, num) {
    let capName = name.charAt(0).toUpperCase() + name.slice(1)
    return num === 1 ? 'Hello ' + capName : 'Bye ' + capName;
  }



/*  Solution 3   */


function sayHelloBye (name, num) {
	return num == 0 ? "Bye " + name.charAt(0).toUpperCase() + name.slice(1) : "Hello " + name.charAt(0).toUpperCase() + name.slice(1);
}