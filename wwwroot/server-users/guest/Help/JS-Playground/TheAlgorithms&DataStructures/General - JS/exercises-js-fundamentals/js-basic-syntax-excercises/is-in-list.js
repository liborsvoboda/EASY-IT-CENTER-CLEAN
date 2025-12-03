/* define procedure is_in_list:
  input:
    - a pile of numbers, call it PILE
    - a number to search for, call it SEARCH_NUMBER

  write "No" on a sticky note, call it RESULT

  foreach NUMBER in PILE, do the following:
    if NUMBER equals SEARCH_NUMBER, then:
      replace RESULT with "Yes" on sticky note
      return sticky note (and stop looking at numbers)
    end if
  end foreach

  return sticky note
end define procedure

let PILE be [10, 9, -2, 100, 17]
call procedure is_in_list with inputs: PILE, 9 // will give us "Yes"
call procedure is_in_list with inputs: PILE, 9 // will give us "Yes"

*/

function isInList(pile, searchNumber) {
    let result = false;
  
    for(let number of pile) {
      if (number === searchNumber) {
        result = true;
        return result;
      }
    }
  
    return result;
  }
  
  let pile = [10, 9, -2, 100];
  let is9InList = isInList(pile, 9);
  let is14InList = isInList(pile, 14);
  
  console.log(`is9InList has value #{is9InList}`);
  console.log(`is14InList has value #{is14InList}`);