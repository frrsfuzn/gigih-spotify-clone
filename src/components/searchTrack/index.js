import { Button, Container, FormControl, FormLabel, Heading, Flex, Input } from '@chakra-ui/react'
import { Formik } from 'formik'
import React, {useState} from 'react'
import {searchTrack} from '../../spotifyFunctions'
import {useDispatch, useSelector} from 'react-redux'
import {storeTracks} from '../../features/tracks/trackSlice'

function SearchTrack() {
	const dispatch = useDispatch()
	const token = useSelector(state=> state.token.value)
	const [trackName, setTrackName] = useState("")

	async function handleSubmit(){
		if(trackName){
			const tracks = await searchTrack(trackName, token)
			console.log(tracks)
			dispatch(storeTracks(tracks.tracks.items))
		}
	}

	return (
		<Container py={4} maxW="container.sm" bg="blue.500" borderRadius="4px">
			<Heading textAlign="center" mb={4} size="md">Search Track</Heading>
			<FormControl>
				<FormLabel>Track Name</FormLabel>
				<Flex flexDir="row">
				<Input type="text" value={trackName} onChange={(e) => setTrackName(e.target.value)}/>
				<Button onClick={handleSubmit} ml={2} colorScheme="green" type='submit'>Search</Button>
				</Flex>
			</FormControl>
		</Container>
	)
}

export default SearchTrack
