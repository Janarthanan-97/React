import React from 'react'
import Home from './component/Pages/Home'
import { Route, Routes } from 'react-router-dom'
import ChatPage from './component/Pages/ChatPage'

function App() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chats' element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App