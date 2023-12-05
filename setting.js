const settingWrapper = document.querySelector(".setting-content-wrapper")

  const Item = settingWrapper.querySelectorAll(".business-setting")
    const buttonHTML = Array.from(Item, () => {
        return `<span class="carusel-btn"></span>`;
    })

    settingWrapper.insertAdjacentHTML("afterbegin", `
    <div class="setting-bars">
        ${buttonHTML.join("")}
    </div>
    `)

   const buttons = settingWrapper.querySelectorAll(".carusel-btn")
   buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        // un - select the items
        Item.forEach(items => items.classList.remove("business-complete"))
        buttons.forEach(button => button.classList.remove("active"))

        Item[i].classList.add("business-complete")
        button.classList.add("active")
    })
    Item[0].classList.add("business-complete")
    buttons[0].classList.add("active")
   })

   const profile = document.querySelector(".profile")
   let upDateProf = document.querySelector(".update-profile")

   profile.addEventListener("click", () => {
    let profWrap = document.querySelector(".profile-wrapper")

    upDateProf.classList.add("active")
    profWrap.classList.add("active")
   })

   upDateProf.addEventListener("click", e => {
    if(e.target.matches(".dismissProf")){
        upDateProf.classList.remove("active")
    }
   })