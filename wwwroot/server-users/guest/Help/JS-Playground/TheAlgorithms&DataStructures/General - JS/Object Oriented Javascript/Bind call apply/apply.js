function add(a, b) {
  return (a + b) * this.c;
}

var obj1 = {
  c: 3,
};

var obj2 = {
  c: 5,
};

var res = add.call(obj1, 10, 5);
res;

var res2 = add.apply(obj2, [10, 4]);
res2;

var binded = add.bind(obj2);
console.log(binded(10, 5));
