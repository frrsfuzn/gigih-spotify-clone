import { Button, Container, FormControl, FormLabel, Heading, Flex, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

function CreatePlaylist() {
	return (
		<Container py={4} maxW="container.sm" bg="blue.500" borderRadius="4px">
			<Heading textAlign="center" mb={4} size="md">Create Playlist</Heading>
			<FormControl>
				<FormLabel>Playlist Name</FormLabel>
				<Input type="text"/>
				<FormLabel>Playlist Description</FormLabel>
				<Textarea/>
				<Button mt={4} colorScheme="green" type='submit'>Create</Button>
			</FormControl>
		</Container>
	)
}

export default CreatePlaylist