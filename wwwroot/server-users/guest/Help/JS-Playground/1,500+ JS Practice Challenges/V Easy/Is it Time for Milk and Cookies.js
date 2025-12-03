



/*
Is it Time for Milk and Cookies?
Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

Examples
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
Notes
Dates are zero zero based (see resources).
All test cases contain valid dates.




*/






/*  Solution 1   */

function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
  }





/*  Solution 2   */

let timeForMilkAndCookies = x => x.getMonth() === 11 && x.getDate() === 24;

timeForMilkAndCookies = d => /12-24/.test(d.toJSON())

timeForMilkAndCookies = d => /Dec 24/.test(d.toDateString())







/*  Solution 3   */


function timeForMilkAndCookies(date) {
    return date.getMonth() == 11 && date.getDate() == 24; 
  }





  function timeForMilkAndCookies(date) {
    var day = date.getDate();
    var month = date.getMonth();
    
    if(day == 24 && month == 11) {
      return true
    } else {
      return false
    }
  }