/*

Calculate the Volume of a Pyramid

Create a function that takes the length, width, height (in meters) and output unit and returns the volume of a pyramid to three decimal places in the correct unit.

Examples
pyramidVolume(4, 6, 20, "centimeters") ➞ "160000000.000 cubic centimeters"

pyramidVolume(1843, 1823, 923, "kilometers") ➞ "1.034 cubic kilometers"

pyramidVolume(18, 412, 93, "millimeters") ➞ "229896000000000.000 cubic millimeters"


Notes
The units used are limited to: millimeters, centimeters, meters and kilometers.
Ensure you return the answer and add the correct unit in the format cubic <unit>.

*/





//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


function pyramidVolume(l, w, h, u) {
    const conversion = {
      millimeters: 1000,
      centimeters: 100,
      meters: 1,
      kilometers: 0.001,
    };
    const volume = (1 / 3) * (l * w * h) * conversion[u] ** 3;
    return `${volume.toFixed(3)} cubic ${u}`;
  }







//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


pyramidVolume = (length, width, height, unit) => {
    //calculate the base using length and width
    let base = length * width;

    let v = (base * height) / 3;

    switch (unit) {
        case 'centimeters': {
            conversion = (v * 1000000).toFixed(3)
            return `${conversion} cubic ${unit}`;
        }
        case 'meters': {
            conversion = (v).toFixed(3)
            return `${conversion} cubic ${unit}`;
        }
        case 'kilometers': {
            conversion = (v / 1e+9).toFixed(3)
            return `${conversion} cubic ${unit}`;
        }
        case 'millimeters': {
            conversion = (v * 1e+9).toFixed(3)
            return `${conversion} cubic ${unit}`;
        }
    }
}






//#############################################################
//#  SOLUTION 3                                               #           
//#############################################################



const pyramidVolume = (length, width, height, unit) =>
	'' + units((length * width * height / 3), unit).toFixed(3) + ` cubic ${unit}`;

const units = (n, u) =>
	u == 'kilometers' ? n / 1000000000 :
	u == 'centimeters' ? n * 1000000 :
	u == 'millimeters' ? n * 1000000000 : n;










//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


const metersToCubic = { millimeters: 1000000000, centimeters: 1000000, meters: 1, kilometers: 0.000000001 }
const pyramidVolume = (length, width, height, unit) => `${( length * width * height * metersToCubic[unit] / 3).toFixed(3)} cubic ${unit}`