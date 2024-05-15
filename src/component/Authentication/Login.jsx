import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const [user, setUser] = useState()

    const navigate = useNavigate()

    const toast = useToast()

    const submitHandler = async()=>{
        // setLoading(true);
        if (!email || !password){
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "bottom-right",
              });
            //   setLoading(false);
              return;
        }

        try {

            let {data} = await axios.post(`${import.meta.env.VITE_URL}/api/user/login`, {email, password})
            toast({
                title: "Login Successful",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "bottom-right",
              });
              console.log(JSON.stringify(data))
            //   setUser(data);
            localStorage.setItem("userInfo", JSON.stringify(data));
            // setLoading(false);
            navigate("/chats");

            
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <VStack spacing='10px'>
                <FormControl id='email' isRequired >
                    <FormLabel>Email Address</FormLabel>
                    <Input
                        value={email}
                        type='email'
                        placeholder="Enter Your Email Address"
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </FormControl>

                <FormControl id='password' isRequired >
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input
                            value={password}
                            type={show == true ? 'text' : 'password'}
                            placeholder="Enter Your password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => { setShow(!show) }} >
                                {show == true ? 'hide' : 'show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <Button
                    colorScheme='purple'
                    width='100%'
                    onClick={submitHandler}
                    // isLoading={loading}
                >
                    Login
                </Button>
                <Button
                    colorScheme="pink"
                    width="100%"
                    onClick={() => {
                        setEmail("guest")
                        setPassword('12345')
                    }}

                >
                    Login as guest user
                </Button>

            </VStack>
        </div>
    )
}

export default Login