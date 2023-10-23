import React, { useState } from "react";

const ControlledInput = () => {
    const[name,setName] = useState("");
    const[job,setJob] = useState("");

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log(name,job)
     }

  return (
    <div className="--bg-primary --center-all --mh-100vh">
      <h1 className="--text-light --text-center">Controlled Input</h1>
      <div className="--card --bg-light --flex-center --width-500px --p">
        <form action="" className="--form-control">
          <div className="--p">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="--p">
            <label htmlFor="job">Job: </label>
            <input type="text" name="job" value={job} onChange={(e) => setJob(e.target.value)}/>
          </div>
          <button onClick={handleSubmit} className="--btn --btn-block">Submit USer</button>
        </form>
      </div>
    </div>
  );
};

export default ControlledInput;
