const showBars = document.querySelectorAll(".show-bar")
const userMenuContainer = document.querySelector(".user-menu-container")
const sideBar = document.querySelector(".side-bar")

showBars.forEach(showBar =>{
    showBar.addEventListener("click", () => {
        userMenuContainer.classList.toggle("active")
        sideBar.classList.toggle("active")
    })
})

const loader = document.querySelector(".loading")
window.onload = function(){
    loader.classList.add("active")
}


 function myAccount(){
    const frame = document.querySelector(".frame")
    frame.classList.toggle("active")
 }