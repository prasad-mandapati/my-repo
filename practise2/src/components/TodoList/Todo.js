import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GoIssueClosed } from "react-icons/go";
import "./Todo.css";

const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const add = (e) => {
    e.preventDefault()
    if (item !== "") {
      setList([...list, { value: item, completed: false }]);
    }
    setItem("");
  };

  const deleteItem = (value) => {
    const newList = list.filter((item) => item.value !== value);
    setList(newList);
  };

  const setcomplete = (toComplete) => {
    setList(
      list.map((item) => {
        return item.value === toComplete
          ? { value: toComplete, completed: true }
          : item.completed === true
          ? { value: item.value, completed: true }
          : { value: item.value, completed: false };
      })
    );
  };

  return (
    <section className="--100vh --bg-primary">
      <div className="container --center-all">
        <h1 className="--text-light">To Do List</h1>
        <form action="" className="--form-control --flex-between">
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setItem(e.target.value);
            }}
          />
          <button onClick={(e) => add(e)} className="--btn --btn-danger">
            Add Item
          </button>
        </form>
        {list.map((item, index) => {
          return (
            <div key={index} className="--bg-light --card list-item">
              <h3>{item.value}</h3>
              <GoIssueClosed
                className="icon"
                size={30}
                color={item.completed ? "green" : "red"}
                onClick={() => setcomplete(item.value)}
              />
              <AiOutlineClose
                size={30}
                className="icon trash-icon"
                onClick={() => deleteItem(item.value)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Todo;
