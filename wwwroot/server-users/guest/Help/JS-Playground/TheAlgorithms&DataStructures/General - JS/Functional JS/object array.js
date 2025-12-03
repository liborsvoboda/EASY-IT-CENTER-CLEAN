var people = [
  { name: "Sohan", age: 20 },
  { name: "Raihan", age: 22 },
  { name: "Novo jit", age: 24 },
  { name: "Darus", age: 30 },
];

//sorting with age
// people.sort(function (a, b) {
//   return a.age - b.age;
// });

//sorting with name

people.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
});

console.log(people);
