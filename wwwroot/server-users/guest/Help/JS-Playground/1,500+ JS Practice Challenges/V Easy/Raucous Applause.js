



/*


Raucous Applause
After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

Given a string of what the overlapping claps sounded like, return how many claps were made in total.

Examples
countClaps("ClaClaClaClap!") ➞ 4

countClaps("ClClClaClaClaClap!") ➞ 6

countClaps("CCClaClClap!Clap!ClClClap!") ➞ 9
Notes
Each clap starts with a capital "C".


*/






/*  Solution 1   */

function countClaps(txt) {
	let newTxt = Array.from(txt)
	let count = 0;
	for(let i = 0; i < newTxt.length; i++) {
		if(newTxt[i] === "C") {
			count ++
		}
	}
	return count
}




function countClaps(txt) {
	
	var sum=0
	for(let i=0;i<=txt.length;i++){
		if (txt[i]===txt[0]){
		sum=sum+1
		}
	
		
	}
	return sum	

}





/*  Solution 2   */

const countClaps = txt => txt.match(/C/g).length





/*  Solution 3   */


function countClaps(txt) {
    return txt.split('C').length - 1
}