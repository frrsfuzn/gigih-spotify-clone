import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createPlaylist, addTracksToPlaylist } from "../../spotifyFunctions";

function CreatePlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDesc, setPlaylistDesc] = useState("");
  const selectedTracks = useSelector((state) => state.track.selectedTracks);
  const userProfileId = useSelector((state) => state.user.value.id);
  const token = useSelector((state) => state.token.value);
  const { colorMode } = useColorMode();
  const isDark = colorMode == "dark";

  async function handleSubmit() {
    if (selectedTracks.length !== 0) {
      if (playlistName && playlistDesc) {
        const resPlaylist = await createPlaylist(
          playlistName,
          playlistDesc,
          userProfileId,
          token
        );
				const resAddTrack = await addTracksToPlaylist(resPlaylist.id, selectedTracks, token)
      }
    }else{
			console.log("pilih track")
		}
  }

  return (
    <Container
      py={4}
      maxW="container.sm"
      bg={isDark ? "teal.400" : "teal.200"}
      borderRadius="4px"
    >
      <Heading textAlign="center" mb={4} size="md">
        Create Playlist
      </Heading>
      <FormControl>
        <FormLabel>Playlist Name</FormLabel>
        <Input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <FormLabel>Playlist Description</FormLabel>
        <Textarea
          value={playlistDesc}
          onChange={(e) => setPlaylistDesc(e.target.value)}
        />
        <Button mt={4} colorScheme="green" type="submit" onClick={handleSubmit}>
          Create
        </Button>
      </FormControl>
    </Container>
  );
}

export default CreatePlaylist;
