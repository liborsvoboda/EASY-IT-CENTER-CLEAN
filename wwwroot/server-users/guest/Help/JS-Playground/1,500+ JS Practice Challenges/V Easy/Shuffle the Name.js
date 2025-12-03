



/*


Shuffle the Name
Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.

Examples
nameShuffle("Donald Trump") ➞ "Trump Donald"

nameShuffle("Rosie O'Donnell") ➞ "O'Donnell Rosie"

nameShuffle("Seymour Butts") ➞ "Butts Seymour"
Notes
There will be exactly one space between the first and last name.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.


*/






/*  Solution 1   */


function nameShuffle(str){
    return str.split(' ').reverse().join(' ');
  }


/*  Solution 2   */

const nameShuffle = str => str.split(' ').reverse().join(' ')

nameShuffle = s => s.split` `.reverse().join` `


const nameShuffle = str => str.split(' ').reverse().join(' ')

const nameShuffle = str => str.split(' ').reverse().join(' ');


/*  Solution 3   */

function nameShuffle(str){
    return str.split(' ').reverse().join(' ');
  }