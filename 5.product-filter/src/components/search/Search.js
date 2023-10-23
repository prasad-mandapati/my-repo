import React from 'react'
import { BiSearchAlt } from "react-icons/bi"
import "./Search.css";
const Search = (props) => {
  return (
    <div className='--form-control form'>
        <input type="text" placeholder='Search Product' value={props.Search} onChange={props.handleSearch} />
        <div className='icon'>
          <BiSearchAlt color='grey' size={20}/>
        </div>    
    </div>
  )
}

export default Search  