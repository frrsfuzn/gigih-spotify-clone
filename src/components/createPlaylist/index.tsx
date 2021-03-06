import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { createPlaylist, addTracksToPlaylist } from "../../spotifyFunctions";

function CreatePlaylist(): JSX.Element {
  const toast = useToast();
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDesc, setPlaylistDesc] = useState("");
  const selectedTracks = useAppSelector((state) => state.track.selectedTracks);
  const userProfile = useAppSelector((state) => state.user.value);
  const token = useAppSelector((state) => state.token.value);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  function alertToast(title: string, status: "info" | "warning" | "success" | "error" | undefined) {
    toast({
      title: title,
      status: status,
      duration: 5000,
      isClosable: true,
    });
  }

  async function handleSubmit() {
    if (selectedTracks.length !== 0) {
      if (playlistName && playlistDesc) {
        if (playlistName.length < 10) {
          alertToast(
            "Playlist name should have minimum 10 characters",
            "error"
          );
          return;
        } else if (playlistDesc.length < 20) {
          alertToast(
            "Playlist description should have minimun 20 characters",
            "error"
          );
          return;
        }
        const resPlaylist = await createPlaylist(
          playlistName,
          playlistDesc,
          userProfile?.id,
          token
        );
        const resAddTrack = await addTracksToPlaylist(
          resPlaylist.id,
          selectedTracks,
          token
        );
        if ("snapshot_id" in resAddTrack) {
          alertToast("Successfully created playlist", "success");
        }
      }
    } else {
      alertToast("No track selected", "error");
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
        {playlistName === "" || playlistDesc === "" ? (
          <Button
            mt={4}
            colorScheme="green"
            type="submit"
            onClick={handleSubmit}
            disabled
          >
            Create
          </Button>
        ) : (
          <Button
            mt={4}
            colorScheme="green"
            type="submit"
            onClick={handleSubmit}
          >
            Create
          </Button>
        )}
      </FormControl>
    </Container>
  );
}

export default CreatePlaylist;
