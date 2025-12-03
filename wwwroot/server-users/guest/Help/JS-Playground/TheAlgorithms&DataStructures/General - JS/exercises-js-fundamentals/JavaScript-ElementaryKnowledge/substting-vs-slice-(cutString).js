/* to cut strings we can use SUBSTRING or SLICE */

function removeChar(str){
    return str.substring(1, str.length-1);

};
console.log(removeChar('Monika'));

function removeCharSlice(str){
    return str.slice(1, -1);
};
console.log(removeCharSlice('Monika'));
