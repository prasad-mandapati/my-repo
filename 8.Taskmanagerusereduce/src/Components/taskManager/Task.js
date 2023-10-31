import React from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

const Task = ({ id, task, date, complete, iseditable, deleteTask, completeTask }) => {
  return (
    <div key={id} className={complete ? "task complete" : "task uncomplete"}>
      <span>
        <p>
          <b>Task:</b> {task}
        </p>
        <p>
          <b>Date:</b> {date}
        </p>
      </span>
      <div>
        <span>
          <button className="icon" onClick={() => iseditable(id)}>
            <FaEdit color="green" size={16} />
          </button>
          <button className="icon" onClick={() => deleteTask(id)}>
            <FaTrash color="red" size={15} />
          </button>
          <button className="icon" onClick={() => completeTask(id)}>
            <FaCheck color="purple" size={15} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Task;
