import React from "react";
import {
  Avatar,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useAppSelector } from '../../app/hooks'

function AppBar():JSX.Element {
  const userProfile = useAppSelector((state) => state.user.value);
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
		// The usage of Flex
    <Flex
      zIndex="3"
      bg={isDark ? "blue.800" : "blue.500"}
      alignItems="center"
      position="fixed"
      top="0"
      right="0"
      width="100%"
      px={{ base: 5, md: 20 }}
      py={2}
    >
      <Heading
				color="white"
      >
        Spotifai
      </Heading>
      <Spacer />
      {isLargerThan800 && (
        <Heading color="white" size="lg">{userProfile?.display_name}</Heading>
      )}
      <Avatar ml={4} src={userProfile?.images?.[0].url} />
      <IconButton
				aria-label="ModeToggle"
        ml={8}
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound={true}
        size="lg"
        onClick={toggleColorMode}
      />
    </Flex>
  );
}

export default AppBar;
