let myusername = "amisha";
let mypassword = "9882";

function login(username, password) {
  if (username === myusername && password === mypassword) {
    console.log("login successful");
  } else {
    console.log("wrong username or password");
  }
}

login("amisha", "9882");