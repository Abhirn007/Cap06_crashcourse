let todoName = document.querySelector("#container>input")

let priority = document.querySelector("#container>select")

let addTodoBtn = document.querySelector("#container>button")

let tableBody = document.querySelector("#table-container>tbody")

let data = []

function saveData(){
    localStorage.setItem("data" ,  JSON.stringify(data))
}

function loadData(){

    let storedValue = JSON.parse(localStorage.getItem("data"))  // null (for 1st time users)
    // [{}]
    if(storedValue){
        data = storedValue
        showData(data)
    }

}


function handleClick(){
   let obj = {
    title : todoName.value , 
    priority : priority.value
   }

   data.push(obj)

   saveData()
   showData(data)
   //   key   |   value
   //   data   | {a:1}
  //    data   | {a:1 , b:2}

   console.log(data)
}

function showData(arr){
//    console.log(arr)
   tableBody.innerHTML = ""
   arr.forEach(function (ele,i){
       let tr = document.createElement("tr")

       let td1 = document.createElement("td")
       td1.innerHTML = `${i+1}`

       let td2 = document.createElement("td")
       td2.innerHTML = ele.title

       let td3 = document.createElement("td")
       td3.innerHTML = ele.priority
       
       if(ele.priority == "high"){
        td3.style.backgroundColor = "red"
       }
       else if(ele.priority == "med"){
        td3.style.backgroundColor = "blue"
       }
       else{
        td3.style.backgroundColor = "green"
       }


       let td4 = document.createElement("td")
       let btn = document.createElement("button")
       btn.innerHTML = "Delete"
       btn.addEventListener("click" ,function(){
        handleDelete(i)
       })
       td4.append(btn)

       tr.append(td1 , td2 , td3 , td4)
       tableBody.append(tr)
   })
}


function handleDelete(index){
    // console.log(index)
    // data.splice(index , 1)

    data = data.filter(function (ele,i){
          return index!==i
    })
   
    saveData()
    showData(data)
    // localStorage.removeItem("data")
    //  let narr = localStorage.getItem()
    // narr.splice
    // localStorage.setItem

   
}
{/* <tr>
  <td>1</td>
  <td>one</td>
  <td>High</td>
  <td>
    <button></button>
  </td>
</tr> */}

// (0+1)

addTodoBtn.addEventListener("click" , handleClick)

loadData()

// truthy values => true , any no other than 0 , array
// falsy values => undefined , "" , false , 0 , null , NaN

// if(42){

// }else{

// }

// Immediately invoked function

// if(true){
//     1
// }else{
//     2
// }

// condition ? 1 : 2
// let str = null
// console.log(str ? console.log("hi") : console.log("bye"))
// let a = 10
// let b = 20
// console.log( b<10 ? console.log("hi") : b>10 ? console.log("bye") : console.log("else"))

// console.log( false ? console.log("hi") : undefined ? console.log("bye") : console.log("else"))


// let arr = [1,2,3,4,5]

// let narr = arr.filter(function (ele , i){
//     return (i!==2)
// })

// console.log(narr)