import { Button, Container, FormControl, FormLabel, Heading, Input, Textarea, useColorMode } from '@chakra-ui/react'
import React from 'react'

function CreatePlaylist() {
	const {colorMode} = useColorMode()
	const isDark = colorMode == "dark"
	return (
		<Container py={4} maxW="container.sm" bg={isDark ? "teal.400" : "teal.200"} borderRadius="4px">
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