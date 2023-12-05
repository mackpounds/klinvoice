const cards = document.querySelectorAll(".card")


const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
    threshold: 0.2,
})

cards.forEach(card =>{
    observer.observe(card)
})

let menuContent = document.getElementsByClassName("menu-content")[0]
menuContent.addEventListener("click", function(){
    const spanBar = document.getElementsByClassName("span-bar")[0]
    spanBar.classList.toggle("active")
    const solutionBar = document.getElementsByClassName("solution-bar")[0]
    solutionBar.classList.toggle("active")
    const solMenu = document.getElementsByClassName("sol-menu")[0]
    solMenu.classList.toggle("activer")
})

const menuBar = document.getElementsByClassName("menu-bar")[0]
menuBar.addEventListener("click", function() {
    menuBar.classList.toggle("active")
    const ulMenu = document.querySelector(".nav-bar ul")
    ulMenu.classList.toggle("active")
    const liMenu = document.querySelectorAll(".nav-bar ul li")
    liMenu.forEach(li =>{
        li.classList.toggle("active")
    })
})

const loader = document.querySelector(".center")
window.onload = function(){
    loader.classList.add("active")
}

 
