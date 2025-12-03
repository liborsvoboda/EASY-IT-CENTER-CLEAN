/*

Imaginary Coding Interview

Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.

The criteria for a candidate to be qualified in the coding interview is:

The candidate should have complete all the questions.
The maximum time given to complete the interview is 120 minutes.
The maximum time given for very easy questions is 5 minutes each.
The maximum time given for easy questions is 10 minutes each.
The maximum time given for medium questions is 15 minutes each.
The maximum time given for hard questions is 20 minutes each.
If all the above conditions are satisfied, return "qualified", else return "disqualified".

You will be given an array of time taken by a candidate to solve a particular question and the total time taken by the candidate to complete the interview.

Given an array, in a true condition will always be in the format [very easy, very easy, easy, easy, medium, medium, hard, hard].

The maximum time to complete the interview includes a buffer time of 20 minutes.

Examples
interview([5, 5, 10, 10, 15, 15, 20, 20], 120) ➞ "qualified"

interview([2, 3, 8, 6, 5, 12, 10, 18], 64) ➞  "qualified"

interview([5, 5, 10, 10, 25, 15, 20, 20], 120) ➞ "disqualified"
// Exceeded the time limit for a medium question.

interview([5, 5, 10, 10, 15, 15, 20], 120) ➞ "disqualified"
// Did not complete all the questions.

interview([5, 5, 10, 10, 15, 15, 20, 20], 130) ➞ "disqualified"
// Solved all the questions in their respected time limits but exceeded the total time limit of the interview.


Notes
Try to solve the problem using only array methods.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


const interview = (arr, tot) => [
    tot <= 120,
    arr.length === 8,
    arr.every((e, i) => e <= (5 * (1 + Math.floor(i / 2))))
].every(Boolean) ? 'qualified' : 'disqualified';



//#############################################################
//#    SOLUTION 2
//#############################################################


function interview(arr, tot) {
    if (arr.length < 8 || tot > 120) {
        return "disqualified";
    }
    let very_easy = 5;
    let easy = 10;
    let medium = 15;
    let hard = 20;
    var box = [very_easy, very_easy, easy, easy, medium, medium, hard, hard];
    let p = 0;
    for (let x of arr) {
        if (x > box[p]) {
            return "disqualified";
        }
        p++;
    }
    return "qualified";
}




//#############################################################
//#    SOLUTION 3
//#############################################################


const interview = (arr, tot) => [5, 5, 10, 10, 15, 15, 20, 20].every((num, i) => num >= arr[i]) && tot <= 120 ? 'qualified' : 'disqualified';



//#############################################################
//#    SOLUTION 4
//#############################################################


function interview(arr, tot) {
    let baseArr = [5, 5, 10, 10, 15, 15, 20, 20]
    return (tot > 120 || arr.length !== baseArr.length) ? 'disqualified' :
        arr.every((item, index) => item <= baseArr[index]) ? 'qualified' :
        'disqualified'
}