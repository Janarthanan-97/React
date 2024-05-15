import React from 'react'
import { Box, Button, ButtonGroup, Container, TabList, Text, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Login from '../Authentication/Login'
import Signup from '../Authentication/Signup'

function Home() {
    return (
        <div>
            <Container maxW='2xl' centerContent bg='#0000ff80' p='5'>
                <Box
                    d='flex'
                    justifyContent="center"
                    p={3}
                    bg="white"
                    w="100%"
                    m="40px 0 15px 0"
                    borderRadius="lg"
                    borderWidth="1px"
                    textAlign='center'
                >
                    <Text
                        fontSize='4xl'
                        fontWeight='800'
                        bgGradient='linear(to-r, #6B46C1, #B83280)'
                        bgClip='text'
                    >
                        CHAT APP
                    </Text>
                </Box>

                <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                    <Tabs colorScheme='purple' isFitted>
                        <TabList>
                            <Tab>Login</Tab>
                            <Tab>Register</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Login />
                            </TabPanel>
                            <TabPanel>
                                <Signup />
                            </TabPanel>
                        </TabPanels>

                    </Tabs>
                </Box>

            </Container>
        </div>
    )
}

export default Home