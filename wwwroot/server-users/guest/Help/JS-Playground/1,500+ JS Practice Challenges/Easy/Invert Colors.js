/*  

Invert Colors

Create a function that inverts the rgb values of a given tuple.

Examples
colorInvert([255, 255, 255]) ➞ [0, 0, 0]
// (255, 255, 255) is the color white.
// The opposite is (0, 0, 0), which is black.

colorInvert([0, 0, 0]) ➞ [255, 255, 255]

colorInvert([165, 170, 221]) ➞ [90, 85, 34]

Notes
255 is the max value of a single color channel.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################







//#############################################################
//#    SOLUTION 1
//#############################################################



function colorInvert(rgb) {
    return rgb.map(x => 255 - x);
}



const colorInvert = rgb => rgb.map(x => x = Math.abs(x - 255));


//#############################################################
//#    SOLUTION 2
//#############################################################


function colorInvert(rgb) {
    return rgb.map(el => Math.abs(el - 255))
}



//#############################################################
//#    SOLUTION 3
//#############################################################



function colorInvert(rgb) {
    for (var i = 0; i < rgb.length; i++) {
        rgb[i] = 255 - rgb[i];
    }
    return rgb;
}


//#############################################################
//#    SOLUTION 4
//#############################################################



function colorInvert(rgb) {
    var array = [];
    array[0] = 255 - rgb[0];
    array[1] = 255 - rgb[1];
    array[2] = 255 - rgb[2];
    return array;
}




//#############################################################
//#    SOLUTION 5
//#############################################################



function colorInvert(rgb) {
    let color = rgb.map(x => {
        return 255 - x;
    });
    return color;
}