



/*



Two Regular Expression Methods
There are three methods (exclude compile) that you can use with regular expression literals. Use these two methods to fix the code. One method returns a boolean if there is a match. The other method returns an iterator from a search.

Notes
Do not use the same method twice.
Do not use String methods that accept regular expresssions as arguments.

*/






/*  Solution 1   */


function twoMethods() {
	// find and equals are not regular expression methods.  Replace them. 
	let methodOne = /hello/.exec("hello")[0] === "hello" 
	let methodTwo = /hello/.test("hello") // returns a boolean
	return methodOne && methodTwo
}


/*  Solution 2   */

const twoMethods = () => {
	const methodOne = /hello/.exec("hello")[0] === "hello";
	const methodTwo = /hello/.test("hello");
	
	return methodOne && methodTwo;
}



/*  Solution 3   */




const twoMethods = (re = /hello/) => {
	return re.exec("hello")[0] === "hello" && re.test("hello");
}