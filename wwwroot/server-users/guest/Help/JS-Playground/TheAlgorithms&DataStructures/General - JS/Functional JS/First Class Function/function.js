// we can return function from another funtion

function base(b) {
    return function (n) {
      var result = 1;
  
      for (var i = 0; i < b; i++) {
        result *= n;
      }
  
      return result;
    };
  }
  
  var power = base(2);
  
  var result = power(5);
  
  result;