/*

Broken Keyboard

Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

findBrokenKeys(correct phrase, what you actually typed)
Examples
findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]


Notes
Broken keys should be ordered by when they first appear in the sentence.
Only one broken key per letter should be listed.
Letters will all be in lower case.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function findBrokenKeys(str1, str2) {
    return [...new Set(str1.split("").filter((a, index) => a !== str2[index]))];
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function findBrokenKeys(str1, str2) {
    return [...str1].filter((e, i) => e !== str2[i] && str1.indexOf(e) == i);
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const findBrokenKeys = (s1, s2) => [...new Set([...s1 + ''].filter((a, b) => a !== s2[b]))];



//#############################################################
//#  SOLUTION 4
//#############################################################


function findBrokenKeys(str1, str2) {
    var diff = {}
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            diff[str1[i]] = (diff[str1[i]] || 0) + 1;
        }
    }

    var broken = Object.keys(diff);
    return broken;

}

//findBrokenKeys("happy birthday", "hawwy birthday")// ➞ ["p"]

//findBrokenKeys("starry night", "starrq light") //➞ ["y", "n"]

//findBrokenKeys("beethoven", "affthoif5") //➞ ["b", "e", "v", "n"]