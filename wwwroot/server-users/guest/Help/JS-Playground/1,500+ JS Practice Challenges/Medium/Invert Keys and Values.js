/*

Invert Keys and Values

Write a function that inverts the keys and values of a dictionary.

Examples
invert({ "z": "q", "w": "f" })
➞ { "q": "z", "f": "w" }

invert({ "a": 1, "b": 2, "c": 3 })
➞ { 1: "a", 2: "b", 3: "c" }

invert({ "zebra": "koala", "horse": "camel" })
➞ { "koala": "zebra", "camel": "horse" }


*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#  SOLUTION 1 

const invert = o => Object.fromEntries(Object.entries(o).map(x => x.reverse()));


const invert = o => Object.fromEntries(Object.entries(o).map(a => [a[1], a[0]]))


//#############################################################
//#  SOLUTION 2  

const invert = o => {
    const inverted = {};
    Object.entries(o).forEach(i => inverted[i[1]] = i[0]);
    return inverted;
};




//#############################################################
//#  SOLUTION 3


function invert(o) {
    return Object.fromEntries(Object.entries(o).map(([key, val]) => [val, key]));
}






//#############################################################
//#  SOLUTION 4

function invert(o) {
    let new_obj = {};

    for (let prop in o) {
        if (o.hasOwnProperty(prop)) {
            new_obj[o[prop]] = prop;
        }
    }

    return new_obj;
}





//#############################################################
//#  SOLUTION 5


function invert(obj) {
    const newObj = {};
    Object.keys(obj).forEach(key => {
        const val = obj[key];
        newObj[val] = key;
    });
    return newObj;
}