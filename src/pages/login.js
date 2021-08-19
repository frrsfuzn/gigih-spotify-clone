import React from "react";
import {
  Text,
  VStack,
  Heading,
  Button,
  Flex,
  Box,
  Image,
	Spacer,
	useMediaQuery,
} from "@chakra-ui/react";
import AppBar from "../components/AppBar";

function Login() {
	const [isNotSmallerScreen] = useMediaQuery("(min-width:1000px)")
  return (
    <VStack
      px={isNotSmallerScreen? 20 : 5}
			py={20}
      alignItems="flex-start"
      minH="100vh"
      width="100%"
      justifyContent="center"
      colorScheme="blue"
    >
      <Flex w="100%" alignItems="center" justifyContent="space-between" flexDirection={isNotSmallerScreen? 'row' : 'column'}>
        <Box textAlign={isNotSmallerScreen ? 'left' : 'center'} mb={8}>
          <Heading  maxW="400px" mb={8}>
            Create a place for your favorite music within a minute!
          </Heading>
          <Button colorScheme="green">Login with Spotify</Button>
        </Box>
        <Box maxW={isNotSmallerScreen ? '600px':'100%'} >
          <Image src={process.env.PUBLIC_URL + "/music.png"} />
        </Box>
      </Flex>
    </VStack>
  );
}

export default Login;
