function print(data, callback1, callback2) {
    console.log("Original Data: " + data);
  
    callback1(data);
    callback2(data);
  }
  
  print(
    "Sohan fall in love with Javascript",
    //creat anonymous function where we need to call callback function
    function (data) {
      var data = data.toUpperCase();
      console.log("Uppercase: " + data);
    },
    function (data) {
      var data = data.toLowerCase();
      console.log("Lowercase: " + data);
      console.log("Length: " + data.length);
    }
  );