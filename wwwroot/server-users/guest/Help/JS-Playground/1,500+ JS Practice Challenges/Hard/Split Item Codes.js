/*

Split Item Codes

You have an array of item codes with the following format: "[letters][digits]"

Create a function that splits these strings into their alphabetic and numeric parts.

Examples
splitCode("TEWA8392") ➞ ["TEWA", 8392]

splitCode("MMU778") ➞ ["MMU", 778]

splitCode("SRPE5532") ➞ ["SRPE", 5532]


*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


function splitCode(item) {
    const arr = item.match(/([A-Z]+)(\d+)/);
    return [arr[1], +arr[2]];
}






//#############################################################
//#  SOLUTION 2  
//#############################################################


const splitCode = i => [i.match(/\D/g).join(''), +i.match(/\d/g).join('')]





const splitCode = item => [].concat(item.match(/[A-Z]+/), Number(item.match(/\d+/)));




//#############################################################
//#  SOLUTION 3
//#############################################################


function splitCode(item) {
    return [(item.match(/[a-z]/ig) || []).join(""),
        Number(item.match(/[0-9]/g).join(""))
    ]
}






//#############################################################
//#  SOLUTION 4
//#############################################################


function splitCode(item) {
    let index = item.split('').findIndex(c => !isNaN(c))
    return [item.substring(0, index), Number(item.substring(index))]
}






//#############################################################
//#  SOLUTION 5
//#############################################################



function splitCode(item) {
    return [item.split("").filter(x => Number.isNaN(x * 1) == true).join(""),
        Number(item.split("").filter(x => Number.isNaN(x * 1) == false).join(""))
    ];
}




//#############################################################
//#  SOLUTION 6
//#############################################################



function splitCode(item) {
    return [
        [...item].map(el => el.match(/[a-zA-Z]+/g)).join(''),
        Number([...item].map(el => el.match(/[0-9]+/g)).join(''))
    ];
}