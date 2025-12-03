/* VARIABLE */
/* JavaScript typed values */
/* there is no types of variables -> typeof is give us a type of the value currently holding in variable */
/* !important -> JavaScript allows you to override the values of variables */
/* check if characters are valid for variables names -> https://mothereff.in/js-variables */
var a;
typeof a;           // or typeof(a) -> "undefined"

a = 'hello';        // override a
typeof a;           // -> "string"

a = 5;              // override a
typeof a;           // -> "number"

a = true;           // override a
typeof a;           // -> "boolean"

a = null;           // override a
typeof a;           // -> "object" (BUG in JS)

a = undefined;      // override a
typeof a;			// -> "undefined"

a = { b: "c" };     // override a
typeof a;			// -> "object"



/* OBJECT */
/* The object type refers to a compound value */
/* you can set properties that each hold their own values of any type */

var obj = {
    a: 'Hello',
    b: 5,
    c: true
};

/* getting properties from the object type */
/* https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Operatory_pami%C4%99ci */
/* object.property = object[“property”] */
/* in a JS object, all property keys are strings */

/* properties can either be accessed with bracket notation */
/* the key name can be any string; may contain spaces, it may start with a number and variable can be key name */
/* use bracket when:
    - the property name is contained in a variable, e.g. obj[foo],
    - the property name contains characters not permitted in identifiers, e.g. starts with a digit,
    or contains a space or dash (-), e.g. obj["my property"]
 */
obj["a"];	        // -> "Hello"
obj["b"];	        // -> 5
obj["c"];	        // -> true


obj[a];	            // -> undefined
                    //obj[b]; -> is not defined
                    //obj[c]; -> is not defined

/* properties can either be accessed with dot notation */
/* The key name must be a sequence of alphanumeric characters
(including an underscore _ and a dollar sign $) that does not start with a digit. */
/* looking for a key whose value is a string of whatever is after the dot */
obj.a;              // -> "Hello"
obj.b;              // -> 5
obj.c;              // -> true

/* dot notation always appeals to value of variable in object */
/* bracket notation first refers to value of the global variable (if it's define)
and if it isn't define - appeals to value of variable in object */
/* example -> 2_dot-vs-bracket.js */


/* ARRAY */
/* An array is an object. properties/keys (od any type) are hold in numerically indexed positions */
/* first element of arrays use 0 index! */

var array = [
    'Hello',
    5,
    true
];

array[0];       // -> "Hello"
array[1];       // -> 5
array[2];       // -> true
array.length;   // -> 3    (number of values)



/* FUNCTION */
/* Function is an object. */

function foo() {
    return 5;
}

foo.f = 'f';

typeof foo;     // -> "function"
typeof foo();   // -> "number"      (because function return number)
typeof foo.f;   // -> "string"      (because foo.f = 'f' and it's a string)