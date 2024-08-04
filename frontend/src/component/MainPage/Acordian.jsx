import React from 'react'
import data from './data'
import { Box } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    
  } from '@chakra-ui/react'
const Acordian = () => {
  return (
    <div><Accordion allowToggle>
        
    
    {data.map((item,index)=>{
        return(
        <div> <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as='span' flex='1' textAlign='left'>
            {item.day}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {item.topicName}
      </AccordionPanel>
    </AccordionItem></div>)})
  }
    
  </Accordion></div>
  )
}

export default Acordian