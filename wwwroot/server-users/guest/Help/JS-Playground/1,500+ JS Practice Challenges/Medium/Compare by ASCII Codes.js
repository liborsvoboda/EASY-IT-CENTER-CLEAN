/*

Compare by ASCII Codes

Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.

Examples
asciiSort(["hey", "man"]) ➞ "man"
// ["h", "e", "y"] ➞ sum([104, 101, 121]) ➞ 326
// ["m", "a", "n"] ➞ sum([109, 97, 110]) ➞ 316

asciiSort(["majorly", "then"]) ➞ "then"

asciiSort(["victory", "careless"]) ➞ "victory"

Notes
Both words will have strictly different ASCII sums.


*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const asciiSort = ([a, b]) => {
    let r = (t, c) => t + c.charCodeAt(0);
    return [...a].reduce(r, 0) < [...b].reduce(r, 0) ? a : b;
}






//#############################################################
//#  SOLUTION 2  
//#############################################################


function asciiSort(arr) {
    const count1 = arr[0].split("").reduce((a, v) => a + v.charCodeAt(0), 0);
    const count2 = arr[1].split("").reduce((a, v) => a + v.charCodeAt(0), 0);

    return count1 < count2 ? arr[0] : arr[1];
}







//#############################################################
//#  SOLUTION 3
//#############################################################


function asciiSort(arr) {
    let first = [];
    let sec = [];

    arr[0].split('').map(item => first.push(item.charCodeAt(0)));
    arr[1].split('').map(item => sec.push(item.charCodeAt(0)));

    if (first.reduce((a, b) => a + b) > sec.reduce((a, b) => a + b)) {
        return arr[1];
    }
    return arr[0];
}







//#############################################################
//#  SOLUTION 4
//#############################################################



function asciiSort(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr[0].length; i++) {
        sum1 += arr[0].charCodeAt(i)
    }
    for (let i = 0; i < arr[1].length; i++) {
        sum2 += arr[1].charCodeAt(i)
    }
    return sum1 < sum2 ? arr[0] : arr[1]
}





//#############################################################
//#  SOLUTION 5
//#############################################################


function asciiSort(arr) {
    var tArr = arr.map(
        x => x.split('').map(y => y.charCodeAt(0))
        .reduce((acc, cur) => acc + cur, 0));
    return arr[tArr.indexOf(Math.min(...tArr))]
}




//#############################################################
//#  SOLUTION 6
//#############################################################



function asciiSort(arr) {
    let word1 = arr[0];
    let word2 = arr[1];


    arr.forEach(function(word, index, arr) {


        let wordArr = word.split('');
        wordArr.forEach(function(char, index, wordArr) {
            wordArr[index] = char.charCodeAt(0);
        });
        arr[index] = wordArr.reduce((a, v) => a + v);
    });

    return arr[0] < arr[1] ? word1 : word2;
}




//#############################################################
//#  SOLUTION 7
//#############################################################


function asciiSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].split("").map(x => x.charCodeAt()).reduce((a, b) => a + b) <
            arr[i - 1].split("").map(x => x.charCodeAt()).reduce((a, b) => a + b)) {
            return arr[i];
        } else {
            return arr[i - 1];
        }
    }

}








//#############################################################
//#  SOLUTION 8
//#############################################################



function asciiSort(arr) {
    let word1 = arr[0].split('').map((letter, i) => arr[0].charCodeAt(i)).reduce((acc, curr) => acc + curr)
    let word2 = arr[1].split('').map((letter, i) => arr[1].charCodeAt(i)).reduce((acc, curr) => acc + curr)
    return word1 < word2 ? arr[0] : arr[1]
}