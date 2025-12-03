/*  

Nearest Chapter

Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

Examples
nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) ➞ "Chapter 2"


nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) ➞ "The End?"


nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) ➞ "Chapter 1b"


Notes
All page numbers in the dictionary will be valid integers.

*/




//#############################################################
//#                        MY SOLUTION    1                 #
//#############################################################



function nearestChapter(chapt, page) {
    return Object.entries(chapt).sort(([k, v], [l, w]) => Math.abs(v - page) - Math.abs(w - page) || w - v)[0][0];
}




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function nearestChapter(chapt, page, temp = []) {
    let chapterKeys = Object.keys(chapt);
    chapterKeys.forEach(x => {
        temp.push(Math.abs(page - chapt[x]));
    })
    return chapterKeys[temp.slice(temp.findIndex(j => j === Math.min(...temp)) + 1).findIndex(j => j === Math.min(...temp)) + temp.findIndex(j => j === Math.min(...temp)) + 1]
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



function nearestChapter(chapt, page) {
    const vals = Object.values(chapt);
    const difPages = vals.map(v => Math.abs(v - page));

    return (new Set(difPages).size == vals.length) ?
        Object.keys(chapt)[difPages.indexOf(Math.min(...difPages))] :
        Object.keys(chapt)[vals.indexOf(Math.max(...vals))];
}