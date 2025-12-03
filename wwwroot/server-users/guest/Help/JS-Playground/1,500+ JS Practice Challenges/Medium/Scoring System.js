/*

Scoring System

Andy, Ben and Charlotte are playing a board game. The three of them decided to come up with a new scoring system. A player's first initial ("A", "B" or "C") denotes that player scoring a single point. Given a string of capital letters, return an array of the players' scores.

For instance, if ABBACCCCAC is written when the game is over, then Andy scored 3 points, Ben scored 2 points, and Charlotte scored 5 points, since there are 3 instances of letter A, 2 instances of letter B, and 5 instances of letter C. So the array [3, 2, 5] should be returned.

Examples
calculateScores("A") ➞ [1, 0, 0]

calculateScores("ABC") ➞ [1, 1, 1]

calculateScores("ABCBACC") ➞ [2, 2, 3]

Notes
If given an empty string as an input, return [0, 0, 0].


*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const calculateScores = str => [
    (str.match(/A/g) || []).length,
    (str.match(/B/g) || []).length,
    (str.match(/C/g) || []).length,
];

//#  SOLUTION 2  


function calculateScores(str) {
    [aScore, bScore, dScore] = [0, 0, 0];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "A") { aScore++; }
        if (str[i] === "B") { bScore++; }
        if (str[i] === "C") { dScore++; }
    }
    return [aScore, bScore, dScore];
}


//#  SOLUTION 3


function calculateScores(str) {
    var scoreMap = str.split("").reduce(function(a, n) {
        return a.set(n, a.get(n) + 1 || 1);
    }, new Map());

    return [scoreMap.get("A") || 0, scoreMap.get("B") || 0, scoreMap.get("C") || 0];
}


//#  SOLUTION 4


function calculateScores(str) {
    var counts = {
        A: 0,
        B: 0,
        C: 0
    };

    if (str) {
        for (var i = 0; i < str.length; i++) {
            var num = str[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        return Object.keys(counts).map(key => counts[key])
    } else {
        return [0, 0, 0]
    }
}



//#  SOLUTION 5


function calculateScores(str) {
    str = str.split("");
    return [str.filter(x => x == "A").length,
        str.filter(x => x == "B").length,
        str.filter(x => x == "C").length
    ];
}



//#  SOLUTION 6


const calculateScores = str => {
        let res = [0, 0, 0];
        let A = 0;
        let B = 0;
        let C = 0;

        for (let i = 0; i < str.split('').length; i++) {
            if (str[i] == 'A') A++;
            else if (str[i] == 'B') B++;
            else C++;
        }

        res.splice(0, 1, A);
        res.splice(1, 2, B);
        res.splice(2, 3, C);


        //#  SOLUTION 7


        function calculateScores(str) {
            return ['a', 'b', 'c'].map(v => {
                let r = new RegExp(v, 'gi');
                return (str.match(r) || []).length;
            })
        }


        //#  SOLUTION 8


        function calculateScores(str) {
            const a = (str.match(/A/g) || []).length;
            const b = (str.match(/B/g) || []).length;
            const c = (str.match(/C/g) || []).length;
            return [a, b, c];
        }


        //#  SOLUTION 9


        function calculateScores(str) {
            let arr = []
            let a = str.match(/A/gi)
            if (a === null) { a = 0 } else { a = a.length }
            let b = str.match(/B/gi)
            if (b === null) { b = 0 } else { b = b.length }
            let c = str.match(/C/gi)
            if (c === null) { c = 0 } else { c = c.length }
            arr[0] = a
            arr[1] = b
            arr[2] = c
            return arr
        }