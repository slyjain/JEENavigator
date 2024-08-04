import React from 'react';
import data from './data';
import { Box } from '@chakra-ui/react';
import YouTube from "react-youtube";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const AccordionComponent = ({setProgress}) => {
  const _onReady = (event) => {
    event.target.pauseVideo();
  };
  
  return (
    <Accordion allowToggle>
      {data.map((item, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
              <input type="checkbox" onClick={()=>{
                setProgress((e)=>e+10)
              }} />  {item.day}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box>
              {item.topicName}
              <YouTube videoId={item.videoId} opts={{ height: '390', width: '640' }} onReady={_onReady} />
            </Box>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
