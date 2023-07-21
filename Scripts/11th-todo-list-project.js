const todoList = [];
function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    inputElement.value = '';
    console.log(todoList);

}






const todoList1 = [];
renderTodoList();


document.querySelector('.js-add-button').addEventListener('click', () =>{
    addTodo1();
});


document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) =>{
    deleteButton.addEventListener('click', () => {
        todoList1.splice(index, 1);
        renderTodoList();
    });
});

function addTodo1(){
    const inputElement = document.querySelector('.js-name-input1');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-duedate-input');
    const dueDate = dateInputElement.value;
    todoList1.push({name, dueDate});
    inputElement.value = '';
    renderTodoList();
    
}
function renderTodoList(){
    let todoListHTML = ``;
    todoList1.forEach((todoObject, index) => {
        
        const {name, dueDate} = todoObject;
        const html = 
            `<div>${name}</div>
            <div>${dueDate}</div>
            <button  class = "js-delete-button delete-todo-button" onclick = "
                todoList1.splice(${index}, 1);
                renderTodoList();
            ">Delete</button> `;
        todoListHTML += html;
    })
    
    document.querySelector('.js-event-name').innerHTML = todoListHTML;
    console.log(todoListHTML)
    
}
function enterKey(){
    if(event.key === 'Enter'){
        addTodo1();
    }
}
