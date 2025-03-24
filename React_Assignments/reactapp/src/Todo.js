import React, { useState } from "react";

let id = 1;

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    setTasks(tasks.concat({ id: id++, taskName: task }));
    setTask("");
  };

  const handleDeleleTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h4>Add Task</h4>
      <input type="text" value={task} onChange={handleTaskChange} />
      <button onClick={handleAddTask}>Submit</button>
      {tasks && (
        <ul>
          {tasks.map((ele) => (
            <div key={ele.id}>
              <li>{ele.taskName}</li>
              <button onClick={() => handleDeleleTask(ele.id)}>
                Delete Task
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
