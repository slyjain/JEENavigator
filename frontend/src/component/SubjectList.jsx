import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const SubjectList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/maths');
  };

  return (
    <Menu>
      
      
        <MenuItem>PHYSICS</MenuItem>
        <MenuItem onClick={handleClick}>MATHS</MenuItem>
        <MenuItem>CHEMISTRY</MenuItem>
        <MenuItem>CHAPTER WISE PYQ</MenuItem>
        <MenuItem>DOWNLOAD SHEETS</MenuItem>
      
    </Menu>
  );
};

export default SubjectList;
