function Obj(a, b) {
    this.a = a;
    this.b = b;
  }
  
  function Obj2(a, b, c) {
    Obj.call(this, a, b);
    this.c = c;
  }
  
  Obj2.prototype = Object.create(Obj.prototype);
  var obj1 = new Obj(1, 2);
  
  var obj2 = new Obj2(4, 5, 6);
  Obj2;