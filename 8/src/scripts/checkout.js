let order = document.getElementById("place-order");
let message = document.getElementById("order-message");

order.addEventListener("click",()=>{
    localStorage.clear();
    message.classList.remove("none");
})