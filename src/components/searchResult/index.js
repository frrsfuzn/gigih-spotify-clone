import { Button, Container, FormControl, FormLabel, Heading, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import Track from '../track'

function SearchResult() {
	return (
		<Container py={4} maxW="container.sm" bg="blue.500" borderRadius="4px">
			<Heading textAlign="center" size="md" mb={4}>Search Result</Heading>
			<Track/>
		</Container>
	)
}

export default SearchResult
