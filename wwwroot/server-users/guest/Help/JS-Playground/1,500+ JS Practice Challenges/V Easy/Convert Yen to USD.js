



/*

Convert Yen to USD
Create a function that can turn Yen (Japanese dollar) to USD (American dollar).

Examples
yenToUsd(1) ➞ 0.01

yenToUsd(500) ➞ 4.65

yenToUsd(649) ➞ 6.04
Notes
Each Yen to USD conversion is Yen / 107.5



*/






/*  Solution 1   */

const yenToUsd = yen => Number((yen / 107.5).toFixed(2));

const yenToUsd = yen => +(yen / 107.5).toFixed(2);

const yenToUsd = yen => Number((yen / 107.5).toFixed(2));

const yenToUsd = y => +(y/107.5).toFixed(2);

const yenToUsd = (yen) => +(yen / 107.5).toFixed(2);



/*  Solution 2   */

function yenToUsd(yen){
    return +(yen/107.5).toFixed(2);
}





/*  Solution 3   */


function yenToUsd(yen){
	return +(yen/107.5).toFixed(2)
}