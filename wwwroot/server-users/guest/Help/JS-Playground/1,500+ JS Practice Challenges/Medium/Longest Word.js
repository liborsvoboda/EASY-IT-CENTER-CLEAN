/*

Longest Word

Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest, return the word closest to the start of the sentence. Characters such as apostophe, commas, periods, etc count as letters (e.g. O'Connor is 8 characters long).

Examples
longestWord("Hello darkness my old friend") ➞ "darkness"

longestWord("Hello there mate") ➞ "Hello"

longestWord("Kayla's toy is plastic") ➞ "Kayla's"

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


const longestWord = sentence => (
    sentence.split(' ').sort((a, b) => b.length - a.length)[0]
);



//#############################################################
//#  SOLUTION 2  
//#############################################################


const longestWord = (sentence) => sentence.split(' ').sort((a, b) => b.length - a.length)[0];


//#############################################################
//#  SOLUTION 3
//#############################################################


function longestWord(sentence) {
    return sentence.split(' ').reduce((p, c) => c.length > p.length ? c : p, '')
}


//#############################################################
//#  SOLUTION 4
//#############################################################


function longestWord(s) {
    var ans = ""
    s.split(" ").map(x => {
        if (x.length > ans.length) {
            ans = x
        }
    })
    return ans
}