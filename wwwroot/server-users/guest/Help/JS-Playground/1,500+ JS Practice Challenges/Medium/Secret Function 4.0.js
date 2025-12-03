/*

Secret Function 4.0

Create a function based on the input and output. Look at the examples, there is a pattern.

Examples
secret("p.one.two.three") ➞ `<p class="one two three"></p>`

secret("p.one") ➞ `<p class="one"></p>`

secret("p.four.five") ➞ `<p class="four five"></p>`

Notes
Input is a string.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function secret(text) {
    const [tag, ...className] = text.split(".");
    return `<${tag} class="${className.join(" ")}"></${tag}>`;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function secret(text) {
    return `<${text.split('.')[0]} class="${text.split('.').slice(1).join(' ')}"></${text.split('.')[0]}>`
}




//#############################################################
//#  SOLUTION 3
//#############################################################


const secret = text => {
        const [a, ...b] = text.split `.`;
        return `<${a} class="${b.join` `}"></${a}>`;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const secret = (text) =>`<${text.split('.')[0]} class="${text.split('.').slice(1).join(' ')}"></${text.split('.')[0]}>`;



//#############################################################
//#  SOLUTION 5
//#############################################################


function secret(text) {
	let rep = text.replace('.', ' class="').replace(/\./g, ' ');
	let first = text.replace('.', ' ').slice(0, 2).trim();
	return `<${rep}"></${first}>`
}