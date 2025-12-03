



/*

The pH Scale
Given a pH value, return whether that value is "alkaline", "acidic", or "neutral". Return "invalid" if the value given is less than 0 or greater than 14.

Image of a pH chart

Examples
pHName(5) ➞ "acidic"

pHName(8.7) ➞ "alkaline"

pHName(7) ➞ "neutral"
Notes
Values such as 6.9999 and 8.00001 should return "acidic" and "alkaline" respectively.



*/






/*  Solution 1   */

function pHName(ph) {
	if (ph>14||ph<0) return 'invalid';
	if (ph<7) return 'acidic';
	if (ph>7) return 'alkaline';
	return 'neutral';
}



/*  Solution 2   */

const pHName = pH => pH < 0 || pH > 14 ? 'invalid' :
    pH < 7 ? 'acidic' : pH > 7 ? 'alkaline' : 'neutral';
    

    function pHName(pH) {
        return pH >= 14 || pH <= 0 ? "invalid" :
            pH === 7 ? "neutral" : 
                pH > 7 ? 'alkaline' : "acidic";
    }



/*  Solution 3   */

function pHName(pH) {
	if(pH < 0 || pH > 14) {
		return "invalid"
	}
	
	if(pH < 7) {
		return "acidic"
	} else if(pH === 7) {
		return "neutral"
	} else {
		return "alkaline"
	}
}