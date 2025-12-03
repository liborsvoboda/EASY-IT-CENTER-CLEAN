



/*


Detect Browser from User Agent
You need to detect what browser is being used. Create a function that takes a string (browser identifier) and returns the browser name.

Examples
detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36") ➞ "Google Chrome"

detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0") ➞ "Mozilla Firefox"

detectBrowser("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko") ➞ "Internet Explorer"
Notes
All test case user agents are valid.


*/






/*  Solution 1   */

detectBrowser = s => s.includes("Firefox") ? "Mozilla Firefox" : s.includes("AppleWebKit") ? "Google Chrome" : "Internet Explorer"




/*  Solution 2   */


function detectBrowser(userAgent){
	if(userAgent.includes("Firefox")){
		return "Mozilla Firefox";
	}
	if(userAgent.includes("Chrome")){
		return "Google Chrome";
	}
		if(userAgent.includes("Explorer")){
		return "Internet Explorer";
	}
		if(userAgent.includes("Safari")){
		return "Apple Safari";
	}
	else{
		return "Internet Explorer";
	}
}


/*  Solution 3   */


let detectBrowser = userAgent => userAgent.includes("Firefox") 
? "Mozilla Firefox" : userAgent.includes("Chrome") ? "Google Chrome" :
"Internet Explorer";