import React from 'react'
import "./confirm.css"

const Confirm = ({modelTitle, modelContent, modelAction, modelClose}) => {
  return (
    <div className='confirm'>
        <div className="confirm-model">
             <div className="header">
                <span className='title'>
                    {modelTitle}
                </span>
                <button className='close' onClick={modelClose}>&times;</button>
             </div>

             <div className="content">
                <p>{modelContent}</p>
             </div>

             <div className="buttons">
                <button className='btn btn-ok' onClick={modelAction}>{modelTitle}</button>
                <button className='btn btn-cancle' onClick={() => modelClose()}>Cancel</button>
             </div>
        </div>
    </div>
  )
}

export default Confirm