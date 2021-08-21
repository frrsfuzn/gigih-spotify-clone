import {
  Container,
  Heading,
	useColorMode
} from "@chakra-ui/react";
import React from "react";
import Track from "../track";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { storeSelected } from "../../features/tracks/trackSlice";
import {startPreview, stopPreview} from '../../spotifyFunctions'

function SearchResult(): JSX.Element {
	const {colorMode} = useColorMode()
	const isDark = colorMode === 'dark'
  const tracks = useAppSelector((state) => state.track.searchTracks);
  const selectedTracks = useAppSelector((state) => state.track.selectedTracks);
  const dispatch = useAppDispatch();

  function addToSelectedTracks(uri: string) {
    dispatch(storeSelected([...selectedTracks, uri]));
  }

  function removeFromSelectedTracks(uri: string) {
    dispatch(storeSelected(selectedTracks.filter((item) => item !== uri)));
  }

  return (
    <Container py={4} maxW="container.sm" bg={isDark?"blue.500":"blue.200"} borderRadius="4px">
      <Heading textAlign="center" size="md" mb={4}>
        Search Result
      </Heading>
      {tracks.map((track: SpotifyApi.TrackObjectFull) => (
        <Track
          key={track.id}
          track={track}
          isSelected={selectedTracks.includes(track.uri)}
          addToSelectedTracks={addToSelectedTracks}
          removeFromSelectedTracks={removeFromSelectedTracks}
					startPreview={startPreview}
					stopPreview={stopPreview}
        />
      ))}
    </Container>
  );
}

export default SearchResult;
