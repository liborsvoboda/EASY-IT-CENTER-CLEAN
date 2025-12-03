/*  


Awarding Prizes

You are given a dictionary of names and the amount of points they have. Return a dictionary with the same names, but instead of points, return what prize they get.

"Gold", "Silver", or "Bronze" to the 1st, 2nd and 3rd place respectively. For all the other names, return "Participation" for the prize.

Examples
awardPrizes({
  "Joshua" : 45,
  "Alex" : 39,
  "Eric" : 43
}) ➞ {
  "Joshua" : "Gold",
  "Alex" : "Bronze",
  "Eric" : "Silver"
}

awardPrizes({
  "Person A" : 1,
  "Person B" : 2,
  "Person C" : 3,
  "Person D" : 4,
  "Person E" : 102
}) ➞ {
  "Person A" : "Participation",
  "Person B" : "Participation",
  "Person C" : "Bronze",
  "Person D" : "Silver",
  "Person E" : "Gold"
}

awardPrizes({
  "Mario" : 99,
  "Luigi" : 100,
  "Yoshi" : 299,
  "Toad" : 2
}) ➞ {
  "Mario" : "Bronze",
  "Luigi" : "Silver",
  "Yoshi" : "Gold",
  "Toad" : "Participation"
}


Notes
There will always be at least three participants to recieve awards.
No number of points will be the same amongst participants.

*/



//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const awardPrizes = names => {
    const [g, s, b] = Object.values(names).sort((a, b) => b - a);
    return Object.fromEntries(Object.entries(names).map(([k, v]) => {
        switch (v) {
            case g:
                return [k, 'Gold'];
            case s:
                return [k, 'Silver'];
            case b:
                return [k, 'Bronze'];
            default:
                return [k, 'Participation'];
        }
    }));
};




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


////////////////////////////////////////////////////////////
//		Sub Function
////////////////////////////////////////////////////////////

function fnc_descending_number_sorter(arr) {

    var draft_one = arr;
    var draft_two = [];
    var failsafe = 0;
    var revised = [];

    while (failsafe == 0) {
        seeking = Math.max(...draft_one);

        counter = 0;
        length = draft_one.length;

        while (counter < length) {
            checking = draft_one[counter];

            if (checking == seeking) {
                revised.push(checking);
                counter += 1;
            } else {
                draft_two.push(checking);
                counter += 1;
            }
        }

        if (draft_two.length == 0) { failsafe += 1; } else {
            draft_one = draft_two;
            draft_two = [];
        }
    }

    return revised;

}

////////////////////////////////////////////////////////////
//		MAIN FUNCTION
////////////////////////////////////////////////////////////

function awardPrizes(names) {

    var people = Object.keys(names);
    var points = Object.values(names);

    var answer = {};
    var scale = fnc_descending_number_sorter(points)

    var counter = 0;
    var length = points.length;

    while (counter < length) {
        person = people[counter];
        score = points[counter];

        if (score == scale[0]) {
            answer[person] = "Gold";
            counter += 1;
        } else if (score == scale[1]) {
            answer[person] = "Silver";
            counter += 1;
        } else if (score == scale[2]) {
            answer[person] = "Bronze";
            counter += 1;
        } else {
            answer[person] = "Participation";
            counter += 1;
        }
    }

    return answer;

}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



const PLACES = ['Gold', 'Silver', 'Bronze'];

function awardPrizes(names) {
    return Object.fromEntries(
        Object
        .entries(names)
        .map(([k, v], i) => [k, v, i])
        .sort(([, a], [, b]) => b - a)
        .map(([k, v, i], order) => [k, (PLACES[order] || 'Participation'), i])
        .sort(([, , a], [, , b]) => a - b)
    );
}