/*

Total Sales of Product


In this question you will be given a table as below, where the first row lists the names of products, and each of row after that lists the sales of the product for each day (over some time range).

[
  ["A", "B", "C"],
  [ 2 ,  7 ,  1 ],
  [ 3 ,  6 ,  6 ],
  [ 4 ,  5 ,  5 ]
]
Write a function that receives:

A sales table sales as shown above.
The name of a product product.
... and returns the total sales if the product is on the array, otherwise return the string "Product not found".

Examples
totalSales([
  ["A", "B", "C"],
  [ 2 ,  7 ,  1 ],
  [ 3 ,  6 ,  6 ],
  [ 4 ,  5 ,  5 ]
], "A") ➞ 9

// 2 + 3 + 4 = 9


totalSales([
  ["A", "B", "C"],
  [ 2 ,  7 ,  1 ],
  [ 3 ,  6 ,  6 ],
  [ 4 ,  5 ,  5 ]
], "C") ➞ 12

// 1 + 6 + 5 = 12


totalSales([
  ["A", "B", "C"],
  [ 2 ,  7 ,  1 ],
  [ 3 ,  6 ,  6 ],
  [ 4 ,  5 ,  5 ]
], "D") ➞ "Product not found"


Notes
The examples above all use the same sales table, but in the tests the table will vary.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function totalSales(sales, product) {
    return sales[0].indexOf(product) == -1 ? "Product not found" : sales.reduce((a, v, i) => a + (i == 0 ? 0 : v[sales[0].indexOf(product)]), 0)
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function totalSales(sales, product) {
    let p = sales[0].indexOf(product);
    return p >= 0 ? sales.slice(1).reduce((a, b, i) => a + sales[i + 1][p], 0) : "Product not found";
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function totalSales(s, p) {
    var dex = s[0].indexOf(p)
    if (dex < 0) { return "Product not found" }
    return s.map(x => x[dex]).filter(x => x > 0).reduce((a, b) => a + b)
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const cache = new Map();

const totalSales = (sales, product) => {
    if (!cache.has(sales)) {
        const products = sales[0];
        const days = sales.slice(1);
        cache.set(sales, products.reduce((map, item, i) => (
            map.set(item, days.reduce((sum, day) => sum + day[i], 0))
        ), new Map()));
    }

    return cache.get(sales).get(product) || 'Product not found';
};




//#############################################################
//#  SOLUTION 5
//#############################################################


const totalSales = (s, p) => (n = s[0].indexOf(p), n > -1 ? s.slice(1).reduce((a, c) => a + c[n], 0) : "Product not found")