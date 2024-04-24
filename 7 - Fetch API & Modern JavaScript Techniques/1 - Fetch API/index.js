let todoList = document.getElementById('todoList');

fetch("https://jsonplaceholder.typicode.com/todos")
.then(function(res){
    return res.json();
})
.then(function(data){
    // console.log(data)
    showData(data)
})
.catch(function(error){
    console,error("Error Fetching: ",error)
});

function showData(todo){
    todo.forEach(function(ele,i){
        let todoItem = document.createElement('li');

        const label = document.createElement('label');
        label.textContent = ele.title;
        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                todoItem.classList.add('completed');
            } else {
                todoItem.classList.remove('completed');
            }
        }); 
        
        todoItem.append(label, checkbox)
        todoList.append(todoItem)
        })
    }
