



/*

FizzBuzz Interview Question
Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".

If the number is a multiple of 3 the output should be "Fizz".
If the number given is a multiple of 5, the output should be "Buzz".
If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.
The output should always be a string even if it is not a multiple of 3 or 5.
Examples
FizzBuzz(3) ➞ "Fizz"

FizzBuzz(5) ➞ "Buzz"

FizzBuzz(15) ➞ "FizzBuzz"

FizzBuzz(4) ➞ "4"
Notes
Try to be precise with how you spell things and where you put the capital letters.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/






/*  Solution 1   */


function FizzBuzz(num) {
	if (num % 3 === 0 && num % 5 === 0) {
		return "FizzBuzz"
	}
	if (num % 3 === 0) {
		return "Fizz"
	}
	if (num % 5 === 0) {
		return "Buzz"
	}
	return num.toString()
}

//If the number is a multiple of 3 the output should be "Fizz".
//If the number given is 5 the output should be "Buzz".
//If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
//If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.


/*  Solution 2   */


function FizzBuzz(num) {
	return (num % 3 === 0 && num % 5 === 0) ? "FizzBuzz" : (num % 3 === 0 && num % 5 !== 0) ? "Fizz" :(num % 5 === 0 && num % 3 !== 0) ? "Buzz" : String(num);
}


/*  Solution 3   */


function FizzBuzz(num) {
    const f = num % 3 == 0;
    const b = num % 5 == 0;
    return f && b ? 'FizzBuzz'
      : f ? 'Fizz'
      : b ? 'Buzz'
      : String(num);
  }