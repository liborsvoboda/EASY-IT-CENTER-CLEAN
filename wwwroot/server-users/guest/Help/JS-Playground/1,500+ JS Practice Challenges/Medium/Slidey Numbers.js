/*

Slidey Numbers

A number is considered slidey if for every digit in the number, the next digit from that has an absolute difference of one. Check the examples below.

Examples
isSlidey(123454321) ➞ true

isSlidey(54345) ➞ true

isSlidey(987654321) ➞ true

isSlidey(1123) ➞ false

isSlidey(1357) ➞ false

Notes
A number cannot slide properly if there is a "flat surface" (example #4), or has gaps (example #5).
All single digit numbers can be considered slidey numbers!

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


const isSlidey = (n, a = [...
    `${n}`
]) => (
    n < 10 || a.slice(1).every((d, i) => Math.abs(d - a[i]) === 1)
);



//#############################################################
//#  SOLUTION 2  
//#############################################################



function isSlidey(n) {
    n = n.toString();
    return [...n].slice(1).every((x, i) => Math.abs(x - n[i]) === 1);
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const isSlidey = n => [...
    `${n}`
].every((d, i, a) => !i || Math.abs(d - a[i - 1]) === 1);






//#############################################################
//#  SOLUTION 4
//#############################################################


const isSlidey = n => [...n + ''].map((x, i, a) => Math.abs(x - a[i - 1]))
    .slice(1)
    .every(x => x === 1);






//#############################################################
//#  SOLUTION 5
//#############################################################


const isSlidey = n => [...String(n)]
    .every((num, idx, arr) => !idx || [1, -1].includes(num - arr[--idx]))





//#############################################################
//#  SOLUTION 6
//#############################################################


const isSlidey = (num) => Array.of(...num + ``)
    .map(Number)
    .every((n, i, N) => i > 0 ? Math.abs(n - N[i - 1]) == 1 : true)






//#############################################################
//#  SOLUTION 7
//#############################################################


function isSlidey(n) {
    let num = String(n).split('').map(x => +x);
    return num.slice(1).every((x, i) => x === num[i] + 1 || x === num[i] - 1);
}




//#############################################################
//#  SOLUTION 8
//#############################################################


function isSlidey(n) {
    let cnt = 0;
    let arr = Array.from(String(n), Number);
    arr.map((item, i) => {
        if (i < arr.length) {
            Math.abs(item - arr[i + 1]) == 1 ? cnt++ : null
        }
    })
    return cnt == arr.length - 1;
}