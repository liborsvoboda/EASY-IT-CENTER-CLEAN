/*

Pages and Chapters

Write a function that returns the closest chapter to the current page you are at. If two chapters are similarly close, return whichever has the higher page.

Examples
closestToPage({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) ➞ "Chapter 2"


closestToPage({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) ➞ "The End?"


closestToPage({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) ➞ "Chapter 1b"

Notes
All page numbers in the book are valid integers.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const closestToPage = (chapters, page) => {
    return Object.entries(chapters)
        .sort((a, b) => Math.abs(a[1] - page) - Math.abs(b[1] - page) || b[1] - a[1])[0][0]
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function closestToPage(chapters, page) {
    var keys = Object.keys(chapters)
    var val = Object.values(chapters).map(x => Math.abs(x - page))
    return keys[val.lastIndexOf(Math.min(...val))]
}


//#############################################################
//#  SOLUTION 3
//#############################################################


function closestToPage(chapters, page) {
    const closest = Object.values(chapters).reduce((a, c) => {
        let aDiff = Math.abs(a - page)
        let cDiff = Math.abs(c - page)
        if (aDiff === cDiff) return a > c ? a : c
        return cDiff < aDiff ? c : a
    })
    return Object.keys(chapters).find(key => chapters[key] === closest)
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function closestToPage(chapters, page) {
    let key = Object.keys(chapters)
    let value = Object.values(chapters).map(v => v > page ? v - page : page - v)
    let min = Math.min(...value)
    return value.indexOf(min) != value.lastIndexOf(min) ? key[value.lastIndexOf(min)] : key[value.indexOf(min)]
}



//#############################################################
//#  SOLUTION 5
//#############################################################


const closestToPage = (c, p) => {
    const objArr = Object.entries(c);
    const diff = objArr.map(x => Math.abs(p - x[1]));
    const min = Math.min(...diff);
    let minIndex = diff.map((x, i) => x === min ? i : '').filter(x => typeof x === 'number');
    minIndex = minIndex.length > 1 ? minIndex[minIndex.length - 1] : minIndex[0];

    return objArr.filter((_, i) => i === minIndex)[0][0];
}




//#############################################################
//#  SOLUTION 6
//#############################################################


const closestToPage = (chapters, page) => (
    Object.entries(chapters).sort(([, a], [, b]) => (
        (Math.abs(b - page) - Math.abs(a - page)) || (a - b)
    )).pop().shift()
);




//#############################################################
//#  SOLUTION 7
//#############################################################


const closestToPage = (c, p) => {
    return Object.keys(c).reduce(([s, n], k) => Math.abs(c[k] - p) <= n ? [k, Math.abs(c[k] - p)] : [s, n], ['', Math.max(...Object.values(c))])[0]
}



//#############################################################
//#  SOLUTION 8
//#############################################################




function closestToPage(chapters, page) {
    const pageCounts = Object.entries(chapters)
        .map(x => [...x, Math.abs(x[1] - page)]);

    const minPageCount = pageCounts.map(a => a[2]).sort((a, b) => a - b)[0];

    return pageCounts.filter(a => a[2] == minPageCount)
        .sort((a, b) => a[1] - b[1]).pop()[0];
}