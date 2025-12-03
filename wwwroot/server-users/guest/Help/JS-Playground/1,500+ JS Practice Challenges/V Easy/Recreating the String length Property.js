/*  

Recreating the String.length Property

Create a function which returns the length of a string, WITHOUT using String.length property.

Examples
length("Hello World") ➞ 11

length("Edabit") ➞ 6

length("wash your hands!") ➞ 16

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#    SOLUTION 1
//#############################################################


const length = s => [...s].map((_, idx) => idx + 1).pop() || 0;


const length = s => [...s].reduce(a => a + 1, 0);


const length = s => [...s].reduce((a, c) => a + !!c, 0)


const length = (str, len = 0) => str ? length(str.slice(1), len + 1) : len;


const length = s => s ? 1 + length(s.slice(1)) : 0;





//#############################################################
//#    SOLUTION 2
//#############################################################



function length(s) {
    return s.lastIndexOf('');
}





function length(s, i = -1) {
    while (1)
        if (s[++i] === undefined) return i;
}





//#############################################################
//#    SOLUTION 3
//#############################################################



function length(s) {
    return s == "" ? 0 : s.split("").map(x => 1).reduce((acc, cv) => acc + cv)
}




function length(s) {
    return s.slice(-1) == "" ? 0 : s.lastIndexOf(s.slice(-1)) + 1
}