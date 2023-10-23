import React, { useEffect, useState } from "react";
import loader from "../assets/spinner1.jpg";
import "./Joke.css"

const Jokes = () => {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(true);

  const generateJoke = () => {
    setLoading(true);
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJoke(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJoke(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="joke-container --bg-light --card">
        <h2 className="--text-center">Randome Joke Generator</h2>
        {loading ? (
          <div className="--center-all">
            <img src={loader} alt="loader" width={50}/>
          </div>
        ) : (
          <div className="--py2">
            <h4>Joke Id: {joke.id} </h4>
            <p>{joke.value}</p>
          </div>
        )}
        <div className="--center-all ">
          <button onClick={generateJoke} className="--btn --btn-primary">Generate Joke</button>
        </div>
      </div>
    </section>
  );
};

export default Jokes;
