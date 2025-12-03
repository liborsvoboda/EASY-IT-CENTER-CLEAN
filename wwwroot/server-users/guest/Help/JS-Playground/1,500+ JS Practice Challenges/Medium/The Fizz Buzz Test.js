/*

The Fizz Buzz Test

Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.

Example
fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]

fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

Notes
Make sure to return array.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const fizzBuzz = n => [...Array(n)].map((_, i) =>
    (i + 1) % 15 === 0 ? "FizzBuzz" :
    (i + 1) % 3 === 0 ? "Fizz" :
    (i + 1) % 5 === 0 ? "Buzz" :
    i + 1
);



//#  SOLUTION 2  


function fizzBuzz(number) {
    let arr = [];
    for (let i = 1; i <= number; i++) {
        arr.push(i % 15 == 0 ? "FizzBuzz" : i % 5 == 0 ? "Buzz" : i % 3 == 0 ? "Fizz" : i);
    }
    return arr
}



//#  SOLUTION 3

const fizzBuzz = length => Array.from({ length }, (_, i) => (((i + 1) % 3 ? '' : 'Fizz') + ((i + 1) % 5 ? '' : 'Buzz')) || i + 1);


//#  SOLUTION 4


function fizzBuzz(number) {
    var numbers = [];
    for (var i = 1; i <= +number; i++) {
        switch (true) {
            case (i % 3 === 0 && i % 5 === 0):
                numbers[i - 1] = "FizzBuzz";
                break;
            case i % 3 === 0:
                numbers[i - 1] = "Fizz";
                break;
            case i % 5 === 0:
                numbers[i - 1] = "Buzz";
                break;
            default:
                numbers[i - 1] = i;
        }
    }
    return numbers;
}




//#  SOLUTION 5


function fizzBuzz(number) {
    return Array.apply(null, Array(number))
        .map(function(_, i) {
            return i + 1;
        })
        .map((x) =>
            x % 15 == 0 ? "FizzBuzz" : x % 5 == 0 ? "Buzz" : x % 3 == 0 ? "Fizz" : x
        );
}



//#  SOLUTION 6



const fizzBuzz = (number) => [...Array(number)].map((_, i) => {
    i++
    return i % 15 == 0 ? 'FizzBuzz' :
        i % 5 == 0 ? 'Buzz' :
        i % 3 == 0 ? 'Fizz' :
        i
})