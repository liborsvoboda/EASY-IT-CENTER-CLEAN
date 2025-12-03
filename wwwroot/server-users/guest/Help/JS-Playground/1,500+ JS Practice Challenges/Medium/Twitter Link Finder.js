/*
Twitter Link Finder

Your job is to make a "Twitter link" regular expression rx. This RegEx searches a tweet to find the @handle and the #handle.

The function is already written in the Tests tab, so you only need to provide the RegEx variable in the Code tab.
Only return the @ and # handles.
Examples
tweet("Visit us at @edabit") ➞ "@edabit"

tweet("Follow @JavaScript") ➞ "@JavaScript"

tweet("#Honesty is the best @policy!!") ➞ "#Honesty @policy"

Notes
Make sure the RegEx doesn't return . , ! ?, etc.
*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

// The function is at the test tab, you only need to provide
// the Regex variable:

const rx = /[@#]\w+/gi

//#  SOLUTION 2  

const rx = /([@][A-z]+)|([#][A-z]+)/g;

//#  SOLUTION 3

const rx = /(@|#)[a-zA-Z0-9]+/g

//#  SOLUTION 4