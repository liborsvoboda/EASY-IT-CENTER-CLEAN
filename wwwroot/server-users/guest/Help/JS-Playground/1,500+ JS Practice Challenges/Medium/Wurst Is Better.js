/*

Wurst Is Better

Wurst is the best. Create a function that takes a string and replaces every mention of any type of sausage with the German word "Wurst," unless—of course—the sausage is already a type of German "Wurst" (i.e. "Bratwurst", see below), then leave the sausage name unchanged.

German Wursts	Convert to Wurst
Bratwurst	Kielbasa
Kochwurst	Chorizo
Leberwurst	Moronga
Mettwurst	Salami
Rostbratwurst	Sausage
~	Andouille
~	Naem
~	Merguez
~	Gurka
~	Snorkers
~	Pepperoni
Rules
Append sausages from the "Convert to Wurst" column with "wurst".
Do not replace any German sausage with the word "Wurst".
The word "Wurst" must be title case.
Examples
wurstIsBetter("I like chorizos, but not sausages") ➞ "I like Wursts, but not Wursts"

wurstIsBetter("sich die Wurst vom Brot nehmen lassen") ➞ "sich die Wurst vom Brot nehmen lassen"

wurstIsBetter("Bratwurst and Rostbratwurst are sausages") ➞ "Bratwurst and Rostbratwurst are Wursts"

Notes
All German sausage names contain the word "wurst".

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 


function wurstIsBetter(str) {
    const sausages = ['Kielbasa', 'Chorizo', 'Moronga', 'Salami', 'Sausage', 'Andouille', 'Naem', 'Merguez', 'Gurka', 'Snorkers', 'Pepperoni']
    const re = new RegExp(sausages.join('|'), 'gi');
    return str.replace(re, 'Wurst');
}



//#  SOLUTION 2  

function wurstIsBetter(str) {
    return str.replace(/kielbasa|chorizo|moronga|salami|sausage|andouille|naem|merguez|gurka|snorkers|pepperoni/gi, 'Wurst');
}



//#  SOLUTION 3


function wurstIsBetter(str) {
    var meats = [
        'kielbasa',
        'chorizo',
        'moronga',
        'salami',
        'sausage',
        'andouille',
        'naem',
        'merguez',
        'gurka',
        'snorkers',
        'pepperoni'
    ]
    str = str.split(' ')
    str = str.map(s => {
        for (i in meats) {
            m = meats[i]
            sl = s.toLowerCase()
            if (sl.indexOf(m) >= 0) { return sl.replace(m, 'Wurst') }
        }
        return s;
    })
    return str.join(' ')
}




//#  SOLUTION 4

const wurstIsBetter = s => s.replace(/kielbasa|chorizo|moronga|salami|sausage|andouille|naem|merguez|gurka|snorkers|pepperoni/gi, "Wurst")