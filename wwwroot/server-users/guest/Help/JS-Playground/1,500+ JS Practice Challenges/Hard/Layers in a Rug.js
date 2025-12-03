/*

Layers in a Rug


Write a function that counts how many concentric layers a rug.

Examples
countLayers([
  "AAAA",
  "ABBA",
  "AAAA"
]) ➞ 2

countLayers([
  "AAAAAAAAA",
  "ABBBBBBBA",
  "ABBAAABBA",
  "ABBBBBBBA",
  "AAAAAAAAA"
]) ➞ 3

countLayers([
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"
]) ➞ 5



Notes
Multiple layers can share the same component so count them separately (example #2).
Layers will be horizontally and vertically symmetric.
There will be at least one layer for each rug.

*/


//#############################################################
//#    SOLUTION 1
//#############################################################


function countLayers(rug) {
	return rug.filter((r, i) => i === rug.indexOf(r)).length
}



//#############################################################
//#    SOLUTION 2
//#############################################################


const countLayers = rug => new Set(rug).size;



//#############################################################
//#    SOLUTION 3
//#############################################################


const countLayers = rug => [...new Set(rug)].length;


//#############################################################
//#    SOLUTION 4
//#############################################################


function countLayers(rug) {
	let middleLayer = rug.length > 1 ? rug[Math.round(rug.length / 2) - 1].split("") : rug[0].split("")
	let layerCounter = 1
	let prevEl = middleLayer[0]
	
	middleLayer.forEach(el => {
		if (el !== prevEl) {
			layerCounter += 1
		}
		prevEl = el
	})
	
	return Math.round(layerCounter / 2)
}
