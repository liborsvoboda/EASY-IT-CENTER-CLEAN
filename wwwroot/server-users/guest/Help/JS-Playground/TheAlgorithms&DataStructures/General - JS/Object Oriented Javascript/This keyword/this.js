// var person = {
//   name: "Sohan",

//   print: function () {
//     console.log("Hello " + this.name);
//   },
// };

//person.print();

// var myName = person.name;
// console.log(myName );

// function add(num) {
//   console.log(this);
//   return this.value + num;
// }

// var obj = {
//   value: 30,
// };

// var binded = add.bind(obj);
// var result = binded(100);
// console.log(result);

var person = {
    name: "sohan",
  
    print: function () {
      setTimeout(
        function () {
          console.log("Hello, " + this.name);
        }.bind(this),
        2000
      );
    },
  };
  
  person.print();