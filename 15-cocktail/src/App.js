import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

// import components
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route exact path='/' element={<Home></Home>}/>
            <Route path='/about' element={<About></About>}/>
             <Route path='/cocktail/:id' element={<SingleCocktail></SingleCocktail>}/>
              <Route path='*' element={<Error></Error>}/>   
            
            
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App