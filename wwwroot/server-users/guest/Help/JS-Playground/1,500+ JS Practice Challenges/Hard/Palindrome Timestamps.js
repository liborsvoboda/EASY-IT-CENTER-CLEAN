/*

Palindrome Timestamps

Create a function that takes two times of day (hours, minutes, seconds) and returns the number of occurences of palindrome timestamps within that range, inclusive.

A palindrome timestamp should be read the same hours : minutes : seconds as seconds : minutes : hours, keeping in mind the seconds and hours digits will reverse. For example, 02 : 11 : 20 is a palindrome timestamp.

Examples
palendromeTimestamps(2, 12, 22, 4, 35, 10) ➞ 14

palendromeTimestamps(12, 12, 12, 13, 13, 13) ➞ 6

palendromeTimestamps(6, 33, 15, 9, 55, 10) ➞ 0


Notes
Expect military time.
Include the given time parameters if they happen to be palendromes.
The parameter timestamps are chronological.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function palendromeTimestamps(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
	const d1 = new Date(),
        d2 = new Date(),
        palendromes = [],
        leadingZero = t => t < 10 ? '0'+t : t,
        isPalendrome = str => str === [...str].reverse().join('');
  
  d1.setHours(hours1,minutes1,seconds1);
  d2.setHours(hours2,minutes2,seconds2);
  
  while( d2.getTime() >= d1.getTime()) {
    let timeStr = leadingZero(d1.getHours()) +''+ leadingZero(d1.getMinutes()) +''+leadingZero(d1.getSeconds());
    isPalendrome(timeStr) && palendromes.push(timeStr);
    d1.setTime(d1.getTime() + 1000);
  }
  
  return palendromes.length;
}



//#############################################################
//#    SOLUTION 2
//#############################################################



function palendromeTimestamps(h1, m1, s1, h2, m2, s2) {
    if (h1 > 5 && h1 < 10) { return 0 }
    var ans = Math.round((60-m1+m2)/11+((h2-h1-1)*6)) 	
    if (m1 % 11 == 0) { ans+= 1 }
    if (m2 % 11 == 0) { ans+= 1 }
    return ans
   }



//#############################################################
//#    SOLUTION 3
//#############################################################


f=n=>(n+'').padStart(2,0)
function palendromeTimestamps(a, b, c, A, B, C) {
	s=f(a)+f(b)+f(c)
	r=s==[...s].reverse().join``?1:0
	while(''+a+b+c!=''+A+B+C){
		c=++c%60
		b=c?b:++b%60
		a=c||b?a:++a
		s=f(a)+f(b)+f(c)
		r+=s==[...s].reverse().join``?1:0
	}
	return r
}



//#############################################################
//#    SOLUTION 4
//#############################################################


function palendromeTimestamps(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
	let [h, m, s] = [hours1, minutes1, seconds1];
	let count = 0;
	while (true) {
		const time = `${h}`.padStart(2, "0") + ":" + `${m}`.padStart(2, "0") + ":" + `${s}`.padStart(2, "0");
		if (time === [...time].reverse().join("")) count++;
		
		if (h === hours2 && m === minutes2 && s === seconds2) break;
		s++;
		if (s === 60) { m++; s = 0; }
		if (m === 60) { h++; m = 0; }
	}
	return count;
}