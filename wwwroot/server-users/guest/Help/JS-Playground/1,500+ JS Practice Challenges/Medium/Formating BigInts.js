/*

Formating BigInts

Cryptocurrencies often have a lot of decimals. For example, the popular cryptocurrency Ethereum has 18 decimals.

When dealing with money, precision is important, you don't want to lose money because a number is losing precision. However, with JavaScript, normal numbers only can go up to 9007199254740991. To deal with this, Javascript now has BigInt for integers bigger than that.

However, in order to get back to a decimal number, the number needs to be formatted from a BigInt to a string with the right number of decimals.

Write a function that takes as arguments a BigInt and the desired amount of decimals and returns a string (not a number, as it will lose precision) with the correct amount of decimals.

Examples
formatBigInt(1938908490185852058934n, 18) ➞ "1938.908490185852058934"

formatBigInt(987654321987654321n, 6 ) ➞ "987654321987.654321"

formatBigInt(13902183984901849081284n, 12) ➞ "13902183984.901849081284"

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


let formatBigInt = (b, d, s = '' + b) => s.slice(0, -d) + '.' + s.slice(-d)


//#############################################################
//#  SOLUTION 2  
//#############################################################


const formatBigInt = (n, d) => {
    const a = [...n.toString()];
    a.splice(-d, 0, '.')
    return a.join('')
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const formatBigInt = (bigNumber, decimals) => bigNumber.toString().slice(0, bigNumber.toString().length - decimals) + "." + bigNumber.toString().slice(-decimals);


//#############################################################
//#  SOLUTION 4
//#############################################################


const formatBigInt = (bigNumber, decimals) => {
    const num = `${bigNumber}`;
    const length = num.length - decimals;
    return `${num.slice(0, length)}.${num.slice(length)}`;
}



//#############################################################
//#  SOLUTION 5
//#############################################################


formatBigInt = (n, d) => ("" + n).replace(new RegExp("(.*)(.{" + d + "})$"), "$1.$2")



function formatBigInt(bigNumber, decimals) {
    const string = bigNumber.toString();
    return string.split('').map(
        (ch, i) => string.length - i - 1 === decimals ? ch + '.' : ch
    ).join('');
}