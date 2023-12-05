

const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")] 


 

 let currentStep =
    formSteps.findIndex(step => {
       return step.classList.contains("completed")
 })
  
 if (currentStep < 0){
        currentStep = 0
        showCurrentSteps()
}

      

 multiStepForm.addEventListener("click", e =>{
    let incrementor = 0;
        if (e.target.matches("[data-next]")){
            ++incrementor;
            currentStep += incrementor
        }
            showCurrentSteps()
        
 })

 function showCurrentSteps(){
        formSteps.forEach((steps, index) =>{
        steps.classList.toggle("completed", index === currentStep)
        })
 }

