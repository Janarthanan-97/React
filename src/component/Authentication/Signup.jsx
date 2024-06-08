import React, { useState } from 'react'
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from 'axios';
import ChatLoading from '../ChatLoading';

function Signup() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [picLoading, setPicLoading] = useState(false);
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const submitHandler = async () => {
        // setPicLoading(true);
        setLoading(true)
        if (!name || !email || !password || !confirmpassword) {
            setLoading(false)
            toast(
                {
                    title: 'Please Fill all the Feilds',
                    status: "warning",
                    duration: 3000,
                    isClosable: true,
                    position: "bottom-right",
                }
            )
            // setPicLoading(false);
           
            return
        }
        if (password !== confirmpassword) {
            setLoading(false)
            toast({
                title: "Passwords Do Not Match",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "bottom-right",
            });
           
            return;
        }
        // console.log(name, email, password, pic);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const data = await axios.post(`${import.meta.env.VITE_URL}/api/user/`,
                {
                    name,
                    email,
                    password,
                    pic
                }
                // ,config
            )
            // console.log(data)
            setLoading(false)

            toast({
                title: "Registration Successful",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "bottom-right",
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            console.log(JSON.stringify(data))
            //   setPicLoading(false);
            // history.push("/chats");
        } catch (error) {
            setLoading(false)
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-right",
            });
            //   setPicLoading(false);
        }
    }

    const postDetails = (pics) => {
        // setPicLoading(true);
        console.log(pics)
        if (pics === undefined) {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "bottom-right",
            });
            return;
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics)
            // data.append("upload_preset", "chat-app");
            // data.append("cloud_name", "piyushproj");
            // fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
            //     method: "post",
            //     body: data,
            //   })
            //     .then((res) => res.json())
            //     .then((data) => {
            //       setPic(data.url.toString());
            //       console.log(data.url.toString());
            //       setPicLoading(false);
            //     })
            // .catch((err) => {
            //     console.log(err);
            //     setPicLoading(false);
            //   });
        }
        else {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "bottom-right",
            });
            setPicLoading(false);
            return;
        }

    }

    return (
        <div>
            {
                loading?(<ChatLoading />):(
                    <VStack spacing="5px">
                <FormControl id="first-name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        placeholder="Enter Your Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>

                <FormControl id="email" isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter Your Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>

                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="md">
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => { setShowPassword(!showPassword) }}>
                                {showPassword ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl id="password" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup size="md">
                        <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm password"
                            onChange={(e) => setConfirmpassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}>
                                {showConfirmPassword ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl id="pic">
                    <FormLabel>Upload your Picture</FormLabel>
                    <Input
                        type="file"
                        p={1.5}
                        accept="image/*"
                        onChange={(e) => postDetails(e.target.files[0])}
                    />
                </FormControl>
                <Button
                    colorScheme="purple"
                    width="100%"
                    style={{ marginTop: 15 }}
                    onClick={submitHandler}
                // isLoading={picLoading}
                >
                    Sign Up
                </Button>
            </VStack>
                )
            }
        </div>
    )
}

export default Signup