/*

Changing Mixed Types

Create a function that changes all the elements in an array as follows:

Add 1 to all even integers, nothing to odd integers.
Concatenates "!" to all strings and make the first letter of the word a capital letter.
Changes all boolean values to its opposite.
Examples
changeTypes(["a", 12, true]) ➞ ["A!", 13, false]

changeTypes([13, "13", "12", "twelve"]) ➞ [13, "13!", "12!", "Twelve!"]

changeTypes([false, "false", "true"]) ➞ [true, "False!", "True!"]

Notes

There won't be any float values.
You won't get strings with both numbers and letters in them.
Although the task may be easy, try keeping your code as clean and as readable as possible!




*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


const changeTypes = arr =>
    arr.map(el => typeof el === 'string' ? el.charAt(0).toUpperCase() + el.slice(1) + '!' :
        typeof el === 'boolean' ? !el :
        el % 2 === 0 ? el += 1 : el);








//#############################################################
//#  SOLUTION 2  
//#############################################################


function changeTypes(arr) {
    let newArr = arr.map(el => {
        if (typeof(el) === 'string') {
            return el.charAt(0).toUpperCase() + el.slice(1) + '!';
        } else if (typeof(el) === 'number') {
            if (el % 2 === 0) {
                return el + 1;
            } else {
                return el;
            }
        } else if (typeof(el) === 'boolean') {
            return !el;
        }
    })
    return newArr;
}









//#############################################################
//#  SOLUTION 3
//#############################################################



function changeTypes(arr) {
    let newArr = arr.map(element => {
        if (typeof element === 'number') {
            if (element % 2 === 0) {
                return element + 1;
            } else {
                return element;
            }
        } else if (typeof element === 'string') {
            return element.charAt(0).toUpperCase() + element.slice(1) + "!";
        } else if (typeof element === 'boolean') {
            return element ? false : true;
        }
    });
    return newArr;
}




//Add 1 to all even integers, nothing to odd integers.
//Concatenates ! to all strings and capitalises them.
//Changes all boolean values to its opposite.










//#############################################################
//#  SOLUTION 4
//#############################################################



function changeTypes(arr) {
    return arr.map(x => typeof(x) == "boolean" ? !x :
        typeof(x) == "string" ? x[0].toUpperCase() + x.slice(1) + "!" :
        x % 2 == 0 ? x + 1 : x);
}










//#############################################################
//#  SOLUTION 5
//#############################################################


const changeTypes = arr => arr.map(x =>
    typeof x === 'boolean' ? !x :
    typeof x === 'string' ? `${x[0].toUpperCase()}${x.slice(1)}!` :
    typeof x === 'number' ? x % 2 ? x : ++x :
    x
);











//#############################################################
//#  SOLUTION 6
//#############################################################


function changeTypes(arr) {
    return arr.map(el =>
        typeof el === "number" && el % 2 === 0 ? el + 1 :
        typeof el === "number" && el % 2 !== 0 ? el :
        typeof el === "string" ? el.charAt(0).toUpperCase() + el.slice(1) + "!" :
        el == true ? false : true
    )
}









//#############################################################
//#  SOLUTION 7
//#############################################################



const changeTypes = a => a.map(x => typeof x == 'string' ?
    x.charAt(0).toUpperCase() + x.slice(1) + '!' :
    typeof x == 'number' && x % 2 == 0 ?
    x + 1 :
    typeof x == 'boolean' ?
    !x :
    x)











//#############################################################
//#  SOLUTION 8
//#############################################################



function changeTypes(arr) {
    return arr.map(function(x) {
        switch (typeof(x)) {
            case 'number':
                if (x % 2) return x;
                return x + 1;
            case 'string':
                return x[0].toUpperCase() + x.substr(1) + "!";
            case 'boolean':
                return !x;
        }
    })
}










//#############################################################
//#  SOLUTION 9
//#############################################################


function changeTypes(arr) {
    console.log("Input: ", arr);
    var outputArray = [];

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (typeof(value) === "number") {
            value % 2 === 0 ? outputArray.push(value + 1) : outputArray.push(value);
        } else if (typeof(value) === "boolean") {
            outputArray.push(!value);
        } else {
            let newString = value[0].toUpperCase();
            value.length > 1 ? newString += value.slice(1) + "!" : newString += '!';
            outputArray.push(newString);
        }
    }



    return outputArray;
}