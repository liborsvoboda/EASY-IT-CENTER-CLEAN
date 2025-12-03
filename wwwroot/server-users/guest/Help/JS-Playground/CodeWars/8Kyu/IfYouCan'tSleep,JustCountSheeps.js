/*

8kyu - If you can't sleep, just count sheeps!!

Task:
Given a number, 3 for example, return a string with a murmur: 
"1 sheep...2 sheep...3 sheep..."

Note:
You will always receive a positive integer.

*/





//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


let countSheep = n => [...Array(n).keys()].map(x => x + 1 + " sheep...").join("");