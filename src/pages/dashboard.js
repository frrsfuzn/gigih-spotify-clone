import React from 'react'
import {Container, Text, VStack, useColorMode} from '@chakra-ui/react'
import AppBar from '../components/AppBar'

function Dashboard() {
	const {colorMode} = useColorMode();
	const isDark = colorMode === 'dark'
	return (
    <VStack bg={isDark?"blue.700":"blue.100"} minH="100vh">
			<AppBar/>
      <Container maxW="container.xl">
			</Container>
    </VStack>
  );
}

export default Dashboard
