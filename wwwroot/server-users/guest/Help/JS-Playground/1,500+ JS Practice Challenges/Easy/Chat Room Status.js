/*
Chat Room Status
Write a function that returns the number of users in a chatroom based on the following rules:

If there is no one, return "no one online".
If there is 1 person, return "user1 online".
If there are 2 people, return "user1 and user2 online".
If there are n>2 people, return the first two names and add "and n-2 more online".
For example, if there are 5 users, return:

"user1, user2 and 3 more online"
Examples
chatroomStatus([]) ➞ "no one online"

chatroomStatus(["paRIE_to"]) ➞ "paRIE_to online"

chatroomStatus(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"

chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
➞ "pap_ier44, townieBOY and 4 more online"
Notes

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */

function chatroomStatus(users) {
    switch (users.length) {
        case 0:
            return "no one online";
            break;
        case 1:
            return users[0] + " online";
            break;
        case 2:
            return users[0] + " and " + users[1] + " online";
            break;
        default:
            return users[0] + ", " + users[1] + " and " + (users.length - 2) + " more online";
            break;
    }

}



/*  Solution 2   */


function chatroomStatus(users) {
    switch (users.length) {
        case 0:
            return "no one online";
            break;
        case 1:
            return users[0] + " online";
            break;
        case 2:
            return users[0] + ' and ' + users[1] + " online";
            break;
        default:
            return users[0] + ', ' + users[1] + ' and ' + (users.length - 2) + " more online";
            break;
    }

}


/*  Solution 3   */


function chatroomStatus(users) {
    const userN = users.length;
    switch (true) {
        case (userN === 0):
            message = "no one online";
            break;
        case (userN === 1):
            message = users[0] + " online";
            break;
        case (userN === 2):
            message = users[0] + " and " + users[1] + " online";
            break;
        case (userN >= 3):
            message = users[0] + ", " + users[1] + " and " + (userN - 2) + " more online";
            break;
    }
    return message
}