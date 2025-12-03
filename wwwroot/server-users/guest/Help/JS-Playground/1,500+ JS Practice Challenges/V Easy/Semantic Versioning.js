



/*

Semantic Versioning
In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

The first number is the major version.
The second number is the minor version.
The third number is the patch (bug fixes).
Write three separate functions, one to retrieve each element in the semantic versioning specification.

Examples
// 6.1.9
retrieveMajor("6.1.9") ➞ "6"

retrieveMinor("6.1.9") ➞ "1"

retrievePatch("6.1.9") ➞ "9"

// 2.1.0
retrieveMajor("2.1.0") ➞ "2"

retrieveMinor("2.1.0") ➞ "1"

retrievePatch("2.1.0") ➞ "0"
Notes



*/






/*  Solution 1   */

function retrieveMajor(semver) {
	return semver.split(".")[0];
}

function retrieveMinor(semver) {
	return semver.split(".")[1];
}

function retrievePatch(semver) {
	return semver.split(".")[2];
}



/*  Solution 2   */


function retrieveMajor(semver) {
    return semver.split('.')[0];
    }
    
    function retrieveMinor(semver) {
    return semver.split('.')[1];
    }
    
    function retrievePatch(semver) {
    return semver.split('.')[2];
    }


/*  Solution 3   */


const retrieveMajor = (semver) => semver[0];

const retrieveMinor = (semver) => semver[2];

const retrievePatch = (semver) => semver[4];