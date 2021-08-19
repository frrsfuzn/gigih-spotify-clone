import {
  Grid,
  Heading,
  Image,
  Button,
  IconButton,
	HStack,
  Spacer,
	Text,
} from "@chakra-ui/react";
import {FaPlayCircle, FaStopCircle} from 'react-icons/fa'
import React from "react";

function Track() {
  return (
    <Grid
      templateColumns="1fr 2fr 1fr"
      templateRows="repeat(3, 1fr)"
      alignItems="center"
      justifyContent="space-between"
			bg="blue.300"
			borderRadius="5"
			pr={4}
			pb={2}
    >
      <Image
        gridArea="1/1/span 3/2"
        maxW="100px"
        src="https://bit.ly/sage-adebayo"
				justifySelf="center"
				alignSelf="center"
				borderRadius="5"
				mx={2}
      />
			<Heading size="sm">Sesuatu di Jogja</Heading>
			<Text>Adhitia Sofyan</Text>
			<HStack>
				<IconButton icon={<FaStopCircle/>} isRound="true"/>
				<IconButton icon={<FaPlayCircle/>} isRound="true"/>
			</HStack>
      <Button colorScheme="green" gridArea="1/3/span 3/3">Select</Button>
    </Grid>
  );
}

export default Track;
