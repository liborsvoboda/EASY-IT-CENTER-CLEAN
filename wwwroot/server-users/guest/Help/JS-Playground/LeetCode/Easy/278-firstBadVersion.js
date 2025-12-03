/*

278. First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. 

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


var solution = function(isBadVersion) {
    /**
     * Key: binary search, be careful to set low and high correctly
     *
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */


    return function(n) {
        var low = 1;
        var high = n;
        while (low < high) {
            // be careful in JavaScript, using Math.floor to get the integer part
            var mid = Math.floor(low + (high - low) / 2);
            if (!isBadVersion(mid)) low = mid + 1;
            // and not `mid - 1` to high
            else high = mid;
        }
        return low;
    };
};