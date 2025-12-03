/*

Tree Photography

Heading off to the Tree Arboretum of Various Heights, I bring along my camera to snap up a few photos. Ideally, I'd want to take a picture of as many trees as possible, but the taller trees may cover up the shorter trees behind it.

A tree is hidden if it is shorter or the same height as the tree in front.

Given an array of tree heights, create a function which returns "left" or "right", depending on which side allows me to see as many trees as possible.

Worked Example
treePhotography([1, 3, 6, 5]) ➞ "left"
// If I stand on the left, I can see trees of heights 1, 3 and 6.
// If I stand on the right, I can see trees of heights 5 and 6.
// Return "left" because I would see more trees.
Examples
treePhotography([5, 6, 5, 4]) ➞ "right"

treePhotography([1, 2, 3, 3, 3, 3, 3]) ➞ "left"

treePhotography([3, 1, 4, 1, 5, 9, 2, 6]) ➞ "left"


Notes
There will always be a best side.
*/



//#############################################################
//#    SOLUTION 1
//#############################################################


const treePhotography = t => {
    let x = t.lastIndexOf(Math.max(...t)),
        l = t.filter((e,i) => i < x && e < t[x] && e < t[i+1]),
        r = t.filter((e,i) => i > x && e < t[x] && e < t[i-1])
    return ["left", "right"][+(r.length > l.length)]
  }



//#############################################################
//#    SOLUTION 2
//#############################################################


const treePhotography = trees => (
    iMax = trees.findIndex(x => x === Math.max(...trees)),
    left = trees.slice(0, iMax),
    right = trees.slice(iMax + 1),
    newRight = right.filter((x, i) => x > right[i + 1]),
    left.length > newRight.length ? 'left' : 'right'
  )




//#############################################################
//#    SOLUTION 3
//#############################################################


function treePhotography(trees) {
	let a = 0
	let b = 0
	for(let i = 0; i < trees.length;i++){
		if (trees[i] > trees[i + 1]){
			a +=1
		}
	}
	for(let i = 0; i < trees.length;i++){
		if (trees[i] < trees[i + 1]){
			b +=1
		}
	}
	return trees.length === 3 ? 'right' :  a > b ? 'right' : 'left'
	
}




//#############################################################
//#    SOLUTION 4
//#############################################################



const count = arr => (
	arr.reduce((a, e) => {
		if (e > a.max) a.count++, a.max = e;
		return a;
	}, { count: 0, max: 0 }).count
);

const treePhotography = trees => (
	(count(trees) > count(trees.reverse())) ? 'left' : 'right'
);