# DOM

## CRUD => create , read , update , delete

### create

- document.createElement("elementName")
- parent.append(childs)

### read / access

- querySelector("#" | "." | "tag")
- querySelectorAll

### update 

- element.attributeName

- innerHTML , innerText , textContent

- innerText + textContent => just target the text inside a tag/element
   div.innerText => "this has some text"

- innerHTML => targets text + the tags that are present inside that tag

   div.innerHTML => <h2>this has some text</h2>

   div.innerHTML = "<span><h2>this has some heading</h2></span>"


### iterating over array of object 

let product = [{
    title : name1
} , {
    title : name2
} , {
    title : name3
}]

products.forEach(function(ele,i){
 
  console.log(ele.title) => name1 ,name2 , name3
})
```html
<div>
    <h2>this has some text</h2>
</div>
```


### find outs => events (click , change(inputs , select , submit)) , attributes