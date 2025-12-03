



/*

Profit Margin
Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formated string, and rounded to one decimals. To calculate profit margin you subtract the cost from the sales price, then divide by salesprice.

Examples
profitMargin(50, 50) ➞ "0.0%"

profitMargin(28, 39) ➞ "28.2%"

profitMargin(33, 84) ➞ "60.7%"
Notes
Remember to return the result as a percentage formated string.
Only one decimal should be included.



*/






/*  Solution 1   */


const profitMargin = (cost, sales) => ((sales - cost) * 100 / sales).toFixed(1) + '%';


/*  Solution 2   */

const profitMargin = (cost, sale) => (100*(sale-cost)/sale).toFixed(1)+'%';





/*  Solution 3   */


function profitMargin(costPrice, salesPrice) {
	return (((salesPrice - costPrice)/salesPrice) * 100).toFixed(1)+'%';
}