document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const username = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

const message = document.getElementById("message");

/* ellenőrzés */

if(username === "" || email === "" || password === ""){

message.style.color = "red";
message.textContent = "Minden mezőt ki kell tölteni!";
return;

}

/* user objektum */

const user = {

username: username,
email: email,
password: password

};

/* mentés */

localStorage.setItem("user", JSON.stringify(user));

/* automatikus bejelentkezés */

localStorage.setItem("loggedIn", "true");

message.style.color = "lightgreen";
message.textContent = "Sikeres regisztráció!";

/* átirányítás főoldalra */

setTimeout(function(){

window.location.href = "../HTML/fooldal.html";

},1000);

});

});