import React, { useEffect, useRef, useState } from 'react'
import { chatState } from './Context/ChatProvider'
import { Box, Button, FormControl, IconButton, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowRightIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { getSender, getSenderFull } from "./config/ChatLogics.js"
import ProfileModal from './miscellaneus/ProfileModal'
import UpdateGroupChatModal from './miscellaneus/UpdateGroupChatModal'
import ScrollableChat from './ScrollableChat'
import io from "socket.io-client";
import ChatLoading from './ChatLoading.jsx'

function SingleChat({ fetchAgain, setFetchAgain }) {
    var socket, selectedChatCompare;
    socket = io(import.meta.env.VITE_URL)
    const [messages, setMessage] = useState()
    const [newMessage, setNewMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [socketConnected, setSocketConnected] = useState(false);
    const [typing, setTyping] = useState(false);
    const [istyping, setIsTyping] = useState(false);
    const toast = useToast()
    const chatRef = useRef(null)
   
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //       preserveAspectRatio: "xMidYMid slice",
    //     },
    //   };

    const {
        selectedChat, setSelectedChat, user, notification, setNotification } = chatState()

        const fetchMessages = async () => { 
        if (!selectedChat) return;
        setLoading(true)
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            const { data } = await axios.get(`${import.meta.env.VITE_URL}/api/message/${selectedChat._id}`, config)
            setMessage(data);
            setLoading(false);
            socket.emit("join chat", selectedChat._id);

        } catch (error) {
            console.log(error)
            setLoading(false)
            toast({
                title: "Error Occured in loading messages!",
                description: "Failed to Load the Messages",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "bottom-right",
            });

        }


    }

    const sendMessage = async ()=>{
        socket.emit("stop typing", selectedChat._id);

            try {
                const config = {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${user.token}`,
                    },
                };
                setNewMessage("");
                const { data } = await axios.post(
                    `${import.meta.env.VITE_URL}/api/message`,
                    {
                        content: newMessage,
                        chatId: selectedChat,
                    },
                    config
                );
                socket.emit("new message", data);
                setMessage([...messages, data]);
            } catch (error) {
                console.log(error)
                toast({
                    title: "Error Occured in sending message!",
                    description: "Failed to send the Message",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "bottom-right",
                });
            }
    }

    const sendMessageViaEnter = async (event) => {
        if (event.key === "Enter") {
            sendMessage()
        }
    }

    const scrollToBottom = ()=>{
        if(chatRef.current){
          console.log(chatRef.current)
        //   console.log(chatRef.current.scrollHeight)
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      }
    
      
    useEffect(() => {
        // socket = io(import.meta.env.VITE_URL)
        socket.emit("setup", user);
        socket.on("connected", () => setSocketConnected(true));
        socket.on("typing", () => setIsTyping(true));
        socket.on("stop typing", () => setIsTyping(false));
    })

    useEffect(() => {
        fetchMessages();
        selectedChatCompare = selectedChat;
        // console.log(getSender(user, selectedChat))
    }, [selectedChat])

    useEffect(() => {
        
        socket.on("message recieved", (newMessageRecieved) => {
            fetchMessages();
            setFetchAgain(!fetchAgain);
            console.log(newMessageRecieved)
            if (
                !selectedChatCompare || // if chat is not selected or doesn't match current chat
                selectedChatCompare._id != newMessageRecieved.chat._id
            ) {
                setFetchAgain(!fetchAgain);
                if (!notification.includes(newMessageRecieved)) {
                    setNotification([newMessageRecieved, ...notification]);
                    setFetchAgain(!fetchAgain);
                }
            } else {
                setMessages([...messages, newMessageRecieved]);
            }
        });
        scrollToBottom()
    });

    const typingHandler = async (e) => {
        setNewMessage(e.target.value);
        if (!socketConnected) return;
        if (!typing) {
            setTyping(true);
            socket.emit("typing", selectedChat._id);
        }
        let lastTypingTime = new Date().getTime();
        var timerLength = 3000;
        setTimeout(() => {
            var timeNow = new Date().getTime();
            var timeDiff = timeNow - lastTypingTime;
            if (timeDiff >= timerLength && typing) {
                socket.emit("stop typing", selectedChat._id);
                setTyping(false);
            }
        }, timerLength);
    }




    return (
        <>
            {selectedChat
                ? (
                    loading ? ( <ChatLoading /> ) : (
                        <>
                        <Text
                            fontSize={{ base: "28px", md: "30px" }}
                            pb={3}
                            px={2}
                            w="100%"
                            fontFamily="Work sans"
                            display="flex"
                            justifyContent={{ base: "space-between" }}
                            alignItems="center"
                        >
                            <IconButton
                                d={{ base: "flex", md: "none" }}
                                icon={<ArrowBackIcon />}
                                onClick={() => setSelectedChat("")}
                            />
                            {
                                // messages &&
                                (
                                    !selectedChat.isGroupChat ? (
                                        <>
                                            {
                                                getSender(user, selectedChat.users).toUpperCase()
                                            }
                                            <ProfileModal user={getSenderFull(user, selectedChat.users)} />
                                        </>
                                    ) : (
                                        <>
                                            {selectedChat.chatName.toUpperCase()}
                                            <UpdateGroupChatModal
                                                fetchMessages={fetchMessages}
                                                fetchAgain={fetchAgain}
                                                setFetchAgain={setFetchAgain}
                                            />
                                        </>
                                    )
                                )
                            }
                        </Text>
                        <Box
                            display="flex"
                            flexDir="column"
                            justifyContent="flex-end"
                            p={3}
                            bg="#E8E8E8"
                            w="100%"
                            h="100%"
                            borderRadius="lg"
                            overflowY="hidden"
                        >
                            {/* {isLoading ? (null) : {( */}
                            <div className="messages" 
                            ref={chatRef}
                            style={{overflowY:'scroll'}}
                            >
                                <ScrollableChat messages={messages} />
                            </div>
                            {/* )}} */}
                            <FormControl
                                onKeyDown={sendMessageViaEnter}
                                id="first-name"
                                isRequired
                                mt={3}
                            >
                                <InputGroup>
                                <Input
                                    variant="filled"
                                    bg="#E0E0E0"
                                    placeholder="Enter a message.."
                                    value={newMessage}
                                    onChange={typingHandler}
                                />
                                <InputRightElement>
                                <Button size="sm" backgroundColor='#BEE3F8' h='1.75rem' _hover={{backgroundColor:'#BEE3F890'}} onClick={sendMessage}>
                                    <ArrowRightIcon />
                                </Button>
                                </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </Box>
                    </>
                    )
                )
                : (
                    <Box d="flex" alignItems="center" justifyContent="center" h="100%">
                        <Text fontSize="3xl" pb={3} fontFamily="Work sans">
                            Click on a user to start chatting
                        </Text>
                    </Box>
                )}

        </>
    )
}

export default SingleChat