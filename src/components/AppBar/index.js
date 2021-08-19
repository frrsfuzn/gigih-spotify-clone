import React from "react";
import { Flex, Heading, IconButton, Spacer, useColorMode} from "@chakra-ui/react";
import {FaSun, FaMoon} from 'react-icons/fa'

function AppBar() {
	const {colorMode, toggleColorMode} = useColorMode();
	const isDark = colorMode === 'dark'
  return (
    <Flex position="fixed" top="0" right="0" width="100%" px={20} py={2}>
			<Heading size="lg">Spotifai</Heading>
			<Spacer/>
			<IconButton icon={isDark ? <FaSun/> : <FaMoon/>} isRound="true" size="lg" onClick={toggleColorMode} />
    </Flex>
  );
}

export default AppBar;
