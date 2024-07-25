import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Auth/Login'
import Register from './component/Auth/Register'
import Home from './component/Dashboard/Home'
import AllProperty from './component/Dashboard/AllProperty'
import CreateProperty from './component/Dashboard/CreateProperty'
import MyProperty from './component/Dashboard/MyProperty'

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} >
        <Route path='/' element={<AllProperty/>} />
        <Route path='/update-property/:id' element={<CreateProperty />} />
        <Route path='/my-property' element={<MyProperty />} />
      </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App