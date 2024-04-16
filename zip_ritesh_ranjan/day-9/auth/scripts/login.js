let form = document.querySelector("form")

let data ;

function loadData(){
    let savedData = JSON.parse(localStorage.getItem("data"))

    if(savedData){
        data = savedData
    }

    // console.log(data)
}

function handleFormSubmit(event){
   event.preventDefault()
   
   let targetElements = event.target

   let email = targetElements[0].value
   let password = targetElements[1].value
//    console.log(data)

   let narr = data.filter(function (ele , i){
       return (ele.email===email)&&(ele.password===password)
   })

//    console.log(narr)   [{}] // length > 0
    //  [{}]
   if(narr.length>0){
        localStorage.setItem("loggedStatus" , JSON.stringify({status : true , username :narr[0].user }))
        alert("logged in successfully") 
        window.location.href = "home.html"
   }else{
    alert("wrong credentials !!")
   }
} 

form.addEventListener("submit" , function(event){
    handleFormSubmit(event)
})

// console.log(data)

loadData()