const profile = document.querySelector("[data-add]")
let upDateProf = document.querySelector(".f-p")
let profWrap = document.querySelector(".f-w")

profile.addEventListener("click", () => {

 upDateProf.classList.add("active")
 profWrap.classList.add("active")
})

upDateProf.addEventListener("click", e => {
 if(e.target.matches(".dismissProf")){
     upDateProf.classList.remove("active")
 }
})


const profileSec = document.querySelector("[data-next]")
let upDateProfSec = document.querySelector(".s-p")
let profWrapSec = document.querySelector(".s-w")

profileSec.addEventListener("click", () => {

 upDateProfSec.classList.add("active")
 profWrapSec.classList.add("active")
})

upDateProfSec.addEventListener("click", e => {
 if(e.target.matches(".dismissProf")){
     upDateProfSec.classList.remove("active")
 }
})