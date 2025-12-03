/*

Making Change

Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.

Examples
makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }

makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }

makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }

Notes
Amount given will always be less than 100 and more than 0.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const makeChange = c => {
    return {
        'q': Math.floor(c / 25),
        'd': Math.floor((c % 25) / 10),
        'n': Math.floor(((c % 25) % 10) / 5),
        'p': c % 5
    }
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function makeChange(c) {
    return { "q": Math.floor(c / 25), "d": Math.floor((c - Math.floor(c / 25) * 25) / 10), "n": Math.floor((c - (Math.floor(c / 25) * 25 + Math.floor((c - Math.floor(c / 25) * 25) / 10) * 10)) / 5), "p": c % 5 }
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function makeChange(c, obj = { "q": 0, "d": 0, "n": 0, "p": 0 }) {
    var n = ["25", "10", "5", "1"]
    var a = ["q", "d", "n", "p"]
    if (c == 0) { return obj }
    for (let i = 0; i < n.length; i++) {
        var hold = c - n[i]
        if (hold >= 0) {
            c = c - n[i]
            obj[a[i]] += 1
            break
        }
    }
    return makeChange(c, obj)
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function makeChange(c) {
    return {
        q: ~~(c / 25),
        d: ~~((c % 25) / 10),
        n: ~~(((c % 25) % 10) / 5),
        p: ((c % 25) % 10) % 5
    }
}