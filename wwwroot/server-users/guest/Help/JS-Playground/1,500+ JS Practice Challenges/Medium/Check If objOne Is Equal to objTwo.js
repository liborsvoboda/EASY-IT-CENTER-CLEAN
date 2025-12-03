/*

Check If objOne Is Equal to objTwo

Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.

Example #1
// The first object parameter.

{
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com"
}

// The second object parameter.

{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}


➞ false
Example #2
// The first object parameter.

{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}

// The second object parameter.

{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}

➞ true


Notes
If you have a suggestion on how to make these instructions easier to understand, please leave a comment. Your feedback is greatly appreciated.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);


//#############################################################
//#  SOLUTION 2  
//#############################################################


function isEqual(objOne, objTwo) {
    return JSON.stringify(objOne) === JSON.stringify(objTwo);
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function isEqual(objOne, objTwo) {
    if (objOne instanceof Object) {
        var a = Object.keys(objOne);
        var b = Object.keys(objTwo);
        for (var i in a) {
            if (a[i] !== b[i]) return false;
        }
    }
    for (var i in objOne) {
        if ((objOne[i] instanceof Array) || (objOne[i] instanceof Object)) {
            if (!isEqual(objOne[i], objTwo[i])) return false;
        } else {
            if (objOne[i] !== objTwo[i]) return false;
        }
    }
    return true;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function isEqual(objOne, objTwo) {
    let keys1 = Object.keys(objOne);
    let keys2 = Object.keys(objTwo);

    if (keys1.length === keys2.length) {
        for (let i = 0; i < keys1.length; i++) {
            let k = keys1[i];
            if (k !== keys2[i]) return false;
            if (typeof objOne[k] !== typeof objTwo[k]) return false;
            if (typeof objOne[k] == "object") {
                if (!isEqual(objOne[k], objTwo[k])) return false;
            } else if (objOne[k] !== objTwo[k]) {

                return false;
            }
        }

        return true;
    } else {
        return false;
    }

}