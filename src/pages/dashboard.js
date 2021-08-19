import React from 'react'
import {Container, Text, VStack, useColorMode} from '@chakra-ui/react'
import AppBar from '../components/appBar'
import SearchTrack from '../components/searchTrack'

function Dashboard() {
	const {colorMode} = useColorMode();
	const isDark = colorMode === 'dark'
	return (
    <VStack pt={20} bg={isDark?"blue.700":"blue.100"} minH="100vh">
			<AppBar/>
      <Container maxW="container.xl">
				<SearchTrack/>
			</Container>
    </VStack>
  );
}

export default Dashboard