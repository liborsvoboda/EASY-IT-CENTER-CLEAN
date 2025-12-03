/*  

Upvotes vs Downvotes
Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
Notes
You can expect only positive integers for vote counts.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  

Solution 1

*/


const getVoteCount = votes => votes.upvotes - votes.downvotes;

/*  

Solution 2

*/

function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}

/*  

Solution 3

*/

const getVoteCount = ({ upvotes, downvotes }) => upvotes - downvotes;



/*  

Solution 3

*/


function getVoteCount(votes) {
    let x = votes.downvotes;
    let y = votes.upvotes;
    return y - x;
}