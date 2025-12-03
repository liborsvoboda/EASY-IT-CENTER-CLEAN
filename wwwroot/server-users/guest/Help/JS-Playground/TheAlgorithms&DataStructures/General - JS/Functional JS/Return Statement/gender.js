function name(firstnam, lastname, gender) {
    var output;
    if (gender === "male") {
      output = "Mr " + firstnam + " " + lastname;
    } else if (gender === "female") {
      output = "Ms " + firstnam + " " + lastname;
    }
  
    return output;
  }
  
  var fullname = name("Israt", "Maisa", "female");
  
  console.log(fullname);
  