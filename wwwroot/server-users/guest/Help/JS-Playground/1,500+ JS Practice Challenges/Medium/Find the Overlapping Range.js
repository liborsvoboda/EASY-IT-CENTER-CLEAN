/*

Find the Overlapping Range

For an array of ranges, find the maximum range that is contained in all the ranges. If there is no such range, return "No overlapping".

Examples
overlapping([[1, 7], [2, 8], [0, 4]]) ➞ [2, 4]

overlapping([[5, 10], [2, 15], [10, 12]]) ➞ [10, 10]

overlapping([[11, 18], [3, 7], [2, 20], [5, 16]]) ➞ "No overlapping"

Notes
Both ends are inclusive for all ranges.
*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


function overlapping(arr) {
    const min = Math.max(...arr.map(x => x[0]));
    const max = Math.min(...arr.map(x => x[1]));
    return min > max ? "No overlapping" : [min, max];
}






//#############################################################
//#  SOLUTION 2  
//#############################################################


function overlapping(arr) {
    let low = arr[0][0],
        high = arr[0][1];
    for (const [x, y] of arr.slice(1)) {
        (low = Math.max(low, x)), (high = Math.min(high, y));
    }
    return high >= low ? [low, high] : "No overlapping";
}








//#############################################################
//#  SOLUTION 3
//#############################################################


function overlapping(arr) {
    let [l, h] = [Math.max(...arr.map(v => v[0])), Math.min(...arr.map(v => v[1]))];
    return l > h ? 'No overlapping' : [l, h];
}







//#############################################################
//#  SOLUTION 4
//#############################################################




const overlapping = arr => {
    const [lower, upper] = arr.reduce(
        ([biggestMin, smallestMax], [min, max]) => [
            Math.max(min, biggestMin),
            Math.min(max, smallestMax),
        ], [-Infinity, Infinity]
    );
    return lower > upper ? 'No overlapping' : [lower, upper];
};





//#############################################################
//#  SOLUTION 5
//#############################################################




const overlapping = arr => {
    let [low, high] = arr.pop();
    for (let [a, b] of arr) {
        if (a > high || b < low) return 'No overlapping';
        low = Math.max(a, low);
        high = Math.min(b, high);
    }
    return [low, high];
}





//#############################################################
//#  SOLUTION 6
//#############################################################




const overlapping = arr => {
    const maxRange = arr.flat()
        .filter(ele => arr.every(ele2 => ele >= ele2[0] && ele <= ele2[1]))

    return maxRange.length ? [Math.min(...maxRange), Math.max(...maxRange)] : `No overlapping`
}





//#############################################################
//#  SOLUTION 7
//#############################################################





const overlapping = arr => {
    const [x, y] = arr.reduce((a, c) => [
        a[0] < c[0] ? c[0] : a[0],
        a[1] > c[1] ? c[1] : a[1]
    ])
    return x <= y ? [x, y] : "No overlapping"
}