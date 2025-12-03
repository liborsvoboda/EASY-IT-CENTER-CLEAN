/*
define procedure count_positive
  input: a pile of numbers, call it PILE

  label a sticky note COUNT_SO_FAR, write 0 on it

  foreach NUMBER in PILE, do the following:
    if NUMBER > 0, then:
      replace value of COUNT_SO_FAR with value of COUNT_SO_FAR plus 1
    end if
  end foreach

  return COUNT_SO_FAR sticky note
end define procedure

let PILE be [1, 15, -10, 3, 15, 88]
call procedure count_positive with inputs: PILE
 */

 function countPositive(list) {
  let countSoFar = 0;

  for(let number of list) {
    if (number > 0) {
      countSoFar = countSoFar + 1;
    }
  }

  return countSoFar;
}

let pile = [1, 15, -10, 3, 15, 88];
let positiveCount = countPositive(pile);   // will give 5

console.log(`There are #{positiveCount} positive numbers in the list.`);