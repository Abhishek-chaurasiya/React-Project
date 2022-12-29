import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 
const root = ReactDOM.createRoot(document.getElementById('root')); 

const Birthday = ()=>{
  return(
    <div>
      <App></App>
    </div>
  )
}



root.render(<Birthday></Birthday>)