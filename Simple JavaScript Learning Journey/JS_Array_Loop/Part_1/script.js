let TodoList = []

function addTodo(){
    let html =''
    let work = document.querySelector('.TodoInput_js');
    TodoList.push(work.value);
    console.log(TodoList);
    work.value='';
    for(let i = 0; i<TodoList.length;i++){
        html+= `<p>${TodoList[i]}<p>`;
    }
    document.querySelector('.outputArray').innerHTML = html;
}