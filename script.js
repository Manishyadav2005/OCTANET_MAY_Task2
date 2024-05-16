let inputElement = document.getElementById("inp");
let textContainer = document.querySelector(".text");
let dateElement = document.getElementById("date");

function addTask() {
    if (inputElement.value.trim() === "") {
        alert("Please Enter Your Task");
    } else {
        let taskItem = document.createElement("ul");
        let listItem = document.createElement("li");
        listItem.innerHTML = `${inputElement.value} <i class="fa-solid fa-trash"></i> <span class="date-style">${dateElement.value}</span>`;
        taskItem.appendChild(listItem);
        textContainer.appendChild(taskItem);

        inputElement.value = "";
        dateElement.value = "";

        listItem.querySelector("i").addEventListener("click", function() {
            taskItem.remove();
        });
    }
}

document.getElementById("addButton").addEventListener("click", addTask);
