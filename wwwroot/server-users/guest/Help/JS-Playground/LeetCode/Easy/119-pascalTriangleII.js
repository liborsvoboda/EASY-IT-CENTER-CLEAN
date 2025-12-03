/*
 
119. Pascal's Triangle II
  
calculate the element in reverse, resultRow[i] += resultRow[i-1]
we don't have to keep resultRow[i] if we do it from back to start.
 
Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.
Notice that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.
Follow up:
Could you optimize your algorithm to use only O(k) extra space?

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 
Constraints:
0 <= rowIndex <= 40
 
 */





//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



var getRow = function(rowIndex) {
    var resultRow = [1];
    for (var i = 1; i <= rowIndex; i++) {
        for (var j = i - 1; j > 0; j--) {
            resultRow[j] += resultRow[j - 1];
        }
        resultRow.push(1);
    }

    return resultRow;
};