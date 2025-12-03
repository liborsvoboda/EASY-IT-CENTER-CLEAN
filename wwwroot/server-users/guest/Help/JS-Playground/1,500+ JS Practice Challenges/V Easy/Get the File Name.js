/*


Get the File Name
Create a function that returns the selected filename from a path. Include the extension in your answer.

Examples
getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

getFilename("ffprobe.exe") ➞ "ffprobe.exe"
Notes
Tests will include both absolute and relative paths.
For simplicity, all paths will include forward slashes.


*/






/*  Solution 1   */

function getFilename(path) {
    return path.split('/').pop();
}




/*  Solution 2   */

const getFilename = p => p.split('/').slice(-1)[0]

getFilename = (path) => path.split("/").pop()

const getFilename = path => path.split("/").slice(-1)[0];

const getFilename = p => p.split('/').slice(-1)[0];

const getFilename = (path) => path.split("/").pop()




/*  Solution 3   */


function getFilename(path) {
    var file = path.split("/");
    var out = file.pop();
    return out;
}



function getFilename(path) {
    let count = 0;
    let arr = [];
    for (let i = path.length; i > -1; i--) // Begin at the end
    {

        if (path[i] == "/") // When a slash detected
        {
            for (let j = 0; j < count; j++) {
                arr[j] = path[(path.length) - count + 1 + j] // create a array
            }
            return arr.join(""); // join all char

        }

        count += 1

    }
    return path; // Else no slash detected, the path is direclty return

}