/*


Is it an Object?
Create a function to check whether the given parameter is an Object or not.

Examples
isObject(function add(x,y) {return x + y;}) ➞ true

isObject(new Regex("^[a-zA-Z0-9]+$)","g")) ➞ true

isObject(null) ➞ false

isObject("") ➞ false
Notes
Inputs may be null, primitive wrapper types, dates.


*/






/*  Solution 1   */

function isObject(value) {
    return value instanceof Object;
}



/*  Solution 2   */

const isObject = value => (value !== null && (typeof value === "object" || typeof value === "function"));

const isObject = value => Boolean(value) && ['object', 'function'].includes(typeof value);

const isObject = value => value instanceof Object && /Date|Function|RegExp|Array|Object|Number/.test(value.__proto__.constructor.name);

const isObject = v => v instanceof Object;

const isObject = value => value instanceof Object;

const isObject = (value) => value instanceof Object;

const isObject = value => value instanceof Object;

/*  Solution 3   */

function isObject(value) {
    return value === null ? false : typeof value === "object";
}





/*  Solution 4   */

function isObject(value) {
    return value instanceof Object
}