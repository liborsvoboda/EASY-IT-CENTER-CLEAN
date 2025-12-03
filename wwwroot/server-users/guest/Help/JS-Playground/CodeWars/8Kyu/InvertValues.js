/*

8kyu - Invert Values

Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



function invert(array) {
    return array.map(a => (a) ? a * -1 : a);
}