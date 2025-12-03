



/*

Broken Bridge
Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).

Examples
isSafeBridge("####") ➞ true

isSafeBridge("## ####") ➞ false

isSafeBridge("#") ➞ true
Notes
You can expect the bridge's ends connecting it to its surrounding.



*/






/*  Solution 1   */

function isSafeBridge(s){
	return s.split(' ').length === 1
}




/*  Solution 2   */

const isSafeBridge = b => !/[ ]/g.test(b)

const isSafeBridge = s => !/ /.test(s);


const isSafeBridge = str => !str.includes(' ');


/*  Solution 3   */


function isSafeBridge(str) {
	return str.split(" ").length==2?false:true
}