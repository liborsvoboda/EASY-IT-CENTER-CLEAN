/*  

Emotify Sentence

Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

word	emoticon
smile	:D
grin	:)
sad	:(
mad	:P
Examples
emotify("Make me smile") ➞ "Make me :D"

emotify"Make me grin" ➞ "Make me :)"

emotify("Make me sad") ➞ "Make me :("

Notes
The sentence always starts with "Make me".
Try to solve this without using conditional statements like if/else or switch.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




//#  SOLUTION 1 

function emotify(str) {
    let [first, mid, last] = str.split(" ");

    let emotify = {
        "smile": ":D",
        "grin": ":)",
        "sad": ":(",
        "mad": ":P"
    }

    return `Make me ${emotify[last]}`;
}


//#  SOLUTION 2

function emotify(str) {
    str = str.replace(/smile/g, ':D');
    str = str.replace(/grin/g, ':)');
    str = str.replace(/sad/g, ':(');
    str = str.replace(/mad/g, ':P');

    return str;
}


//#  SOLUTION 3 

const emotify = s => 'Make me ' + ({ smile: ':D', grin: ':)', sad: ':(', mad: ':P' })[s.split(' ').pop()];


//#  SOLUTION 4 


function emotify(str) {
    let e = { smile: ":D", grin: ":)", sad: ':(', mad: ':P' };
    let w = str.split(' ');
    return `Make me ${e[w[w.length-1]]}`
}



//#  SOLUTION 5 


function emotify(str) {
    let obj = {
        smile: ":D",
        grin: ":)",
        sad: ":(",
        mad: ":P"
    }
    for (let k in obj) {
        if (str.endsWith(k)) return `Make me ${obj[k]}`
    }

}



//#  SOLUTION 6

const emotify = str => str.replace(/\S+$/, m => {
    switch (m) {
        case 'smile':
            return ':D';
        case 'grin':
            return ':)';
        case 'sad':
            return ':(';
        case 'mad':
            return ':P';
    }
});



//#  SOLUTION 7


function emotify(str) {
    return str.replace(/smile|grin|sad|mad/g, x => ({ smile: ':D', grin: ':)', sad: ':(', mad: ':P' }[x]))
}



//#  SOLUTION 8


function emotify(str) {
    const emoji = { smile: ":D", grin: ":)", sad: ":(", mad: ":P" };
    return str.replace(new RegExp(Object.keys(emoji).join('|')), v => emoji[v]);
}


//#  SOLUTION 9


function emotify(str) {
    if (str === "Make me smile") {
        return "Make me :D"
    }
    if (str === "Make me grin") {
        return "Make me :)"
    }
    if (str === "Make me sad") {
        return "Make me :("
    }
    if (str === "Make me mad") {
        return "Make me :P"
    }
}