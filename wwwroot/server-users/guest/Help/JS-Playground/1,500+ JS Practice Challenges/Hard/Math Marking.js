/*


Math Marking

Given an array of math equations (given as strings), return the percentage of correct answers as a string. Round to the nearest whole number.

Examples
markMaths(["2+2=4", "3+2=5", "10-3=3", "5+5=10"]) ➞ "75%"

markMaths(["1-2=-2"]), "0%"

markMaths(["2+3=5", "4+4=9", "3-1=2"]) ➞ "67%"


Notes
You can expect only addition and subtraction.
Note how there aren't any spaces in any given equation.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function markMaths(arr) {
	return Math.round(arr.filter(i => eval(i.replace('=', '==='))).length / arr.length * 100 - 0.01) + '%';
}



//#############################################################
//#    SOLUTION 2
//#############################################################


const markMaths = arr => `${-Math.round(-arr.filter(m => eval(m.replace("=", "=="))).length / arr.length * 100)}%`;




//#############################################################
//#    SOLUTION 3
//#############################################################


const markMaths = eq => ((p = eq.map(e => e.split(/=/))
  .reduce((s, [x, e]) => s + (eval(x) == +e ? 1 : 0), 0) /
  eq.length * 100) % 1 == 0.5 ? Math.floor(p) : Math.round(p))+'%'




//#############################################################
//#    SOLUTION 4
//#############################################################


function markMaths(a) {
	n=(a.filter(e=>eval(e.replace('=','=='))).length/a.length)*100
	n=/\.[6789]|\.5./.test(n)?n+1|0:n|0
	return n+'%'
}