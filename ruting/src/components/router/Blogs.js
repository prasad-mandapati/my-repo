import React from "react";
import { blogs } from "./data";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <div className="--center-all">
        <h1>Blogs</h1>
        <p>
          Welcome to the <strong>Blogs</strong> page
        </p>
      </div>
      <article className="container ">
        {
          blogs.map((blog) => {
            const {id,author,title} = blog;
            return(
              <div key={id} className="--card --p2 --my2">
                <h3>{title}</h3>
                <h4>{author}</h4>
                <Link to={`/blog/${id}`}><button className="--btn --btn-primary">Read more</button></Link>
              </div>
            )
          })
        }
      </article>
    </div>
  ); 
};

export default Blogs;
