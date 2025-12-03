/*

Capitalize by ASCII
Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

Examples
asciiCapitalize("to be or not to be!") ➞ "To Be oR NoT To Be!"

asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"

asciiCapitalize("Oh what a beautiful morning.") ➞ "oH wHaT a BeauTiFuL moRNiNg."
Notes

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */

function asciiCapitalize(str) {
    var map = Array.prototype.map;
    var a = map.call(str, function(x) {
        return x.charCodeAt(0) % 2 === 0 ? x.charAt(0).toUpperCase() : x.charAt(0).toLowerCase();
    });
    return a.join("");
}



function asciiCapitalize(str) {
    return [...str].map((letter, index, arr) => letter.charCodeAt(0) % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')
}





/*  Solution 2   */

const asciiCapitalize = s => [...s].map(x => x.charCodeAt(0) % 2 ? x.toLowerCase() : x.toUpperCase()).join("")


asciiCapitalize = s => s.replace(/./g, x => x[`to${x.charCodeAt(0)%2==0?'Upper':'Lower'}Case`]())



const asciiCapitalize = str => str.split('')
    .map(ch => ch.charCodeAt() % 2 === 0 ?
        ch.toUpperCase() : ch.toLowerCase()).join('')




/*  Solution 3   */