/*

Unfair Hurdles

Unfair hurdles are hurdles which are either too high, or way too close together.

Create a function which takes in an array of strings, representing hurdles, and returns whether or not they are unfair. For the purposes of this challenge, unfair hurdles are:

At least 4 characters tall.
Strictly less than 4 spaces apart.
Examples
// Hurdle are good distance apart but are way too tall.

isUnfairHurdle([
  "#    #    #    #",
  "#    #    #    #",
  "#    #    #    #",
  "#    #    #    #"
]) ➞ true


// Hurdles are a fine height but are way too close together.

isUnfairHurdle([
  "#  #  #  #",
  "#  #  #  #",
  "#  #  #  #"
]) ➞ true


// These hurdles are mighty splendid.

isUnfairHurdle([
  "#      #      #      #",
  "#      #      #      #"
]) ➞ false




Notes
Hurdles will be represented with a hashtag "#".
There will be the same spacing between hurdles.
Hurdles are always as high as the length of the array.
Hurdles are always evenly spaced.

*/






//#############################################################
//#    SOLUTION 1                                             #
//#############################################################


const isUnfairHurdle = hurdles => (
	(hurdles.length > 3) || !hurdles[0].includes(' '.repeat(4))
);



//#############################################################
//#    SOLUTION 2                                             #
//#############################################################


function isUnfairHurdle(h) {
	let a = h.map(x => (x.match(/ +/g)||[]).every(y => y.length < 4))
					 .every(x => x === true);
	let b = [];
	for(let i = 0; i < h[0].length; i++){
		let d = [];
		for(let j = 0; j < h.length; j++){
			d.push(h[j][i])
		}
		b.push(d);
	}
	b = b.map(x => x.join('')).filter(x => !(/^ +$/).test(x)).every(x => x.length > 3);
	return b || a;
}



//#############################################################
//#    SOLUTION 3                                             #
//#############################################################


function isUnfairHurdle(hurdles) {
	return hurdles.length >= (/\s+/.test(hurdles[0]) ? hurdles[0].match(/\s+/)[0].length : 0)
}



//#############################################################
//#    SOLUTION 4                                             #
//#############################################################


function isUnfairHurdle(hurdles) {
	let h_pos = hurdles[0].split('').map((x,i)=>(x=='#'? i:-1)).filter(x=>x>=0)
	return hurdles.length >3 || h_pos.slice(1).some((x,i)=>(x-h_pos[i]<5))
}



//#############################################################
//#    SOLUTION 5                                             #
//#############################################################


function isUnfairHurdle(hurdles) {
    return hurdles.length >= 4 || [...new Set(hurdles.map(v => v.length))].join('') == 10
  }