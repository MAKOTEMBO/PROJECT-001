const button = document.querySelector("button")
const body = document.querySelector("body")
button.addEventListener("click",()=>{
    body.style.backgroundColor = "grey"
    body.style.fontSize = "4rem"
    body.innerHTML = "the end"
})