



/*

Find the Amount of Potatoes
Create a function to return the amount of potatoes there are in a string.

Examples
potatoes("potato") ➞ 1

potatoes("potatopotato") ➞ 2

potatoes("potatoapple") ➞ 1
Notes



*/






/*  Solution 1   */

function potatoes(str) {
    potato=0;
    for (i=0; i<str.length-5; i++){
      if ( str.slice(i,i+6) == "potato" ){
        potato++;
      }
    }
    return potato;
  }



/*  Solution 2   */

const potatoes = s => s.match(/potato/g).length;





/*  Solution 3   */


function potatoes(str) {
    return (str.match(/potato/g) || []).length;
    }