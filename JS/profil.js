document.addEventListener("DOMContentLoaded", function(){

const profileImage = document.getElementById("profileImage")
const navProfileImage = document.getElementById("navProfileImage")

const profileName = document.getElementById("profileName")
const navProfileName = document.getElementById("navProfileName")

const nameInput = document.getElementById("nameInput")

const dropArea = document.getElementById("dropArea")
const imageUpload = document.getElementById("imageUpload")

const loginBtn = document.getElementById("loginBtn")



/* LOAD USER */

let savedName = localStorage.getItem("userName")
let savedImage = localStorage.getItem("profileImage")

if(savedName){

profileName.textContent = savedName
navProfileName.textContent = savedName

loginBtn.style.display="none"

}else{

profileName.textContent="Vendég"
navProfileName.textContent="Vendég"

}



if(savedImage){

profileImage.src = savedImage
navProfileImage.src = savedImage

}



/* LOGIN PAGE */

window.goLogin = function(){

window.location.href="../HTML/login.html"

}



/* CHANGE NAME */

window.changeName = function(){

let newName = nameInput.value

if(newName==="") return

localStorage.setItem("userName",newName)

profileName.textContent=newName
navProfileName.textContent=newName

nameInput.value=""

}



/* IMAGE CLICK */

dropArea.addEventListener("click",()=>{

imageUpload.click()

})



/* IMAGE UPLOAD */

imageUpload.addEventListener("change",function(){

const file=this.files[0]

if(!file) return

const reader=new FileReader()

reader.onload=function(e){

localStorage.setItem("profileImage",e.target.result)

profileImage.src=e.target.result
navProfileImage.src=e.target.result

}

reader.readAsDataURL(file)

})



/* FAVORITES */

let favorites = JSON.parse(localStorage.getItem("favorites")) || []

const favoritesList = document.getElementById("favoritesList")

function renderFavorites(){

favoritesList.innerHTML=""

favorites.forEach((band,index)=>{

let li=document.createElement("li")

li.className="list-group-item"

li.innerHTML=`
${band}
<button class="remove-btn" onclick="removeFavorite(${index})">X</button>
`

favoritesList.appendChild(li)

})

}

renderFavorites()



window.addFavorite=function(){

const input=document.getElementById("favoriteInput")

let band=input.value

if(band==="") return

favorites.push(band)

localStorage.setItem("favorites",JSON.stringify(favorites))

input.value=""

renderFavorites()

}



window.removeFavorite=function(index){

favorites.splice(index,1)

localStorage.setItem("favorites",JSON.stringify(favorites))

renderFavorites()

}



/* SECTION SWITCH */

window.showSection=function(sectionId){

document.querySelectorAll(".section").forEach(section=>{

section.classList.remove("active")

})

document.getElementById(sectionId).classList.add("active")

}



/* LOGOUT */

window.logout=function(){

localStorage.clear()

location.reload()

}

})



