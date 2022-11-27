const fullName = document.querySelector(".name")
const email = document.querySelector(".email")
const userName = document.querySelector(".user_name")
const password = document.querySelector(".password")
const rePassword = document.querySelector(".re_password")
const checkbox = document.getElementById("checktik")
const submit = document.querySelector(".btn")
const icon = document.querySelector(".icon")


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
    }
    if(rePassword.value == 0){
        rePassword.classList.add('placeholder__error')
    }
})

