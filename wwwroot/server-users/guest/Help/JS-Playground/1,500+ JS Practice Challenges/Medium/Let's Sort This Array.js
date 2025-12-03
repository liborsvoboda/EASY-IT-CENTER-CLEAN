/*

Let's Sort This Array!

Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

"Asc" returns a sorted array in ascending order.
"Des" returns a sorted array in descending order.
"None" returns an array without any modification.

Examples
ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]

ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]

ascDesNone([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#  SOLUTION 1 

const ascDesNone = (a, d) => a.sort((a, b) => d === 'Asc' ? a - b : d === 'Des' ? b - a : 1)





//#############################################################
//#  SOLUTION 2  

const ascDesNone = (arr, s) => s === 'Asc' ? arr.sort((a, b) => a - b) :
    s === 'Des' ? arr.sort((a, b) => b - a) : arr;




//#############################################################
//#  SOLUTION 3


const ascDesNone = (arr, str) => {
    if (str === 'Asc') return arr.sort((a, b) => a - b);
    if (str === 'Des') return arr.sort((a, b) => b - a);
    return arr;
};






//#############################################################
//#  SOLUTION 4



const sort = {
    "Asc": (arr) => arr.sort((a, b) => a - b),
    "Des": (arr) => arr.sort((a, b) => b - a),
    "None": (arr) => arr
}

function ascDesNone(arr, str) {
    return sort[str](arr)
}


//#############################################################
//#  SOLUTION 5


function ascDesNone(arr, str) {
    return (str === 'Asc') ? arr.sort((a, b) => a - b) :
        (str === 'Des') ? arr.sort((a, b) => b - a) : arr
}




//#############################################################
//#  SOLUTION 6



function ascDesNone(arr, str) {
    if (str === 'None') {
        return arr;
    } else if (str === 'Asc') {
        return arr.sort(function(a, b) {
            return a - b
        })
    } else if (str === 'Des') {
        return arr.sort(function(a, b) {
            return b - a
        })
    }
}

/*

Create a function that takes an array of numbers arr, 
a string str and return an array of numbers as per the following rules:
"Asc" returns a sorted array in ascending order.
"Des" returns a sorted array in descending order.
"None" returns an array without any modification.



Examples
ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]
ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]
ascDesNone([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]

*/




//#############################################################
//#  SOLUTION 6


function ascDesNone(arr, str) {
    return str == "Asc" ? arr.sort((a, b) => a - b) :
        str == "Des" ? arr.sort((a, b) => b - a) :
        arr;
}





//#############################################################
//#  SOLUTION 7


const ascDesNone = (arr, str) =>
    arr.sort((a, b) => str === 'Asc' ? a - b : str === 'Des' ? b - a : '');






//#############################################################
//#  SOLUTION 8