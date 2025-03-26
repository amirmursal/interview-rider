document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  // Load task from local storage
  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.innerHTML = "";
    tasks.forEach((task) => addTasktoDom(task));
  };

  const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addTasktoDom = (task) => {
    const li = document.createElement("li");
    li.classList.add("list-item");
    if (task.completetd) {
      li.classList.add("completed");
    }
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completetd;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Task";
    deleteButton.addEventListener("click", () => removeTask(task.id));
    li.textContent = task.text;
    taskList.appendChild(li);
    taskList.appendChild(checkbox);
    taskList.appendChild(deleteButton);
  };

  const toggleTask = (taskId) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completetd: !task.completetd } : task
    );
    saveTasks(updatedTasks);
    loadTasks();
  };

  const removeTask = (taskId) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    saveTasks(updatedTasks);
    loadTasks();
  };

  const addTask = () => {
    const text = taskInput.value.trim();
    if (!text) return;

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = { id: Date.now(), text, completetd: false };
    tasks.push(newTask);
    addTasktoDom(newTask);
    saveTasks(tasks);
    taskInput.value = "";
  };

  addTaskButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
  loadTasks();
});
