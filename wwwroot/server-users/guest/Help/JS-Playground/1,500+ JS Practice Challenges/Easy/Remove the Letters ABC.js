/*  
Remove the Letters ABC

Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

Examples
remove_abc("This might be a bit hard") ➞ "This might e  it hrd"

remove_abc("hello world!") ➞ null

remove_abc("") ➞ null

Notes
If the given string does not contain "a", "b", or "c", return null.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


const remove_abc = str => {
    const regex = /[abc]/gi;
    if (!regex.test(str)) return null;
    return str.replace(regex, '');
};




//#############################################################
//#    SOLUTION 2
//#############################################################


function remove_abc(str) {
    let letters = str.split("");
    let removedLetters = letters.filter((letter) => {
        if (letter === "a" || letter === "b" || letter === "c") return false;
        return true;
    });
    if (letters.length === removedLetters.length) return null;
    return removedLetters.join("");
}






//#############################################################
//#    SOLUTION 3
//#############################################################


function remove_abc(str) {
    re = /[abc]/gi
    return str.match(re) != null ? str.replace(re, "") : null
}





//#############################################################
//#    SOLUTION 4
//#############################################################


function remove_abc(str) {
    var res = str.replace(/a|b|c/gi, function(x) {
        x = "";
        return x;
    });
    return str == res ? null : res
}







//#############################################################
//#    SOLUTION 5
//#############################################################



const remove_abc = (str) => !str.match(/[abc]/ig) || str.length == 0 ? null : str.replace(/[abc]/ig, '');


remove_abc = s => /[abc]/i.test(s) ? s.replace(/[abc]/ig, '') : null



function remove_abc(str) {
    return !(/[abc]/gi).test(str) ? null : str.replace(/[abc]/gi, "");
}


const remove_abc = s => /[abc]/.test(s) ? s.replace(/[abc]/g, '') : null


const remove_abc = str => str.match(/[a-c]/gi) ? str.replace(/[a-c]/gi, '') : null;


remove_abc = (str) => str.match(/[abc]/i) ? str.split(/[abc]/i).join("") : null;



//#############################################################
//#    SOLUTION 6
//#############################################################



function remove_abc(str) {
    const sth = str
        .split("")
        .filter((l) => !l.match(/[abc]/gi))
        .join("");
    return sth.length !== str.length ? sth : null;
}