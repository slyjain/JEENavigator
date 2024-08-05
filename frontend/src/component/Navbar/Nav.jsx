import React from 'react';
import { Box, Flex, Text, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="gray.800" p={4}>
      <Flex justify="center" align="center" gap={4}>
        <Text color="white" fontSize="xl" fontWeight="bold">
          JEE-NAVIGATOR
        </Text>
        <Button variant='outline' onClick={toggleColorMode} colorScheme='teal'>
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Flex>
    </Box>
  );
}

export default Nav;
