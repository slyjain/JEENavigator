import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
  Box,
} from '@chakra-ui/react';
import SubjectList from './SubjectList';

const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('left');

  return (
    <>
      <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            JEE_NAVIGATOR
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody p={4}> {/* Added padding */}
            <Stack spacing={4}> {/* Stack to handle spacing */}
              <Box 
                paddingTop="10px"
                paddingBottom="30px"
                fontSize="30px"
                >
               <p>👤 Profile</p>
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
  );
};

export default SideDrawer;
