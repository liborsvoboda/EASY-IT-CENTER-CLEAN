/*
Sort Names According to the Length of Their Last Names

Create a function that takes an array of names in the format "First Name Last Name" (e.g. "John Doe"), and returns an array of these names sorted by the length of their last names. If the length of multiple last names are the same, then proceed to sort alphabetically by last name.

Examples
lastNameLensort([
  "Jennifer Figueroa",
  "Heather Mcgee",
  "Amanda Schwartz",
  "Nicole Yoder",
  "Melissa Hoffman"
]) ➞ ["Heather Mcgee", "Nicole Yoder", "Melissa Hoffman", "Jennifer Figueroa", "Amanda Schwartz"]


Notes
If last names are of the same length, sort alphabetically by last name.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const lastNameLensort = names => (
    names.sort((...fullNames) => {
        const [a, b] = fullNames.map(s => s.split(' ').pop());
        return (a.length - b.length) || a.localeCompare(b, 'en-US');
    })
);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function lastNameLensort(names) {

    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return names.sort((a, b) => a.split(' ')[1].length === b.split(' ')[1].length ?
        alphabets.indexOf(a.split(' ')[1].split('')[0]) - alphabets.indexOf(b.split(' ')[1].split('')[0]) :
        a.split(' ')[1].length - b.split(' ')[1].length)

}



//#############################################################
//#  SOLUTION 3
//#############################################################


function lastNameLensort(names) {
    const f = n => n.split(" ")[1];
    return names.sort((a, b) => f(a).length - f(b).length || f(a).localeCompare(f(b)));
}


//#############################################################
//#  SOLUTION 4
//#############################################################


const lastNameLensort = (namesArr) => namesArr.map((name) => name.split(" "))
    .sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    })
    .sort((a, b) => a[1].length - b[1].length)
    .map(subArr => subArr.join(" "))