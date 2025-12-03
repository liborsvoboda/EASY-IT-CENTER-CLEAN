/*

The Museum of Incredibly DULL Things

A museum wants to get rid of some exhibitions. Katya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed.

Create a function that takes an array of integers and removes the smallest value.

Examples
removeSmallest([1, 2, 3, 4, 5] ) ➞ [2, 3, 4, 5]

removeSmallest([5, 3, 2, 1, 4]) ➞ [5, 3, 2, 4]

removeSmallest([2, 2, 1, 2, 1]) ➞ [2, 2, 2, 1]

Notes
Don't change the order of the left over items.
If you get an empty array, return an empty array: [] ➞ [].
If there are multiple items with the same value, remove item with lower index (3rd example).

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function removeSmallest(arr) {
    let lowest = Math.min(...arr);
    arr.splice(arr.indexOf(lowest), 1);
    return arr;
}






//#############################################################
//#  SOLUTION 2  
//#############################################################



removeSmallest = a => (a.splice(a.indexOf(Math.min(...a)), 1), a)







//#############################################################
//#  SOLUTION 3
//#############################################################



function removeSmallest(arr) {
    if (arr.length > 1) {
        var min = arr.reduce(function(a, b) {
            return Math.min(a, b);
        });
    } else {
        min = arr[0]
    }
    arr.splice(arr.indexOf(min), 1);
    return arr
}






//#############################################################
//#  SOLUTION 4
//#############################################################



function removeSmallest(arr) {

    if (arr != null && arr.length > 0) {
        var x = arr.indexOf(Math.min.apply(Math, arr));
        delete arr[x];
        return arr.filter(x => x != null);
    }
    return [];
}






//#############################################################
//#  SOLUTION 5
//#############################################################



function removeSmallest(arr) {
    let smallestNum = Math.min(...arr);
    let numberRemoved = 0;
    return arr.filter(item => {
        numberRemoved = item === smallestNum ? numberRemoved + 1 : numberRemoved;
        return numberRemoved > 1 ? true : numberRemoved < 2 && item === smallestNum ? false : true;
    })
}






//#############################################################
//#  SOLUTION 6
//#############################################################



function removeSmallest(arr) {
    if (!arr || arr.length === 0) { return arr; }

    const lowest = arr.reduce((sum, value, index) => {
        if (value < sum.value) {
            return { value, index };
        } else {
            return sum;
        }
    }, { index: 0, value: Number.POSITIVE_INFINITY });

    return arr.filter((value, index) => (index != lowest.index));

}






//#############################################################
//#  SOLUTION 7
//#############################################################


function removeSmallest(arr) {
    if (!arr || !arr.length) return [];
    const min = Math.min.apply(null, arr);
    const idx = arr.findIndex(x => x === min);
    if (idx >= 0) arr.splice(idx, 1);
    return arr;
}