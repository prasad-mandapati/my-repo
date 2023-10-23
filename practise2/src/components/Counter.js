import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='--flex-center --100vh --bg-primary'>
        <div className='--width-500px --center-all --bg-light --p2 --m2 --border-radius1' >
            <h1>Counter</h1>
            <h2 className='--text-xl' style={{color: count > 0 ? 'blue' : count < 0 ? "red" : "black"}}>{count}</h2>
            <div className="btn --flex-center">
                <button className='--btn-lg --btn --btn-primary' onClick={() => setCount(c => c+1)}>Add</button>
                <button className='--btn-lg --btn' onClick={() => setCount(0)}>Reset</button>
                <button className='--btn-lg --btn --btn-danger' onClick={() => setCount(c => c-1)}>Sub</button>
            </div>
        </div>
    </div>
  )
}

export default Counter