import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'

const Accordions = ({title}) => {
  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem>
            <AccordionButton h="20px" p="30px 20px">
              <Box flex="1" textAlign="left">
                <Heading as="h4" variant="h4">{title}</Heading>
              </Box>
              <AddIcon sx={{color: '#12284c'}} />
            </AccordionButton>
          <AccordionPanel pb={4}>Lorem</AccordionPanel>
          <AccordionPanel pb={4}>Lorem</AccordionPanel>
          <AccordionPanel pb={4}>Lorem</AccordionPanel>
          <AccordionPanel pb={4}>Lorem</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordions;
