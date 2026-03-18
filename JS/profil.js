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
    if(profileName) profileName.textContent = savedName
    if(navProfileName) navProfileName.textContent = savedName
    if(loginBtn) loginBtn.style.display="none"
}else{
    if(profileName) profileName.textContent="Vendég"
    if(navProfileName) navProfileName.textContent="Vendég"
}

if(savedImage){
    if(profileImage) profileImage.src = savedImage
    if(navProfileImage) navProfileImage.src = savedImage
}

/* LOGIN PAGE */

window.goLogin = function(){
    window.location.href="../HTML/login.html"
}

/* CHANGE NAME */

window.changeName = function(){

if(!nameInput) return

let newName = nameInput.value

if(newName==="") return

localStorage.setItem("userName",newName)

if(profileName) profileName.textContent=newName
if(navProfileName) navProfileName.textContent=newName

nameInput.value=""
}

/* IMAGE CLICK */

if(dropArea && imageUpload){
    dropArea.addEventListener("click",()=>{
        imageUpload.click()
    })
}

/* IMAGE UPLOAD */

if(imageUpload){
imageUpload.addEventListener("change",function(){

const file=this.files[0]

if(!file) return

const reader=new FileReader()

reader.onload=function(e){

localStorage.setItem("profileImage",e.target.result)

if(profileImage) profileImage.src=e.target.result
if(navProfileImage) navProfileImage.src=e.target.result

}

reader.readAsDataURL(file)

})
}

/* FAVORITES */

let favorites = JSON.parse(localStorage.getItem("favorites")) || []

const favoritesList = document.getElementById("favoritesList")

function renderFavorites(){

if(!favoritesList) return

favoritesList.innerHTML=""

favorites.forEach((band,index)=>{

let li=document.createElement("li")

li.className="list-group-item d-flex justify-content-between align-items-center"

li.innerHTML=`
${band}
<button class="btn btn-sm btn-danger" onclick="removeFavorite(${index})">X</button>
`

favoritesList.appendChild(li)

})

}

renderFavorites()

window.addFavorite=function(){

const input=document.getElementById("favoriteInput")

if(!input) return

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

const sections=document.querySelectorAll(".section")

if(!sections.length) return

sections.forEach(section=>{
section.classList.remove("active")
})

const target=document.getElementById(sectionId)

if(target) target.classList.add("active")

}

/* LOGOUT */

window.logout=function(){

localStorage.clear()
location.reload()

}

})