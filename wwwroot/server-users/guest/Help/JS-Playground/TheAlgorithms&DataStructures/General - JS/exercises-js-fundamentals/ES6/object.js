let username = "sohanR";
let email = "sohan.rahman66d@gmail.com";

const person = {
  username,
  email,
  print() {
    console.log(this.username, this.email);
  },
};

person.print();
console.dir(person);
