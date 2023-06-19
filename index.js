document.querySelector('.todo_add').addEventListener("click", function () {
    addToto();
  });

document.querySelector('.todo_input').addEventListener("keypress", function (e) {
    if (e.which===13){
    addToto();
    }
  });

function addToto(){
    const inputValue=document.querySelector('.todo_input').value;
    alert(inputValue);
    // 檢查輸入欄位是否為空值，trim() 可清除字串前後空白
    if (inputValue.trim().length === 0) return;
    // 新增 todo
    const newTodo = document.createElement('li');
    const newTodotext = inputValue;
    newTodo.innerHTML='<label class="todo_title">\
        <input type="checkbox" class="todo_check" style="display:inline;">\
        <p>'+inputValue+'</p>\
    </label>\
    <button class="btn-delete"></button>'
    document.querySelector('.todolist').appendChild(newTodo);
    document.querySelector('.todo_input').value = '';
}