import React, { useContext, useState } from 'react'
import SideDrawer from "../miscellaneus/SideDrawer"
import { Box } from '@chakra-ui/react'
import {chatState} from '../Context/ChatProvider'
import MyChat from '../MyChat'
import Chatbox from '../Chatbox'


function ChatPage() {

  let {user} = chatState()
  

  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{width:'100%'}}>
        {user && <SideDrawer />}
        
        <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChat 
          fetchAgain={fetchAgain} 
          />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
        </Box>
    </div>
  )
}

export default ChatPage