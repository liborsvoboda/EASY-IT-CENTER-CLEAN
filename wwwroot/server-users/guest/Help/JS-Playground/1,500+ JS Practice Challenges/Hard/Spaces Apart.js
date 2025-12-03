/*

Spaces Apart
Create a function that takes an arr and returns the total amount of space between the two "1"s.

Examples
spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]) ➞ 14

spaceApart(["1", 9, 20, 38, "1"]) ➞ 67

spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]) ➞ "invalid"

Notes
Return "invalid" if a negative number exists inside arr or if there is more/less than two "1"s. Ignore any other string inside arr.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function spaceApart(arr) {
    if (arr.some(el => el < 0)) return 'invalid'
    arr = arr.slice(arr.indexOf('1') + 1, arr.lastIndexOf('1')).filter(el => typeof(el) == typeof(1))
    return arr.length != 0 ? arr.reduce((a, b) => a + b) : 'invalid'
}






//#############################################################
//#  SOLUTION 2  
//#############################################################


function spaceApart(arr) {
    return arr.some(x => x < 0) || arr.filter(x => x === "1").length != 2 ? "invalid" : arr.slice(arr.indexOf("1") + 1, arr.lastIndexOf("1")).reduce((a, v) => a + (typeof v == "number" ? v : 0), 0)
}





//#############################################################
//#  SOLUTION 3
//#############################################################


function spaceApart(arr) {
    let count = 0
    let isNeg = false
    for (i of arr) {
        if (i === '1') count++;
        if (i < 0) isNeg = true;
    }

    if (isNeg || count <= 1 || count > 2) return 'invalid';

    let section = arr.slice(arr.indexOf('1'), arr.lastIndexOf('1')).filter(x => typeof x === 'number');
    return section.reduce((a, b) => a + b, 0)

}




//#############################################################
//#  SOLUTION 4
//#############################################################


function spaceApart(arr) {
    if (arr.some(x => x < 0)) return 'invalid';
    if (arr.filter(x => x === '1').length !== 2) return 'invalid';

    const [start, end] = arr
        .map((x, i) => [x, i])
        .filter(([x, i]) => x === '1')
        .map(([_, i]) => i);

    return arr.slice(start + 1, end)
        .reduce((acc, cur) => (typeof cur == 'number') ? acc + cur : acc, 0);
}