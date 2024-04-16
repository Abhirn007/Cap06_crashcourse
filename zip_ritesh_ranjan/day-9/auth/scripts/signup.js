let form = document.querySelector("form")

let data = []
let products = []

// function saveData(key , arr){
//     localStorage.setItem(key , JSON.stringify(arr))
// }
function saveData(){
    localStorage.setItem('data' , JSON.stringify(data))
}

function loadData(){
    let savedData = JSON.parse(localStorage.getItem("data"))

    if(saveData){
        data = savedData
    }
}

function handleFormSubmit(e){
    // vari = value
    e.preventDefault()

    let targetElement = e.target
    console.log(targetElement)
    let username = targetElement[0].value 
    let email = targetElement[1].value
    let password = targetElement[2].value
    let confirm = targetElement[3].value

    if(password == confirm){
        let narr = data.filter(function (ele,i){
            return ele.user === username
        })

        console.log(narr)  // [{}]  => arr.length = 1
        if(narr.length>0){
            alert("username is already taken")
        }else{

       
        let obj = {
            user : username,
            email : email,
            password : password
        }

        data.push(obj)
        // saveData("data" , data)
        saveData()
        console.log(data)
        alert("Registration successful")
        window.location.href = "login.html"
    }
    }else{
        alert("passwords not matching")
    }
} 

form.addEventListener("submit" , function(event){
    handleFormSubmit(event )
})

loadData()

// console.log(1>1)