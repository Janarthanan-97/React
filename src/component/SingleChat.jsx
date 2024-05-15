import React, { useEffect, useState } from 'react'
import { chatState } from './Context/ChatProvider'
import { Box, FormControl, IconButton, Input, Text, useToast } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { getSender, getSenderFull } from "./config/ChatLogics.js"
import ProfileModal from './miscellaneus/ProfileModal'
import UpdateGroupChatModal from './miscellaneus/UpdateGroupChatModal'
import ScrollableChat from './ScrollableChat'
import io from "socket.io-client";

function SingleChat() {

    const [messages, setMessage] = useState()
    const [newMessage, setNewMessage] = useState("");
    const toast = useToast()
    const { selectedChat, setSelectedChat, user, notification, setNotification  } = chatState()

    var socket

    const fetchMessages = async () => {
        if (!selectedChat) return;

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
              setLoading(true);
            const { data } = await axios.get(`${import.meta.env.VITE_URL}/api/message/${selectedChat._id}`, config)
            setMessages(data);
            setLoading(false);


        } catch (error) {
            toast({
                title: "Error Occured!",
                description: "Failed to Load the Messages",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "bottom-right",
            });

        }


    }

    const sendMessage = async (event) => {
        if(event.key === "Enter"){

        }


    }

    const typingHandler = async()=>{

    }

    useEffect(()=>{
        socket = io(import.meta.env.VITE_URL)

    }, [])

    useEffect(() => {
        fetchMessages();
        console.log(getSender(user, selectedChat.users))
    }, [selectedChat])




    return (
        <>
            {selectedChat
                ? (
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
                                            {fselectedChat.chatName.toUpperCase()}
                                            <UpdateGroupChatModal
                                                fetchMessages={fetchMessages}
                                                etchAgain={fetchAgain}
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
                            <div className="messages">
                                <ScrollableChat messages={messages} />
                            </div>
                            {/* )}} */}
                            <FormControl
                                onKeyDown={sendMessage}
                                id="first-name"
                                isRequired
                                mt={3}
                            >
                                <Input
                                    variant="filled"
                                    bg="#E0E0E0"
                                    placeholder="Enter a message.."
                                    value={newMessage}
                                    onChange={typingHandler}
                                />
                            </FormControl>
                        </Box>
                    </>
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