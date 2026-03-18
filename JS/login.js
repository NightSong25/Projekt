function login(){

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

const message = document.getElementById("message");

/* DEMO LOGIN */

if(username === "admin" && password === "1234"){

localStorage.setItem("user", username);

message.style.color = "lightgreen";
message.textContent = "Sikeres bejelentkezés!";

setTimeout(() => {

window.location.href = "../HTML/index.html";

},1000);

}

else{

message.style.color = "red";
message.textContent = "Hibás felhasználónév vagy jelszó";

}

}