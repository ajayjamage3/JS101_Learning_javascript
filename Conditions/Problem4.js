let username = "abc@gmail.com";
let password = "password";

let ent_username = "abc@gmail.com";
let ent_password = "password";

if (ent_username == username){
  if(ent_password == password){
    console.log("Login successfully");
  }
  else{
    console.log("Incorrect password");
  }
}
else{
  console.log("Incorrect credentials");
}