/*

Scoring a Field Goal

In (American) Football, a team can score if they manage to kick a ball through the goal (i.e. above the crossbar and between the uprights).

Create a function that returns true if the ball 0 goes through the goal. You will be given an array of arrays.

Examples
isGoalScored([
  ["  #     #  "],
  ["  #  0  #  "],
  ["  #     #  "],
  ["  #######  "],
  ["     #     "],
  ["     #     "],
  ["     #     "]
]) ➞ true

isGoalScored([
  ["  #0    #  "],
  ["  #     #  "],
  ["  #     #  "],
  ["  #######  "],
  ["     #     "],
  ["     #     "],
  ["     #     "]
]) ➞ true

isGoalScored([
  ["  #     #  "],
  ["  #     #  "],
  ["  #     # 0"],
  ["  #######  "],
  ["     #     "],
  ["     #     "],
  ["     #     "]
]) ➞ false


Notes
All goals will be of the same size.
All arrays will be of equal length (11).
A team can never score if it hits the crossbar or goes underneath it.

*/



//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


const isGoalScored = goal => goal.some(([v]) => /^\s+#\s*0\s*#\s+$/.test(v));






//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


const isGoalScored = goal => goal.some(v =>
	v[0].split('#').length === 3 && v[0].split('#')[1].includes('0'));






//#############################################################
//#  SOLUTION 3                                               #
//#############################################################


function isGoalScored(goal) {
	let s = goal.slice(0,3).join('')
	if(s.indexOf('0') == 16 || s.indexOf('0')==3 || s.indexOf('0')==28)return true
	return false
}





//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


isGoalScored = (goal) => {
	return goal.reduce((r, v ,i, a) => {
           return r = i < 3 && v.toString().split(" ").join("") === "#0#" || r ? true : false;
    }, false);
}