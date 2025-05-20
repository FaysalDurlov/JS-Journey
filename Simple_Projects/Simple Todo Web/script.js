const TodoListObject = [];

let storage = localStorage.getItem('Info');
if(storage === null){
    storage = {TodoName:[],TodoDate:[]};
}else{
    storage = JSON.parse(storage);
    LoadTodoList();
}
document.querySelector('.js_addButton').addEventListener('click',()=>{
    AddTodo();
});

function AddTodo(){

    let name = document.querySelector('.TodoListInputTodoName');
    let date = document.querySelector('.TodoListInputDate');


    storage.TodoName.push(name.value);
    storage.TodoDate.push(date.value);
    name.value = '';
    date.value = '';

    LoadTodoList();
    localStorage.setItem('Info',JSON.stringify(storage));
}
function LoadTodoList(){
    let html = '';
    for(let i=0;i<storage.TodoName.length;i++){
        let TodoName = storage.TodoName[i];
        let TodoDate = storage.TodoDate[i];
        html+=`
        <div>${TodoName}</div> 
        <div>${TodoDate}</div>
        <button onclick="
            storage.TodoName.splice(${i},1);
            storage.TodoDate.splice(${i},1);
            localStorage.setItem('Info',JSON.stringify(storage));
            LoadTodoList();
        " Class="DeleteButton js_deleteTodoButton">Delete</button>`;
    }
    document.querySelector('.OutputHtml').innerHTML = html;
    document.querySelectorAll('.js_deleteTodoButton').forEach((value,index)=>{
        value.addEventListener('click',()=>{
            
        });
    });

}
