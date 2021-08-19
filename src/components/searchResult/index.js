import { Button, Container, FormControl, FormLabel, Heading, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import Track from '../track'
import {useSelector} from 'react-redux'

function SearchResult() {
	const tracks = useSelector(state=>state.track.searchTracks)
	return (
		<Container py={4} maxW="container.sm" bg="blue.500" borderRadius="4px">
			<Heading textAlign="center" size="md" mb={4}>Search Result</Heading>
			{tracks.map(track => <Track track={track}/>)}
		</Container>
	)
}

export default SearchResult
