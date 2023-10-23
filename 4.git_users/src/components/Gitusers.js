import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const Gitusers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const URL = "https://api.github.com/users";

  const getUser = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };


  return (
    <section className="--center-all --mh-100vh --bg-primary">
      <div className="container --width-100">
        <header>
          <h1 className="--text-light">Git User List</h1>
          <div className="--line"></div>
        </header>
        {loading && (
            <div className="--center-all">
              <Loader />
            </div>
          )}
        <div className="--grid-25 --py">
          {loading ? (
            <div className="--center-all">
              <h2 className="--text-light">somthing went wrong</h2>
            </div>
          ) : (
            users.map((user) => {
              return (
                <div
                  key={user.id}
                  className="--card --flex-start --bg-light --p"
                >
                  <img
                    className="--profile-img --mx"
                    src={user.avatar_url}
                    alt="img"
                  />
                  <div>
                    <h4>{user.login}</h4>
                    <a href={user.html_url} target="-blank">
                      View Profile
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <button onClick={() => {
        getUser()
      }} className="--btn --btn-danger">Get users</button>
    </section>
  );
};

export default Gitusers;
