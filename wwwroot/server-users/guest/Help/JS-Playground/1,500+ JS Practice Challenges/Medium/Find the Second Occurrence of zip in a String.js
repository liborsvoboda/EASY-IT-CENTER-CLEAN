/*

Find the Second Occurrence of "zip" in a String

Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.

Examples
findZip("all zip files are zipped") ➞ 18

findZip("all zip files are compressed") ➞ -1

Notes
Uppercase "Zip" is not the same as lowercase "zip".

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 


function findZip(str) {
    return str.indexOf("zip", str.indexOf("zip") + 1)
}


//#  SOLUTION 2  


function findZip(str) {
    let arr = str.match(/zip/g);
    if (arr.length < 2) {
        return -1;
    } else {
        return str.lastIndexOf("zip");
    }
}


//#  SOLUTION 3


const findZip = str => {
    const word = 'zip';
    return str.indexOf(word, str.indexOf(word) + word.length);
};



//#  SOLUTION 4

function findZip(str) {
    return (str.lastIndexOf('zip') == str.indexOf('zip')) ? -1 : str.lastIndexOf('zip');
}


//#  SOLUTION 5


function findZip(str) {
    const zip = 'zip'
    const index = str.indexOf(zip) + zip.length
    const secIndex = str.slice(index).indexOf(zip)
    return secIndex + (secIndex > -1 ? index : 0)
}