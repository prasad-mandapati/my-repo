import React, { useState, useRef, useEffect } from "react";
import "./TaskManager.css";
import useLocalStorage from "use-local-storage";
import Task from "./Task";

const TaskManager = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useLocalStorage("tasks",[]);
  // const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [taskId, setTaskId] = useState("");

  const inputtaskref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !date) {
      alert("Please enter the task and date");
    } else if (task && date && isEditing) {
      setTasks(
        tasks.map((item) => {
          if (item.id === taskId) {
            return { ...item, task, date, completed: false };
          } else {
            return { ...item };
          }
        })
      );
      setIsEditing(false);
      setTask("");
      setDate("");
    } else {
      const newTask = {
        id: Date.now(),
        task,
        date,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTask("");
      setDate("");
    }
  };

  const handleedit = (id) => {
    setTaskId(id);
    setIsEditing(true);
    const editTask = tasks.find((item) => {
      return item.id === id;
    });
    setTask(editTask.task);
    setDate(editTask.date);
  };

  const deleteTask = (id) => {
    if(window.confirm("Do you want to delete this task") === true){
      const newTasks = tasks.filter((item) => {
        return item.id !== id
      })
      setTasks(newTasks)
    }
  };

  const completeTask = (id) => {
    setTasks(tasks.map((item) => {
      if(item.id === id){
        return {...item,completed:true}
      }
      return item
    }))
  }

  useEffect(() => {
    inputtaskref.current.focus();
  }, []);

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
                ref={inputtaskref}
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
              {!isEditing ? "Save Task" : "Edit Task"}
            </button>
          </form>
        </div>
      </div>
      <article className="--flex-center --my2">
        <div className="--width-500px">
          <h2 className="--text-light">Task List</h2>
          <hr />
          <div>
            {tasks.length === 0 ? (
              <p className="--text-light --p">No Tasks are Added</p>
            ) : (
              tasks.map((item) => {
                return (
                  <Task
                    key={item.id}
                    {...item}
                    iseditable={handleedit}
                    deleteTask={deleteTask}
                    completeTask = {completeTask}
                  />
                );
              })
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default TaskManager;
