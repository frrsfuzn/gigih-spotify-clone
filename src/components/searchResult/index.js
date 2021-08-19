import {
  Container,
  Heading,
	useColorMode
} from "@chakra-ui/react";
import React from "react";
import Track from "../track";
import { useSelector, useDispatch } from "react-redux";
import { storeSelected } from "../../features/tracks/trackSlice";
import {startPreview, stopPreview} from '../../spotifyFunctions'

function SearchResult() {
	const {colorMode} = useColorMode()
	const isDark = colorMode === 'dark'
  const tracks = useSelector((state) => state.track.searchTracks);
  const selectedTracks = useSelector((state) => state.track.selectedTracks);
  const dispatch = useDispatch();

  function addToSelectedTracks(uri) {
    dispatch(storeSelected([...selectedTracks, uri]));
  }

  function removeFromSelectedTracks(uri) {
    dispatch(storeSelected(selectedTracks.filter((item) => item !== uri)));
  }

  return (
    <Container py={4} maxW="container.sm" bg={isDark?"blue.500":"blue.200"} borderRadius="4px">
      <Heading textAlign="center" size="md" mb={4}>
        Search Result
      </Heading>
      {tracks.map((track) => (
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
