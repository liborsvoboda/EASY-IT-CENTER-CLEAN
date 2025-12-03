/*

Changing a String into camelCase


Using Camel Case (or camelCase) is where the first word is in lower case, and all words after it have their first letter capitalised. Note that there are no spaces in between words!
Create a function that takes a string and returns it back in camelCase.

Examples
camelCasing("Hello World") ➞ "helloWorld"

camelCasing("snake_case") ➞ "snakeCase"

camelCasing("low high_HIGH") ➞ "lowHighHigh"


Notes
You need to remove all spaces and underscores.
There will be no numbers in inputs.

*/


//#############################################################
//#    SOLUTION 1
//#############################################################


const camelCasing = string => {
	return string.split(/[ _]/g).map((w,i) => (!i ?
		w.toLowerCase(): w[0].toUpperCase() + w.slice(1).toLowerCase()
	)).join("");
}


//#############################################################
//#    SOLUTION 2
//#############################################################


const camelCasing = str => str.toLowerCase().replace(/[\s_](.)/g, (_, m) => m.toUpperCase());




//#############################################################
//#    SOLUTION 3
//#############################################################


const camelCasing = str => str.toLowerCase().replace(/[ _](\w)/g, (_, m) => `${m.toUpperCase()}`);



//#############################################################
//#    SOLUTION 4
//#############################################################



function camelCasing(str) {
    let a = str
      .match(/[a-z]+/gi)
      .map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase())
      .join("");
    return a.slice(0, 1).toLowerCase() + a.slice(1);
  }
