



/*

Array of Consecutive Numbers
Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

Examples
getSequence(1, 5) ➞ [1, 2, 3, 4, 5]

getSequence(98, 100) ➞ [98, 99, 100]

getSequence(1000, 1000) ➞ [1000]
Notes
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
ES6 deepening (for medium or higher level users): try to implement a one-liner function that calls a single method.



*/






/*  Solution 1   */

function getSequence(low, high) {
    const sequence = [];
  
    for (let i = low; i <= high; i++) {
      sequence.push(i);
    }
  
    return sequence;	
  }



  function getSequence(low, high) {
    var a = [];

for (var i = low; i <= high; i++) {
    a.push(i)
}
return a;
}


/*  Solution 2   */

const getSequence = (low, high) => low < high ? [low].concat(getSequence(low+1,high)) : [low];

const getSequence = (l, h) =>   Array.from({length: h-l+1}, (v,i) => l+i);

/*  Solution 3   */


function getSequence(low, high) {
	let array = []
	
	for(let i = low; i <= high; i++){
		
      array.push(i)
		
	}
  
    return array
}