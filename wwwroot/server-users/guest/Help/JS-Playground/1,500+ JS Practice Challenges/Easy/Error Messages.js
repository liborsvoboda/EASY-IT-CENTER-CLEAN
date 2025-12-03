/*  

Error Messages

Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

The input error will be 1 to 5:

1 >> "Check the fan"
2 >> "Emergency stop"
3 >> "Pump Error"
4 >> "c"
5 >> "Temperature Sensor Error"
For any other value, return "101" (you can use an if statment here).

Examples
error(1) ➞ "Check the fan: e1"

error(2) ➞ "Emergency stop: e2"

error(3) ➞ "Pump Error: e3"

Notes
Do this without using the switch or if statements.
*/




//#############################################################
//#    SOLUTION 1
//#############################################################


function error(n) {
    return {
        1: 'Check the fan: e1',
        2: 'Emergency stop: e2',
        3: 'Pump Error: e3',
        4: 'c: e4',
        5: 'Temperature Sensor Error: e5',
    }[n] || 101
}




//#############################################################
//#    SOLUTION 2
//#############################################################


const error = n => {
    if (n === 1) return `Check the fan: e${n}`;
    if (n === 2) return `Emergency stop: e${n}`;
    if (n === 3) return `Pump Error: e${n}`;
    if (n === 4) return `c: e${n}`;
    if (n === 5) return `Temperature Sensor Error: e${n}`;
    return 101;
};





//#############################################################
//#    SOLUTION 3
//#############################################################


function error(n) {
    return n === 1 ? "Check the fan: e1" :
        n === 2 ? "Emergency stop: e2" :
        n === 3 ? "Pump Error: e3" :
        n === 4 ? "c: e4" :
        n === 5 ? "Temperature Sensor Error: e5" :
        101
}





//#############################################################
//#    SOLUTION 4
//#############################################################


const error = n => `Check the fan: e1,Emergency stop: e2,Pump Error: e3,c: e4,Temperature Sensor Error: e5`
    .split `,` [n - 1] || 101;





//#############################################################
//#    SOLUTION 5
//#############################################################


let error = n => n == 1 ? "Check the fan: e1" :
    n == 2 ? "Emergency stop: e2" : n == 3 ? "Pump Error: e3" :
    n == 4 ? "c: e4" : n == 5 ? "Temperature Sensor Error: e5" : 101;





//#############################################################
//#    SOLUTION 6
//#############################################################


function error(n) {
    const arr = [
        "",
        "Check the fan: e1",
        "Emergency stop: e2",
        "Pump Error: e3",
        "c: e4",
        "Temperature Sensor Error: e5"
    ]
    return n > 5 || n < 1 ? 101 : arr[n];
}




//#############################################################
//#    SOLUTION 7
//#############################################################


function error(n) {
    const messages = {
        1: "Check the fan",
        2: "Emergency stop",
        3: "Pump Error",
        4: "c",
        5: "Temperature Sensor Error"
    }

    return n <= 5 && n >= 1 ? `${messages[n]}: e${n}` : 101
}




//#############################################################
//#    SOLUTION 8
//#############################################################


function error(n) {
    if (n === 1) {
        return "Check the fan: e1"
    } else if (n === 2) {
        return "Emergency stop: e2"
    } else if (n === 3) {
        return "Pump Error: e3"
    } else if (n === 4) {
        return "c: e4"
    } else if (n === 5) {
        return "Temperature Sensor Error: e5"
    } else {
        return 101;
    }
}