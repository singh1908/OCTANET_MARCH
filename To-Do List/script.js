function addTask() {
    var taskInput = document.getElementById("todo-input");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("tasks");
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });
        var textNode = document.createTextNode(taskText);
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", function() {
            li.remove();
        });
        li.appendChild(checkbox);
        li.appendChild(textNode);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}