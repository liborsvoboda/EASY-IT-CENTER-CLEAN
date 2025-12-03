  
const obj = {
  name: "sohan",
  print: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

obj.print();
