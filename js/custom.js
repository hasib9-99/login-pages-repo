const fullName = document.querySelector(".name")
const email = document.querySelector(".email")
const userName = document.querySelector(".user_name")
const password = document.querySelector(".password")
const rePassword = document.querySelector(".re_password")
const checkbox = document.getElementById("checktik")
const submit = document.querySelector(".btn")
const RPassIcon = document.querySelector(".re__pass_icon")
const PassIcon = document.querySelector(".pass_icon")
const error = document.querySelector(".error")


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    if(fullName.value == 0){
        fullName.classList.add('placeholder__error')
    }
    if(email.value == 0){
        email.classList.add('placeholder__error')
    }
    if(userName.value == 0){
        userName.classList.add('placeholder__error')
    }
    if(fullName.value == 0){
        fullName.classList.add('placeholder__error')
    }
    if(password.value == 0){
        password.classList.add('placeholder__error')
    }else if(password.value > 6 && password.value < 32){
        error.innerHTML = "please enter password 6 to 32"
    }
    if(rePassword.value == 0){
        rePassword.classList.add('placeholder__error')
    }
})

PassIcon.addEventListener("click",()=> {
    if(password.type == "password"){
        password.type = "text"
    }else{
        password.type = "password"
    }
    
})


RPassIcon.addEventListener("click",()=> {
    if(rePassword.type == "password"){
        rePassword.type = "text"
    }else{
        rePassword.type = "password"
    }
    
})
