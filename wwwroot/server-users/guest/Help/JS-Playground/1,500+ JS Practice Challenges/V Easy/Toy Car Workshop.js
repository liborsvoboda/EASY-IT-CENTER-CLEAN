



/*



Toy Car Workshop
You work in a toy car workshop, and your job is to build toy cars from a collection of parts. Each toy car needs 4 wheels, 1 car body, and 2 figures of people to be placed inside. Given the total number of wheels, car bodies and figures available, how many complete toy cars can you make?

Examples
cars(2, 48, 76) ➞ 0
# 2 wheels, 48 car bodies, 76 figures

cars(43, 15, 87) ➞ 10

cars(88, 37, 17) ➞ 8

Notes

*/






/*  Solution 1   */


function cars(wheels, bodies, figures) {
	let numWheels = Math.floor(wheels / 4);
	let numFigures = Math.floor(figures / 2);
	return Math.min(numWheels, bodies, numFigures);
}


/*  Solution 2   */

const cars = (w, b, f) => Math.min(w >> 2, b, f >> 1);

const cars = (wheels, bodies, figures) =>   Math.min(Math.floor(wheels / 4), bodies, Math.floor(figures / 2));

const cars = (w, b, f) => Math.floor(Math.min(w/4, b, f/2))

const cars = (w, b, f) => Math.min(...[w / 4, b, f /2].map(Math.floor));

const cars = (w,b,f) => Math.min(w / 4, b, f / 2) | 0



/*  Solution 3   */


function cars(a, b, c){
    var result = Math.min(a/4, b, c/2);
      return Math.floor(result);
  }