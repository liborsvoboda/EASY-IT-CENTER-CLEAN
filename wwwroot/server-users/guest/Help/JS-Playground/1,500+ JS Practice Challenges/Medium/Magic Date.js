/*

Magic Date

You are to read each part of the date into its own integer type variable. The year should be a 4 digit number. You can assume the user enters a correct date formatted d m yyyy (no error checking required).

Determine whether the entered date is a magic date. Here are the rules for a magic date:

mm * dd is a 1-digit number that matches the last digit of yyyy or
mm * dd is a 2-digit number that matches the last 2 digits of yyyy or
mm * dd is a 3-digit number that matches the last 3 digits of yyyy
The program should then display true if the date is magic, or false if it is not.

Examples
Magic("1 1 2011") ➞ true

Magic("4 1 2001") ➞ false

Magic("5 2 2010") ➞ true

Magic("9 2 2011") ➞ false

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const Magic = str => {
    const [day, month, year] = str.split(' ').map(Number);

    return String(year).endsWith(day * month);
};


//#  SOLUTION 2  

function Magic(str) {
    var intoArr = str.split(' ');
    return intoArr[2].endsWith(intoArr[0] * intoArr[1]) == true ? true : false
}

//#  SOLUTION 3

function Magic(str) {
    str = str.split(' ');
    return (((str[0] * str[1]).toString().length === 1) && ((str[0] * str[1]) == str[2].slice(3, str[2].length)) ||
        ((str[0] * str[1]).toString().length === 2) && ((str[0] * str[1]) == str[2].slice(2, str[2].length)) ||
        ((str[0] * str[1]).toString().length === 3) && ((str[0] * str[1]) == str[2].slice(1, str[2].length))
    );
}


//#  SOLUTION 4

function Magic(str) {
    var date = str.split(" ");
    var year = date[2];
    var n1 = parseInt(date[0]);
    var n2 = parseInt(date[1]);
    var n3 = (n1 * n2) + "";
    var r = new RegExp(n3 + "$");
    return r.test(year)
}



//#  SOLUTION 5


function Magic(str) {
    let args = str.split(' '),
        sum = args[0] * args[1],
        sumLength = sum.toString().length;

    return sum === parseInt(str.slice(-sumLength));
}


//#  SOLUTION 6


function Magic(str) {
    var month = Number(str.split(' ')[0]);
    var day = Number(str.split(' ')[1]);
    var year = Number(str.split(' ')[2]);
    return (month * day < 10 && month * day == Number(year.toString().split('')[3]) ||
        month * day < 100 && month * day == Number(year.toString().slice(2)) ||
        month * day < 1000 && month * day == Number(year.toString().slice(1))
    )
}


//#  SOLUTION 7


const Magic = str => {
    let arr = str.split(' ');
    let magicNum = parseInt(arr[0]) * parseInt(arr[1]);
    if (magicNum < 10) {
        return parseInt(arr[2].substr(3)) - magicNum === 0 ? true : false
    } else if (magicNum < 100) {
        return parseInt(arr[2].substr(2)) - magicNum === 0 ? true : false
    } else {
        return parseInt(arr[2].substr(1)) - magicNum === 0 ? true : false
    }
}




//#  SOLUTION 8


function Magic(str) {
    var arr = str.split(' ');
    var mm = parseInt(arr[0]);
    var dd = parseInt(arr[1]);
    var yyyy = parseInt(arr[2]);

    return (mm * dd) == yyyy % 10 || (mm * dd) == yyyy % 100 || (mm * dd) == yyyy % 1000;
}