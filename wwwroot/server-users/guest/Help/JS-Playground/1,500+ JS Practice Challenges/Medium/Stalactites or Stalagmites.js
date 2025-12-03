/*

Stalactites or Stalagmites?

Stalactites hang from the ceiling of a cave while stalagmites grow from the floor.

Create a function that determines whether the input represents "stalactites" or "stalagmites". If it represents both, return "both". Input will be a 2D array, with 1 representing a piece of rock, and 0 representing air space.

Examples
mineralFormation([
  [0, 1, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0]
]) ➞ "stalactites"

mineralFormation([
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1]
]) ➞ "stalagmites"

mineralFormation([
  [1, 0, 1, 0],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1]
]) ➞ "both"


Notes
There won't be any examples where both stalactites and stalagmites meet (because those are called pillars).
There won't be any example of neither stalactites nor stalagmites.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const mineralFormation = cave =>
    cave[0].includes(1) ?
    cave[cave.length - 1].includes(1) ?
    'both' :
    'stalactites' :
    'stalagmites';



//#############################################################
//#  SOLUTION 2  
//#############################################################


const mineralFormation = cave => cave[0].includes(1) ? cave[cave.length - 1].includes(1) ? "both" : "stalactites" : "stalagmites";



//#############################################################
//#  SOLUTION 3
//#############################################################


function mineralFormation(cave) {
    let top = cave[0].includes(1)
    let bottom = cave[cave.length - 1].includes(1)
    return top && bottom ? 'both' : top ? 'stalactites' : 'stalagmites'
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function mineralFormation(cave) {
    let t = false,
        b = false
    String(cave[0].join("")).includes("1") ? t = true : false
    String(cave[cave.length - 1].join("")).includes("1") ? b = true : false
    return t && b ? "both" : t ? "stalactites" : "stalagmites"
}



//#############################################################
//#  SOLUTION 5
//#############################################################


const mineralFormation = a => (c = a[0].some(q => !!q), g = a[a.length - 1].some(q => !!q), c & g ? "both" : c ? "stalactites" : "stalagmites")



//#############################################################
//#  SOLUTION 6
//#############################################################


function mineralFormation(cave) {
    return cave[0].some(x => x === 1, 0) && cave[cave.length - 1].some(x => x === 1, 0) ? 'both' : cave[0].some(x => x === 1) ? 'stalactites' : 'stalagmites';
}