/*
Overview: 10 Days of JavaScript
This series focuses on learning and practicing JavaScript. Each challenge comes with a tutorial article, and you can view these articles by clicking either the Topics tab along the top or the article icon in the right-hand menu.
Objective
In this challenge, we review some basic concepts that will get you started with this series. Check out the tutorial to learn more about JavaScript's lexical structure.
Task
A greeting function is provided for you in the editor below. It has one parameter, . Perform the following tasks to complete this challenge:
Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already provided in the editor.
Use console.log() to print the contents of  (i.e., the argument passed to main).
You've got this!
Input Format
Data Type	Parameter	Description
string		A single line of text containing one or more space-separated words.
Output Format
Print the following two lines of output:
On the first line, print Hello, World! (this is provided for you in the editor).
On the second line, print the contents of .
Sample Input 0
Welcome to 10 Days of JavaScript!
Sample Output 0
Hello, World!
Welcome to 10 Days of JavaScript!
Explanation 0
We printed two lines of output:
We printed the literal string Hello, World! using the code provided in the editor.
The value of  passed to our main function in this Sample Case was Welcome to 10 Days of JavaScript!. We then passed our variable to console.log, which printed the contents of .
*/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable)
}













'use strict';

// Begin reading from stdin so the process does not exit. In most problems, you would read input from STDIN (Standard Input) and write output to STDOUT (Standard Output). 
// Note: In "old" streams mode the stdin stream is paused by default, so one must call process.stdin.resume() to read from it. Note also that calling process.stdin.resume() itself would switch stream to "old" mode. (https://nodejs.org/api/process.html)
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

/* The process.stdin property returns a stream connected to stdin (fd 0). It is a net.Socket (which is a Duplex stream) unless fd 0 refers to a file, in which case it is a Readable stream.
The process.stdout property returns a stream connected to stdout (fd 1). It is a net.Socket (which is a Duplex stream) unless fd 1 refers to a file, in which case it is a Writable stream. (https://nodejs.org/api/process.html) 
process is the global hosting object of Javascript environment in Node.js, and process.stdin is an instance of ReadStream. The .on() function call registers a callback for data event. The callback function will be invoked when data are available. (http://logan.tw/posts/2015/12/12/read-lines-from-stdin-in-nodejs/) */


process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

/* Notice that input is multi-line, so first you need to split it into lines by doing inputString.split('\n');. */
process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}
/**
 *   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
 *   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
 *
 *	Parameter:
 *   parameterVariable - A string of text.
 **/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);

}

function main() {
    const parameterVariable = readLine();

    greeting(parameterVariable);
}