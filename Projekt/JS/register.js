const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){

e.preventDefault();

let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let users = JSON.parse(localStorage.getItem("users")) || [];

/* EMAIL ellenőrzés */

if(!email.includes("@")){

message.textContent = "Az email címnek tartalmaznia kell @ jelet!";
message.style.color = "red";
return;

}

/* ellenőrzi hogy létezik e */

let userExists = users.find(user => user.username === username);

if(userExists){

message.textContent = "Ez a felhasználónév már létezik!";
message.style.color = "red";
return;

}

/* új user */

let newUser = {

username: username,
email: email,
password: password

};

users.push(newUser);

localStorage.setItem("users", JSON.stringify(users));

message.textContent = "Sikeres regisztráció!";
message.style.color = "#ffffff";

form.reset();

});