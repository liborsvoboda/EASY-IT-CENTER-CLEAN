/*


Capitalize the First Letter of Each Word
Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

Examples
makeTitle("This is a title") ➞ "This Is A Title"

makeTitle("capitalize every word") ➞ "Capitalize Every Word"

makeTitle("I Like Pizza") ➞ "I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
Notes
You can expect a valid string for each test case.


*/






/*  Solution 1   */

let makeTitle = x => x.replace(/(^\w|\s\w)/g, x => x.toUpperCase());

let makeTitle = s => s.replace(/(^|\s)[a-z]/g, c => c.toUpperCase())

const makeTitle = str => str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');





/*  Solution 2   */

function makeTitle(str) {
    return str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
}



/*  Solution 3   */


function makeTitle(str) {
    str = str.split(" ");

    for (i = 0; i < str.length; i++) {
        str[i] = str[i].substring(0, 1).toUpperCase() + str[i].substring(1);
    }

    return str.join(" ");
}



/*  Solution 4   */


function makeTitle(str) {
    return str.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');
}