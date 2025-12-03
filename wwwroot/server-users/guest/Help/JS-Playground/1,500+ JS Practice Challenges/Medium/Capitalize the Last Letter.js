/*

Capitalize the Last Letter

Create a function that capitalizes the last letter of every word.

Examples
capLast("hello") ➞ "hellO"

capLast("My Name Is Edabit") ➞ "MY NamE IS EdabiT"

capLast("HELp THe LASt LETTERs CAPITALISe") ➞ "HELP THE LAST LETTERS CAPITALISE"

Notes
There won't be any cases of punctuation in the tests.

*/


//#############################################################
//#  SOLUTION 1 
//#############################################################


const capLast = str => str.replace(/\w\b/g, match => match.toUpperCase());





//#############################################################
//#  SOLUTION 2  
//#############################################################


function capLast(txt) {
    const cap = s => s.slice(0, -1) + s.slice(-1).toUpperCase();
    return txt.split(' ').map(cap).join(' ');
}





//#############################################################
//#  SOLUTION 3
//#############################################################


function capLast(txt) {
    return txt.split(' ').map(str => {
        const split = str.split('');
        return [split.slice(0, split.length - 1).join(''), split[str.length - 1].toUpperCase()].join('')
    }).join(' ')
}



//#############################################################
//#  SOLUTION 4
//#############################################################




const capLast = (txt) => txt
    .split(' ')
    .map(str => str.slice(0, -1) +
        str.slice(-1).toUpperCase())
    .join(' ');




//#############################################################
//#  SOLUTION 5
//#############################################################


function capLast(txt) {
    return txt.split(' ').map(word => word.slice(0, -1) + word[word.length - 1].toUpperCase()).join(' ')
}




//#############################################################
//#  SOLUTION 6
//#############################################################


function capLast(txt) {
    return txt.split(" ").map(function(word) {
        var arr = word.split("");
        arr[arr.length - 1] = arr[arr.length - 1].toUpperCase();

        return arr.join("");
    }).join(" ");



}