const todoForm = document.getElementById("form");
const todoList = document.getElementById("list");
const todoInput = document.getElementById("input");
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        const span=document.createElement("span");
        const t=span.textContent = taskText;
        console.log(t);
        li.appendChild(span);
        const delBtn = document.createElement("button");
        delBtn.innerHTML ='<i class="fa-solid fa-trash"></i>';
        delBtn.addEventListener("click", function () {
            li.remove();
        });
        const doneTask = document.createElement("button");
        doneTask.innerHTML = '<i class="fa-solid fa-check"></i>';
        doneTask.addEventListener("click", function () {
        span.classList.toggle("cheked");
        doneTask.classList.toggle("done");
        });
        const editBtn = document.createElement("button");
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
        editBtn.addEventListener("click", function () {
            li.textContent = "";
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value= taskText;
            li.appendChild(editInput);
            const saveBtn = document.createElement("button");
            saveBtn.textContent = "save";
            saveBtn.addEventListener("click", function () {
                if (editInput.value.trim() !== "") {
                    span.textContent = editInput.value.trim();
                    li.removeChild(saveBtn);
                    li.removeChild(editInput);
                    li.appendChild(span);                   
                    li.appendChild(editBtn);
                    li.appendChild(delBtn);
                    li.appendChild(doneTask);
                }
            });
            li.appendChild(saveBtn);
        })
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(delBtn);
        li.appendChild(doneTask);
        todoList.appendChild(li);
    }
    todoInput.value = "";
});
