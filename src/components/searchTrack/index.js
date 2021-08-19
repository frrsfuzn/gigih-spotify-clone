import { Button, Container, FormControl, FormLabel, Heading, Flex, Input } from '@chakra-ui/react'
import React from 'react'

function SearchTrack() {
	return (
		<Container py={4} maxW="container.sm" bg="blue.500" borderRadius="4px">
			<Heading textAlign="center" mb={4} size="md">Search Track</Heading>
			<FormControl>
				<FormLabel>Track Name</FormLabel>
				<Flex flexDir="row">
				<Input type="text"/>
				<Button ml={2} colorScheme="green" type='submit'>Search</Button>
				</Flex>
			</FormControl>
		</Container>
	)
}

export default SearchTrack
