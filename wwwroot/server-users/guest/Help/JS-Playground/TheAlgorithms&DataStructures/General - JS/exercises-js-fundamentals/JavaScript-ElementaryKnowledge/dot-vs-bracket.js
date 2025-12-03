var aFalse = 'aTrue';

var a = {
    aTrue: 'True',
    aFalse: 'False'
};

var x = a.aTrue;
console.log(x);     // -> True

var y = a.aFalse;
console.log(y);     // -> False


/* let the black magic happen! */


var q = a[aFalse];  // ! invokes a value of variable declared outside of the object
console.log(q);     // -> True

var z = a.aFalse;   // ! invokes a value of variable declared inside of the object
console.log(z);     // -> False

/* if you want to get the object values, you can use Object.values(object_name) */
Object.values(a);   // -> ["True", "False"] (array of values)
/* https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Object/values */

/* it's also good to know Object.entries() - it returns an array whose elements are arrays corresponding to the enumerable property */
Object.entries(a);  // -> [["aTrue", "True"], ["aFalse", "False"]] (array of arrays) :)
/* https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Object/entries */