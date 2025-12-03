/*

Don't Be in Such a Curry

One of the pratical use cases for currying a function in JavaScript is to reduce duplication:

function add5(num) {
  return num + 5
}

function add6(num) {
  return num + 6
}

add5(2) // 7
add6(3) // 9
Instead of having to create a new function for every new number we can just create a function that returns a new function and pass in the any number we want to add.

function add(add) {
  return function(num) {
    return num + add
  }
}

const add5 = add(5)
add5(2) // 7
const add6 = add(6)
add6(3) // 9
Create a function using currying that will add a car maker name as a property to the carLot object if it doesn't have one. Then have the function add up the number we pass in when we call the curried function.

function toyotaCars("Toyota")
function hyundaiCars("Hyundai")

kiaCars(3)
kiaCars(4)
hyundaiCars(2)
hyundaiCars(1)

console.log(carLot) // { Kia: 7, Hyundai: 3}



Notes
You only have to create the carMaker() function, not the curried function.
Check the Resources for more info on currying.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


const carMaker = make => num => carLot[make] = (carLot[make] || 0) + num;



//#############################################################
//#    SOLUTION 2
//#############################################################


let carLot = {}

const carMaker = (make) => {
    return function(num) {
        return !carLot[make] ? carLot[make] = num : carLot[make] += num;
    }
}




//#############################################################
//#    SOLUTION 3
//#############################################################


let carLot = {}

const carMaker = (make) => {
    if (!carLot.hasOwnProperty(make)) {
        carLot[make] = 0
    }
    return function(num) {
        return carLot[make] = carLot[make] + num
    }

}



//#############################################################
//#    SOLUTION 4
//#############################################################


let carLot = {}

const carMaker = (make) => {
    return function(num) {
        carLot[make] === undefined ? carLot[make] = num : carLot[make] += num;
    }
}