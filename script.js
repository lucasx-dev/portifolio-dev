const hamburguerbutton = document.querySelector("#hamburguerButton")
const closebutton = document.querySelector("#closeButton")
const menumobile = document.querySelector("#menuMobile")
    hamburguerbutton.addEventListener("click", function() {
    menumobile.classList.add("flex")
})
    closebutton.addEventListener("click", function(){
    menumobile.classList.remove("flex")
})
    function fecharaba() {
        menumobile.classList.remove("flex")
}
