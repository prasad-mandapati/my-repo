import React, { useState } from "react";
import "./Profile.css";
import { FaTrashAlt } from "react-icons/fa";
import { profileData } from "../../profile-data";

const Profile = () => {
  const [users, setUsers] = useState(profileData);

  const deleteUser = (id) => {
    setUsers(users.filter((person) => {
        return person.id !== id;
    }))
  }

  return (
    <section className="--flex-center --mh-100vh --bg-night">
      <div className="profile-container">
        <h1 className="--text-light --text-center --mb2">User <span style={{color:"orangered"}}>Profile</span> App</h1>
        {users.map((user) => {
          return (
            <div key={user.id} className="profile-box container --flex-between --card">
              <div className="profile-img">
                <img
                  src={user.img}
                  alt=""
                />
              </div>
              <div>
                <h4 style={{color:"orangered"}} className="--text-center">{user.name}</h4>
                <p className="--text-light">{user.job}</p>
              </div>
              <FaTrashAlt  onClick={() => deleteUser(user.id)} size={25} className="icon" />
            </div>
          );
        })}
        <button onClick={() => setUsers([])} className="--btn --btn-lg --btn-danger">clear All</button>
      </div>
    </section>
  );
};

export default Profile;
