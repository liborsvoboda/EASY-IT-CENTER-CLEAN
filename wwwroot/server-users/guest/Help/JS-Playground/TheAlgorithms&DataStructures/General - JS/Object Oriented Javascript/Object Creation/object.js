var book = {
    name: "functional js",
    author: "Micbael",
    bublisher: "O' Reilly",
    page: 250,
  
    print: function () {
      console.log(this.name, this.author);
    },
  };
  
  // console.log(book);
  
  // book.print();
  
  console.log("book name " + book.name);
  
  console.log("author " + book["author"]);
  
  book.bublishyear = 2010;
  console.log("Publish year " + book.bublishyear);
  
  book["price"] = 30;
  console.log("price " + book.price);
  
  for (var probs in book) {
    console.log(probs);
  
    console.log(probs + "=" + book[probs]);
  }