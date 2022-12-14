import React from 'react'
import {Link, Route,Routes} from 'react-router-dom'
import  Home from './pages/Home'
import BookList from './pages/BookList'

export default function App() {
  return (
   <div>
      <nav>
        <ul>
           <li>
            <Link to='/' >Home</Link>
           </li>
           <li>
            <Link to='/books' >books</Link>
           </li>
        </ul>
      </nav>

     <Routes>
      
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/books' element={ <BookList></BookList>}></Route>

    </Routes>
   </div>
  )
}
