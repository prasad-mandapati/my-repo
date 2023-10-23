import React, { useState } from "react";
import "./TaskManager.css";
import Task from "./Task";

const TaskManager = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    console.log(date);
  };

  return (
    <div className="--bg-primary">
      <h1 className="--text-center --text-light">Taks Manager</h1>
      <div className="--flex-center --p">
        <div className="--flex-center --card --bg-light --width-500px --p">
          <form onSubmit={handleSubmit} className="form --form-control">
            <div>
              <label htmlFor="task">Task :</label>
              <input
                type="text"
                name="task"
                id="task"
                placeholder="Enter Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="date">Date :</label>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Enter Task"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button className="--btn --btn-success --btn-block">
              Save Task
            </button>
          </form>
        </div>
      </div>
      <article className="--flex-center --my2">
        <div className="--width-500px">
          <h2 className="--text-light">Task List</h2>
          <hr />
          <Task />
        </div>
      </article>
    </div>
  );
};

export default TaskManager;
