import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Nav = () => {
  return (
    <Box bg="gray.800" p={4}>
      <Flex justify="center" align="center">
        <Text color="white" fontSize="xl" fontWeight="bold">
          JEE-NAVIGATOR
        </Text>
      </Flex>
    </Box>
  );
}

export default Nav;
