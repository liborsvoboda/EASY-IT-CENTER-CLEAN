/*  

Sherlock and Squares

Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints (note that a square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25, 36, 49).

For example, the range is a=24 and b=49, inclusive. There are three square integers in the range: 25, 36 and 49.

Complete the squares function that returns an integer representing the number of square integers in the inclusive range from a to b.

Examples
squares(3, 9) ➞ 2

squares(17, 24) ➞ 0

squares(1, 1000000000) ➞ 31622

Notes
Your solution must solve each problem in 1 second or less.
*/





//#############################################################
//#                        MY SOLUTION    1                 #
//#############################################################


squares = (x, y) => Math.floor(Math.sqrt(y)) - Math.floor(Math.sqrt(x)) + (((Math.sqrt(x)) % 1 == 0) ? 1 : 0)



//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function squares(a, b) {
    //keep track of how many squares
    const output = [];
    //iterate through every number 1 through b
    let counter = 1;
    while (counter < b) {
        //if num squared is less than b, push num squared to output
        //also test if num squared is less than or equal to a
        if (counter ** 2 <= b && counter ** 2 >= a) output.push(counter ** 2);
        //increment counter at end of each loop
        counter += 1;
    };
    //return output length
    return output.length
}



//#############################################################
//#                        MY SOLUTION    3                    #
//#############################################################


function squares(a, b) {
    let arr = [],
        limit1 = 0,
        limit2 = 0;
    limit1 = Number.isInteger(Math.sqrt(a)) ? Math.sqrt(a) : Math.ceil(Math.sqrt(a))
    limit2 = Number.isInteger(Math.sqrt(b)) ? Math.sqrt(b) : Math.floor(Math.sqrt(b))
    return limit2 - limit1 < 0 ? 0 : limit2 - limit1 + 1
}




//#############################################################
//#                        MY SOLUTION    4                    #
//#############################################################


function squares(a, b) {
    let startingSqrt = 0;
    let endingSqrt = 0;
    let st = Math.sqrt(a);
    let end = Math.sqrt(b);

    if (Math.pow(Math.ceil(st), 2) >= a && Math.pow(Math.ceil(st), 2) <= b) {
        startingSqrt = Math.ceil(st);
    } else if (Math.pow(Math.floor(st), 2) >= a && Math.pow(Math.floor(st), 2) <= b) {
        startingSqrt = Math.floor(st);
    }

    if (Math.pow(Math.ceil(end), 2) <= b) {
        endingSqrt = Math.ceil(end);
    } else if (Math.pow(Math.floor(end), 2) <= b && Math.pow(Math.floor(end), 2) >= a) {
        endingSqrt = Math.floor(end);
    }

    return (endingSqrt != 0 && startingSqrt != 0) ? (endingSqrt - (startingSqrt - 1)) : 0;
}