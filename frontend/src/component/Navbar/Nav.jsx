import React from 'react';
import { Box, Flex, Text, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { Route, Routes, useNavigate } from 'react-router-dom';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,

  useDisclosure,
  Stack,
  
} from '@chakra-ui/react';

import SubjectList from '../SubjectList';
const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('left');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/maths');
  };
  return (
    
    <Box bg="gray.800" p={4}>
      <Flex justify="space-between" align="center">
      <>
      <Button colorScheme='blue' onClick={onOpen}>
      Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            <Button onClick={()=>{
              
            }}>JEE_NAVIGATOR</Button>
            
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody p={4}> {/* Added padding */}
            <Stack spacing={4}> {/* Stack to handle spacing */}
              <Box 
                paddingTop="10px"
                paddingBottom="30px"
                fontSize="30px"
                >
               <p>👤Hello Omkar</p>
              </Box>
              <Box>
                <SubjectList />
              </Box>
              <Box>
                <p> </p>
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close 
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
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
