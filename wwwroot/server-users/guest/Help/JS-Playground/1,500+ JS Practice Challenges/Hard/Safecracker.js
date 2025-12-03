/*

Safecracker

Traditional safes use a three-wheel locking mechanism, with the safe combination entered using a dial on the door of the safe. The dial is marked with clockwise increments between 0 and 99. The three-number combination is entered by first dialling to the right (clockwise), then to the left (anti-clockwise), and then to the right (clockwise) again. Combination numbers are read from the top of the dial:

Given the starting (top) position of the dial and the increments used for each turn of the dial, return an array containing the combination of the safe.

Step-By-Step Example
safecracker(0, [3, 10, 5]) ➞ [97, 7, 2]

Starting dial position of 0 (same as the diagram above).

First turn (rightward) of 3 increments:
0 -> 99, 98, 97
First number of combination = 97

Second turn (leftward) of 10 increments:
97 -> 98, 99, 0, 1, 2, 3, 4, 5, 6, 7
Second number of combination = 7

Third turn (rightward) of 5 increments:
7 -> 6, 5, 4, 3, 2
Third number of combination = 2

The final combination is [97, 7, 2]
Other Examples
safecracker(96, [54, 48, 77]) ➞ [42, 90, 13]

safecracker(43, [51, 38, 46]) ➞ [92, 30, 84]

safecracker(4, [69, 88, 55]) ➞ [35, 23, 68]


Notes
Each of the three combination numbers will be different.


*/






//#############################################################
//#  SOLUTION 1 
//#############################################################



function safecracker(start, increments) {
	let code = [];
	const within99 = (num) => num > 99 ? num -= 100 : num < 0 ? num += 100 : num
	code.push(within99(start - increments[0]));
	code.push(within99(code[0] + increments[1]));
	code.push(within99(code[1] - increments[2]));	
	return code
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


function safecracker(start, increments) {
	p = []
	start = start - increments[0]
	p.push(start)
	start = start = start + increments[1]
	p.push(start)
	start = start = start - increments[2]
	p.push(start)
	
	return p.map(x => x < 0 ? 100 + x : x > 100 ? x - 100 : x)
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function safecracker(s, i) {
	var a = [];
	s-=i[0];
	a.push(s);
	s+=i[1];
	a.push(s);
	s-=i[2];
	a.push(s);
	return a.map(x=> x > 99 ? x-100 : x < 0 ? x + 100 : x);
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function safecracker(start, increments) {
	const res=[]
	res.push((start+100-increments[0])%100);
	res.push((res[0]+increments[1])%100)
	res.push((100+res[1]-increments[2])%100)
	return res;
}