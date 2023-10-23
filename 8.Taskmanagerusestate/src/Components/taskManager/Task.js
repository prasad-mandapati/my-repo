import React from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

const Task = () => {
  return (
    <div className="task">
      <span>
        <p>
          <b>Task:</b> Taks one
        </p>
        <p>
          <b>Date:</b> 22-04-22
        </p>
      </span>
      <span>
        <button>
          <FaEdit color="green" size={16}/>
        </button>
        <button>
          <FaTrash color="red" size={15}/>
        </button>
        <button>
          <FaCheck color="purple" size={15}/>
        </button>
      </span>
    </div>
  );
};

export default Task;
