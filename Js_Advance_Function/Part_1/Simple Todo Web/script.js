const TodoListObject = [];

let storage = localStorage.getItem('Info');
if(storage === null){
    storage = {TodoName:[],TodoDate:[]};
}else{
    storage = JSON.parse(storage);
    LoadTodoList();
}

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

    storage.TodoName.forEach(function (element,Index){
        let TodoDate = storage.TodoDate[Index];
        html+=`
        <div>${element}</div> 
        <div>${TodoDate}</div>
        <button onclick="
            storage.TodoName.splice(${Index},1);
            storage.TodoDate.splice(${Index},1);
            localStorage.setItem('Info',JSON.stringify(storage));
            LoadTodoList();
        " Class="DeleteButton">Delete</button>`;
    });
    // for(let i=0;i<storage.TodoName.length;i++){
    //     let TodoName = storage.TodoName[i];
    //     let TodoDate = storage.TodoDate[i];
    //     html+=`
    //     <div>${TodoName}</div> 
    //     <div>${TodoDate}</div>
    //     <button onclick="
    //         storage.TodoName.splice(${i},1);
    //         storage.TodoDate.splice(${i},1);
    //         localStorage.setItem('Info',JSON.stringify(storage));
    //         LoadTodoList();
    //     " Class="DeleteButton">Delete</button>`;
    // }
    document.querySelector('.OutputHtml').innerHTML = html;
}
