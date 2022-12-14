import React from 'react'
import { Dashboard,Login,PrivateRoute,AuthWrapper,Error} from './pages';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'

const App = () => {
  return (
   <AuthWrapper> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute><Dashboard/></PrivateRoute> }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    
    </BrowserRouter>
   </AuthWrapper> 
  )
}

export default App