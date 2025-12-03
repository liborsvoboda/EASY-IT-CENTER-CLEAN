/*  

Decompose Address

Create a function that decomposes an address string into an array of five substrings:

Street Number
Street Name
City Name
State
Zip Code


Examples
decomposeAddress("557 Farmer Rd Corner, MT 59105")
➞ ["557", "Farmer Rd", "Corner", "MT", "59105"]

decomposeAddress("3315 Vanity St Beverly Hills, CA 90210")
➞ ["3315", "Vanity St", "Beverly Hills", "CA", "90210"]

decomposeAddress("8919 Scarecrow Ct Idaho Falls, ID 80193")
➞ ["8919", "Scarecrow Ct", "Idaho Falls", "ID", "80193"]


Notes
All street extensions will be shortened to two-letter formats.

*/




//#############################################################
//#                        MY SOLUTION    1                 #
//#############################################################



const decomposeAddress = str => str.match(/(\d+) (.+ \w{2}) (.+), (\w{2}) (\d+)/).slice(1);


const decomposeAddress = s => /(^\d+) (\w+ \w{2}) ([^,]+), (\w+) (\d+)/gi.exec(s).slice(1)


//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const decomposeAddress = address => {
    let addressArr = address
        .split(',')
        .map(i => {
            return i.split(' ')
        })
        .reduce((a, b) => [...a, ...b])

    return [
        addressArr[0],
        addressArr[1] + ' ' + addressArr[2],
        addressArr.length === 8 ? addressArr[3] + ' ' + addressArr[4] : addressArr[3],
        addressArr.length === 8 ? addressArr[6] : addressArr[5],
        addressArr.length === 8 ? addressArr[7] : addressArr[6]
    ]
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



function decomposeAddress(str) {
    let a = str.split('');

    a.map((cur, i) => {
        if (cur === ',') {
            a.splice(i, 1);
        }

    })

    a = a.join('').split(' ');



    if (a.length > 6) {
        const b = a.splice(2, 1);

        a[1] += ` ${b}`;

        const c = a.splice(3, 1);

        a[2] += ` ${c}`;

    } else {
        const b = a.splice(2, 1);

        a[1] += ` ${b}`;

    }

    return a;

}




//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################



function decomposeAddress(str) {
    return str.match("([0-9]+) ([^ ]+ [^ ]+) ([^,]+), ([A-Z]+) (.*)").slice(1);
}