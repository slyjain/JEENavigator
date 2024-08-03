import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,

} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
const SubjectList = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
      CHOOSE UR SUBJECTS....
      </MenuButton>
      <MenuList>
        <MenuItem>PHYSICS</MenuItem>
        <MenuItem>MATHS</MenuItem>
        <MenuItem>CHEMISTRY</MenuItem>
        <MenuItem>CHAPTER WISE PYQ</MenuItem>
        <MenuItem>DOWNLOAD SHEETS </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SubjectList;
