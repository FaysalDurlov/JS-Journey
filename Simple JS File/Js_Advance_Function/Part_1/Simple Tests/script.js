arrayTodoWork = ['make Food','Wash Dishes','Watch Football','Do coding']
arrayTodoWork.forEach(function(first_i_elements,second_i_index){
    if(first_i_elements==='Wash Dishes'){
        return; // this do same like continue in  Loops
    }
    console.log(`Index = ${first_i_elements} | Element = ${second_i_index}`);
});