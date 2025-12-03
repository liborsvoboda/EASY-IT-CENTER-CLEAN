const obj = {
    username: "sohanR",
    email: "sohan.rahman66d@gmail.com",
  };
  
  let { username, email } = obj;
  
  console.log(username, email);
  
  function print({ username, email }) {
    console.log(`Hello ${username} Email: ${email}`);
  }
  
  print({ email, username });