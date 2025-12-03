
//returning object

function object() {
    return {
      name: "Sohan",
      skill: ["C++", "Javascript"],
      age: 20,
  
      print: function () {
        console.log(this.name, this.skill);
      },
    };
  }
  
  var obj = object();
  obj.print();