import react from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'
const root = ReactDom.createRoot(document.getElementById('root'));

const Tour = ()=>{
  return(
    <div>
      <App></App>
    </div>
  )
}
root.render(<Tour></Tour>)
