import React, { useState } from 'react'
import axios from 'axios'
import { Container, Box, Button, Input, InputGroup, InputRightElement, Flex, useToast } from '@chakra-ui/react'

export function Login () {
  const [show, setShow] = useState(false)
  const [inputNameValue, setNameInputValue] = useState('')
  const [inputEmailValue, setEmailInputValue] = useState('')
  const [inputPassValue, setPassInputValue] = useState('')
  const toast = useToast()

  const handleClick = () => setShow(!show)

  const handleChangeNameInputValue = (event: any) => {
    setNameInputValue(event.target.value)
  }

  const handleChangeEmailInputValue = (event: any) => {
    setEmailInputValue(event.target.value)
  }

  const handleChangePasswordInputValue = (event: any) => {
    setPassInputValue(event.target.value)
  }

  const submitInfos = async () => {
    await axios({
      method: 'POST',
      url: 'http://localhost:3333/users',
      data: {
        name: inputNameValue,
        email: inputEmailValue,
        password: inputPassValue
      }
    }).then(() => {
      try {
        toast({
          title: 'Account created!',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true
        })
      } catch (error) {        
        toast({
          title: 'Error trying to create your account!',
          description: 'An error occured trying to create a account for you... Try again later please!',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      }
    })
  }

  return (
    <Container alignItems="center">
      <Box bg="#E5E5E5" width="402px" height="708px" borderRadius={15} marginTop="100px">
        <Flex direction="column" alignItems="center">
          <Input 
            variant="filled" 
            placeholder="Name" 
            id="name" 
            isRequired={true} 
            value={inputNameValue} 
            onChange={handleChangeNameInputValue}
            marginBottom={45}
            marginTop={45}
            width={300}
          />

          <Input 
            type="email" 
            variant="filled" 
            placeholder="E-mail" 
            id="email" 
            isRequired={true} 
            value={inputEmailValue} 
            onChange={handleChangeEmailInputValue}
            marginBottom={45}
            marginTop={45}
            width={300}
            alignItems="center"
          />

          <InputGroup display="flex" flexDirection="column" alignItems="center">
              <Input 
                type={show ? 'text' : 'password'} 
                variant="filled"
                placeholder="Password" 
                id="pass" 
                isRequired={true} 
                value={inputPassValue} 
                onChange={handleChangePasswordInputValue}
                marginBottom={45}
                marginTop={45}
                width={300}
              />
              
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
          </InputGroup>

          <Button onClick={submitInfos}>Create account</Button>
        </Flex>
      </Box>
    </Container>
  )
}
