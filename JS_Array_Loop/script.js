let TodoList = []

function addTodo(){
    let work = document.querySelector('.TodoInput_js');
    TodoList.push(work.value);
    console.log(TodoList);
    work.value='';
}