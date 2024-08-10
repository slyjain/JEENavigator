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

  const handleClick_physics = () => {
    navigate('/physics');
  };

  const handleClick_maths = () => {
    navigate('/maths');
  };

  const handleClick_chemistry = () => {
    navigate('/chemistry');
  };

  const handleClick_pyq = () => {
    navigate('/pyq');
  };

  const handleClick_sheets = () => {
    navigate('/sheets');
  };

  return (
    <Menu>
      
        <MenuItem  onClick={handleClick_physics}>PHYSICS </MenuItem>
        <MenuItem onClick={handleClick_maths}>MATHS</MenuItem>
        <MenuItem  onClick={handleClick_chemistry}>CHEMISTRY</MenuItem>
        <MenuItem   onClick={handleClick_pyq}>CHAPTER WISE PYQ</MenuItem>
        <MenuItem   onClick={handleClick_sheets}>DOWNLOAD SHEETS</MenuItem>
      
    </Menu>
  );
};

export default SubjectList;
