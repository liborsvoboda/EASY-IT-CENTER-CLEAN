var me = {
    name: "Sohan",
    age: 20,
    email: "sohan.rahman66d@gmail.com",
  };
  
  function printMySelf(person, callback) {
    console.log("person: " + person.name + " (" + person.age + ")");
  
    if (person.age >= 18) {
      callback(person.email);
    } else {
      console.log("You are too kid");
    }
  }
  
  printMySelf(me, function (email) {
    console.log("Email send to " + email);
  });