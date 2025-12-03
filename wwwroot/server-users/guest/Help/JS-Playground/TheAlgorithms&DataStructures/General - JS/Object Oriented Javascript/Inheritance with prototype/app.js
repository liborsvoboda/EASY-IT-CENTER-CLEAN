// function Person() {
//   this.name = "sohan";
// }

// function Teacher() {
//   Person.call(this);
//   this.subject = "javascript";
// }

// var Teacher = new Teacher();
// var name = Teacher.name;
// console.log(name);

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.printName = function () {
    console.log("Name " + this.name);
  };
  
  function Student(name, id) {
    Person.call(this, name);
    this.id = id;
  }
  
  Student.prototype = Object.create(Person.prototype);
  //Object.setPrototypeOf(Student.prototype, Person.prototype);
  var student = new Student("sohan", 751);
  student;
  
  Person.prototype.printName = function () {
    console.log(this.name + "not copied");
  };