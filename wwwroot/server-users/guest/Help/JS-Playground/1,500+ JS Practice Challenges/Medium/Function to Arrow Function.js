/*

Function to Arrow Function

Create a function that takes an empty function as a string and returns the function as a arrow function.

Examples
"function test(a) {}" ➞  "const test = (a) =>"

"function twoArgs(a,b) {}" ➞ "const twoArgs = (a,b) =>"

"function restArgs(...a) {}" ➞  "const restArgs = (...a) =>"


Notes
Functions can have multiple arguments.
The arrow function must be assigned to a const.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function toArrow(f) {
    const [name, args] = f.split(' ')[1].split('(')
    return `const ${name} = (${args} =>`
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


const toArrow = f => f.replace('function', 'const').replace('{}', '=>').replace('(', ` = (`);



const toArrow = (f) => f.replace(/function\s(\w+)(\(.*?\)).+/g, (match, p1, p2) => `const ${p1} = ${p2} =>`)





//#############################################################
//#  SOLUTION 3
//#############################################################


const toArrow = (s, m = s.match(/(\w+)(\(.*\))/)) => `const ${m[1]} = ${m[2]} =>`;




//#############################################################
//#  SOLUTION 4
//#############################################################


const toArrow = f => (
    f.slice(0, -2).replace(/.*? /, 'const ').replace('(', ' = (') + '=>'
);




//#############################################################
//#  SOLUTION 5
//#############################################################


const toArrow = arg => {
    const [func, name, ...rest] = arg.split(' ');
    return `const ${name.split('(')[0]} = ${name.replace(/\w*/, '')} =>`
}





//#############################################################
//#  SOLUTION 6
//#############################################################



function toArrow(f) {
    return f.replace(/(function|\(|\{\})/g, txt => {
        switch (txt) {
            case 'function':
                return 'const'
            case '(':
                return ' = ('
            case '{}':
                return '=>'
        }
    })
}



//#############################################################
//#  SOLUTION 7
//#############################################################


const toArrow = f => `const ${f.split` `[1].replace('(', ' = (')} =>`;