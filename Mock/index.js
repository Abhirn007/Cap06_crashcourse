let box = document.querySelector("#root");
let selCategory = document.querySelector("#category");
let selPrice = document.querySelector("#priceSelect");
let searInput = document.querySelector("#inputSearch");
let searBtn = document.querySelector("#btn");
let narr = []; // Define narr outside of any function

selCategory.addEventListener("change", function(){
    let choice = selCategory.value;
    console.log(choice);
    getData(`https://fakestoreapi.com/products/category/${choice}`);
});

selPrice.addEventListener("change", handlePrice);

function handlePrice(){
    let choice = selPrice.value;
    console.log(choice);

    // Call arrange function with choice and narr
    arrange(choice, narr);
}

function arrange(choice, arr){
    if(choice === "asc"){
        arr.sort((a, b) => {
            return a.price - b.price;
        });
    } else {
        arr.sort((a, b) => {
            return b.price - a.price;
        });
    }
    showData(arr);
}

let getData = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    narr = data; // Assign data to narr
    showData(data);
};

function showData(arr){
    box.innerHTML = "";
    arr.forEach(ele => {
        let card = document.createElement("div");
        card.innerHTML = `<div id="div-img"><img src="${ele.image}"></div>
                          <h2>${ele.title}</h2>
                          <p>Price : $${ele.price}</p>`;
        box.append(card);
    });
}

getData('https://fakestoreapi.com/products');