import React from 'react'
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react'
import { FcBusinessman, FcGoogle } from 'react-icons/fc'

export function Home () {
  return ( 
  <div>
    <main>
      <Box display="flex" alignItems="center" justifyContent="space-between" padding="90px">
        <Image boxSize="550px" marginTop="80px"src="https://i.ibb.co/rH1MDWF/image.png" alt="Relogio Logo"/>
        <Flex direction="column">
            <Text fontSize="7xl" marginBottom="40px">Tasks Time</Text>
            <Button leftIcon={<FcBusinessman />} size="lg">Create account</Button>
            <Button leftIcon={<FcGoogle />} size="lg" marginTop="20px">Sign in with Google</Button>
        </Flex>
      </Box>
    </main>
   </div>
  )
}
