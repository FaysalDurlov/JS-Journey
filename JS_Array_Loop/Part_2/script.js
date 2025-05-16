const TodoListObject = []
function AddTodo(){
    let TempObejct = {
        name:'',
        date:''
    }
    TempObejct.name = document.querySelector('.TodoListInputTodoName').value;
    TempObejct.date = document.querySelector('.TodoListInputDate').value;
    console.log(TempObejct);
    TodoListObject.push(TempObejct);
    LoadTodoList();
}
function LoadTodoList(){
    let html='';
    for(let i=0;i<TodoListObject.length;i++){
        let {name , date} = TodoListObject[i];
        html+=`
        <div>${name}</div> 
        <div>${date}</div>
        <button onclick="
            TodoListObject.splice(${i},1);
            LoadTodoList();
        " Class="DeleteButton">Delete</button>`;
    }
    document.querySelector('.OutputHtml').innerHTML = html;
}