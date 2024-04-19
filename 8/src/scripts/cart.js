let totalText = document.getElementById("cart_total");
let items = document.getElementById("items");

function getData() {


    let allProducts = JSON.parse(localStorage.getItem("items")) == null ? [] : JSON.parse(localStorage.getItem("items"));
    console.log(allProducts);
    let total = 0;
    allProducts.forEach((ele) => {
        total = total + ele.price;
    })

    totalText.textContent = total;
    cardmake(allProducts);
}

getData();

function cardmake(allData) {
    items.innerText = null;
    allData.forEach((ele) => {
        let div1 = document.createElement("div");
        div1.className = "item";
        let image = document.createElement("img");
        let head2 = document.createElement("h2");
        let pricetext = document.createElement("p");
        let button1 = document.createElement("button");
        button1.className = "add_to_cart"
        button1.textContent = "Remove";
        image.setAttribute("src", ele.image);
        image.className = "size"
        head2.textContent = ele.name;
        pricetext.textContent = ele.price;

        button1.addEventListener("click", (e) => {
           
            let allProducts = JSON.parse(localStorage.getItem("items")) == null ? [] : JSON.parse(localStorage.getItem("items"));

            console.log(e.target.parentElement.children[1].textContent)
          
            let newAll = allProducts.filter((ele)=>{
                if(ele.name != e.target.parentElement.children[1].textContent){
                    return ele;
                }
            })

            cardmake(newAll)
            

            localStorage.setItem("items", JSON.stringify(newAll));

        })
        div1.append(image, head2, pricetext, button1);
        items.append(div1);
    })

}