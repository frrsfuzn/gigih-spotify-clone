import React from "react";
import {
  Text,
  VStack,
  Heading,
  Button,
  Image,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";

function Login() {
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
            <Button colorScheme="green">Login with Spotify</Button>
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
