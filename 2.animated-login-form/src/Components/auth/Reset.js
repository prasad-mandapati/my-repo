import React from 'react';
import resetimg from "../../assets/forgot.svg"
import {AiOutlineClose} from "react-icons/ai"

const Reset = ({onlogin}) => {
  return (
    <div className='main-container --flex-center'>
      <div className="form-container --flex-center reset">
        <form action="" className="--form-control">
          <h2 className="--text-center --color-danger">Reset Password</h2>
          <input type="email" className="--width-100" placeholder='Email'/>
          <button className='--btn --btn-block --btn-primary'>Reset Password</button>
          <span className="--text-sm --block --text-center">We Will send you a reset email</span>
          <div className="close" onClick={onlogin}>
            <AiOutlineClose color='red' size={15} />
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={resetimg} alt="" />
      </div>
    </div>
  )
}

export default Reset