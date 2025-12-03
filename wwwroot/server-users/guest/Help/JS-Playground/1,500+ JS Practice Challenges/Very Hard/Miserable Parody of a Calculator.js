/*  

Miserable Parody of a Calculator

Create a function that will handle simple math expressions. The input is an expression in the form of a string.

Examples
calculator("23+4") ➞ 27

calculator("45-15") ➞ 30

calculator("13+2-5*2") ➞ 5

calculator("49/7*2-3") ➞ 11


Notes
There will be no brackets in the input line.
No need to calculate mathematical functions (sin, cos, ln...).
There are no gaps in the expression.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################




// Miserable Parody of a calculator
function calculator(str) {

    var arr = toArray(str);
    var before, after, mul, len, ans;

    len = arr.length;
    for (var i = 0; i < len; i++) {

        if (arr[i] == "*" || arr[i] == "/") {
            before = arr[i - 1];
            after = arr[i + 1];

            if (arr[i] == "*") {
                mul = before * after;
            } else {
                mul = before / after;
            }

            arr.splice(i - 1, 3, mul);
            i -= 1;
        }
    }

    ans = arr[0];
    for (var i = 1; i < arr.length - 1; i += 2) {
        if (arr[i] == "+") {
            ans += arr[i + 1];
        } else {
            ans -= arr[i + 1];
        }
    }
    return ans;

}

function toArray(str) {
    var arr = [];
    var s = "";
    var bool, b = 0;
    if (str[0] == "-") {
        b = 1;
        bool = true;
    }

    for (var i = b; i < str.length; i++) {
        ch = str.charAt(i);
        if (!isNaN(ch)) {
            s += ch;
        } else {
            if (arr.length == 0 && bool) {
                arr.push(parseInt("-" + s));
            } else {
                arr.push(parseInt(s));
            }
            arr.push(ch);
            s = "";
        }
    }

    arr.push(parseInt(s));
    return arr;
}
/*
Calculator("23+4");
Calculator("45-15");
Calculator("13+2-5*2");
Calculator("49/7*2-3");
Calculator("2+2*2");
Calculator("5/2");
Calculator("-34/4");
Calculator("0+43-0+56*0");
Calculator("-14*2-37-0");
Calculator("0*0");
Calculator("4+2+3-5*2-8/4-12-0+3-14");
Calculator("9/2+9/4");
Calculator("56*27*18*12/2*0");
Calculator("34/4*0*45*7");
  
*/














//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################



const calculator = (str) => eval(str);