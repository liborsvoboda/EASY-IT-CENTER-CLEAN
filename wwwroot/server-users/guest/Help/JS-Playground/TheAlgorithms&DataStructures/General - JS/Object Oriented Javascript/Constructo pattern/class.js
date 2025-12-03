  
function Person(name, email) {
    this.name = name;
    this.email = email;
    this.print = function () {
      console.log("Name: " + this.name);
    };
  }
  
  var gg = new Person("Sohan", "me@sohan.com");
  var gg1 = new Person("Novojit", "novo@email");
  var gg2 = new Person("Darus", "darus@email.com");
  var gg3 = new Person("Raihan", "raihan@email.com");
  
  var email = [gg, gg1, gg2, gg3];
  
  email.forEach(function (Person) {
    Person.print();
    console.log("Email: " + Person.email);
  });
  
  function Book(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;
  }
  
  var book = new Book(" Functional js", "Micbael", 50);
  
  console.log(book.constructor);