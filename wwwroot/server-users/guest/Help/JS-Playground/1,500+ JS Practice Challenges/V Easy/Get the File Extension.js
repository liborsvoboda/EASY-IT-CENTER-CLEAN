



/*

Get the File Extension
Write a function that maps files to their extension names.

Examples
getExtension(["code.html", "code.css"])
➞ ["html", "css"]

getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])
➞ ["jpg", "pdf", "mp3"]

getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])
➞ ["rb", "cpp", "py", "js"]
Notes



*/






/*  Solution 1   */


function getExtension(arr) {
    return arr.map(x => x.split(".").pop())
    

}


function getExtension(arr) {
	return arr.map(file => file.substr(file.lastIndexOf(".") + 1))
}


/*  Solution 2   */

const getExtension = a => a.map(w => w.split('.')[1]);

const getExtension=(arr)=> arr.map(a=>a.slice(a.indexOf(".")+1))

const getExtension = arr => arr.map(file => file.split('.').slice(-1)[0]);




/*  Solution 3   */

function getExtension(arr) {
	return arr.map((file) => file.split('.')[1])
}