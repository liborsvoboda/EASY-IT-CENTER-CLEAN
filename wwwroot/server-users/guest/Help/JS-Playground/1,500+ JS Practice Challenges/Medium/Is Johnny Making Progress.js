/*



Is Johnny Making Progress?
To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

Examples
progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)

progressDays([10, 11, 12, 9, 10]) ➞ 3

progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

progressDays([9, 9])  ➞ 0
Notes
Running the same number of miles as last week does not count as a progress day.

*/






/*  Solution 1   */


function progressDays(runs) {
    return runs.filter((e, i, a) => e < a[i + 1]).length;
}


/*  Solution 2   */


const progressDays = (runs) => runs.reduce((acc, next, index, arr) => arr[index] - arr[index - 1] > 0 ? acc + 1 : acc, 0)


/*  Solution 3   */

function progressDays(runs) {
    var days = 0;
    for (i = 1; i < runs.length; i++) {
        if (runs[i] > runs[i - 1]) {
            days++;
        }
    }
    return days;
}




/*  Solution 4   */


const progressDays = runs =>
    runs.slice(1).reduce((progress, run, i) => {
        const prevRun = runs[i];
        return progress + (run > prevRun ? 1 : 0);
    }, 0);






function progressDays(runs) {
    let progress = 0
    runs.forEach((num, i) => num < runs[i + 1] ? progress++ : null)
    return progress
}




function progressDays(runs) {
    return runs.filter((run, i) => runs[i + 1] > run).length;
}




const progressDays = runs => {
    let a = 0;
    for (i = 0; i < runs.length; i++) {
        if (runs[i + 1] - runs[i] > 0) a++
    }
    return a;
}



function progressDays(runs) {
    let days = 0;
    for (let i = 1; i < runs.length; i++) {
        if (runs[i] > runs[i - 1]) {
            days++;
        }
    }
    return days;
}




function progressDays(runs) {
    let x = []
    for (i = 0; i < runs.length; i++) {
        if (runs[i] < runs[i + 1]) { x.push(1) }
    }
    return x.length
}




function progressDays(runs) {
    let days = 0;
    for (let i = 0; i < runs.length; i++) {
        if (runs[i] < runs[i + 1]) {
            days++;
        }
    }
    return days;
}




function progressDays(runs) {
    return runs.filter((val, index, arr) => arr[index + 1] - arr[index] > 0).length
}