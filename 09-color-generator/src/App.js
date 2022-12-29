import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] =useState('');
  const [error,setError] =useState(false);
  const [list,setList] = useState(new Values('#00FFFF').all(10));

  const handleSubmit = (e)=>{
    try{
      let colors = new Values(color).all(10);
      setList(colors);
    }catch(error){
        setError(true);
       
    }
    e.preventDefault();
  }
  return(
    <div>
      <section className="container">
        <h3>color generator</h3>
        <form  onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e)=>{
            setColor(e.target.value);
          }} 
          placeholder="#00FFFF"
          className={`${error?'error':null}`}/>
          <button type='submit' className='btn'>generate</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color,index)=>{
             console.log(color);
            return(
             
              <SingleColor key={index} {...color} index={index}></SingleColor>
            )
          })
        }
      </section>
    </div>
  )
}

export default App