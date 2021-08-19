import React from "react";
import { Avatar, Flex, Heading, IconButton, Spacer, useColorMode, useMediaQuery} from "@chakra-ui/react";
import {FaSun, FaMoon} from 'react-icons/fa'
import {useSelector} from 'react-redux'

function AppBar() {
	const userProfile = useSelector(state => state.user.value)
	const [isLargerThan800] = useMediaQuery("(min-width: 800px)")
	const {colorMode, toggleColorMode} = useColorMode();
	const isDark = colorMode === 'dark'
  return (
    <Flex zIndex="3" bg="blue.800" alignItems="center" position="fixed" top="0" right="0" width="100%" px={{base:5, md: 20}} py={2}>
			<Heading>Spotifai</Heading>
			<Spacer/>
			{ isLargerThan800 && <Heading size="lg">{userProfile?.display_name}</Heading>}
			<Avatar ml={4} src={userProfile?.images?.[0].url}/>
			<IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound="true" size="lg" onClick={toggleColorMode} />
    </Flex>
  );
}

export default AppBar;
