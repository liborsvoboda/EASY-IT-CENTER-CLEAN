/*  
Go Corona!
Create a function that takes the number of daily average recovered cases recovers, daily average newCases, current activeCases, and returns the number of days it will take to reach zero cases.

Examples
endCorona(4000, 2000, 77000) ➞ 39

endCorona(3000, 2000, 50699) ➞ 51

endCorona(30000, 25000, 390205) ➞ 79
Notes
Daily recovered cases are always greater than'daily newCases.
*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




/*  

Solution 1

*/



const endCorona = (r, n, a) => Math.ceil(a / (r - n));

const endCorona = (recovers, newCases, activeCases) =>
    Math.ceil(activeCases / (recovers - newCases))



function endCorona(recovers, newCases, activeCases) {
    var out = 0;
    for (i = activeCases; i > 0; i = i - (recovers - newCases)) {
        out++;
    }
    return out;
}


/*  

Solution 2

*/

function endCorona(recovers, newCases, activeCases) {
    let days = 0
    while (activeCases > 0) {
        activeCases += newCases - recovers
        days++
    }
    return days
}

/*  

Solution 3

*/


function endCorona(recovers, newCases, activeCases) {
    let a = recovers - newCases;
    let b = Math.ceil(activeCases / a);
    return Math.round(b);