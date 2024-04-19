// The items should be stored in local storage with key :- “items”
let items = document.getElementById("items");
let item_count = document.getElementById("item_count");
async function getData() {
    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries");

    let data = await res.json();
    console.log(data.data);

    cardmake(data.data);
    let allProducts = JSON.parse(localStorage.getItem("items")) == null ? [] : JSON.parse(localStorage.getItem("items"));
    item_count.textContent = allProducts.length;

}

getData()

function cardmake(allData) {
    allData.forEach((ele) => {
        let div1 = document.createElement("div");
        div1.className = "item";
        let image = document.createElement("img");
        let head2 = document.createElement("h2");
        let pricetext = document.createElement("p");
        let button1 = document.createElement("button");
        button1.className = "add_to_cart"
        button1.textContent = "Add to Cart";
        image.setAttribute("src", ele.image);
        image.className = "size"
        head2.textContent = ele.name;
        pricetext.textContent = ele.price;

        button1.addEventListener("click", () => {
            let obj = {
                image:ele.image,
                name:ele.name,
                price:ele.price
            }
            let allProducts = JSON.parse(localStorage.getItem("items")) == null ? [] : JSON.parse(localStorage.getItem("items"));
            allProducts.push(obj);
            item_count.textContent = allProducts.length;
            localStorage.setItem("items",JSON.stringify(allProducts));

        })
        div1.append(image, head2, pricetext, button1);
        items.append(div1);
    })

}