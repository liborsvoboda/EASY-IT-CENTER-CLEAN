



/*


Drink Sorting
You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks object sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
The output of the sorted drinks object will be:

Examples
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
Notes




*/


/*  Solution 1   */


function sortDrinkByPrice(drinks){
	const sorted = drinks.sort(function(a, b){
    return a.price - b.price;
	});
	return sorted;
}


/*  Solution 2   */

const sortDrinkByPrice = drinks => drinks.sort((a, b) => a.price - b.price);


const sortDrinkByPrice = a => a.sort((x,y) => x.price - y.price);


/*  Solution 3   */

function sortDrinkByPrice(drinks){
    return drinks.sort((a,b)=> a.price - b.price)
   }



   function sortDrinkByPrice(drinks) {
	return drinks.sort((a,b) => a.price-b.price)
}

function sortDrinkByPrice(drinks){
	return drinks.sort((prev, next) => prev.price - next.price);
}




function sortDrinkByPrice(drinks){
	function compare(a,b){
		const drinkA = a.price
		const drinkB = b.price
		let comp = 0
		if (drinkA > drinkB){
			comp = 1
		} else if (drinkB > drinkA){
			comp = -1
		}
		return comp
	}
	
	return drinks.sort(compare)
}