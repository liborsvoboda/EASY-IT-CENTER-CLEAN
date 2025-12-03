/*

Temperature Converter

Create a function that takes an array with temperature type, temperature, and a second temperature type. The temperature types can be Celsius, Fahrenheit, or Kelvin. Return the temperature type (in the array) converted into the second temperature type.

Examples
converter(["fahrenheit", 3] , "kelvin") ➞ 257.0

converter(["celsius", 10] , "fahrenheit") ➞ 50.0

converter(["celsius", 20] , "kelvin") ➞ 293.1


Notes
Round to one decimal place.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const units = new Map([
    ['celsius', new Map([
        ['kelvin', n => n + 273.15],
        ['fahrenheit', n => n * 9 / 5 + 32]
    ])],
    ['kelvin', new Map([
        ['fahrenheit', n => n * 9 / 5 - 459.67],
        ['celsius', n => n - 273.15]
    ])],
    ['fahrenheit', new Map([
        ['kelvin', n => (n + 459.67) * 5 / 9],
        ['celsius', n => (n - 32) * 5 / 9]
    ])]
]);

const converter = ([from, n], to) => (
    Number(units.get(from).get(to)(n).toFixed(1))
);




//#############################################################
//#  SOLUTION 2  
//#############################################################


function converter(a, b) {
    console.log(a, b);
    var type = a[0];
    var temp = a[1];

    if (type == 'fahrenheit') {
        temp = (temp - 32) * (5 / 9);
    }
    if (type == 'fahrenheit' || type == 'celsius') {
        temp = temp + 273.15;
    }

    console.log(temp + "K");

    var newType = b;

    if (newType == 'fahrenheit' || newType == 'celsius') {
        temp = temp - 273.15;
    }
    if (newType == 'fahrenheit') {
        temp = (temp * 9 / 5) + (32);
    }

    return parseFloat(temp.toFixed(1));



}





//#############################################################
//#  SOLUTION 3
//#############################################################


function converter(a, b) {
    let result;
    const [type, value] = a;
    const conversions = {
        fToK: (((value - 32) * 5) / 9) + 273.15,
        kToF: ((value - 273.15) * 1.8) + 32,
        cToK: value + 273.15,
        kToC: value - 273.15,
        fToC: (value - 32) * (5 / 9),
        cToF: (value * 1.8) + 32,
    };
    if (type === 'fahrenheit' && b === 'kelvin') {
        result = conversions['fToK'];
    }
    if (type === 'fahrenheit' && b === 'celsius') {
        result = conversions['fToC'];
    }
    if (type === 'celsius' && b === 'kelvin') {
        result = conversions['cToK'];
    }
    if (type === 'celsius' && b === 'fahrenheit') {
        result = conversions['cToF'];
    }
    if (type === 'kelvin' && b === 'fahrenheit') {
        result = conversions['kToF'];
    }
    if (type === 'kelvin' && b === 'celsius') {
        result = conversions['kToC'];
    }
    return Number(result.toFixed(1));
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function converter([a, d], b) {
    return +(function() {
        switch (a) {
            case "celsius":
                return b === "kelvin" ? d + 273.15 : 9 / 5 * d + 32;
            case "kelvin":
                return b === "celsius" ? d - 273.15 : 9 / 5 * d - 459.67;
            default:
                return b === "celsius" ? 5 / 9 * (d - 32) : 5 / 9 * (d + 459.67);
        }
    })().toFixed(1);
}