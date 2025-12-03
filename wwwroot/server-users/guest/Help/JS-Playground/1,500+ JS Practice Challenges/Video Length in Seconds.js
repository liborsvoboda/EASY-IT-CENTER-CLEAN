
/*


Video Length in Seconds
You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

Examples
minutesToSeconds("01:00") ➞ 60

minutesToSeconds("13:56") ➞ 836

minutesToSeconds("10:60") ➞ false
Notes
The video length is given as a string.
If the number of seconds is 60 or over, return false (see example #3).
You may get a number of minutes over 99 (e.g. "121:49" is perfectly valid).


*/






/*  Solution 1   */

const minutesToSeconds = time =>  ([m, s] = time.split(':'))[1] >= 60 ? false : +m*60 + +s

const minutesToSeconds = time => /^\d+:[0-5]\d$/.test(time) && ((m, s) => m * 60 + s * 1)(...time.split(":"));



/*  Solution 2   */

const minutesToSeconds = t =>  t.split(':')[1] >= 60 ? false :
 t.split(':').reduce((a,b) => (60 * a) + +b);



/*  Solution 3   */


function minutesToSeconds(time) {
	tempo = time.split(':');
	if(tempo[1] >= 60){
		return false;
	}else{
		return ((+tempo[0]*60) + (+tempo[1]));	
	}
}






const minutesToSeconds = str => {
    let calc = str.split(':').map(val => +val)[1]  >= 60 ? false : str.split(':').map(val => +val)
    return Number.isInteger(calc[1])? Number(calc[0]) * 60 + calc[1] : false
    }




    function minutesToSeconds(time) {
        let parts = time.split(':');
      let minutes = Number(parts[0]);
      let seconds = Number(parts[1]);
        if (seconds > 59) { return false };
        
        return (minutes * 60 + seconds);
    }