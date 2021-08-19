import React from "react";
import {
  Container,
  VStack,
  useColorMode,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import AppBar from "../components/appBar";
import SearchTrack from "../components/searchTrack";
import CreatePlaylist from "../components/createPlaylist";
import SearchResult from "../components/searchResult";

function Dashboard() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack pt={20} bg={isDark ? "blue.700" : "blue.100"} minH="100vh">
      <AppBar />
      <Container maxW="container.xl" >
        <Grid
					rowGap="10px"
					columnGap="10px"
					gridTemplateColumns={{base: "1fr", md:"1fr 2fr"}}
					gridTemplateAreas={
						{base: `"createPlaylist"
										"searchTrack"
										"searchResult"`,
						md: 	`"createPlaylist searchTrack"
									 "createPlaylist searchResult"`}}>

          <GridItem gridArea="createPlaylist">
            <CreatePlaylist />
          </GridItem>
          <GridItem gridArea="searchTrack">
            <SearchTrack />
          </GridItem>
          <GridItem gridArea="searchResult">
            <SearchResult />
          </GridItem>
        </Grid>
      </Container>
    </VStack>
  );
}

export default Dashboard;
