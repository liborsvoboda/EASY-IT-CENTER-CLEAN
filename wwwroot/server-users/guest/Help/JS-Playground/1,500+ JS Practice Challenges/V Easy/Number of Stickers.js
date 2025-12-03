



/*

Number of Stickers
Given an n * n * n Rubik's cube, return the number of individual stickers that are needed to cover the whole cube.

Examples
howManyStickers(1) ➞ 6

howManyStickers(2) ➞ 24

howManyStickers(3) ➞ 54
Notes
Keep in mind there are 6 faces to keep track of.
Expect only positive whole numbers.



*/


/*  Solution 1   */
function howManyStickers(n) {
	return n * n * 6;
}




/*  Solution 2   */
function howManyStickers(n) {
	return n *n * 6;
}
howManyStickers(1)
howManyStickers(2)



/*  Solution 3   */

const howManyStickers = n => 6*n*n




/*  Solution 4   */

const howManyStickers = n => (n * n) * 6;

