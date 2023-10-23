import React, { useState } from "react";
import { peopleData } from "../people-data";
import { BiTrash } from "react-icons/bi";

const Users = () => {
  const [users, setUsers] = useState(peopleData);
const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
}

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container">
        <h1 className="--color-white">Usestate in Array</h1>
        {users.map((user) => {
          return (
            <div key={user.id} className="--flex-between --my --bg-light --card --p">
              <h2>{user.name}</h2>
              <BiTrash color="red" size={20} onClick={() => deleteUser(user.id) }/>
            </div>
          );
        })}
        <button onClick={() => setUsers([])} className="--btn --btn-lg --btn-danger">Clear All</button>
      </div>
    </section>
  );
};

export default Users;
