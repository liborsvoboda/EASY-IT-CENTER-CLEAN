



/*

Smash Factor
Smash factor is a term in golf that relates to the amount of energy transferred from the club head to the golf ball. The formula for calculating smash factor is ball speed divided by club speed.

Create a function that takes ball speed bs and club speed cs as arguments and returns the smash factor to the nearest hundredth.

Examples
smashFactor(139.4, 93.8) ➞ 1.49

smashFactor(181.2, 124.5) ➞ 1.46

smashFactor(154.7, 104.3) ➞ 1.48
Notes
Remember to round to the nearest hundredth.
All values will be valid (so no dividing by zero)



*/






/*  Solution 1   */

const smashFactor = (bs, cs) => Number((bs / cs).toFixed(2));

const smashFactor = (bs, cs) => +(bs / cs).toFixed(2);

let smashFactor = (bs,cs) => parseFloat((bs / cs).toFixed(2));


const smashFactor = (bs, cs) => Math.round((bs/cs) * 100)/100;


const smashFactor = (bs, cs) => +(bs / cs).toFixed(2);




/*  Solution 2   */

function smashFactor(bs, cs) {
	return Number((bs / cs).toFixed(2));
}



/*  Solution 3   */


function smashFactor(bs, cs) {
    return +(bs / cs).toFixed(2);
  }