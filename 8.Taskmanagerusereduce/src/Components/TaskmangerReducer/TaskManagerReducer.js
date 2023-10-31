import React, { useState, useRef, useEffect, useReducer } from "react";
import "../taskManager/TaskManager.css";
import useLocalStorage from "use-local-storage";
import Task from "../taskManager/Task";
import Alert from "../alerts/Alert";
import Confirm from "../confirm/Confirm";

const TaskManagerReducer = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const initialState = {
    taskId: null,
    tasks,
    isEditing: false,
    isAlert: false,
    alertContent: "This is an Alert",
    alertClass: "success",
    isEditModel: false,
    isdeleteModel: false,
    modelContent: "Do you want to delete this task",
    modelTitle: "Delete",
  };

  const taskReducer = (state, action) => {
    if (action.type === "EMPTY_FIELD") {
      return {
        ...state,
        isAlert: true,
        alertContent: "Please enter name and date",
        alertClass: "danger",
      };
    }

    if (action.type === "CLOSE_ALERT") {
      return { ...state, isAlert: false };
    }

    if (action.type === "ADD_TASK") {
      const allTasks = [...state.tasks, action.payload];
      return {
        ...state,
        tasks: allTasks,
        isAlert: true,
        alertContent: "Task is successfully added",
        alertClass: "success",
      };
    }

    if (action.type === "OPEN_EDITMODAL") {
      return {
        ...state,
        taskId: action.payload,
        isEditModel: true,
        modelTitle: "Edit",
        modelContent: "Do you want to edit this task",
      };
    }

    if(action.type === "OPEN_DELETEMODAL"){
      return {
        ...state,
        taskId: action.payload,
        isdeleteModel: true,
        modelTitle: "Delete",
        modelContent: "Do you want to Delete this task",
      };
    }

    if (action.type === "CLOSE_MODEL") {
      return { ...state, isEditModel: false, isdeleteModel: false };
    }

    if (action.type === "EDIT_TASK") {
      return { ...state, isEditing: true };
    }

    if(action.type === "DELETE_TASK"){
      const id = action.payload
      const newTask = state.tasks.filter((item) => item.id !== id )
      return{...state,tasks:newTask, isAlert:true, alertClass:"success",alertContent:"Task Successfully Deleted"}
    }

    if (action.type === "UPDATE_TASK") {
      const updatedTask = action.payload;
      const id = updatedTask.id;

      const taskIndex = state.tasks.findIndex((item) => {
        return item.id === id;
      });

      if (taskIndex !== -1) {
        state.tasks[taskIndex] = updatedTask;
      }

      return { ...state, isEditing: false, isAlert: true, alertClass:"success",alertContent:"Task Successfully Edited" };
    }

    if(action.type === "COMPLETE_TASK"){
      const id = action.payload

      const taskIndex = state.tasks.findIndex((item) => {
        return item.id === id
      })
      const updatedTask = {
        id,
        task:state.tasks[taskIndex].task,
        date:state.tasks[taskIndex].date,
        complete:true
      }

      if(taskIndex !== -1){
        state.tasks[taskIndex] = updatedTask
      }

      return{...state,isAlert:true,alertClass:"success",alertContent:"Task is completed"}
    }

    return state;
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const inputtaskref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !date) {
      dispatch({
        type: "EMPTY_FIELD",
      });
    } else if (task && date && state.isEditing) {
      const updatedTask = {
        id: state.taskId,
        task,
        date,
        complete: false,
      };
      dispatch({
        type: "UPDATE_TASK",
        payload: updatedTask,
      });
      setTask("")
      setDate("")
      setTasks(
        tasks.map((item) => {
          if(item.id === updatedTask.id){
            return{...item,task,date,complete:false}
          }
          return{...item}
        })
      )
    } else if (task && date) {
      const newTask = {
        id: Date.now(),
        task,
        date,
        complete: false,
      };
      dispatch({
        type: "ADD_TASK",
        payload: newTask,
      });
      setTask("");
      setDate("");
      setTasks([...state.tasks, newTask]);
    }
  };

  const handleedit = () => {
    console.log(state.taskId);
    const id = state.taskId;
    dispatch({
      type: "EDIT_TASK",
      payload: id,
    });
    const thisTask = state.tasks.find((item) => item.id === id);
    setTask(thisTask.task);
    setDate(thisTask.date);
    closeModel();
  };

  const deleteTask = () => {
    const id = state.taskId
    dispatch({
      type:"DELETE_TASK",
      payload:id
    })
    closeModel()
    const newTasks = tasks.filter((item) => item.id !== id)
    setTasks(newTasks)
  };

  const completeTask = (id) => {
    dispatch({
      type:"COMPLETE_TASK",
      payload:id
    })
    setTasks(tasks.map((item) => item.id === id  ? {...item,complete:true} : {...item}))
  };

  const closeAlert = () => {
    dispatch({
      type: "CLOSE_ALERT",
    });
  };

  const openEditModel = (id) => {
    dispatch({
      type: "OPEN_EDITMODAL",
      payload: id,
    });
  };

  const openDeleteModel = (id) => {
    dispatch({
      type: "OPEN_DELETEMODAL",
      payload: id,
    });
  };

  const closeModel = () => {
    dispatch({
      type: "CLOSE_MODEL",
    });
  };

  useEffect(() => {
    inputtaskref.current.focus();
  }, []);

  return (
    <div className="--bg-primary">
      {state.isAlert && (
        <Alert
          alertContent={state.alertContent}
          alertClass={state.alertClass}
          onCloseAlert={closeAlert}
        />
      )}
      {state.isEditModel && (
        <Confirm
          modelTitle={state.modelTitle}
          modelContent={state.modelContent}
          modelAction={handleedit}
          modelClose={closeModel}
        />
      )}
      {state.isdeleteModel && (
        <Confirm
          modelTitle={state.modelTitle}
          modelContent={state.modelContent}
          modelAction={deleteTask}
          modelClose={closeModel}
        />
      )}
      <h2 className="--text-center --text-light --py">Taks Manager Reducer</h2>
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
              {!state.isEditing ? "Save Task" : "Edit Task"}
            </button>
          </form>
        </div>
      </div>
      <article className="--flex-center --my2">
        <div className="--width-500px">
          <h2 className="--text-light">Task List</h2>
          <hr />
          <div className={state.tasks.length > 4 && "taskslist"}>
            {state.tasks.length === 0 ? (
              <p className="--text-light --p">No Tasks are Added</p>
            ) : (
              state.tasks.map((item) => {
                return (
                  <Task
                    key={item.id}
                    {...item}
                    iseditable={() => openEditModel(item.id)}
                    deleteTask={() => openDeleteModel(item.id)}
                    completeTask={completeTask}
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

export default TaskManagerReducer;
