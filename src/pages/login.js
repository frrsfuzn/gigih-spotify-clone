import React, {useEffect} from "react";
import {
  VStack,
  Heading,
  Button,
  Image,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import {Authentication, getTokenFromHash, fetchUserProfile} from '../spotifyFunctions'
import { useDispatch,  } from "react-redux";
import { storeToken } from '../features/token/tokenSlice'
import { storeUser } from '../features/user/userSlice'

function Login() {

	const dispatch = useDispatch()

	useEffect(() => {
		const hash = window.location.hash
		const token = getTokenFromHash(hash)
		async function fetchData(){
			const userProfile = await fetchUserProfile(token)
			dispatch(storeUser(userProfile))
		}
		if(token){
			dispatch(storeToken(token))
			fetchData()
		}
	})

  return (
    <VStack bg="blue.700">
      <Container maxW="container.lg">
        <Grid
          w="100%"
          templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
          templateRows={{ sm: "1fr 1fr", md: "1fr" }}
          alignItems="center"
          minH="100vh"
        >
          <GridItem w="100%" textAlign={{ base: "center", md: "left" }}>
            <Heading fontSize="3xl" mb={4}>
              Create a place for <br /> your favorite music
              <br /> within a minute!
            </Heading>
            <Button onClick={Authentication} colorScheme="green">Login with Spotify</Button>
          </GridItem>
          <GridItem w="100%">
            <Image src={process.env.PUBLIC_URL + "/music.png"} />
          </GridItem>
        </Grid>
      </Container>
    </VStack>
  );
}

export default Login;
