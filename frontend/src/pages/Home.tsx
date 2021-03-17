import React from 'react'
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { MdAccountCircle } from 'react-icons/md'

export function Home () {
  return ( 
  <div>
    <main>
      <Box display="flex" alignItems="center" justifyContent="space-between" padding="90px">
        <Image boxSize="520px" marginTop="80px" marginLeft="170px"src="https://i.ibb.co/rH1MDWF/image.png" alt="Relogio Logo"/>
        <Flex direction="column" marginRight="260px">
            <Text fontSize="7xl" width="185px">Tasks</Text>
            <Text fontSize="7xl" marginBottom="40px" width="185px" marginLeft="30px" marginTop="-30px">Time</Text>
            <Button leftIcon={<MdAccountCircle />} size="lg" width="280px" marginRight="10px" boxShadow="5px 7px 7px #c4c4c4">Create account</Button>
            <Button leftIcon={<FcGoogle />} size="lg" marginTop="20px" width="280px" marginRight="10px" boxShadow="5px 7px 7px #c4c4c4">Sign in with Google</Button>
        </Flex>
      </Box>
    </main>
   </div>
  )
}
