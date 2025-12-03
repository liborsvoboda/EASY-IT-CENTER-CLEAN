/*
for (initialization; condition; final expression) {
    // code to be executed
}
 */

// digits from 0 to 9
for (var i=0; i<10; i++) {
    console.log(i);
}

console.log("***");

// digits from 1 to 10
for (var i=1; i<11; i++) {
    console.log(i);
}
/*
// We can do the same manually:
var i = 1;
// Manually increment variable by 1 four times
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
 */

console.log("***");


/*
Using "for" for modify array
 */

/*
push() - add element
pop() - substract element
*/

var myArray = [];
// makes array of digits
for (i=0; i<10; i++) {
    myArray.push(i);
    console.log(myArray);       // -> print the array - in "i" steps, as it was created
}

console.log("***");

// makes array of digits
for (i=0; i<10; i++) {
    myArray.pop(i);
    console.log(myArray);       // -> print the array - in "i" steps, as it was created (destroyed)
}

console.log("***");
/*
FOR .. IN
using "for" for access each of the property names or values
*/

var catInfo = {
    name: "Zoja",
    age: 2,
    color: "black"
}

// print property names of object
for (attribute in catInfo) {
    console.log(attribute);
}
console.log("***");
// print property values of object
for (attribute in catInfo) {
    console.log(catInfo[attribute]);
}
console.log("***");
// print names and values of object properties
for (attribute in catInfo) {
    console.log(`${attribute}`.toUpperCase() + `: ${catInfo[attribute]}`);
}
console.log("***");
/*
FOR .. OF
using "for" for iterating over object properties, but to iterate over iterable objects like arrays and strings
*/

var cats = [ "black", "white", "red" ];

// Print out each type of shark
for (var cat of cats) {
    console.log(cat);
}
console.log("***");

/*
entries() method
returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 */
console.log(cats.entries());    // -> Array Iterator {}
// Loop through both index and element -> index + value
for (let [index, cat] of cats.entries()) {
    console.log(index, cat);
}
console.log("***");

/*
iterate String
 */
var catName = "zoj-broj";
for (var cat of catName) {
    console.log(cat);
}