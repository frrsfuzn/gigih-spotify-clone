import React from 'react'
import {Container, Text, VStack} from '@chakra-ui/react'
import AppBar from '../components/AppBar'

function dashboard() {
	return (
    <VStack bg="blue.700" minH="100vh">
			<AppBar/>
      <Container maxW="container.xl">
			</Container>
    </VStack>
  );
}

export default dashboard
