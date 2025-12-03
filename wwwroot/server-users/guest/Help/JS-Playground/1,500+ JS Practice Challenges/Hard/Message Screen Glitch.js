/*

Message Screen Glitch

Your open-plan office building has a scrolling message screen on the far wall. One day, you notice that the messages are starting to glitch. Some of the lower case letters are being replaced by their position in the alphabet ("a" = 1, "b" = 2, ..., "z" = 26). Given the glitched text, return the corrected message.

Examples
messageGlitch("T21e19d1y's m1r11e20i14g m5e20i14g w9l12 14o23 2e i14 20h5 3o14f5r5n3e r15o13.")
➞ "Tuesday's marketing meeting will now be in the conference room."

messageGlitch("A s9l22e18 Pr9u19 9s d15u2l5-16a18k5d o21t19i4e. Wi12l t8e o23n5r p12e1s5 13o22e i20.")
➞ "A silver Prius is double-parked outside. Will the owner please move it."

messageGlitch("P12e1s5 4o14'20 13i3r15w1v5 6i19h i14 20h5 20h9r4 6l15o18 11i20c8e14!")
➞ "Please don't microwave fish in the third floor kitchen!"

Notes
Each group of numbers will always refer to one letter only (e.g. 14 = "n", not "ad").

*/




//#############################################################
//#    SOLUTION 1                                             #
//#############################################################


const messageGlitch = str => str.replace(/\d+/g, num => String.fromCharCode(+num + 96));



//#############################################################
//#    SOLUTION 2                                             #
//#############################################################


function messageGlitch(txt) {
    return txt.replace(/\d+/g, m => String.fromCharCode(+m + 96));
  }



//#############################################################
//#    SOLUTION 3                                            #
//#############################################################


let cifra = c => c >= '0' && c <= '9';

function messageGlitch(txt) {
    let ntext = '';
	for (let i = 0; i < txt.length - 1; i++) {
        if (cifra(txt[i]) && cifra(txt[i + 1])) {
            ntext += String.fromCharCode('a'.charCodeAt(0) - 1 + Number(txt.substring(i, i + 2)));
            i++;
            continue;
        }
        if (cifra(txt[i])) {
            ntext += String.fromCharCode('a'.charCodeAt(0) - 1 + Number(txt[i]));
            continue;
        }
        ntext += txt[i];
    }
    if (cifra(txt[txt.length - 1]) && !cifra(txt[txt.length - 2]))
        ntext += String.fromCharCode('a'.charCodeAt(0) - 1 + Number(txt[txt.length - 1]));
    else (!cifra(txt[txt.length - 1]))
        ntext += txt[txt.length - 1];

    return ntext;
}



//#############################################################
//#    SOLUTION 4                                             # 
//#############################################################
  

const messageGlitch = txt => {
	const alphabet = Array(26)
	.fill()
	.map((_,i) => String.fromCharCode(97 + i))
	
	return txt.replace(/\d+/g, match => alphabet[match - 1])
}