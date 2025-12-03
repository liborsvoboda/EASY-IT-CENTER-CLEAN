/*

Decimal to Binary Using Stack

Create a function that takes a decimal number and converts it to a binary number using Stack. The Stack is created for you.

Examples
toBinary(12) ➞ 1100

toBinary(0) ➞ 0

toBinary(101) ➞ 1100101

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function Stack() {
    let data = [];
    this.push = function(item) {
        data.push(item);
    };
    this.isEmpty = function() {
        return !data.length;
    };
    this.pop = function() {
        return data.pop();
    };
    this.peek = function() {
        return data[data.length - 1];
    };
    this.size = function() {
        return data.length;
    };
}


function toBinary(num, x = 0) {
    return num && toBinary(~~(num / 2), x + 1) + (num % 2) * 10 ** x

}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function Stack() {
    let data = [];
    this.push = function(item) {
        data.push(item);
    };
    this.isEmpty = function() {
        return !data.length;
    };
    this.pop = function() {
        return data.pop();
    };
    this.peek = function() {
        return data[data.length - 1];
    };
    this.size = function() {
        return data.length;
    };
}

function toBinary(num) {
    let stack = new Stack();
    let bin = [];
    while (num > 0) {
        bin[bin.length] = num % 2;
        num >>= 1;
    }
    return +bin.reverse().join('')
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function Stack() {
    let data = [];
    this.push = function(item) {
        data.push(item);
    };
    this.isEmpty = function() {
        return !data.length;
    };
    this.pop = function() {
        return data.pop();
    };
    this.peek = function() {
        return data[data.length - 1];
    };
    this.size = function() {
        return data.length;
    };
    this.getData = () => data
}

function toBinary(num) {
    let stack = new Stack();
    while (num > 0) {
        stack.push(num % 2)
        num = Math.floor(num / 2)
    }
    return Number(stack.getData().reverse().join(''))
}