



/*


Find the Bug: Returning the Container
The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.

The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...

Examples
getContainer("Bread") ➞ "bag"

getContainer("Beer") ➞ "bottle"

getContainer("Candy") ➞ "plastic"

getContainer("Cheese") ➞ null
Notes
Think about what the object's packaging should be.


*/






/*  Solution 1   */

function getContainer(product) {
	return {Eggs: "carton", Milk: "bottle", Bread: "bag", Beer: "bottle", Candy: "plastic", Cheese: null}[product];
}



/*  Solution 2   */

function getContainer(product) {
	switch (product) {
		  case "Bread": return "bag";
		  case "Beer":
		  case "Milk": return "bottle";
		  case "Cerials": return "box";
		  case "Eggs": return "carton";
		  case "Candy": return "plastic";
		  default: return null;
	  }
  }



/*  Solution 3   */


function getContainer(product) {
	let container
  switch (product) {
		case "Bread":
			container = "bag"
			break;
		case "Beer":
			container = "bottle"
			break;
		case "Milk":
			container = "bottle"
			break;
		case "Cerials":
			container = "box"
			break;
		case "Eggs":
			container = "carton"
			break;
		case "Candy":
			container = "plastic"
			break;
		default:
			container = null
	}

	return container
}