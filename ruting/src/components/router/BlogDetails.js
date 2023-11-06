import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./data";
import { Link } from "react-router-dom";

const BlogDetails = () => {
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [details,setDetails] = useState("")

    const { id } = useParams();

    useEffect(() => {
        const thisBlog  = blogs.find((blog) => blog.id === parseInt(id))
        setTitle(thisBlog.title);
        setAuthor(thisBlog.author)
        setDetails(thisBlog.details)
    })
  
  return (
    <div className="container --p">
      <h1 className="--text-center">{title}</h1>
      <hr />
      <br />
      <p><b>Author: </b>{author}</p>
      <div className="container --m --p">
        <p>{details}</p>
      </div>
      <Link to="/blogs">{`<<< Back To Blogs`}</Link>
    </div>
  );
};

export default BlogDetails;
