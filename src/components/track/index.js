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
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";
import React from "react";

function Track({
  track,
  isSelected,
  removeFromSelectedTracks,
  addToSelectedTracks,
  startPreview,
  stopPreview,
}) {
  const artists = track?.artists.map((artist) => artist.name).join(", ");
  let buttonTitle = "Select";
  if (isSelected) {
    buttonTitle = "Deselect";
  }
  function handleClick() {
    if (isSelected) {
      removeFromSelectedTracks(track.uri);
    } else {
      addToSelectedTracks(track.uri);
    }
  }
  return (
    <Grid
      templateColumns="2fr 5fr 1fr"
      templateRows="2fr 25px 1fr"
      alignItems="center"
      justifyContent="space-between"
      bg="blue.300"
      borderRadius="5"
      pr={4}
      pb={2}
			py={2}
      my={2}
    >
      <Image
        gridArea="1/1/span 3/2"
        maxW="100px"
        src={track?.album?.images?.[1].url}
        justifySelf="center"
        alignSelf="center"
        borderRadius="5"
        mx={2}
      />
      <Heading alignSelf="end" size="sm">{track?.name}</Heading>
      <Text>{artists}</Text>
      <HStack>
        <IconButton
          icon={<FaStopCircle />}
          isRound="true"
          onClick={stopPreview}
        />
        <IconButton
          icon={<FaPlayCircle />}
          isRound="true"
          onClick={() => startPreview(track?.preview_url)}
        />
      </HStack>
      <Button
        onClick={handleClick}
        colorScheme={isSelected ? "red" : "green"}
        gridArea="1/3/span 3/3"
      >
        {buttonTitle}
      </Button>
    </Grid>
  );
}

export default Track;
