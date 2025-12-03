
/*define procedure count_number
input:
  - a pile of numbers, call it PILE
  - a number to count, call it SEARCH_NUMBER

//label a sticky note COUNT_SO_FAR, write 0 on it

//foreach NUMBER in PILE, do the following:
  if NUMBER equals SEARCH_NUMBER, then:
    replace value of COUNT_SO_FAR with value of COUNT_SO_FAR plus 1
  end if
end foreach

return COUNT_SO_FAR sticky note
end define procedure

let PILE be [1, 15, -10, 3, 15, 88]
call procedure count_number with inputs: PILE, 15  // will give 2 since 15 appears twice
call procedure count_number with inputs: PILE, 3   // will give 1 since 3 appears once
call procedure count_number with inputs: PILE, 109 // will give 0 since 109 doesn't appear

*/


function countNumber(list, numberToCount) {
    let countSoFar = 0;
  
    for(let number of list) {
      if (number === numberToCount) {
        countSoFar = countSoFar + 1;
      }
    }
  
    return countSoFar;
  }
  
  let pile = [1, 15, -10, 3, 15, 88];
  let countOf15 = countNumber(pile, 15);   // should be 2
  let countOf3 = countNumber(pile, 3);     // should be 1
  let countOf109 = countNumber(pile, 109); // should be 0
  
  console.log(`Count of 15 is #{countOf15}`);
  console.log(`Count of 3 is #{countOf3}`);
  console.log(`Count of 109 is #{countOf109}`);