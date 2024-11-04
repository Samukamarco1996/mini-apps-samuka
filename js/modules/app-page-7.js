class App7 {
  constructor(inputNewTask, buttonAddTask, divTasksList) {
    this.inputNewTask = inputNewTask;
    this.buttonAddTask = buttonAddTask;
    this.divTasksList = divTasksList;
  }

  taskIdentifier = 0;

  exec() {
    this.eventsListener(
      this.buttonAddTask,
      "click",
      this.addNewTask.bind(this)
    );
    this.eventsListener(
      window,
      "beforeunload",
      (event) => (event.returnValue = "Tem certeza que deseja sair da página?")
    );
    this.eventsListener(this.inputNewTask, "keypress", (event) => {
      if (event.key === "Enter") {
        this.addNewTask();
      }
    });
  }

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }

  addNewTask() {
    if (this.inputNewTask.value.trim() !== "") {
      const newTask = window.document.createElement("div");
      const inputCheckbox = window.document.createElement("input");
      const labelDescription = window.document.createElement("label");
      const buttonDelete = window.document.createElement("button");
      const imgDeleteIcon = window.document.createElement("img");

      this.divTasksList.appendChild(newTask);
      newTask.appendChild(inputCheckbox);
      newTask.appendChild(labelDescription);
      newTask.appendChild(buttonDelete);
      buttonDelete.appendChild(imgDeleteIcon);

      newTask.classList.add("new-task");
      newTask.setAttribute("id", `divNewTaskId-0${this.taskIdentifier}`);
      inputCheckbox.setAttribute("type", "checkbox");
      inputCheckbox.setAttribute("id", `checkboxId-0${this.taskIdentifier}`);
      labelDescription.setAttribute(
        "for",
        `checkboxId-0${this.taskIdentifier}`
      );

      this.addDeleteAction(buttonDelete, newTask);

      this.taskIdentifier++;

      labelDescription.innerText = this.inputNewTask.value;

      imgDeleteIcon.setAttribute(
        "src",
        "../imgs/apps-imgs/app-page-7-img-001.png"
      );
      imgDeleteIcon.setAttribute("alt", "delete-icon");

      this.inputNewTask.value = "";
      this.inputNewTask.focus();
    } else {
      window.alert(
        "Digite a descrição da tarefa antes de adicioná-la a lista!"
      );
      this.inputNewTask.focus();
    }
  }

  addDeleteAction(button, taskElement) {
    const deleteListener = () => {
      this.deleteTask(taskElement, deleteListener);
    };
    button.addEventListener("click", deleteListener);
  }

  deleteTask(taskElement, listener) {
    taskElement.querySelector("button").removeEventListener("click", listener);
    taskElement.remove();
  }
}

const app7Exe = new App7(
  window.document.querySelector("#app-div > div:nth-of-type(2) > input"),
  window.document.querySelector("#app-div > div:nth-of-type(2) > button"),
  window.document.querySelector("#tasks-list")
);
app7Exe.exec();
