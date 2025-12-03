/*

Tidy Title and Author Strings

You have an array of strings, each consisting of a book title and an author's name.

To illustrate:

[
  ["   Death of a Salesman - Arthur Miller    "],
  ["   Macbeth - William Shakespeare    "],
  ["    A Separate Peace - John Knowles     "],
  [" Lord of the Flies - William Golding"],
  ["A Tale of Two Cities - Charles Dickens"]
]
Create a function that takes an array like the one above and transforms it into the same format as the one below:

[
  ["Death of a Salesman", "Arthur Miller"],
  ["Macbeth", "William Shakespeare"],
  ["A Separate Peace", "John Knowles"],
  ["Lord of the Flies", "William Golding"],
  ["A Tale of Two Cities", "Charles Dickens"]
]
Examples
tidyBooks([
  "     The Catcher in the Rye - J. D. Salinger    ",
  "    Brave New World - Aldous Huxley   ",
  "    Of Mice and Men - John Steinbeck    "
]) ➞ [
  "The Catcher in the Rye", "J. D. Salinger",
  "Brave New World", "Aldous Huley",
  "Of Mice and Men", "John Steinbeck"
]

Notes
Some of these entries have excess white space. Remove this white space in your final output.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function tidyBooks(arr) {
    return arr.map(a => a.trim().split(" - "))
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function tidyBooks(arr) {
    return arr.map(function(el, i) {
        var a = el.split(/\-/);
        a[0] = a[0].replace(/^\s*|\s*$/g, '');
        a[1] = a[1].replace(/^\s*|\s*$/g, '');
        return a;
    });
}




//#############################################################
//#  SOLUTION 3
//#############################################################



const tidyBooks = (arr) => arr.reduce((acc, cv) => {
    let temp = cv.split('-');
    acc.push(temp.map(x => x.trim()))
    return acc;
}, []);




//#############################################################
//#  SOLUTION 4
//#############################################################


const tidyBooks = arr => arr.map(x => x.replace(/^\s+|\s+$/gm, "").split("-").map(x => x.replace(/^\s+|\s+$/gm, "")))




//#############################################################
//#  SOLUTION 5
//#############################################################


function tidyBooks(arr) {
    return arr.map(x => x.split("-").map(c => c.split(" ").filter(x => x !== "").join(" ")));
}