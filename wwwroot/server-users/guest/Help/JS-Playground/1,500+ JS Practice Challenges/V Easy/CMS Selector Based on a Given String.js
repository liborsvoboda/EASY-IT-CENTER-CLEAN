



/*


CMS Selector Based on a Given String
Create a function that takes an array and a string as arguments and returns the list of CMSs that include the given string. Return the names in an array in alphabetical order.

Examples
cmsSelector(["WordPress", "Joomla", "Drupal" ], "w") ➞ ["WordPress"]

cmsSelector(["WordPress", "Joomla", "Drupal", "Magento" ], "ru") ➞ ["Drupal"]

cmsSelector(["WordPress", "Joomla", "Drupal", "Magento" ], "") ➞ ["Drupal", "Joomla", "Magento", "WordPress"]
Notes
The given letter(s) are case sensitive and can be more than one.
In case the of an empty string, return the entire array.
A CMS is a Content Management System.


*/






/*  Solution 1   */

let cmsSelector =(a,s)=> a.filter(x => x.includes(s)).sort();

const cmsSelector = (arr, str) => arr.filter((x) => x.toLowerCase().includes(str)).sort();

const cmsSelector = (arr, str) => arr.filter(cms => cms.includes(str)).sort();

const cmsSelector = (arr, str) => arr.filter(e => e.includes(str)).sort();

const cmsSelector = (arr, str) => arr.filter(el => el.includes(str)).sort();

const cmsSelector = (arr, str) => arr.filter(v => v.includes(str)).sort();

const cmsSelector = (arr, str) => arr.filter(el => el.includes(str)).sort();

const cmsSelector = (r,s) => r.filter(e => RegExp(`${s}`,'gi').test(e)).sort()



/*  Solution 2   */


function cmsSelector(arr, str) {
    
	return arr.sort().filter((word) => word.toLowerCase().includes(str));
}



function cmsSelector(arr, str) {
    return arr.sort().filter(item => item.indexOf(str) >= 0)
}


/*  Solution 3   */

function cmsSelector(arr, str) {
	const newArray=[];
	for(let i=0; i<arr.length; i++){
		if(arr[i].includes(str)){
			newArray.push(arr[i])
		}
	}
	const sortedArray = newArray.sort();
	return sortedArray;
}

//create a new array
//create a for loop that looks through the array
// if the string in the array INCLUDES the str, then push the string in the array to empty array
//sort the new array
//include
//sort
//for loop
//



nction cmsSelector(arr, str) {
	return arr.filter(x => x.includes(str)).sort();
}