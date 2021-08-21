import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { searchTrack } from "../../spotifyFunctions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { storeTracks } from "../../features/tracks/trackSlice";

function SearchTrack(): JSX.Element {
  const dispatch = useAppDispatch();
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const token = useAppSelector((state) => state.token.value);
  const [trackName, setTrackName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
    if (trackName) {
      const tracks = await searchTrack(trackName, token);
      console.log(tracks);
      dispatch(storeTracks(tracks.tracks.items));
    }
  }

  return (
    <Container
      py={4}
      maxW="container.sm"
      bg={isDark ? "blue.500" : "blue.200"}
      borderRadius="4px"
    >
      <Heading textAlign="center" mb={4} size="md">
        Search Track
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Track Name</FormLabel>
          <Flex flexDir="row">
            <Input
              data-testid="inputSearchTrack"
              type="text"
              value={trackName}
              onChange={(e) => setTrackName(e.target.value)}
            />
            {trackName.length === 0 ? (
              <Button
                ml={2}
                colorScheme="green"
                type="submit"
                disabled
              >
                Search
              </Button>
            ) : (
              <Button
                ml={2}
                colorScheme="green"
                type="submit"
              >
                Search
              </Button>
            )}
          </Flex>
        </FormControl>
      </form>
    </Container>
  );
}

export default SearchTrack;
