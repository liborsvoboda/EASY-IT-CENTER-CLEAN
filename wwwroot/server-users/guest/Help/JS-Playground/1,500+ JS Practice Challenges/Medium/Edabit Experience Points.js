/*

Edabit Experience Points

As you complete questions on Edabit, you gain experience points depending on the difficulty of the question. The points for each difficulty are as follows:

Difficulty	Experience Points
Very Easy	5XP
Easy	10XP
Medium	20XP
Hard	40XP
Very Hard	80XP
Given an object of how many questions a person has completed of each difficulty, return how many experience points they'll have.

Examples
getXP({
  "Very Easy" : 89,
  "Easy" : 77,
  "Medium" : 30,
  "Hard" : 4,
  "Very Hard" : 1
}) ➞ "2055XP"


getXP({
  "Very Easy" : 254,
  "Easy" : 32,
  "Medium" : 65,
  "Hard" : 51,
  "Very Hard" : 34
}) ➞ "7650XP"


getXP({
  "Very Easy" : 11,
  "Easy" : 0,
  "Medium" : 2,
  "Hard" : 0,
  "Very Hard" : 27
}) ➞ "2255XP"


Notes
Return values as a string and make sure to add "XP" to the end.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const getXP = obj => Object.values(obj)
    .reduce((t, c, i) => t + [5, 10, 20, 40, 80][i] * c, 0) + `XP`;



//#############################################################
//#  SOLUTION 2  
//#############################################################



const getXP = list => {
        return Object.values(list)
            .map((v, i) => v * [5, 10, 20, 40, 80][i])
            .reduce((a, b) => a + b) + "XP";




        //#############################################################
        //#  SOLUTION 3
        //#############################################################


        function getXP(obj) {
            return [5, 10, 20, 40, 80].map((x, i) => x * Object.values(obj)[i])
                .reduce((a, b) => a + b) + 'XP';
        }


        //#############################################################
        //#  SOLUTION 4
        //#############################################################


        function getXP(obj) {
            let scores = [];

            for (let [key, value] of Object.entries(obj)) {
                if (key === 'Very Easy') {
                    scores.push(value * 5)
                } else if (key === 'Easy') {
                    scores.push(value * 10)
                } else if (key === 'Medium') {
                    scores.push(value * 20)
                } else if (key === 'Hard') {
                    scores.push(value * 40)
                } else if (key === 'Very Hard') {
                    scores.push(value * 80)
                }
            }

            return `${scores.reduce((a, b) => a + b)}XP`;
        }



        //#############################################################
        //#  SOLUTION 5
        //#############################################################


        function getXP(obj) {
            var points = {
                'Very Easy': 5,
                'Easy': 10,
                'Medium': 20,
                'Hard': 40,
                'Very Hard': 80
            };
            var tp = 0;
            for (let x in obj) {
                tp += obj[x] * points[x]
            }
            return tp + 'XP';
        }



        //#############################################################
        //#  SOLUTION 6
        //#############################################################



        function getXP(obj) {
            return Object.values(obj).reduce((a, c, i) =>
                i == 0 ? a + c * 5 :
                i == 1 ? a + c * 10 :
                i == 2 ? a + c * 20 :
                i == 3 ? a + c * 40 : a + c * 80, 0) + "XP";
        }



        //#############################################################
        //#  SOLUTION 7
        //#############################################################



        function getXP(obj) {
            const points = {
                "Very Easy": 5,
                "Easy": 10,
                "Medium": 20,
                "Hard": 40,
                "Very Hard": 80,
            }
            return Object.keys(obj).map(key => obj[key] * points[key]).reduce((x, y) => x + y) + "XP";
        }