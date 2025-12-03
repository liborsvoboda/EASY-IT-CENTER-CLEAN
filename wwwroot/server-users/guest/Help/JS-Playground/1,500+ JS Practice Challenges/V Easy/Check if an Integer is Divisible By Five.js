



/*

Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

Examples
divisibleByFive(5) ➞ true

divisibleByFive(-55) ➞ true

divisibleByFive(37) ➞ false
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/

/*  Solution 1   */

function divisibleByFive(n) {
    return n%5===0;
    }



/*  Solution 2   */

    function divisibleByFive(n) {
        if(n%5==0){
            return true;
        }
        else{
            return false;
        }
    };


    /*  Solution 3   */

    const divisibleByFive = (n) => !(n%5)