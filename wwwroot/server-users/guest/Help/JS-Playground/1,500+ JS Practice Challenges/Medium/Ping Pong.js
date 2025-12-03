/*

Ping Pong!

A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).

Given an array of Ping!, create a function that inserts Pong! in between each element. Also:

If win equals true, end the list with Pong!.
If win equals false, end with Ping! instead.
Examples
pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]

pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]

pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]


Notes
You will always return the ball (i.e. the Pongs are yours).
Player 1 serves the ball and makes Ping!.
Return an array of strings.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function pingPong(arr, win) {
    var final = arr.map(e => [e, "Pong!"]).flat()
    return win ? final : final.slice(0, final.length - 1);
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function pingPong(arr, win) {
    arr = arr.join(',Pong!,').split(',');
    return (win) ? [...arr, 'Pong!'] : arr;
}


//#############################################################
//#  SOLUTION 3
//#############################################################


const pingPong = (arr, win) => {
    const pong = arr.join(' ').replace(/Ping!/g, 'Ping! Pong!').split(' ');
    if (!win) pong.pop()
    return pong;
};



//#############################################################
//#  SOLUTION 4
//#############################################################


const pingPong = (arr, win) =>
    arr.reduce((a, b, i) => arr.length - 1 !== i || win ? a.concat(b, 'Pong!') : a.concat(b), []);



//#############################################################
//#  SOLUTION 5
//#############################################################


function pingPong(arr, win) {
    var result = "Ping!";
    for (var i = 0; i < arr.length; i++) {
        result += " Pong! " + arr[i];
    }
    return win == true ? result.split(" ").slice(0, -1) : result.split(" ").slice(0, -2);
}



//#############################################################
//#  SOLUTION 6
//#############################################################


const pingPong = (arr, win) =>
    arr
    .map((v, i) => !win && i === arr.length - 1 ? v : [v, 'Pong!'])
    .flat()




//#############################################################
//#  SOLUTION 7
//#############################################################


const pingPong = (arr, win) => win ? arr.map(el => ["Ping!", "Pong!"]).flat() :
    arr.map(el => ["Ping!", "Pong!"]).flat().slice(0, -1);