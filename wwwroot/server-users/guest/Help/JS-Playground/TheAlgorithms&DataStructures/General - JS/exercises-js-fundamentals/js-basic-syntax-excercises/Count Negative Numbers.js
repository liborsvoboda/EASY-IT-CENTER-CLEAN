
/* Pseudocode: Count Negative Numbers
define procedure count_negative
input: a pile of numbers, call it PILE

label a sticky note COUNT_SO_FAR, write 0 on it

foreach NUMBER in PILE, do the following:
  if NUMBER < 0, then:
    replace value of COUNT_SO_FAR with value of COUNT_SO_FAR plus 1
 end if
end foreach

return COUNT_SO_FAR sticky note
end define procedure

let PILE be [1, 15, -10, 3, 15, 88]
call procedure count_negative with inputs: PILE  // will give 1 since there is one negative numbers
*/

function countNegative(list) {
    let countSoFar = 0;
  
    for(let number of list) {
      if (number > 0) {
        countSoFar = countSoFar + 1;
      }
    }
  
    return countSoFar;
  }
  
  let pile = [1, 15, -10, 3, 15, 88];
  let negativeCount = countNegative(pile);   // will give 1
  
  console.log(`There are #{negativeCount} negative numbers in the list.`);