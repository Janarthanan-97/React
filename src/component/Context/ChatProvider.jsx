import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ChatContext = createContext()

function ChatProvider({ children }) {
  let navigate = useNavigate()

  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    setUser(userInfo)
    if(!userInfo){
      navigate('/')
    }

  }, [navigate])


  return (
    <ChatContext.Provider
      value={{
        user, setUser,
        selectedChat, setSelectedChat,
        notification, setNotification,
        chats, setChats
      }}>
      {children}
    </ChatContext.Provider>
  )
}

export const chatState = ()=>{
  return useContext(ChatContext)
}

export {ChatProvider as default}