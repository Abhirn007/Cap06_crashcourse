let authContainer = document.querySelector("#auth")

let login = document.querySelector("#login")

let signup = document.querySelector("#Signup")

let loggedStatus = JSON.parse(localStorage.getItem("loggedStatus"))


if(loggedStatus){
    login.innerHTML = `hi , ${loggedStatus.username}`
}

login.addEventListener("click" , function(){
    window.location.href = "login.html"
})


signup.addEventListener("click" , function(){
    window.location.href = "signup.html"
})
