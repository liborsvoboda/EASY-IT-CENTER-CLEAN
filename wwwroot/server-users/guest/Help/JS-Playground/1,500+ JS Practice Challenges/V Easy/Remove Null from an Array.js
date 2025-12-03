



/*


Remove Null from an Array
Create a function to remove all null values from an array.

Examples
removeNull(["a", null, "b", null]) ➞ ["a", "b"]

removeNull([null, null, null, null, null]) ➞ []

removeNull([7, 8, null, 9]) ➞ [7, 8, 9]
Notes


*/






/*  Solution 1   */


function removeNull(arr) {
	return arr.filter(x => x !== null)
}


/*  Solution 2   */

removeNull=a=>a.filter(b=>b)


removeNull=a=>a.filter(b=>b!=null)

const removeNull = arr => arr.filter(el => el !== null);


const removeNull = (arr) => arr.filter((a) => a !== null);

/*  Solution 3   */


const removeNull = (arr) => {
    let newArr=[];	
       for(let i=0;i<arr.length;i++)
           {
               if(arr[i] != null)
               newArr.push(arr[i])
           }
       return newArr
   }