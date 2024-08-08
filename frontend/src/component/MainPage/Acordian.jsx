import React, { useState } from "react";
import data from "./data";
import { Box, Button, Checkbox, Text } from "@chakra-ui/react";
import YouTube from "react-youtube";

const CardComponent = ({ setProgress }) => {
  const [checkedItems, setCheckedItems] = useState(
    Array(data.length).fill(false)
  );

  const handleCheckboxClick = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];

    setCheckedItems(newCheckedItems);

    if (newCheckedItems[index]) {
      setProgress((prevProgress) => prevProgress + 10);
    } else {
      setProgress((prevProgress) => prevProgress - 10);
    }
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-around">
      {data.map((item, index) => (
        <Box
          key={index}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          width="300px"
          m="4"
          boxShadow="lg"
          alignContent="center"
        >
          <Box p="6" textAlign="center">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor={`teal`}
              borderRadius={`10px`}
            >
              <Checkbox
                isChecked={checkedItems[index]}
                onChange={() => handleCheckboxClick(index)}
               
              >
                {item.day}
              </Checkbox>
            </Box>

            <Box
              mt="3"
              fontWeight="bold"
              fontSize="20px"
              lineHeight="tight"
              noOfLines={1}
            >
              {item.topicName}
            </Box>


            <Box mt="3" alignContent="center" >
              <YouTube
                videoId={item.videoId}
                opts={{ height: "200", width: "280" }}
                onReady={_onReady}
              />
            </Box>

            <Box display="flex" mt="2" justifyContent="center">
              <Button mt="2" colorScheme="teal" size="sm">
                WATCH
              </Button>
              <Button mt="2" ml="4" colorScheme="teal" size="sm">
                PRACTICE QUESTIONS
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CardComponent;
